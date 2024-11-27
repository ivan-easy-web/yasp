import { useState, useEffect } from "react";
import Arrows from "./Arrows";
import Column from "./Column"
import StandartColumn from "./StandartColumn"
import { BsThreeDots } from "react-icons/bs";
import UrlMenu from "./UrlMenu";

let totalHeight = 265;
let menuLeftOffset = '0px';

function Graph(props) {

    let maxTotal = Math.max(
        props.data.dev.front + props.data.dev.back + props.data.dev.db, 
        props.data.test.front + props.data.test.back + props.data.test.db, 
        props.data.prod.front + props.data.prod.back + props.data.prod.db,
        props.data.norm
    )

    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    }

    const handleButtonClick = (event) => {
        menuLeftOffset = event.pageX - 220 + 'px';
        toggleMenu();
    }


    const checkSmallWindow = () => {
        return window.innerWidth < 520
    }

    const [small, setSmall] = useState(checkSmallWindow());

    function handleWindowSizeChange() {
        setSmall(checkSmallWindow());
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    

    return <div className="graph">
        {menuOpened && <UrlMenu changeUrl={props.changeUrl} urls={props.urls} toggleMenu={toggleMenu} style={{left: menuLeftOffset}}/>}
        <div className="header">
            <h3 className="header">Количество пройденных тестов "{props.data.title}"</h3>
            <BsThreeDots onClick={handleButtonClick}/>
        </div>
        <Arrows data={props.data} totalHeight={totalHeight} maxTotal={maxTotal} small={checkSmallWindow()}/>
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