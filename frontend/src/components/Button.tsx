import styled from "styled-components";

type ButtonProps = {
    color: string;
    bgcolor: string;
};

export const Button = styled.button<ButtonProps>`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    /* background-color: "#fff"; */
    background-color: ${({ bgcolor }) => bgcolor || "#fff"};
    color: ${({ color }) => color || "#333"};
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;
