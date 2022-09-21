import React from 'react';
import { Box, Image, Badge, Text } from '@chakra-ui/react';
import { get, map } from 'lodash';
import DefaultImage from '../../assets/icons/brand.png';

const renderSkills = item => {
  const data = get(item, 'skillsCollection.items', []);
  
  if (data.length === 0) return 'N/A';
  return (
    map(data, (item, index) => (
      <Badge
        key={`skills-${get(item, 'sys.id', index)}-${index}`}
        variant='outline' 
        color='#2eb2aa' 
        boxShadow="inset 0 0 0px 1px #2eb2aa" 
        borderRadius='full' 
        px="2" 
        mr="0.4rem" 
      >
        {item.displayName}
      </Badge>
    ))
  );
};

const renderCategories = item => {
  const data = get(item, 'categoriesCollection.items', []);
  
  if (data.length === 0) return 'N/A';

  return (
    map(data, (item, index) => (
      <Badge
        key={`categories-${get(item, 'sys.id', index)}-${index}`}
        display="flex"
        variant="outline" 
        color="#2eb2aa"
        boxShadow="inset 0 0 0px 1px #2eb2aa"
        borderRadius="full"
        px="2" 
        mr="0.4rem"
        pt="1px"
        pl="1px"
      >
        <Image 
          src={get(item, 'avatarUrl.url', DefaultImage)} 
          alt={get(item, 'avatarUrl.title', '')} 
          height="17px" 
          width="17px" 
          objectFit={get(item, 'avatarUrl.url', false) ? 'cover' : 'contain'}
          objectPosition="center"
          borderRadius="50%"
          mr="0.2rem"
        />
        {item.displayName}
      </Badge>
    ))
  );
};

const renderServices = item => {
  const data = get(item, 'servicesCollection.items', []);
  
  if (data.length === 0) return 'N/A';
  return (
    map(data, (item, index) => (
      <Text 
        key={`services-${get(item, 'sys.id', index)}-${index}`}
        as='span'
        mr="0.4rem"
        color="#eb4781"
        fontWeight={600}
      >
        {item.name + `${index < data.length - 1 ? ', ' : ''}`}
      </Text>
    ))
  );
};

const renderStatus = item => {
  return (
    <Badge borderRadius='full' px='2' colorScheme={get(item, 'status', 'false') ? 'teal' : 'gray'}>
      {get(item, 'status', 'false') ? 'Online' : 'Offline'}
    </Badge>
  )
};

export default function CommonView({ item, isHorizontal = false }) {
  return (
    <>
      <Image 
        src={get(item, 'avatarUrl.url', DefaultImage)} 
        alt={get(item, 'avatarUrl.title', '')} 
        height="17rem"
        width="100%"
        maxWidth={isHorizontal ? '24rem' : '100%'}
        objectFit={get(item, 'avatarUrl.url', false) ? 'cover' : 'none'}
        objectPosition="center"
        borderBottom={isHorizontal ? "none" : '1px solid'}
        borderRight={isHorizontal ? "1px solid" : 'none'}
        borderColor="#e2e8f1"
      />

      <Box p='6' width={isHorizontal ? '100%' : 'initial'}>
        <Box display='flex' alignItems='baseline'>
          <Box display='flex' width="100%" mb="0.8rem" pb="0.8rem" alignItems='center' justifyContent="space-between" borderBottom="1px solid" borderColor="gray.300">
            <Text fontWeight={600} fontSize="1rem">{get(item, 'displayName', '')}</Text>
            {renderStatus(item)}
          </Box>
        </Box>
        
        <Box mb="0.3rem">
          <Text><Text as='span' fontWeight={600}>Phone:</Text> {get(item, 'phone', 'N/A') || 'N/A'}</Text>
        </Box>
        
        <Box mb="0.3rem">
          <Text><Text as='span' fontWeight={600}>Email:</Text> {get(item, 'email', 'N/A') || 'N/A'}</Text>
        </Box>

        <Box display='flex' alignItems='center' mb="0.3rem">
          <Box display='flex' alignItems='center'>
            <Text as='span' fontWeight={600} mr='0.4rem'>Skills:</Text> 
            {renderSkills(item)}
          </Box>
        </Box>

        <Box display='flex' alignItems='center' mb="0.3rem">
          <Box display='flex' alignItems='center' flexWrap='wrap'>
            <Text as='span' fontWeight={600} flexWrap='wrap' mr='0.4rem'>Categories:</Text>
            {renderCategories(item)}
          </Box>
        </Box>

        <Box display='flex' alignItems='center'>
          <Box display='flex' alignItems='center' flexWrap='wrap'>
            <Text as='span' fontWeight={600} flexWrap='wrap' mr='0.4rem'>Services:</Text> 
            {renderServices(item)}
          </Box>
        </Box>
      </Box>
    </>
  )
}