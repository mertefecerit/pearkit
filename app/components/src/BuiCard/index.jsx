import styles from './BuiCard.module.scss';
import PropTypes from "prop-types";

function BuiCard({header, footer, title, subTitle, classes, children, role}) {
    return (
        <div role={role} className={`${styles.BuiCardWrapper} ${classes}`}>
            {header}
            {title && <div className={styles.buiCardTitleArea}>
                <span className={styles.title}>{title}</span>
                {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
            </div>}
            <div className={styles.buiCardChildrenArea}>
                {children}
            </div>
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
    classes: PropTypes.string,
    children: PropTypes.node.isRequired
}
export default BuiCard;


