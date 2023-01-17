import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import Item from "../ItemListContainer/Item/Item.jsx";
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer(){
    let {Id} = useParams();
    const [itemData, setItemData] = useState(null);

    useEffect(()=>{
        const docRef = doc(db,'/items', Id);
        getDoc(docRef)
            .then(snapshot =>{
                setItemData({...snapshot.data(), id:snapshot.id});
            })
    });

    return (
        
        <Container>
            {
                itemData !== null ? (
                    <Row className="justify-content-center" >
                        <Item key={itemData.id} itemId={itemData.id} itemCat={itemData.category} itemDesc={itemData.description} itemPrecio={itemData.price}></Item>
                    </Row>
                ) : <span>Cargando artículo...</span>
            }
        </Container>
    );
}

export default ItemDetailContainer;