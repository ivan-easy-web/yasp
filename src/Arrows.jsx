import { FaArrowDown, FaArrowUp  } from "react-icons/fa6";


let yDefault = 55;

function Arrows(props) {

    let y0 = yDefault + ((props.maxTotal - (props.data.dev.front + props.data.dev.back + props.data.dev.db)) / props.maxTotal * props.totalHeight),
        y1 = yDefault + ((props.maxTotal - (props.data.test.front + props.data.test.back + props.data.test.db)) / props.maxTotal * props.totalHeight),
        y2 = yDefault + ((props.maxTotal - (props.data.prod.front + props.data.prod.back + props.data.prod.db)) / props.maxTotal * props.totalHeight),

        d1 = (props.data.test.front + props.data.test.back + props.data.test.db) - (props.data.dev.front + props.data.dev.back + props.data.dev.db),
        d2 = (props.data.prod.front + props.data.prod.back + props.data.prod.db) - (props.data.test.front + props.data.test.back + props.data.test.db);

    return <>
        <div className="color-badges">
            {d1 > 0 &&
                <div className="color-badge" id="badge-0" style={{backgroundColor: "#00CC99"}}>
                    <FaArrowUp /> 
                    <span>+{d1}</span>
                </div>
            }
            {d1 < 0 &&
                <div className="color-badge" id="badge-0" style={{backgroundColor: "#FC440F"}}>
                    <FaArrowDown /> 
                    <span>{d1}</span>
                </div>
            }
            {d1 == 0 &&
                <div className="color-badge badge-zero" id="badge-0" style={{backgroundColor: "#898290"}}>
                    <span>0</span>
                </div>
            }
            {d2 > 0 &&
                <div className="color-badge" id="badge-1" style={{backgroundColor: "#00CC99"}}>
                    <FaArrowUp /> 
                    <span>+{d2}</span>
                </div>
            }
            {d2 < 0 &&
                <div className="color-badge" id="badge-1" style={{backgroundColor: "#FC440F"}}>
                    <FaArrowDown /> 
                    <span>{d2}</span>
                </div>
            }
            {d2 == 0 &&
                <div className="color-badge badge-zero" id="badge-1" style={{backgroundColor: "#898290"}}>
                    <span>0</span>
                </div>
            }
        </div>
        <div className="arrows">
            <svg width="480" height="327">
                <line x1="60" x2="60" y1={y0} y2="12" stroke="black" strokeWidth="1"/>
                <line x1="60" x2="170" y1="12" y2="12" stroke="black" strokeWidth="1"/>
                <line x1="170" x2="170" y1={y1} y2="12" stroke="black" strokeWidth="1"/>
                <line x1="170" x2="174" y1={y1} y2={y1 - 4} stroke="black" strokeWidth="1"/>
                <line x1="170" x2="166" y1={y1} y2={y1 - 4} stroke="black" strokeWidth="1"/>

                <line x1="190" x2="190" y1={y1} y2="12" stroke="black" strokeWidth="1"/>
                <line x1="190" x2="300" y1="12" y2="12" stroke="black" strokeWidth="1"/>
                <line x1="300" x2="300" y1={y2} y2="12" stroke="black" strokeWidth="1"/>
                <line x1="300" x2="304" y1={y2} y2={y2 - 4} stroke="black" strokeWidth="1"/>
                <line x1="300" x2="296" y1={y2} y2={y2 - 4} stroke="black" strokeWidth="1"/>
            </svg>
        </div>
    </>
}

export default Arrows;