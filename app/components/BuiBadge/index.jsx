import styles from './BuiBadge.module.scss';
import PropTypes from "prop-types";

function BuiBadge({number, size='xs', color="red"}) {
    return (
        <div className={`${styles.BuiBadgeWrapper} ${styles[size]} ${styles[color]}`}>
            {number}
        </div>
    );
}
BuiBadge.propTypes = {
    number: PropTypes.string.isRequired
}
export default BuiBadge;


