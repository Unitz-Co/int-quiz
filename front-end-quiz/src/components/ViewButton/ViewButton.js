import './ViewButton.scss'

function ViewButton({ select = "hor", changeView }) {
    return (<div className="viewbutton-wrapper">
        <div onClick={()=>changeView("ver")} className={select === "ver" ? "vertical-btn selected" : "vertical-btn"}>
            Vertical
        </div>
        <div onClick={()=>changeView("hor")} className={select === "hor" ? "horizontal-btn selected" : "horizontal-btn"}>
            Horizontal
        </div>
    </div>);
}

export default ViewButton;