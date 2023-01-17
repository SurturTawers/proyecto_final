import { Button , Container, Row, Col} from "react-bootstrap";

function ItemQuantitySelector(props){
    const {quantity, addItemHandler, addQuantity, subtractQuantity} = props;
    return (
        <Container>
            <Row>    
                <Col>
                    <Button disabled={quantity<=0 ?true : false} className="bg-danger" onClick={subtractQuantity}>-</Button>
                    <input className="text-center" readOnly={true} placeholder="0" value={quantity}></input>
                    <Button onClick={addQuantity}>+</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="bg-success" onClick={addItemHandler}>
                        Agregar al carrito
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemQuantitySelector;