import Item from "./Item/Item.jsx" 
import { getAllItems, getCategoryItems} from "../../services/items.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemListContainer(props){
    let {Id} = useParams();
    const [itemsData, setItemsData] = useState([]);

    useEffect(()=>{
        if(Id){
            setItemsData(getCategoryItems(Id));
        }else{
            setItemsData(getAllItems(Id));
        }
    });
    return (
        itemsData.map((item) =>{
            return (
                <Item key={item.id} itemId={item.id} itemCat={item.category} itemDesc={item.description} itemPrecio={item.price}></Item>
            );
        })
    );
}

export default ItemListContainer;