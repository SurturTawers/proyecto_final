import Toast from 'react-bootstrap/Toast'
function ItemListContainer(props){
    const {saludo} = props;
    return (
            <Toast>
                <Toast.Header>
                    <img style={{borderRadius:"50%", width:40, marginRight:10}} src="/surtStoreLogo.jfif"></img>
                    <strong className='me-auto'>¡Bienvenido!</strong>
                </Toast.Header>
                <Toast.Body>
                    {saludo}
                </Toast.Body>
            </Toast>
    );
}

export default ItemListContainer;