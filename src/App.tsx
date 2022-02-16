/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import AdvisorProfile from './components/AdvisorProfile';
import Button from './components/Button';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { debounce } from 'lodash';

import { advisorsFilter, horizontalView, verticalView } from './config/constants';
import advisorProfileCollection from './data/data.json';
import Dropdown from './components/Dropdown';
import useCustomSearchParams from './hooks/useCustomSearchParams';
import Input from './components/Input';

type AdvisorContainerProps = {
  view: string;
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

const AdvisorContainer = styled.div<AdvisorContainerProps>`
  * {
    margin: ${props => props.view === horizontalView ? '10px auto' : '0 auto'};
  }
`;

function App() {
  const [searchParams, setCustomSearchParams] = useCustomSearchParams();
  const [view, setView] = useState(horizontalView);
  const [advisors, setAdvisors] = useState<any[]>([]);
  const advisorProfiles = advisorProfileCollection.data?.advisorProfileCollection?.items;

  useEffect(() => {
    if (advisorProfiles.length > 0) setAdvisors([...advisorProfiles]);
    return () => {};
  }, []);

  useEffect(() => {
    const display = searchParams.get('view');
    if (display !== horizontalView && display !== verticalView) {
      setView(horizontalView);
    } else {
      setView(display);
    }
  }, [searchParams.get('view')])

  useEffect(() => {
    const status = searchParams.get('status') ?? 'all';
    const search = searchParams.get('search') ?? '';
    handleSearchAdvisors(advisorProfiles, status, search);
  }, [searchParams.get('status'), searchParams.get('search')]);

  const handleSearchAdvisors = debounce((advisors, status, search) => {
    console.log('search: ', search);
    const filteredAdvisors = advisors.filter((advisor: any) => {
      if (search === '') {
        return (status === 'all' || advisor.status === status)
      }
      const checkSearchText = (advisor.displayName && advisor.displayName?.includes(search)) || 
        (advisor.email && advisor.email?.includes(search));
      return checkSearchText && (status === 'all' || advisor.status === status);
    })
    setAdvisors([...filteredAdvisors]);
  }, 100)

  if (!advisorProfiles) return <div>Maybe data failed</div>;
  return (
    <div className="App">
      <Navbar>
        <Dropdown options={advisorsFilter} handleFilterAdvisor={setCustomSearchParams}/>
        <Input onChange={setCustomSearchParams} />
        <span>
          <Button 
            active={view === horizontalView} 
            onClick={() => setCustomSearchParams('view', horizontalView)}
          >Horizontal View</Button>
          <Button
            style={{ marginLeft: '10px' }}
            active={view === verticalView}
            onClick={() => setCustomSearchParams('view', verticalView)}
          >Vertical View</Button>
        </span>
      </Navbar>
      <AdvisorContainer view={view}>
        {view === horizontalView ? advisors.map((advisor) => <AdvisorProfile key={advisor.sys?.id} advisor={advisor} />) : 
          <Swiper navigation={true} modules={[Navigation]}>
            { advisors.map((advisor) => <SwiperSlide key={advisor.sys?.id}><AdvisorProfile advisor={advisor} /></SwiperSlide>)}
          </Swiper>
        }
      </AdvisorContainer>
    </div>
  );
}

export default App;
