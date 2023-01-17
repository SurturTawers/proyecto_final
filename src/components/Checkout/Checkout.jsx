import { useContext, useState } from "react";
import { Container, Card, Row, Col, Button, Toast} from "react-bootstrap";
import Context from "../Context/Context";
import { db } from '../../firebase/config';
import { doc, collection } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


function Checkout(){
    const {store, dispatch} = useContext(Context);
    const {carrito} = store;
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function onRemoveHandler(item){
        console.log("remover",item.precio);
        setShow(true);
        dispatch({
            type: "remove-item",
            payload: {
                item: item.item,
                category: item.category,
                precio: item.precio,
                quantity: item.quantity
            }
        });
    }

    async function payProducts(){
        console.log("pagar");
        const orderRef = await doc(collection(db,'/orders'));
        await dispatch({
            type: "purchase",
            payload: {
                orderRef: orderRef,
            }
        });
        console.log("pagado");
        console.log(orderRef.id);
        navigate(`/checkout/${orderRef.id}`);
    }

    return (
        <Container>
            <Card>
                <Card.Header>
                    Carrito
                </Card.Header>
                <Card.Body>
                    {
                        carrito.length !==0 && carrito[0].total!==0 ? (  
                            carrito[0].items.map((item)=>{
                                return (
                                    <Row className="mb-2" style={{border:"solid 1px"}} >
                                        <Col>
                                            <b>Artículo:</b> {item.item}
                                        </Col>
                                        <Col>
                                            <b>Categoria:</b> {item.category}
                                        </Col>
                                        <Col>
                                            <b>Cantidad:</b> {item.quantity} 
                                        </Col>
                                        <Col>
                                            <b>Total:</b> {item.quantity*item.precio} 
                                        </Col>
                                        <Col>
                                            <Button variant="danger" onClick={()=> onRemoveHandler(item)}>
                                                Quitar
                                            </Button>
                                        </Col>
                                    </Row>
                                );
                            })
                        ) : <p>Su carrito esta vacio</p>
                    }
                </Card.Body>
                <Card.Footer>
                    {
                        carrito.length !==0 && carrito[0].total!==0 ? <Button onClick={()=>payProducts()} >Total: ${carrito[0].total}</Button> : <span>Total: $0</span>
                    }
                </Card.Footer>
            </Card>
            <Toast onClose={()=> {setShow(false)}} show={show} delay={2000} autohide>
                    <Toast.Header>
                        Se ha quitado del carrito!
                    </Toast.Header>
                    <Toast.Body>
                        <p>Has quitado un elemento de tu carrito.</p>
                    </Toast.Body>
                </Toast>   
           
        </Container>
    );
}

export default Checkout;