

const cartItems =({name,quantity,image,price})=>{
    return(
        <>
        <main className="Cart-items-container">
            <img src={image}alt={name} />
            <div className="items-details">
                <h1>
                    {name}
                </h1>
                <p>
                {quantity}* ${price}
                </p>
            </div>
        </main>
        </>
    )

}
export {cartItems}