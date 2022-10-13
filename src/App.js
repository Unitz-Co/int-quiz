// Packages
import { useSelector } from 'react-redux';

// Material UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

// Components
import AdvisorItem from 'components/advisors/AdvisorItem';
import Header from 'components/header/Header';

// Store
import {
  selectAdvisorList,
} from 'app/advisorSlice';

// Css
import '@fontsource/roboto';

function App() {
  const advisorList = useSelector(selectAdvisorList);

  return (
    <>
      <Header />
      <Toolbar />

      <Box component="main" sx={{ my: 2, }}>
        <Container>
          <Grid container spacing={2}>
            {
              advisorList.map(advisor => (
                <Grid key={advisor.sys.id} item xs={12} sm={6} md={4}>
                  <AdvisorItem
                    image={advisor.avatarUrl ? advisor.avatarUrl.url : "https://via.placeholder.com/400/0000FF/FFFFFF/?text=No Avatar"}
                    displayName={advisor.displayName}
                    email={advisor.email}
                    phone={advisor.phone}
                    online={advisor.online}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
