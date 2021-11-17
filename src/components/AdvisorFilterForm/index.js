import { Form, Input, Button, Select } from 'antd';
import './index.scss';

export default function AdvisorFilterForm(props) {
  const [form] = Form.useForm();

  function handleResetFilter() {
    form.resetFields();
    props.onReset({});
  }

  return (
    <Form
      form={form}
      name="filter-form"
      layout="vertical"
      initialValues={{}}
      onFinish={props.onFilter}
      autoComplete="off"
    >
      <Form.Item label="Name" name="name">
        <Input placeholder="Filter by name" />
      </Form.Item>

      <Form.Item label="Category" name="category">
        <Input placeholder="Filter by category" />
      </Form.Item>

      <Form.Item label="Status" name="status">
        <Select placeholder="Filter by status">
          <Select.Option value={1}>Online</Select.Option>
          <Select.Option value={0}>Offline</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Submit">
        <Button type="primary" htmlType="submit">Filter</Button>
        <Button type="danger" onClick={handleResetFilter}>Reset</Button>
      </Form.Item>
    </Form>
  );
};
