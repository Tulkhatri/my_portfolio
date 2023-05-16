import clsx from 'clsx';
import React from 'react'

interface IProps {
    children: React.ReactNode;
    onClick?: (e?: any) => void;
    type?: 'submit' | 'button';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    variant?: 'primary' | 'success' | 'secondary';
}

const Button = (props: IProps) => {
    const { disabled, loading, children, fullWidth, variant, ...rest } = props;
    return (
        <button className={clsx('btn', fullWidth && 'w-100', variant === 'success' ? 'success-btn' : variant === 'secondary' ? 'secondary-btn' : 'primary-btn')} disabled={disabled || loading} {...rest}>
            {loading ? 'loading...' : children}
        </button>
    )
}

export default Button