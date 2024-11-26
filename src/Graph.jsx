import Column from "./Column"
import StandartColumn from "./StandartColumn"
import { BsThreeDots } from "react-icons/bs";

let totalHeight = 265

function Graph(props) {
    let maxTotal = Math.max(
        props.data.dev.front + props.data.dev.back + props.data.dev.db, 
        props.data.test.front + props.data.test.back + props.data.test.db, 
        props.data.prod.front + props.data.prod.back + props.data.prod.db
    )

    return <div className="graph">
        <div className="header">
            <h3 className="header">Количество пройденных тестов "{props.data.title}"</h3>
            <BsThreeDots />
        </div>
        <div className="row">
            <Column item={props.data.dev} totalHeight={totalHeight} maxTotal={maxTotal} name="dev"/>
            <Column item={props.data.test} totalHeight={totalHeight} maxTotal={maxTotal} name="test"/>
            <Column item={props.data.prod} totalHeight={totalHeight} maxTotal={maxTotal} name="prod"/>
            <StandartColumn value={props.data.norm} totalHeight={totalHeight} maxTotal={maxTotal}/>
        </div>
        <div className="footer">
            <div className="footer-item">
                <div className="color-square" id="color-square-0"/>
                <p>Клиентская часть</p>
            </div>
            <div className="footer-item">
                <div className="color-square" id="color-square-1"/>
                <p>Серверная часть</p>
            </div>
            <div className="footer-item">
                <div className="color-square" id="color-square-2"/>
                <p>База данных</p>
            </div>
        </div>
    </div>
}

export default Graph