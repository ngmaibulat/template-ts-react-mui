import React from "react";
import styled from "styled-components";

export const StyledDialog = styled.dialog``;

type Props = {
    children?: React.ReactNode;
};

export function Dialog(props: Props) {
    return <StyledDialog>{props.children}</StyledDialog>;
}
