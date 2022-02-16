import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Data from '../data.json'
import { Avatar, Badge, Tag } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';

const ListView = ({ textSearch, filterStatus }) => {

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
    <Wrapper>
      {
        listAdvisor.map(post => {
          return <div className='product-layout-list' key={post.sys.id}>
            <span className='image'>
              <Badge dot color={post.isOnline ? 'green' : 'gray'} style={{ width: '10px', height: '10px' }} >
                {
                  post.avatarUrl && post.avatarUrl.url ?
                    <Avatar shape="square" size={150} src={post.avatarUrl.url} />
                    :
                    <Avatar shape="square" size={150} icon={<UserOutlined />} />
                }
              </Badge>
            </span>
            <div className='product-content-list'>
              <h3>{post.displayName}</h3>
              <div className='price-box'>
                <span>Email: {post.email}</span>
              </div>
              <div className='price-box'>
                <span>Phone: {post.phone}</span>
              </div>
              <div className='price-box'>
                <span>Thể loại:</span>
                {
                  post.categoriesCollection && post.categoriesCollection.items && post.categoriesCollection.items.length
                    ?
                    post.categoriesCollection.items.map(item => {
                      return (
                        <span>
                          <Tag color="#f50">{
                            item.avatarUrl && item.avatarUrl.url ?
                              <Avatar src={item.avatarUrl.url} />
                              :
                              <Avatar icon={<UserOutlined />} />
                          }{item.displayName}</Tag>
                        </span>
                      )
                    })
                    :
                    <></>
                }
              </div>
              <div className='price-box'>
                <span>Kỹ năng:</span>
                {
                  post.skillsCollection && post.skillsCollection.items && post.skillsCollection.items.length
                    ?
                    post.skillsCollection.items.map(item => {
                      return (

                        <Tag color="#2db7f5">{item.displayName}</Tag>
                      )
                    })
                    :
                    <></>
                }
              </div>
              <div className='price-box'>
                <span>Dịch vụ:</span>
                {
                  post.servicesCollection && post.servicesCollection.items && post.servicesCollection.items.length
                    ?
                    post.servicesCollection.items.map(item => {
                      return (
                        <Tag color="#87d068">{item.name}</Tag>
                      )
                    })
                    :
                    <></>
                }
              </div>
            </div>
          </div>
        })}
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .product-layout-list {
    display: flex;
    margin: 2rem 0;
    padding: 1rem 0;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
  .product-layout-list .image {  
    width: 15%;
    text-align: center;
    margin: auto 0
  }
  .product-content-list {
    margin: 1rem 0;
    width: 50%;
    font-size: 14px;
  }
  .price-box {
    font-size: 12px;
    margin-bottom: 1rem;
  }
    .heart-container svg {
      color: var(--green);
      font-size: 1.5rem
    }
  }
  h4 {
    margin-bottom: 0.4em;
  }
`
export default ListView
