import { SmileTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";
import { capitalize } from "lodash";

interface IStatusIcon {
  status: "online" | "offline" | string,
}

const StatusIcon = ({ status }: IStatusIcon) => {
  return (
    <Tooltip title={capitalize(status)}>
      {status === "online" ?
        <SmileTwoTone twoToneColor="#06bd0c" style={{ marginLeft: 5 }} /> :
        <MinusCircleTwoTone twoToneColor="red" style={{ marginLeft: 5 }} />
      }
    </Tooltip>
  )
}

export default StatusIcon;