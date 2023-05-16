import clsx from 'clsx';
import React from 'react'

interface Props {
    children: React.ReactNode;
    open: boolean;
    setOpen: (bool: boolean) => void;
    disableBackdropEvent?: boolean;
}

const Modal = (props: Props) => {
    const { children, open, setOpen, disableBackdropEvent } = props;

    return (
        <div className={clsx('gbg-modal', open && 'open')}>
            <div className='backdrop' onClick={() => { !disableBackdropEvent && setOpen(false) }} />
            <div className={clsx('gbg-modal-body', open && 'open')}>
                {children}
            </div>
        </div>
    )
}

export default Modal