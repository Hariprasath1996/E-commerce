

const formInput = ({label,inputOptions,onchange})=>{
    // here input options gives the type of inputs like :  email, text,number  ,something etc....we can  customize that  
    const {id,value} = inputOptions ;
}
return(
    <main className="group">
    <input className="input-form" type="text" {...inputOptions} onchange={onchange} />
    {label && (
        <label htmlFor={`${id}`}

        // dynamic class name  
        className={`${value.length ? "shrink" : "" } form-input-label`}>
            {label}
        </label>
    )}
    </main>
    
)
export default formInput;