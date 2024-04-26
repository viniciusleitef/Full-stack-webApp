import "./Button.css"
import { useState, useEffect } from "react";

function Button(props){

    const [width, setWidth] = useState(180)
    const [height, setHeight] = useState(40)
    const [border, setBorder] = useState("1px solid white")
    const [borderRadius, setBorderRadius] = useState(4)
    const [backgroundColor, setBackgroundColor] = useState("transparent")
    const [color, setColor] = useState("white")

    useEffect(() => {
        setWidth(props.width)
        setHeight(props.height)
        setBorder(props.border)
        setBorderRadius(props.borderRadius)
        setBackgroundColor(props.backgroundColor)
        setColor(props.color)
    }, [])

    return(
        <div className="button-box"
             style={{
                 width: `${width}px`,
                 height: `${height}px`,
                 border: `${border}`,
                 borderRadius: `${borderRadius}px`,
                 backgroundColor: `${backgroundColor}`,
                 color: `${color}`
             }}
        >
            {props.children}
        </div>
    )
}

export default Button;