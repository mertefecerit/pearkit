import {motion} from "framer-motion";
function LoadingIcon({size = "1em"}) {
    return (
        <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
            xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8"/>
        </motion.svg>
    )
}
export default LoadingIcon;