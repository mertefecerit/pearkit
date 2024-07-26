"use client"

import React from "react";
import styles from "./BuiInput.module.scss";
import LoadingIcon from "../components/icons/LoadingIcon";
import BuiInputErrors from "./components/BuiInputErrors";
import EyeIcon from "../components/icons/EyeIcon";
import {useState} from "react";
import EyeOffIcon from "../components/icons/EyeOffIcon";
import {IBuiInputPropTypes} from "./type";

const BuiInput:React.FC<IBuiInputPropTypes> = (
    {
        icon,
        isLoading = false,
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
) => {
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
                    type={showPassword && props.type === 'password' ? 'text' : props.type}
                    disabled={isLoading || props.disabled}
                />
                {
                    passwordReveal && props.type === 'password' &&
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
export default BuiInput;