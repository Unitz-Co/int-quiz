/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import CommonView from '../../../shared/CommonView';
import { Box, GridItem } from '@chakra-ui/react';

export default function Vertical({ item }) {
  return (
    <GridItem>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <CommonView item={item} />
      </Box>
    </GridItem>
  );
};