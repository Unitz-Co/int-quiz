import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Avatar, Badge } from 'antd';
import 'antd/dist/antd.css';
import Data from '../data.json'
import { UserOutlined } from '@ant-design/icons';

const GridView = ({ textSearch, filterStatus }) => {

  const [listAdvisor, setListAdvisor] = useState([]);
  const posts = Data.data.advisorProfileCollection.items;

  useEffect(() => {
    if (textSearch) {
      const filterTextSearch = posts.filter(item => {
        let flag = false;
        const categories = item.categoriesCollection.items;

        if (item.displayName.includes(textSearch)) {
          flag = true;
        }

        if (categories && categories.length) {
          categories.forEach((category) => {
            if (category.displayName.includes(textSearch)) {
              flag = true;
            }
          })
        }
        return flag;
      });

      if (filterStatus) {
        const dataFilterStatus = filterTextSearch.filter(item => {
          if (
            (filterStatus === 'online' && item.isOnline)
            || (filterStatus === 'offline' && !item.isOnline)
          ) {
            return true;
          } else {
            return false;
          }
        })
        setListAdvisor(dataFilterStatus);
      } else {
        setListAdvisor(filterTextSearch);
      }
    } else {
      if (filterStatus) {
        const dataFilterStatus = posts.filter(item => {
          if (
            (filterStatus === 'online' && item.isOnline)
            || (filterStatus === 'offline' && !item.isOnline)
          ) {
            return true;
          } else {
            return false;
          }
        })
        setListAdvisor(dataFilterStatus);
      } else {
        setListAdvisor(posts);
      }
    }
  }, [textSearch, filterStatus]);

  return (
    <Row gutter={[16, 16]}>
      {
        listAdvisor.map(post => {
          return <Col span={6} key={post.sys.id} style={{ border: '1px solid #CCD0D5' }}>
            <Row >
              <Col span={24} >
                <Badge dot color={post.isOnline ? 'green' : 'gray'} style={{ width: '15px', height: '15px' }}>
                  {
                    post.avatarUrl && post.avatarUrl.url ?
                      <Avatar shape="square" style={{ width: 250, height: 250 }} src={post.avatarUrl.url} />
                      :
                      <Avatar shape="square" style={{ width: 250, height: 250 }} icon={<UserOutlined />} />
                  }
                </Badge>
              </Col>
            </Row>
            <Row style={{ margin: 'auto', textAlign: 'center' }}>
              <Col span={24} style={{ fontSize: '2rem', fontWeight: 'bold' }}>{post.displayName}</Col>
              <Col span={24}>Email: {post.email}</Col>
              <Col span={24}>Phone: {post.phone}</Col>
            </Row>
            <Row>
              <Col span={24}><Button type="primary" danger block>Thể loại</Button></Col>
            </Row>
            <Row style={{ margin: 'auto', textAlign: 'center' }}>
              {
                post.categoriesCollection && post.categoriesCollection.items && post.categoriesCollection.items.length
                  ?
                  post.categoriesCollection.items.map(item => {
                    return (
                      <Col span={12}  >
                        {
                          item.avatarUrl && item.avatarUrl.url ?
                            <Avatar src={item.avatarUrl.url} />
                            :
                            <Avatar icon={<UserOutlined />} />
                        }
                        <p>{item.displayName}</p>
                      </Col>
                    )
                  })
                    :
                    <></>
              }
            </Row>
            <Row >
              <Col span={24}><Button type="primary" danger block>Kỹ năng</Button></Col>
            </Row>
            <Row>
              {
                post.skillsCollection && post.skillsCollection.items && post.skillsCollection.items.length
                  ?
                  post.skillsCollection.items.map(item => {
                    return (
                      <Col span={8}>
                        <Button type="primary" shape="round" block style={{ fontSize: '10px' }}>{item.displayName}
                        </Button>
                      </Col>
                    )
                  })
                  :
                  <></>
              }
            </Row>
            <Row>
              <Col span={24}><Button type="primary" danger block>Dịch vụ</Button></Col>
            </Row>
            <Row>
              {
                post.servicesCollection && post.servicesCollection.items && post.servicesCollection.items.length
                  ?
                  post.servicesCollection.items.map(item => {
                    return (
                      <Col span={8}>
                        <Button type="primary" shape="round" block style={{ fontSize: '10px' }}>{item.name}
                        </Button>
                      </Col>
                    )
                  })
                  :
                  <></>
              }
            </Row>
          </Col>
        })}
    </Row>
  )
}

export default GridView