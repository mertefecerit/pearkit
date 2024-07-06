import scss from "./BuiComponentShowcaseArea.module.scss";
import PropTypes from "prop-types";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from "react";

function BuiComponentShowcaseArea({children, title, desc, codeBlock, anchor}) {
    const copyPath = () => {
        const fullPath = window.location.origin + window.location.pathname + '#' + anchor;
        navigator.clipboard.writeText(fullPath);
    }
    return (
        <section id={anchor} className={scss.buiComponentShowcaseArea}>
            <div className={scss.header}>
                <h2 onClick={() => copyPath()}>
                    {title}
                    <span> #</span>
                </h2>
                <p>
                    {desc}
                </p>
            </div>
            {
                children && (
                    <div className={scss.showcase}>
                        {children}
                    </div>
                )
            }
            <div className={scss.codeArea}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                    {codeBlock}
                </SyntaxHighlighter>
            </div>
        </section>
    )
}

BuiComponentShowcaseArea.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.element,
    children: PropTypes.node.isRequired,
    anchor: PropTypes.string
}

export default BuiComponentShowcaseArea;