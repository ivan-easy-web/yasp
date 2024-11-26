
function Column(props) {
    return <div className="column">

        <div className="column-item" style={{height: (props.item.front / props.maxTotal * props.totalHeight)}}>
            <p>{props.item.front}</p>
        </div>

        <div className="column-item" style={{height: (props.item.back / props.maxTotal * props.totalHeight)}}>
            <p>{props.item.back}</p>
        </div>

        <div className="column-item" style={{height: (props.item.db / props.maxTotal * props.totalHeight)}}>
            <p>{props.item.db}</p>
        </div>
        
        <p className="column-name">{props.name}</p>

    </div>
}

export default Column