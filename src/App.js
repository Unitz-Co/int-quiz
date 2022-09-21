import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Advisors from './layouts/Advisors';

function App() {
  return (
    <ChakraProvider>
      <Advisors />
    </ChakraProvider>
  );
}

export default App;
