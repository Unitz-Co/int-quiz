import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import Toolbar from '../../components/Tootbar';
import ViewList from '../../components/ViewList';
import ErrorBoundary from '../../shared/ErrorBoundary';
import * as MockData from '../../data.json';
import { Wrapper, Title } from './style';

export default function Advisors() {
  const [selectedView, setSelectedView] = useState({ horizontal: true, vertical: false });
  const [data, setData] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [status, setStatus] = useState(null);
  const [originalData, setOriginalData] = useState([]);
  
  useEffect(() => {
    setData(get(MockData, 'data.advisorProfileCollection.items', []));
    setOriginalData(get(MockData, 'data.advisorProfileCollection.items', []));
  }, []);

  return (
    <Wrapper>
      <Title>Advisors</Title>
      <Toolbar 
        originalData={originalData} 
        selected={selectedView} 
        onSetSelectedView={setSelectedView} 
        onFilterData={setData} keyWord={keyWord} 
        onSetKeyWord={setKeyWord} 
        status={status} 
        onSetStatus={setStatus} 
      />
      <ErrorBoundary>
        {
          <ViewList data={data} selectedView={selectedView} />
        }
      </ErrorBoundary>
    </Wrapper>
  );
};