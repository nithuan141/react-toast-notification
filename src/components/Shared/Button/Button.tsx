import { FC } from "react"
import classNames from "classnames"

import styles from './Button.module.scss'

export enum ButtonType {
    Primary,
    Secondary,
    Warning,
    Error
}

type ButtonProps = {
    label?: string
    onClick: (e: unknown) => void
    children: JSX.Element | string
    className: string
    type?: ButtonType
}

const Button: FC<ButtonProps> = ({
    label,
    onClick,
    className,
    type = ButtonType.Primary,
    children
}) => {

    return <button className={classNames(styles.button, className, {
        [ styles.primary]: (type === ButtonType.Primary),
        [ styles.Secondary]: (type === ButtonType.Secondary),
        [ styles.warning]: (type === ButtonType.Warning),
        [ styles.error]: (type === ButtonType.Error),
    })
    }
        onClick={onClick}>{label} {children}</button>
}

export default Button