import Card from "react-bootstrap/Card"
import { useParams } from "react-router-dom";
import { ITEMS } from "../../utils/items";
import { getItem} from "../../services/items.js";
import { useState } from "react";
import { useEffect } from "react";
function ItemDetailContainer(){
    let {Id} = useParams();
    const [itemData, setItemData] = useState({});

    useEffect(()=>{
        setItemData(getItem(Id));
    });

    return (
        <div className="col-8 mb-5">    
            <Card>
                <Card.Header>
                    {itemData.id}
                </Card.Header>
                <Card.Body>
                    <p>{itemData.description}</p>
                    <p>{itemData.category}</p>
                </Card.Body>
                <Card.Footer>
                    {itemData.price}
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ItemDetailContainer;