import { Input, Row, Col } from "tdesign-react"


export interface RenderComponentType {
    [key: string]: {
        render: () => JSX.Element
    };
}


export const RenderComponent: RenderComponentType = {
    "input": {
        "render": () => {
            return <Row>
                <Input
                align="left"
                allowInputOverMax={false}
                autoWidth={false}
                autocomplete={undefined}
                autofocus={false}
                clearable={false}
                defaultValue=""
                placeholder={undefined}
                readonly={false}
                showClearIconOnEmpty={false}
                showLimitNumber={false}
                size="medium"
                status="default"
                type="text"
            />
            </Row>
        },
    },
}