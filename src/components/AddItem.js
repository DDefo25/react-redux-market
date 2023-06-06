import { useDispatch, useSelector } from "react-redux"
import { changeField, toggleSale } from "../containers/AddItem";
import { addItem } from "../containers/ItemsList";

export default function AddItem() {
    const item = useSelector(state => state.item)
    const itemList = useSelector(state => state.itemList)
    const dispatch = useDispatch();

    const handleChange = evt => {
        const {name, value} = evt.target
        dispatch(changeField({name, value}))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch(addItem(item))
        console.log(itemList)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Название товара" aria-describedby="itemName" name='name' onChange={handleChange} value={item.name}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Стоимость" aria-describedby="itemPrice" name='price' onChange={handleChange} value={item.price}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Ссылка на изображение" aria-describedby="avatar" name='avatar' onChange={handleChange} value={item.avatar}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="sale" name='isSale' onClick={() => dispatch(toggleSale())} value={item.isSale}/>
                <label className="form-check-label" htmlFor="sale">Скидка</label>
            </div>
            {item.isSale && <div className="mb-3">
                <input type="text" className="form-control" placeholder="Стоимость на скидке" aria-describedby="itemPriceSale" name='priceSale' onChange={handleChange} value={item.priceSale}/>
            </div>}
            <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
    )
}

