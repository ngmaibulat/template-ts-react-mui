import React from "react";
import styled from "styled-components";

import { MenuItem } from "./MenuItem";
import { Dropdown } from "./Dropdown";

export const MenuDiv = styled.nav`
    min-height: 40px;
    flex-grow: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    align-items: stretch;
    justify-content: left;
    background-color: black;
    font-family: sans-serif;
    /* font-weight: bolder; */

    @media print {
        display: none;
    }

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        gap: 0;

        & {
            div {
                border-bottom: 1px solid gray;
            }
        }
    }

    & {
        div {
            color: white;
            margin-left: 20px;
            padding: 10px;
        }

        div:hover {
            background-color: #4a5667;
        }

        a {
            text-decoration: none;
            color: white;
        }

        a:hover {
            color: red;
        }
    }
`;

export function Menu() {
    return (
        <MenuDiv>
            <MenuItem name="Home" url="/" />
            <MenuItem name="Users" url="/users" />

            <Dropdown>
                <a href="/groups">Groups</a>

                <menu className="dropdown-content">
                    <li>
                        <a href="/page3">Group1</a>
                    </li>
                    <li>
                        <a href="/page3">Group2</a>
                    </li>
                </menu>
            </Dropdown>
        </MenuDiv>
    );
}
