import Card from "react-bootstrap/Card"
import {Link} from "react-router-dom"
function Item(props){
    const {itemId, itemCat , itemDesc, itemPrecio} = props;
    return (
        <div className="col-3 mb-5">    
            <Card>
                <Card.Header>
                    <Link to={`/item/${itemId}`}>
                        {itemDesc}
                    </Link>
                </Card.Header>
                <Card.Body>
                    {itemCat}                
                </Card.Body>
                <Card.Footer>
                    {itemPrecio}
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Item;