import { useReducer } from "react";
import Context from "../Context/Context";
import reducer from "./reducer";
import store from "./store";

export default function Provider(props){
    const {children} = props;
    const [mystore, dispatch] = useReducer(reducer,store);

    const value = {store: mystore, dispatch};
    return <Context.Provider value={value}>{children}</Context.Provider>;
}
