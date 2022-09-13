import './StatusButton.scss'

function StatusButton({ status = "all", changeStatus }) {
    return (<div className="statusbutton-wrapper">
        <span>
            <input onChange={(e) => { changeStatus(e.target.value) }} checked={status === "all" ? true : false} type='radio' value="all" name="status" /> All
        </span>
        <span>
            <input onChange={(e) => { changeStatus(e.target.value) }} checked={status === "online" ? true : false} type='radio' value="online" name="status" /> Online
        </span>
        <span>
            <input onChange={(e) => { changeStatus(e.target.value) }} checked={status === "offline" ? true : false} type='radio' value="offline" name="status" /> Offline
        </span>
    </div>);
}

export default StatusButton;