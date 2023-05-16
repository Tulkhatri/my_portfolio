interface IProps {
    label?: string;
    disabled?: boolean;
    onChange?: (value: any) => void;
    value?: any;
    error?: string;
    type?: 'text' | 'password' | 'number' | 'email';
}

const Input = (props: IProps) => {
    const { error, label, ...rest } = props;

    return (
        <div className="input">
            {label ? <label className="mb-1 ms-1">{label}</label> : null}
            <input className="form-control" {...rest} />
        </div>
    )
}

export default Input