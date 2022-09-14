import { useEffect, useState } from 'react';
import { AppstoreTwoTone, FilterTwoTone, MinusCircleTwoTone, ProfileTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Button, Dropdown, Input, Layout, Menu, Radio, RadioChangeEvent, Space } from 'antd';
import _get from 'lodash/get';
import Grid from './components/Grid';
import Stack from './components/Stack';
import { removeAscent } from './utils';
import data from './__mock__/data.json';
import './App.css';

type TListView = "grid" | "stack";

type TSearchByRadioButton = "name" | "category";

const App = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [dataSource, setDataSource] = useState<any>();
  const [listView, setListView] = useState<TListView>("grid");
  const [searchBy, setSearchBy] = useState<TSearchByRadioButton>("name");
  const [searchKeyword, setSearchKeyword] = useState<string | null>()
  const [filter, setFilter] = useState<any>({
    status: "all",
  })

  const loadArrayData = () => 
    setDataSource(() => {
      setLoading(false);
      return _get(data.data, "advisorProfileCollection.items");
    })

  const hanldeOnChangeView = (view: TListView) => {
    setLoading(true)
    setListView(view);
  }

  const handleOnChangeSearchBy = (e: RadioChangeEvent) => {
    setSearchBy(e.target.value);
  };

  const handleOnSearch = (value: string | null) => {
    setDataSource(() => {
      setSearchKeyword(value);
      let advisors = _get(data.data, "advisorProfileCollection.items") as any;

      if (filter.status !== "all") {
        advisors = advisors.filter((item: any) => item.status === filter.status)
      }
      if (!value) {
        return advisors;
      }

      switch (searchBy) {
        case "category":
          return advisors
            .filter((data: any) => {
              return advisors.length > 0 && _get(data, "categoriesCollection.items")
                .filter((item: any) =>
                  removeAscent(item.displayName.toLowerCase()).indexOf(removeAscent(value).toLocaleLowerCase()) !== -1).length > 0
            });
        default:
          return advisors
            .filter((data: any) => data.displayName.toLowerCase().indexOf(removeAscent(value).toLocaleLowerCase()) !== -1)
      }
    })
  };

  const handleOnChangeFilter = (e: RadioChangeEvent) => {
    setFilter({ status: e.target.value })
  }

  const filterOptions = (
    <Menu>
      <Space direction="vertical" style={{ padding: 10 }}>
        <Radio.Group onChange={handleOnChangeFilter} value={filter.status}>
          <Radio value="all">All</Radio>
          <br />
          <Radio value="online">Online<SmileTwoTone twoToneColor="#06bd0c" style={{ marginLeft: 5 }} /></Radio>
          <br />
          <Radio value="offline">Offline<MinusCircleTwoTone twoToneColor="red" style={{ marginLeft: 5 }} /></Radio>
        </Radio.Group>
      </Space>
    </Menu>
  );

  useEffect(() => {
    setLoading(true);
    loadArrayData();
  }, []);

  useEffect(() => {
    handleOnSearch(searchKeyword || null);
  }, [filter])

  return (
    <Layout>
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 32,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Space size="large" direction="vertical" style={{ width: '100%' }}>
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space>
              <Input.Search onSearch={handleOnSearch} />
              Search by:
              <Radio.Group onChange={handleOnChangeSearchBy} value={searchBy}>
                <Radio value="name">Name</Radio>
                <Radio value="category">Category</Radio>
              </Radio.Group>
            </Space>
            <Space>
              <Dropdown.Button overlay={filterOptions} placement="bottom" icon={<FilterTwoTone />} />
              {listView === 'grid' && <Button icon={<ProfileTwoTone />} onClick={() => hanldeOnChangeView('stack')} />}
              {listView === 'stack' && <Button icon={<AppstoreTwoTone />} onClick={() => hanldeOnChangeView('grid')} />}
            </Space>
          </Space>
          {dataSource && (
            <>
              {listView === 'grid' && <Grid items={dataSource} />}
              {listView === 'stack' && <Stack items={dataSource} />}
            </>
          )}
        </Space>
      </Layout.Content>
    </Layout>
  );
}

export default App;
