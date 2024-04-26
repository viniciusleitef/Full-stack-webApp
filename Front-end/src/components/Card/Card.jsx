import "./Card.css"

import Circle from "../Circle/Circle"

function Card(props){
    return (
        <div className="card-box">
            <Circle directory = {props.directory}></Circle>

            <div className="card-title-box">
                <h2 className="card-title">{props.title}</h2>
            </div>

            <div className="card-text-box">
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Card