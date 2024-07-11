"use client"
import scss from "./BuiComponentShowcaseArea.module.scss";
import PropTypes from "prop-types";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
function BuiComponentShowcaseArea({children, title, desc, codeBlock, anchor}) {
    const [clicked,setClicked] = useState(false);
    const copyPath = () => {
        const fullPath = window.location.origin + window.location.pathname + '#' + anchor;
        navigator.clipboard.writeText(fullPath);
        setClicked(true);
        setTimeout(() => {
            setClicked(false)
        },500)
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
                children && (
                    <div className={scss.showcase}>
                        {children}
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

BuiComponentShowcaseArea.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.element,
    children: PropTypes.node.isRequired,
    anchor: PropTypes.string
}

export default BuiComponentShowcaseArea;