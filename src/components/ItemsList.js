import Item from "./Item"
import { useSelector } from "react-redux"

export default function ItemList () {
    const itemList = useSelector(state => state.itemList)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
            {itemList.map(item => <Item key={item.id} item={item}/>)}
        </div>
    )
}