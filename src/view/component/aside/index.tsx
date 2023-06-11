import { FC } from "react";
import { Button, Col, Row } from "tdesign-react";
import './index.css';
import { AsideConfig, ColData, RowData, asideConfig } from "./config";
import {
    ScanIcon,
} from 'tdesign-icons-react';

export const ToolsAside: FC = () => {

    return (
        <>
            {
                asideConfig.map((group: AsideConfig) => (
                    (
                        <div key={group.text} className="tools-aside-row-container">
                            <div className="tools-aside-row-title">
                                <ScanIcon size="large" />{group.text}</div>
                            {
                                group.data.map((row: RowData) => (
                                    <Row key={row.rowKey} className="tools-aside-row">
                                        {
                                            row.children.map((col: ColData) => {
                                                return (
                                                    <Col key={col.key}>
                                                        <Button
                                                            data-key={col.key}
                                                            onClick={col.method.bind(this, col.key)}
                                                            size="small"
                                                            className="tools-aside-row-btn dragger"
                                                            variant="outline"
                                                            draggable={true}
                                                            icon={col.icon}>
                                                            {col.text}
                                                        </Button>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                ))
                            }
                        </div>
                    )
                ))
            }
        </>
    );
}