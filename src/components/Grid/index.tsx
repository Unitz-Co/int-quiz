import { MailTwoTone, MobileTwoTone, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Row, Space, Typography } from 'antd';
import _get from 'lodash/get';
import { NOT_EXIST_CATEGORY, uniqCategories } from '../../helpers/advisor';
import CategoryTag from '../CategoryTag';
import StatusIcon from '../StatusIcon';

const Grid = ({ items }: any) => {
  const renderCategories = (list: any) =>
    list.length > 0 ? list.map((item: any) => {
      return (
        <CategoryTag key={item.sys.id} id={item.sys.id} name={item.displayName}/>
      )
    }) : (
      <Typography.Paragraph italic>{NOT_EXIST_CATEGORY}</Typography.Paragraph>
    )

  return (
      <Row gutter={[32, 32]}>
        {items?.length > 0 && items.map((item: any) => {
          const hasAvatarUrl = !!item.avatarUrl;
          const categories = uniqCategories(_get(item, 'categoriesCollection.items'));
          return (
            <Col key={`card-item-${item.sys.id}`} xs={24} sm={12} lg={8} xxl={6}>
              <Card
                title={
                  <Avatar
                    icon={!hasAvatarUrl && <UserOutlined />}
                    src={hasAvatarUrl ? item.avatarUrl.url : null}
                    alt={hasAvatarUrl ? item.avatarUrl.title : null}
                    size={150}
                  />
                }
                style={{ height: '100%', textAlign: 'center', borderRadius: 4 }}
              >
                <Card.Meta
                  title={
                    <Typography.Title level={4}>
                      {item.displayName}
                      <StatusIcon status={item.status} />
                    </Typography.Title>}
                  description={
                  <Space size={0} direction="vertical" style={{ textAlign: 'left', marginTop: 8, marginBottom: 8 }}>
                    {item.email && (
                      <Space align="center">
                        <MailTwoTone title="test" />
                        <Typography.Link href={`mailto:${item.email}`}>{item.email}</Typography.Link>
                      </Space>
                    )}
                    {item.phone && (
                      <Space align="center">
                        <MobileTwoTone />
                        <Typography.Link href={`tel:${item.phone}`}>{item.phone}</Typography.Link>
                      </Space>
                    )}
                  </Space>
                  }
                />
                <Divider orientation="left" plain>Categories</Divider>
                <Space align="center" wrap style={{ width: '100%' }}>
                  {renderCategories(categories)}
                </Space>
              </Card>
            </Col>
          )
        })}
      </Row>
  );
};

export default Grid;