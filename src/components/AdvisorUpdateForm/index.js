import { Modal, Typography } from 'antd';

export default function AdvisorUpdateForm(props) {
  const confirm = () => {
    Modal.confirm({
      title: 'Update status',
      icon: null,
      content: `Do you want to update ${props.advisor.displayName}'s status to "${props.advisor.status && 'Offline' || 'Online'}"?`,
      okText: 'Update',
      cancelText: 'Cancel',
      onOk() {
        const { advisor } = props;
        props.onUpdate({
          ...advisor,
          status: advisor.status === 1 ? 0 : 1
        })
      }
    });
  }

  return (
    <Typography.Text onClick={confirm}>Update status</Typography.Text>
  )
}
