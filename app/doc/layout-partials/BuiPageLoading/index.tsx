"use client"
import PropTypes from "prop-types";
import scss from "./BuiPageLoading.module.scss";
import {motion} from "framer-motion";

const BuiPageLoading = ({type = 'inline'}) =>{
    return (
        <div className={`${scss.buiPageLoading} ${type === 'page' ? scss.pageType : null}`}>
            <motion.svg
                animate={{rotate: 360}}
                transition={{repeat: Infinity, duration: 1, ease: "circInOut"}}
                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.25"/>
                <path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"></path>
            </motion.svg>
        </div>
    )
}

BuiPageLoading.propTypes = {
    type: PropTypes.string.isRequired
}
export default BuiPageLoading;