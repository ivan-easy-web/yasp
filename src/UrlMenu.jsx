import { ListGroup } from "react-bootstrap";

function UrlMenu(props) {

    const handleClick = (index) => {
        props.changeUrl(props.urls[index]);
        props.toggleMenu();
    }

    return <div className="toggle-background" onClick={() => props.toggleMenu()}>
        <ListGroup className="url-menu" style={props.style}>
            <ListGroup.Item onClick={() => handleClick(0)}>OS Doors</ListGroup.Item>
            <ListGroup.Item onClick={() => handleClick(1)}>OS Bombuntu</ListGroup.Item>
            <ListGroup.Item onClick={() => handleClick(2)}>Mibre Office</ListGroup.Item>
            <ListGroup.Item onClick={() => handleClick(3)}>LoWtEx</ListGroup.Item>
            <ListGroup.Item onClick={() => handleClick(4)}>W$ POS</ListGroup.Item>
        </ListGroup>
    </div>
}

export default UrlMenu;