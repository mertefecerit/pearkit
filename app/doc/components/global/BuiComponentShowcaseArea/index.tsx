"use client"
import scss from "./BuiComponentShowcaseArea.module.scss";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {BuiComponentShowcaseAreaPropTypes} from "./type";

const BuiComponentShowcaseArea:React.FC<BuiComponentShowcaseAreaPropTypes> = (
    {
        title,
        desc,
        codeBlock,
        anchor,
        ...props
    }
) => {
    const [clicked, setClicked] = useState(false);
    const copyPath = () => {
        const fullPath = window.location.origin + window.location.pathname + '#' + anchor;
        navigator.clipboard.writeText(fullPath);
        setClicked(true);
        setTimeout(() => {
            setClicked(false)
        }, 500)
    }
    return (
        <section id={anchor} className={scss.buiComponentShowcaseArea}>
            <div className={scss.header}>
                <h2 onClick={() => copyPath()}>
                    {title}
                    <span> #
                        <AnimatePresence>
                        {

                            clicked &&
                            <motion.span
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                Copied
                            </motion.span>

                        }
                          </AnimatePresence>
                    </span>
                </h2>
                <p>
                    {desc}
                </p>
            </div>
            {
                props.children && (
                    <div className={scss.showcase}>
                        {props.children}
                    </div>
                )
            }
            {
                codeBlock && <div className={scss.codeArea}>
                    <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                        {codeBlock}
                    </SyntaxHighlighter>
                </div>
            }

        </section>
    )
}
export default BuiComponentShowcaseArea;