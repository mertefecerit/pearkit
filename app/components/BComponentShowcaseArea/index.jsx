import scss from "./BComponentShowcaseArea.module.scss";
import PropTypes from "prop-types";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from "react";

function BComponentShowcaseArea({children, title, desc, codeBlock}) {
    return (
        <div className={scss.bComponentShowcaseArea}>
            <div className={scss.header}>
                <h2>{title}</h2>
                <p>
                    {desc}
                </p>
            </div>
            <div className={scss.showcase}>
                {children}
            </div>
            <div className={scss.codeArea}>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                    {codeBlock}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

BComponentShowcaseArea.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.element,
    children: PropTypes.node.isRequired,
}

export default BComponentShowcaseArea;