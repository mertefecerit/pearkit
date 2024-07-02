import scss from "./BuiComponentShowcaseArea.module.scss";
import PropTypes from "prop-types";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from "react";

function BuiComponentShowcaseArea({children, title, desc, codeBlock}) {
    return (
        <div className={scss.buiComponentShowcaseArea}>
            <div className={scss.header}>
                <h2>{title}</h2>
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
        </div>
    )
}

BuiComponentShowcaseArea.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.element,
    children: PropTypes.node.isRequired,
}

export default BuiComponentShowcaseArea;