/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import CommonView from '../../../shared/CommonView';
import { Box, GridItem } from '@chakra-ui/react';

export default function Horizontal({ item }) {
  return (
    <GridItem mb="1.5rem">
      <Box display="flex" width="100%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <CommonView item={item} isHorizontal={true} />
      </Box>
    </GridItem>
  );
};