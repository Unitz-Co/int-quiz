import React, { useState, useEffect } from 'react';
import { getAdvisors, updateAdvisor } from './services/advisor';
import { List, Typography, Switch, Statistic, message } from 'antd';
import AdvisorFilterForm from './components/AdvisorFilterForm';
import ListAdvisor from './components/ListAdvisor';
import logo from './logo.svg';
import './App.scss';

export const LAYOUT = {
  horizontal: 'horizontal',
  vertical: 'vertical'
}

function App() {
  const [advisors, setAdvisors] = useState([]);
  const [filter, setFilter] = useState({});
  const [layout, setLayout] = useState(LAYOUT.horizontal);

  useEffect(() => { getAdvisorData({}) }, [])
  useEffect(() => { getAdvisorData(filter) }, [filter])

  const getAdvisorData = async (params) => {
    const response = await getAdvisors(params);
    if (!response) {
      setAdvisors([]);
      return;
    }

    setAdvisors(response);
  }

  const handleFilterAdvisor = params => {
    setFilter(params);
  }

  const handleOnChangeLayout = checked => {
    setLayout(checked && LAYOUT.horizontal || LAYOUT.vertical);
  }

  const handleOnUpdate = async advisor => {
    const { sys } = advisor || {};
    const { id } = sys || {};
    if (!id) {
      message.error('Advisor not found!');
      return ;
    }

    const updatedAdvisor = await updateAdvisor(id, advisor);
    if (!updatedAdvisor) {
      message.error('Update status failed, please try again!');
      return;
    }

    message.success('Update status successfully!');
    getAdvisorData(filter);
  }

  return (
    <div className="App">
      <header>
          <Typography.Title level={3}>Advisors</Typography.Title>
          <div className="right-box">
            <Typography.Text>Change layout: </Typography.Text>
            <Switch
              checkedChildren="Vertical"
              unCheckedChildren="Horizontal"
              defaultChecked={layout === LAYOUT.horizontal}
              onChange={handleOnChangeLayout}
            />
          </div>
      </header>
      <body>
        <AdvisorFilterForm onFilter={handleFilterAdvisor} onReset={handleFilterAdvisor} />
        <ListAdvisor advisors={advisors} layout={layout} onUpdate={handleOnUpdate} />
      </body>
    </div>
  );
}

export default App;
