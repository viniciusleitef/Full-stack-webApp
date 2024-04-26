import "./Circle.css";

function Circle(prosp){
    return(
        <div className="circle-box">
            <div className="circle-body">
                <img src={prosp.directory} alt="" className="circle-img"/>
            </div>
        </div>
    )
}

export default Circle