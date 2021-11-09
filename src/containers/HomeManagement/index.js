import React, { useState } from 'react';
import { get } from 'lodash';
import { TextField, Grid, Button, Icon, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Layout } from '../../components';
import AdvisorList from './AdvisorList';
import jsonData from '../../utils/data.json';
import categoriesData from '../../utils/categories.json';
import { filterName, filterCategory, filterStatus } from './utils';

function HomeManagement() {
  const advisorsData = get(jsonData, 'data.advisorProfileCollection.items', []);
  const categories = get(categoriesData, 'categoriesCollection.items', []);
  const initialValues = {
    name: "",
    userStatus: "",
    selectedCategories: []
  };

  const [advisors, setAdvisors] = useState(advisorsData);
  const [values, setValues] = useState(initialValues)

  const handleSearch = (data) => {
    const filterList = advisorsData.filter(item => filterName(item, data) && filterStatus(item, data) && filterCategory(get(item, 'categoriesCollection.items', []), data))
    setAdvisors(filterList);
  }

  const handleReset = () => {
    setValues(initialValues);
    setAdvisors(advisorsData);
  }

  const handleChange = (name, event) => {
    setValues({...values, [name]: event.target.value});
    if(name === 'userStatus') {
      handleSearch({...values, [name]: event.target.value});
    }
  };

  const handleChangeCategory = (_, value) => {
    setValues({...values, selectedCategories: value});
    handleSearch({...values, selectedCategories: value});
  }

  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <TextField 
              fullWidth 
              variant="outlined"
              size="small"
              id="name" 
              name="name" 
              label="Tên chuyên gia" 
              placeholder="Tìm theo tên chuyên gia" 
              value={values.name} 
              onChange={(e) => handleChange("name", e)}
              />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControl  
              variant="outlined"
              size="small" 
              fullWidth
            >
                <InputLabel style={{ background: '#fff'}} id="user-status">Trạng thái</InputLabel>
                <Select
                  labelId="user-status"
                  id="userStatus"
                  name="userStatus"
                  value={values.userStatus}
                  onChange={(e) => handleChange("userStatus", e)}
                  >
                  <MenuItem value="">
                    <em>Tất cả</em>
                  </MenuItem>
                  <MenuItem value="ONLINE">Trực tuyến</MenuItem>
                  <MenuItem value="OFFLINE">Ngoại tuyến</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Autocomplete
              multiple
              size="small" 
              id="selectedCategories"
              name="selectedCategories"
              options={categories}
              value={values.selectedCategories}
              getOptionLabel={(option) => option.displayName}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Danh mục"
                  placeholder="Tìm theo danh mục"
                />
              )}
              onChange={handleChangeCategory}
            />           
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button style={{ width: '100%'}} variant="contained" color="default" onClick={handleReset}><Icon>close</Icon></Button>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button style={{ width: '100%'}} variant="contained" color="primary" onClick={() => handleSearch(values)}><Icon>search</Icon></Button>
          </Grid>
        </Grid>
        {advisors.length > 0 ? <AdvisorList items={advisors}/> : <div style={{ textAlign: 'center', padding: '16px'}}>Không tìm thấy kết quả nào!</div>}
      </Layout>
    </>
  );
}

export default HomeManagement;
