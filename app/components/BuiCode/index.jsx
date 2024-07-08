import PropTypes from "prop-types";
import styles from "./BuiCode.module.scss";

function BuiCode({children, color="blue"}) {
    return (
        <code className={`${styles.buiCode} ${styles[color]}`}>{children}</code>
    )
}
BuiCode.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string
}
export default BuiCode;