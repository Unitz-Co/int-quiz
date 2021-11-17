import { List, Statistic, Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import AdvisorUpdateForm from '../AdvisorUpdateForm';
import { LAYOUT } from '../../App';
import './index.scss';

export default function ListAdvisor(props) {
  const getCategories = advisor => {
    const { categoriesCollection } = advisor || {};
    if (!categoriesCollection || !categoriesCollection.items) {
      return '';
    }

    const { items } = categoriesCollection;
    const categories = items.map(category => category.displayName).filter(cat => cat)
    return ((categories && categories.length) && categories.join(", ")) || '--';
  }

  return (
    <List
      grid={{ gutter: 16, column: (props.layout === LAYOUT.vertical && 1) || 3 }}
      itemLayout={props.layout || LAYOUT.horizontal}
      size="large"
      dataSource={props.advisors}
      footer={undefined}
      renderItem={advisor => (
        <List.Item
          key={advisor.sys.id}
          actions={[
            <Dropdown overlay={
              <Menu>
                <Menu.Item>
                  <AdvisorUpdateForm advisor={advisor} onUpdate={props.onUpdate} />
                </Menu.Item>
              </Menu>
            } trigger={['click']} >
              <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <MoreOutlined style={{ fontSize: '18px', color: '#08c' }} />
              </span>
            </Dropdown>
          ]}
        >
          <div className={props.layout || ''}>
            <Statistic title="Name" value={advisor.displayName || '--'} />
            <Statistic title="Categories" value={getCategories(advisor)} />
            <Statistic title="Status" value={(advisor.status && 'Online') || 'Offline'} />
          </div>
        </List.Item>
      )}
    />
  )
}
