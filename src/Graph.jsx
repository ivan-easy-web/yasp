import Column from "./Column"

let totalHeight = 265

function Graph(props) {
    let maxTotal = Math.max(
        props.data.dev.front + props.data.dev.back + props.data.dev.db, 
        props.data.test.front + props.data.test.back + props.data.test.db, 
        props.data.prod.front + props.data.prod.back + props.data.prod.db
    )

    return <div className="graph">
        <h3>Количество пройденных тестов "{props.data.title}"</h3>
        <div className="row">
            <Column item={props.data.dev} totalHeight={totalHeight} maxTotal={maxTotal} name="dev"/>
            <Column item={props.data.test} totalHeight={totalHeight} maxTotal={maxTotal} name="test"/>
            <Column item={props.data.prod} totalHeight={totalHeight} maxTotal={maxTotal} name="prod"/>
        </div>
    </div>
}

export default Graph