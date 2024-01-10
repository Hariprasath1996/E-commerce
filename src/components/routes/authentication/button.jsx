

const Button_class_Types = {
    google : "google-sign-in",
    inverted : "inverted",
};
const Button =({children,buttonType, ...otherprops })=>{
return(
    <button className={`button-container ${Button_class_Types[buttonType]}`}
    // here inside of array button type is type classes google button 
    {...otherprops}
    > 
    {/* here children is a type a text what we need */}
        {children}
        </button>
)
}
export default Button ;
