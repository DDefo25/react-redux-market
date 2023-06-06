export default function Item({item}) {
    const {
        name,
        price,
        avatar,
        isSale,
        priceSale
    } = item

    return (
        <div className="col">
            <div className="card border-light h-100" style={{width: "18rem"}}>
                <img src={avatar} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {isSale ? (
                        <>
                            <p className="card-text text-end">{priceSale}</p>
                            <p className="card-text text-end text-decoration-line-through">{price}</p>
                        </> 
                    ): <p className="card-text text-end">{price}</p>}
                    <a href="#" className="btn btn-primary">В корзину</a>
                </div>
            </div>
        </div>
    )
}