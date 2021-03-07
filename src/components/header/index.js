import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ routes }) => {
    const getLinks = () => {
        let links = [];

        routes.forEach(route => {
            links.push(
                <li key={`nav-link-${route.name}`} className="nav-item">
                    <Link className="nav-link" to={route.path}>{route.name}</Link>
                </li>
            );
        });

        return links;
    }

    return (
        <div className={styles.navContainer}>
            <ul className="nav">
                {getLinks()}
            </ul>
        </div>
    );
};

export { Header };