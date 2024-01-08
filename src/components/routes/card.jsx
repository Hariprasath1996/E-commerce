const cards = () => {
    return ( 
        <main>
            <div className="image-box">
                <img src="{image}" alt="image" />
            </div>
            <div className="details">
                <p>{name}</p>
                <p>price-{price}</p>
                <button>add to cart</button>
            </div>
        </main>
    );
}
export default cards;