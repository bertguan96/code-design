import { on } from 'events';
import {
    EditIcon, LayersIcon, LockOnIcon,
    NextIcon, ChevronDownIcon, FormatHorizontalAlignBottomIcon,
    CheckCircleIcon, CheckRectangleIcon, SwapIcon,
    RollfrontIcon, ForkIcon, BulletpointIcon,

} from 'tdesign-icons-react';

const onClick = (key: string) => {};


export interface ColData {
    colId: number;
    key: string;
    icon: any;
    text: string;
    method: (key: string) => void;
}

export interface RowData {
    rowId: number;
    rowKey: string;
    children: ColData[];
}

export interface AsideConfig {
    text: string;
    
    data: RowData[];
}

export const asideConfig: AsideConfig[] = [
    {
        text: '输入组件',
        data: [
            {
                rowId: 1,
                rowKey: 'inputComponent_1',
                children: [
                    {
                        colId: 1,
                        key: 'input',
                        icon: <EditIcon />,
                        text: '输入框',
                        method: onClick,
                    },
                    {
                        colId: 2,
                        key: 'textarea',
                        icon: <ForkIcon />,
                        text: '多行文本',
                        method: onClick,
                    },
                ]
            },
            {
                rowId: 2,
                rowKey: 'inputComponent_2',
                children: [
                    {
                        colId: 1,
                        key: 'password',
                        icon: <LockOnIcon />,
                        text: '密码框',
                        method: onClick,
                    },
                    {
                        colId: 2,
                        key: 'number',
                        icon: <NextIcon />,
                        text: '计数器',
                        method: onClick,
                    },
                ]
            }
        ]
    },
    {
        text: '选择组件',
        data: [
            {
                rowId: 1,
                rowKey: 'selectComponent_1',
                children: [
                    {
                        colId: 1,
                        key: 'select',
                        icon: <ChevronDownIcon />,
                        text: '下拉选择框',
                        method: onClick,
                    },
                    {
                        colId: 2,
                        key: 'selectMutil',
                        icon: <FormatHorizontalAlignBottomIcon />,
                        text: '级联选择',
                        method: onClick,
                    },
                ]
            },
            {
                rowId: 2,
                rowKey: 'selectComponent_2',
                children: [
                    {
                        colId: 1,
                        key:    'radio',
                        icon: <CheckCircleIcon />,
                        text: '单选组',
                        method: onClick,
                    },
                    {
                        colId: 2,
                        key: 'checkbox',
                        icon: <CheckRectangleIcon />,
                        text: '多选组',
                        method: onClick,
                    },
                ]
            },
            {
                rowId: 3,
                rowKey: 'selectComponent_3',
                children: [
                    {
                        colId: 1,
                        key: 'switch',
                        icon: <RollfrontIcon />,
                        text: '开关',
                        method: onClick,
                    },
                    {
                        colId: 2,
                        key: 'slider',
                        icon: <SwapIcon />,
                        text: '滑块',
                        method: onClick,
                    },
                ]
            },
            {
                rowId: 4,
                rowKey: 'selectComponent_4',
                children: [
                    {
                        colId: 1,
                        key: 'time',
                        icon: <LockOnIcon />,
                        text: '时间选择器',
                        method: onClick,
                    },
                    {
                        colId: 2,
                        key: 'timeRange',
                        icon: <NextIcon />,
                        text: '时间范围',
                        method: onClick,
                    },
                ]
            }
        ]
    },
    {
        text: '布局组件',
        data: [
            {
                rowId: 1,
                rowKey: 'layout_component_1',
                children: [
                    {
                        colId: 1,
                        key: 'row',
                        icon: <LayersIcon />,
                        text: '行容器',
                        method: onClick,
                    },
                    {
                        colId: 2,
                        key: 'button',
                        icon: <BulletpointIcon />,
                        text: '按钮',
                        method: onClick,
                    },
                ]
            },
        ]
    },

];