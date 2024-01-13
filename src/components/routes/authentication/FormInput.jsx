

const FormInput = ({ label, inputOptions, onChange }) => {
    // here input options gives the type of inputs like: email, text, number, something etc....we can customize that
    const { id, value } = inputOptions;

    return (
        <main className="group">
            <input className="input-form"  {...inputOptions} onChange={onChange} />
            {label && (
                <label htmlFor={`${id}`}
                       // dynamic class name
                    className={`${value.length ? "shrink" : ''} form-input-label`}>
                    {label}
                </label>
            )}
        </main>
    );
};

export default FormInput;
