import React, { useState } from 'react';
import { Button, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react';
import { filterList } from '../../utils/commonFunction';
import { Icon, Dots } from './style';
import FilterIcon from '../../assets/icons/filter-results-button.png';

export default function Filter(props) {
  const { originalData, onFilterData, keyWord, onSetStatus } = props;
  const [selected, setSelected] = useState('Filter');

  const handleFilter = (value) => {
    const newData = filterList(originalData, { keys: { status: value, filterAll: false, keyWord: keyWord }});
    onFilterData(newData);
    onSetStatus(value);
    setSelected(value ? 'Online' : 'Offline');
  };

  const handleFilterAll = () => {
    const newData = filterList(originalData, { keys: { status: null, filterAll: true, keyWord: keyWord }});
    onFilterData(newData);
    onSetStatus(null);
    setSelected('Filter');
  };

  return (
    <>
      <Menu>
        <MenuButton 
          as={Button} 
          borderColor="#56758f" 
          color="#577590" 
          fontWeight={600} 
          borderRadius="0.5rem" 
          width="10.3rem" 
          variant="outline" 
          leftIcon={<Icon src={FilterIcon} />}
        >
          { selected }
        </MenuButton>
        <MenuList padding="0.5rem">
          <MenuItem minH='40px' _hover={{ bg: 'gray.400', '> span': { color: 'white' } }} onClick={handleFilterAll}>
            <span>All</span>
          </MenuItem>
          <MenuItem minH='40px' _hover={{ bg: 'gray.400', '> span': { color: 'white' } }} onClick={() => handleFilter(true)}>
            <Dots />
            <span>Online</span>
          </MenuItem>
          <MenuItem minH='40px' _hover={{ bg: 'gray.400', '> span': { color: 'white' } }} onClick={() => handleFilter(false)}>
            <Dots className="offline"/>
            <span>Offline</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};