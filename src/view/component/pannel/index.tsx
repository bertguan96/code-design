import { FC } from "react";
import './index.css';
import { MessagePlugin } from "tdesign-react/es/message/Message";
import Form from "tdesign-react/es/form/Form";
import { SubmitContext } from "tdesign-react/es/form/type";
import { FormResetEvent } from "tdesign-react/es/common";

export interface PannelProps {}

/**
 * 拖拽面板组件
 * @returns 
 */
export const Pannel:FC = (props: PannelProps) => {
    const [form] = Form.useForm();
    const name = Form.useWatch('name', form);
    const gender = Form.useWatch('gender', form);
    console.log('name', name);
    console.log('gender', gender);

    const onSubmit = (e: SubmitContext) => {
        console.log(e);
        if (e.validateResult === true) {
          MessagePlugin.info('提交成功');
        }
    };

    const onReset = (e: { e?: FormResetEvent | undefined; }) => {
        console.log(e);
        MessagePlugin.info('重置成功');
    };

    return (
        <>
            <div id="draggable" draggable={true}>
                <Form form={form} onSubmit={onSubmit} onReset={onReset} colon labelWidth={100}>
                </Form>
            </div>
            <div  id= "drag-preview" className="drag-preview">
            </div>
        </>
    );
};