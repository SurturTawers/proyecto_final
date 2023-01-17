import {Link} from "react-router-dom"
function CartWidget(){
    return (
        <Link to="checkout">
            <img style={{width:30}} src="/carrito.png" alt="" />
        </Link>
    );
}

export default CartWidget;