import React from "react";
import { Nav } from "./Nav";

export function Menu() {
    return (
        <Nav>
            <ul>
                <li>
                    <a href="/" id="a-home">
                        Home
                    </a>
                </li>

                <li>
                    <a href="/page1" id="a-page1">
                        Contacts
                    </a>
                </li>

                <li className="dropdown">
                    <a href="/page2" id="a-page2">
                        About
                    </a>

                    <ul className="dropdown-content">
                        <li>
                            <a href="/page3">Team</a>
                        </li>
                        <li>
                            <a href="/page3">Jobs</a>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* <ul>
                <li>
                    <a href="/profile" id="a-profile" className="p-3">
                        Username
                    </a>
                </li>

                <li>
                    <a href="/logout" className="p-3">
                        Logout
                    </a>
                    &nbsp;&nbsp;&nbsp;
                </li>
            </ul> */}
        </Nav>
    );
}
