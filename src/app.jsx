import { Layout, Menu } from 'antd'
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons'
import { createContext, useEffect, useState } from 'react'
import { API } from './utils'
import axios from 'axios'
import Advisors from './components/advisors'
import Comp from './components/comp'

const { Footer, Sider, Content } = Layout

export const AppContext = createContext()

const comps = [
  { key: '2', name: 'categoriesCollection' },
  { key: '3', name: 'skillsCollection' },
  { key: '4', name: 'servicesCollection' },
]

function checkKey(key, object) {
  return object[key] ?? ''
}

export default function App() {
  const [data, setData] = useState()
  const [collapsed, setCollapsed] = useState(false)
  const [key, setKey] = useState('1')

  useEffect(() => {
    axios
      .get(API)
      .then(({ data: result }) => {
        /* nếu email|phone là null, chức năng sorter sẽ bị lỗi */
        const items = result.map((item) => ({
          key: item.sys.id,
          ...item.sys,
          ...item,
          email: checkKey('email', item),
          phone: checkKey('phone', item),
          avatar: item.avatarUrl?.url,
        }))

        setData(items)
      })
      .catch((e) => console.log(e))

    return () => {}
  }, [])

  function item(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
      onClick: (e) => setKey(e.key),
    }
  }
  const items = [
    item('Advisors', '1', <PieChartOutlined />),
    item('Categories', '2', <DesktopOutlined />),
    item('Skills', '3', <DesktopOutlined />),
    item('Services', '4', <DesktopOutlined />),
  ]

  return (
    <AppContext.Provider value={{ data }}>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBlock: 20,
            }}
          >
            <a href="/">
              <img
                src="https://images.ctfassets.net/bid9n8mcomvb/sbB7qd2VyI4CMHdXy7W10/3bb80eeb66308b2784c10cd0c0b998c2/Logo_Unitz_OK_2.png?w=40&q=50&h=40"
                alt="logo"
              />
            </a>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Content style={{ padding: 24, minHeight: '100vh' }}>
            {key === '1' && <Advisors />}
            {comps.map(
              (comp) =>
                key === comp.key && <Comp key={comp.key} name={comp.name} />,
            )}
            <Footer>© Unitz Company Ltd. {new Date().getFullYear()}</Footer>
          </Content>
        </Layout>
      </Layout>
    </AppContext.Provider>
  )
}
