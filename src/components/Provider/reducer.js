import { setDoc} from 'firebase/firestore';
export default function reducer(store, action){
    const {type, payload} = action;
    switch(type){
        case "add-item":{
            let carrito = store.carrito;
            if(carrito.length===0){
                carrito.push({
                    items: [],
                    total: 0,
                });
            }
    
            carrito[0].items.push(payload);
            carrito[0].total += payload.quantity * payload.precio;
            //console.log(carrito);
            return {carrito};

        }
        case "remove-item": {
            let carrito = store.carrito;
            let index = carrito[0].items.indexOf(payload);
            carrito[0].total -= payload.precio * payload.quantity;
            carrito[0].items.splice(index,1);
            //console.log(payload.precio);
            return {carrito};
        }
        case "purchase": {
            let carrito = store.carrito;
            console.log(carrito);
            setDoc(payload.orderRef,{
                items: carrito[0].items,
                total: carrito[0].total
            });
            return {carrito};
        }
        default: {

        }
    }
}