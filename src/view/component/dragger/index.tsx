import { createRoot } from 'react-dom/client';
import { RenderComponent } from "./component";
import { Logger } from "../../../common/logger";
import ReactDOM from 'react-dom';

export class Dragger {

    constructor(dragged: EventTarget | null) {
        this.dragged = dragged;
    }

    public dragged: EventTarget | null = null;

    public addEventListeners() {
        const draggerList = document.getElementsByClassName("dragger");
        for (let i = 0; i < draggerList.length; i++) {
            const dragger = draggerList[i];
            dragger.addEventListener("drag", this.onDragStart.bind(this));
            dragger.addEventListener("dragend", this.onDragEnd.bind(this));
        }

        const draggerParentList = document.getElementById("code-design-pannel");
        draggerParentList && draggerParentList.addEventListener("dragenter", this.onDragenter.bind(this));
        draggerParentList && draggerParentList.addEventListener("dragleave", this.onDragLeave.bind(this));
        draggerParentList && draggerParentList.addEventListener("drop", this.onDrop.bind(this));
        draggerParentList && draggerParentList.addEventListener("dragover", this.onDragOver.bind(this));
    }

    public onDragStart(event: Event) {
        event.preventDefault(); // 阻止默认行为，以便允许该元素成为拖放目标
        const dragEvent = event as DragEvent; // 将事件强制转换为 DragEvent 类型
        this.dragged = dragEvent.target;
        // const x = dragEvent.clientX; // 获取鼠标的横坐标
        // const y = dragEvent.clientY; // 获取鼠标的纵坐标
        // console.log(x, y);
        // const codeDesignPannel = document.getElementById("code-design-pannel");
        // const element = event.target;
        // console.log(element);
        // if (codeDesignPannel) {
        //     const rects = codeDesignPannel.getClientRects()
        //     console.log('start')
        //     console.log(rects[0].x, rects[0].y);
        //     console.log('end')
        // } 
        // if (codeDesignPannel) {
        //     codeDesignPannel.style.left = x + 'px';
        //     codeDesignPannel.style.top = y + 'px';
        // }
        // const preview = document.getElementById("drag-preview");
        // if (preview) {
        //     preview.style.backgroundColor = 'lightblue';
        //     preview.style.zIndex = '999';
        //     preview.style.width = '200px';
        //     preview.style.position = 'absolute';
        //     preview.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        //     // 获取拖拽Key
        //     const element = event.target;
            // if (element) {
            //     const attr = (element as HTMLElement).getAttribute("data-key");
            //     if (!attr) {
            //         Logger.error("onDragStart", "拖拽组件未设置data-key属性");
            //         return;
            //     }
            //     const component = RenderComponent[attr];
            //     if (!component) {
            //         Logger.error("onDragStart", "拖拽组件未注册");
            //         return;
            //     }
            //     const root = createRoot(preview);
            //     root.render(component.render());
            //     document.body.appendChild(preview);
            //     // @ts-ignore
            //     event.dataTransfer.setDragImage(preview, 0, 0);
            //     document.addEventListener('mousemove', (event: MouseEvent) => {
            //         preview.style.left = event.pageX + 'px';
            //         preview.style.top = event.pageY + 'px';
            //     });
                
            // }
        // }
    }

    public onDragenter(event: Event) {
        console.log("onDragenter",event.target);
        const preview = document.getElementById("drag-preview");
        if (preview) {
            preview.style.backgroundColor = 'lightblue';
            preview.style.zIndex = '999';
            preview.style.width = '200px';
            preview.style.position = 'absolute';
            preview.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            // 获取拖拽Key
            const element = this.dragged;
            if (element) {
                const attr = (element as HTMLElement).getAttribute("data-key");
                if (!attr) {
                    Logger.error("onDragStart", "拖拽组件未设置data-key属性");
                    return;
                }
                const component = RenderComponent[attr];
                if (!component) {
                    Logger.error("onDragStart", "拖拽组件未注册");
                    return;
                }
                const root = createRoot(preview);
                root.render(component.render());
                document.body.appendChild(preview);
                // @ts-ignore
                event.dataTransfer.setDragImage(preview, 0, 0);
                document.addEventListener('mousemove', (event: MouseEvent) => {
                    preview.style.left = event.pageX + 'px';
                    preview.style.top = event.pageY + 'px';
                });
                
            }
        }

    }

    public onDragLeave(event: Event) {
        // console.log("onDragleave",event.target);
    }

    public onDragOver(event: Event) {
        event.preventDefault();
        // console.log("onDragOver",event.target);

    }

    public onDrop(event: Event) {
        event.preventDefault();
        if(event.target) {
            console.log("onDrop event.tager",event.target);
            console.log("onDrop dragged",this.dragged);
            const element = this.dragged;
            if (element) {
                const attr = (element as HTMLElement).getAttribute("data-key");
                if (!attr) {
                    Logger.error("onDragStart", "拖拽组件未设置data-key属性");
                    return;
                }
                const component = RenderComponent[attr];
                if (!component) {
                    Logger.error("onDragStart", "拖拽组件未注册");
                    return;
                }
               console.log(component.render());
               ReactDOM.render(component.render(), event.target as HTMLElement);
            }
        }

    }

    public onDragEnd(event: Event){
        console.log("dragend",event.target );
        this.dragged = event.target;
        const preview = document.getElementById("drag-preview");
        if (preview) {
            preview.remove();
        }
    }

}