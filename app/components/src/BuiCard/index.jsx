import styles from './BuiCard.module.scss';
import PropTypes from "prop-types";

function BuiCard(
    {
        header,
        footer,
        title,
        subTitle,
        children,
        role,
        className
    }
) {
    return (
        <div role={role} className={`${styles.BuiCardWrapper} ${className}`}>
            {header}
            {title && <div className={styles.buiCardTitleArea}>
                <span className={styles.title}>{title}</span>
                {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
            </div>}
            {children}
            {footer}
        </div>
    );
}

BuiCard.propTypes = {
    role: PropTypes.string,
    header: PropTypes.elementType,
    footer: PropTypes.elementType,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}
export default BuiCard;


