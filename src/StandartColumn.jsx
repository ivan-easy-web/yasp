
function StandartColumn(props) {
    return <div className="column">

        <div className="standart-column-item" style={{height: (props.value / props.maxTotal * props.totalHeight)}}>
            <p>{props.value}</p>
        </div>
        
        <p className="column-name">норматив</p>

    </div>
}

export default StandartColumn