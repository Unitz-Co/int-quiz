import { Avatar, Badge, Breadcrumb, Button, Image, Input, Layout, Space, Table, Typography } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useContext, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { AppContext } from '../app';
import { flatten, uniqBy } from 'lodash';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Comp({ name }) {
  const { data } = useContext(AppContext);
  const items = data.map((item) =>
    item[name].items.map((item) => ({
      key: item.sys.id,
      ...item.sys,
      ...item,
      avatar: item.avatarUrl?.url,
    })),
  );
  const categories = uniqBy(flatten(items), 'displayName');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef();

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => {
            console.log(e.target.value);
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            console.log(selectedKeys, confirm, dataIndex);
          }}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button type="primary" onClick={() => handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => {
              if (clearFilters) {
                clearFilters();
                setSearchText('');
              }
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <Highlighter highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }} searchWords={[searchText]} autoEscape textToHighlight={text ? text.toString() : ''} /> : text),
  });
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const sortDirections = ['descend', 'ascend'];
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      render: (avatar) => {
        return avatar ? <Image src={avatar} width={64} height={64} style={{ borderRadius: '50%', objectFit: 'cover' }} /> : <Avatar icon={<UserOutlined />} size={64} />;
      },
    },
    {
      title: 'ID',
      dataIndex: 'id',
      ...getColumnSearchProps('id'),
      sorter: (a, b) => a.id.localeCompare(b.id),
      sortDirections,
    },
    {
      title: 'Category',
      dataIndex: 'displayName',
      ...getColumnSearchProps('displayName'),
      sorter: (a, b) => a.displayName.localeCompare(b.displayName),
      sortDirections,
    },
  ];
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Users</Breadcrumb.Item>
      </Breadcrumb>
      <Layout>
        <Header
          style={{
            backgroundColor: 'white',
            paddingTop: 15,
            paddingInline: 15,
          }}
        >
          <Title level={4}>Users</Title>
        </Header>
        <Content>
          <Table rowSelection={rowSelection} columns={columns} dataSource={categories} />
        </Content>
      </Layout>
    </>
  );
}
