import { MailTwoTone, MobileTwoTone, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Row, Space, Typography } from 'antd';
import _get from 'lodash/get';
import { NOT_EXIST_CATEGORY, uniqCategories } from '../../helpers/advisor';
import CategoryTag from '../CategoryTag';
import StatusIcon from '../StatusIcon';

const Stack = ({ items }: any) => {
  const renderCategories = (list: any) =>
    list.length > 0 ? list.map((item: any) => {
      return (
        <CategoryTag key={item.sys.id} id={item.sys.id} name={item.displayName}/>
      )
    }) : (
      <Typography.Paragraph italic>{NOT_EXIST_CATEGORY}</Typography.Paragraph>
    )
    
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {items?.length > 0 && items.map((item: any) => {
        const hasAvatarUrl = !!item.avatarUrl;
        const categories = uniqCategories(_get(item, 'categoriesCollection.items'));
        return (
          <Row key={`card-item-${item.sys.id}`} gutter={[16, 32]}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={{ span: 20, offset: 2 }}
              xl={{ span: 16, offset: 4 }}
              xxl={{ span: 16, offset: 4 }}
            >
              <Card
                key={`card-item-${item.sys.id}`}
                style={{ width: '100%', borderRadius: 4 }}
              >
                <Card.Meta
                  avatar={
                    <Avatar
                      icon={!hasAvatarUrl && <UserOutlined />}
                      src={hasAvatarUrl && item.avatarUrl.url}
                      alt={hasAvatarUrl && item.avatarUrl.title}
                      size={{ xs: 100, sm: 100, md: 150, lg: 150, xl: 180, xxl: 180 }}
                    />
                  }
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
                      <Divider orientation="left" plain>Categories</Divider>
                      <Space align="center" wrap style={{ width: '100%' }}>
                        {renderCategories(categories)}
                      </Space>
                    </Space>
                  }
                />
              </Card>
            </Col>
          </Row>
        )
      })}
    </Space>
  );
}

export default Stack;