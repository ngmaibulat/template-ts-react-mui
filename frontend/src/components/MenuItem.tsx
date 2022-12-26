import React from "react";

type Props = {
    name: string;
    url: string;
};

export function MenuItem(props: Props) {
    return (
        <div>
            <a href={props.url}>{props.name}</a>
        </div>
    );
}
