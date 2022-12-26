import React from "react";
import styled from "styled-components";

import { MenuItem } from "./MenuItem";
import { Dropdown } from "./Dropdown";

export const MenuDiv = styled.div`
    min-height: 40px;
    flex-grow: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    align-items: center;
    justify-content: left;
    background-color: black;

    & {
        div {
            /* min-width: 80px; */
            color: white;
            margin-left: 20px;
            flex-basis: 80px;
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

                <ul className="dropdown-content">
                    <li>
                        <a href="/page3">Group1</a>
                    </li>
                    <li>
                        <a href="/page3">Group2</a>
                    </li>
                </ul>
            </Dropdown>
        </MenuDiv>
    );
}
