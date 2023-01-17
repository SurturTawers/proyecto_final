import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Container, Row} from 'react-bootstrap'
import { db } from '../../firebase/config';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Item from "./Item/Item.jsx" 

function ItemListContainer(){
    let {Id} = useParams();
    const [itemsData, setItemsData] = useState([]);

    useEffect(()=>{
        //console.log(Id);
        if(Id){
            const q = query(collection(db,'/items'), where("category", "==", Id));
            let itemsList = [];
            getDocs(q)
                .then(snapshot=>{
                    snapshot.forEach((doc)=>{
                        itemsList.push({...doc.data(), id: doc.id});
                    });
                    setItemsData(itemsList);
                });
        }else{
            let itemsList = [];
            getDocs(collection(db,'/items'))
                .then(snapshot=>{
                    snapshot.forEach((doc)=>{
                        itemsList.push({...doc.data(), id: doc.id});
                    });
                    setItemsData(itemsList);
                });
        }
    }, [Id]);

    return (
        <Container>
            {
                itemsData.length !==0 ? (itemsData.map((item) =>{
                    return (
                        <Row className="justify-content-center">
                            <Item key={item.id} itemId={item.id} itemCat={item.category} itemDesc={item.description} itemPrecio={item.price}></Item>
                        </Row>
                    )
                })) : <p>Cargando artículos...</p> 
            }
        </Container>
        
    );
}

export default ItemListContainer;