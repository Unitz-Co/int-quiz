import { Avatar, Tooltip } from "antd";
import { MessageOutlined, PhoneOutlined, VideoCameraOutlined } from '@ant-design/icons';
function ExtraList(props) {
    const checkNameService = (name) => {
        switch (name) {
            case "ChatService":
                return <MessageOutlined />
            case "PhoneService":
                return <PhoneOutlined />
            case "VideoService":
                return <VideoCameraOutlined />
            default:
                return null
        }
    }
    return (
        <div>
            <p>{props.title}</p>
            <Avatar.Group
                maxCount={2}
                maxPopoverTrigger="click"
                size="large"
                maxStyle={{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                    cursor: 'pointer',
                }}
            >

                {props.item.length !== 0 ? props.item.map(subItem =>
                    <Tooltip title={subItem.displayName || subItem.name} placement="bottom">
                        {subItem.avatarUrl?.url ? <Avatar src={subItem.avatarUrl?.url} />
                            : <Avatar>
                                {subItem.displayName || checkNameService(subItem.name)}
                            </Avatar>
                        }
                    </Tooltip>
                ) :
                    <Tooltip title={"Nothing Here"} placement="bottom"><Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                    >
                        Null
                    </Avatar>
                    </Tooltip>}
            </Avatar.Group>
        </div>
    );

}
export default ExtraList