import React from "react";

interface Props {
    msg: string;
}

export function Message(props: Props) {
    return <h3>{props.msg}</h3>;
}
