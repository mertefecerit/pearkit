"use client"

import React from "react";
import styles from "./PInput.module.scss";
import LoadingIcon from "../components/icons/LoadingIcon";
import PInputErrors from "./PInputErrors";
import EyeIcon from "../components/icons/EyeIcon";
import {useState} from "react";
import EyeOffIcon from "../components/icons/EyeOffIcon";
import {IPInputPropTypes} from "./type";

const PInput:React.FC<IPInputPropTypes> = (
    {
        icon,
        isLoading = false,
        color= 'lime',
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
        <label className={`${styles.wrapper} ${errors.length > 0 || isInvalid ? styles.isInvalid : ''}`}>
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
            <PInputErrors errors={errors}/>
        </label>
    );
}
export default PInput;