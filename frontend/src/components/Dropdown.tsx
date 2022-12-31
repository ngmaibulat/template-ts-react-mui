import styled from "styled-components";

export const Dropdown = styled.div`
    background-color: black;

    .dropdown-content {
        display: none;
        position: absolute;
        color: white;
        font-weight: lighter;
        background-color: black;

        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px 10px;
        margin: 0;
        list-style: none;
        z-index: 1;

        border-radius: 5px;
    }

    .dropdown-content li {
        padding: 10px;
    }

    &:hover .dropdown-content {
        display: block;
    }

    &:focus .dropdown-content {
        display: block;
    }
`;
