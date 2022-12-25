import styled from "styled-components";

export const Nav = styled.nav`
    min-width: 80%;
    background-color: black;

    .dropdown-content {
        display: none;
        position: absolute;
        color: white;
        background-color: black;

        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px 0px;
        z-index: 1;
    }

    .dropdown-content li {
        /* border-top: 1px solid gray; */
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    & {
        ul {
            display: flex;
            flex-direction: row;
            justify-content: left;
            gap: 2rem;

            list-style: none;
            padding: 0;
            margin: 0;
        }

        a {
            text-decoration: none;
            color: white;

            display: inline-block;
            padding: 10px 10px;
        }

        a:hover {
            color: red;
            background-color: black;
        }
    }
`;
