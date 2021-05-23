import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { actionCreators } from "../../store/WeatherForecasts";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";
import Table from "../../components/Table/Table";
import { setAlertContext, openAlertContext } from "../../helpers/common.js";
import "./Dashboard.css";
// import Chart from "../components/Chart/Chart";

// import styles from "./Dashboard.module.css"

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoaded: null,
      status: null
    };
  }

  componentWillReceiveProps(nextProp) {
    const { data } = nextProp;
    
    this.setState({ data: data.advisor, isLoaded: data.isLoading, status: data.status });
  }

  componentDidMount() {
    // This method is called when the component is first added to the document
    /* Fetch Summary */
    this.fetchSummary();
  }

  componentDidUpdate() {
    // This method is called when the route parameters change
    this.closeStatusModal();
  }

  fetchSummary() {
    this.props.requestWeatherForecasts();
  }

  closeStatusModal = () => {
    const { status } = this.state;

    if (status) {
      setTimeout(() => {
        this.setState({ status: null });
      }, 8000);
    }
  }

  render() {
    const { data, isLoaded, status } = this.state;
    const dataTable = data.Countries;
    
    return (
      <div className="dashboardPage-container">
        {
          isLoaded ? (
            <div className="content-container">
              <Table data={data}/>
              {/* <Cards data={data} lastUpdate={data.Date} isloaded={isLoaded} /> */}
              {/* <TableData dataTable={dataTable} /> */}
            </div>
          ) : <Loader />
        }
        
        { 
          //Set Alert Context
          setAlertContext(status) 
        }

        { 
          //Open Alert Context
          openAlertContext(status) 
        }
      </div>
    );
  }
}

export default connect(
  (state) => state.weatherForecasts,
  (dispatch) => bindActionCreators(actionCreators, dispatch)
)(Dashboard);