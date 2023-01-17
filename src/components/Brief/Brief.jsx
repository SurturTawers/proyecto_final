import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col} from "react-bootstrap";
import { db } from '../../firebase/config';
import { getDoc, doc} from 'firebase/firestore';
function Brief(){
    const {Id} = useParams();
    //console.log(Id);
    const [order, setOrder] = useState(null);

    useEffect(()=>{
        const docRef = doc(db,'/orders', Id);
        getDoc(docRef)
            .then(snapshot =>{
                setOrder({...snapshot.data(), id:snapshot.id});
            })
    });

    return (
        <Container>
            <h1>Gracias por su compra!</h1>
            <Card>
                <Card.Header>
                    Resumen
                </Card.Header>
                <Card.Body>
                    {
                        order !==null ? (order.items.map(item =>{
                            return(
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
                                </Row>
                            );
                        })) : <p>Cargando su orden</p>
                    }
                </Card.Body>
                <Card.Footer>
                    {
                        order !==null ? (<span><b>Total:</b> ${order.total}</span>) : null
                    }
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default Brief;