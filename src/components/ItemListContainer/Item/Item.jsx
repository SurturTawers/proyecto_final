import { useState, useContext } from "react";
import {Card, Toast, Row, Col} from "react-bootstrap";
import ItemQuantitySelector from "./ItemQuantitySelector/ItemQuantitySelector.jsx"
import Context from "../../Context/Context";
import {Link} from "react-router-dom"
function Item(props){
    const {itemId, itemCat , itemDesc, itemPrecio} = props;
    const { dispatch } = useContext(Context);
    const [quantity, setQuantity] = useState(0);
    const [show, setShow] = useState(false);

    function addItemHandler(){
        dispatch({
            type: "add-item",
            payload: {
                item: itemDesc,
                category: itemCat,
                precio: itemPrecio,
                quantity: quantity,
            },
        });
        setShow(true);
        console.log("se ha añadido al carrito");
    };

    function addQuantity(){
        console.log("adding");
        setQuantity(quantity+1);        
    }

    function subtractQuantity(){
        console.log("subtracting");
        setQuantity(quantity-1);
    }


    return (
        <Row className="mb-3">
            <Col>
                <Card>
                    <Card.Header>
                        <Link style={{textDecoration: 'none', color: "black"}} to={`/item/${itemId}`}>
                            {itemDesc}
                        </Link>
                    </Card.Header>
                    <Card.Body>
                        <b>Categoria:</b> {itemCat}                
                    </Card.Body>
                    <Card.Footer>
                        <b>Valor:</b> {itemPrecio}
                        <ItemQuantitySelector quantity={quantity} addItemHandler={addItemHandler} addQuantity={addQuantity} subtractQuantity={subtractQuantity}/>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Toast onClose={()=> {setShow(false); setQuantity(0)}} show={show} delay={2000} autohide>
                    <Toast.Header>
                        Se ha añadido al carrito!
                    </Toast.Header>
                    <Toast.Body>
                        <p>Has añadido {quantity} {itemDesc} a tu carrito.</p>
                        <p>
                            <b>Total:</b> {itemPrecio * quantity};
                        </p>
                    </Toast.Body>
                </Toast>    
            </Col>
        </Row>
    );
}

export default Item;