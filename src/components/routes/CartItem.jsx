

const CartItems =({name,quantity,image,price})=>{
    return(
        <>
        <main className="Cart-items-container">
            <img src={image}alt={name} />
            <div className="items-details">
                <Span>
                    {name}
                </Span>
                <Span>
                    {quantity}* ${price}
                </Span>
            </div>
        </main>
        </>
    )

}
export {CartItems}