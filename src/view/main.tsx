import { FC, useEffect } from "react";
import { Layout } from "tdesign-react";
import { ToolsAside } from "./component/aside";
import { Pannel } from "./component/pannel";
import { Dragger } from "./component/dragger";
const { Header, Content, Aside } = Layout;

/**
 * 渲染组件
 * @returns 
 */
export const Main: FC = () => {

    const dragged = null;
    const dragger = new Dragger(dragged);

    useEffect(() => {
        // 注册拖拽组件
        dragger.addEventListeners();
    });

    return (
        <div>
            <Layout>
                <Aside>
                    <ToolsAside />
                </Aside>
                <Layout>
                    <Header>Header</Header>
                    <Content  id="code-design-pannel" >
                        <Pannel />
                    </Content>
                </Layout>
                <Aside>
                </Aside>
            </Layout>
        </div>
    );
};