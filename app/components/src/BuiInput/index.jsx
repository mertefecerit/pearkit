"use client"
import PropTypes from 'prop-types';
import styles from "./BuiInput.module.scss";
import LoadingIcon from "../components/icons/LoadingIcon";
import BuiInputErrors from "./components/BuiInputErrors";
import EyeIcon from "../components/icons/EyeIcon";
import {useState} from "react";
import EyeOffIcon from "../components/icons/EyeOffIcon";

function BuiInput(
    {
        icon,
        isLoading = false,
        type = "text",
        color= 'blue',
        size="base",
        variant = 'outlined',
        label,
        isInvalid=false,
        errors = [],
        description,
        rounded= false,
        passwordReveal = true,
        ...props
    }
) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <label className={`${styles.BuiInputWrapper} ${errors.length > 0 || isInvalid ? styles.isInvalid : ''}`}>
            {label && <span>{label}</span>}
            <div className={`${styles[color]} ${styles[variant]} ${rounded ? styles.rounded : ''} ${isLoading || props.disabled ? styles.isDisabled: ''}`}>
                {isLoading && <LoadingIcon />}
                {!isLoading && icon}
                <input
                    className={`${styles[size]}`}
                    {...props}
                    type={showPassword && type === 'password' ? 'text' : type}
                    disabled={isLoading || props.disabled}
                />
                {
                    passwordReveal && type === 'password' &&
                    <div onClick={() => setShowPassword(!showPassword)} className={`${styles[size]} ${styles.passwordRevealIcon}`}>
                        {
                            showPassword ? <EyeIcon/> : <EyeOffIcon/>
                        }
                    </div>
                }
            </div>
            {description && <small>{description}</small>}
            <BuiInputErrors errors={errors}/>
        </label>
    );
}

BuiInput.propTypes = {
    icon: PropTypes.elementType,
    color: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isInvalid: PropTypes.bool,
    label: PropTypes.string,
    isLoading: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    rounded: PropTypes.bool,
    passwordReveal: PropTypes.bool
}
export default BuiInput;