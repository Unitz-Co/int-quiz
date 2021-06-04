import React, { Component } from "react";
import SearchBar from "./SearchBar";
import data from "../data.json";
import "./ListAdvisors.css";
import Advisorshorizontal from "./Advisorshorizontal";
import Advisorsvertical from "./Advisorsvertical";

export default class ListAdvisors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSearch: [],
      input: "",
      horizontal: false,
      data: data.data.advisorProfileCollection.items,
    };
    this.handleHorizontal = this.handleHorizontal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleHorizontal = function () {
    this.setState({
      horizontal: !this.state.horizontal,
    });
  };
  handleChange = function (event) {
    this.setState({
      input: event.target.value,
    });
  };
  handleSearch = function () {
    const listSearch = [];
    const input = this.state.input.trim().toLowerCase();
    console.log(input);
      this.state.data.map((item) => {
        if(item.displayName.trim().toLowerCase().includes(input)){listSearch.push(item)}
      })
    this.state.data.map((item) => {
      item.categoriesCollection.items.map((x) => {     
        if(x.displayName.trim().toLowerCase().includes(input)){listSearch.push(item)}   
      });
      
      return
    });
    this.setState({
      data: listSearch,
    });
  };

  render() {
    const tableHorizontal = (
      <table className="advisors__table advisors__table--horizontal">
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Category</th>
        </tr>

        {this.state.data.map((item, index) => {
          return (
            <tr className="listAdvisors__item">
              <td>{index}</td>
              <Advisorshorizontal item={item} />
            </tr>
          );
        })}
      </table>
    );
    const tableVertical = (
      <table className="advisors__table advisors__table--vertical">
        <Advisorsvertical data={this.state.data} />
      </table>
    );

    return (
      <div className="advisors">
        <SearchBar
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <button className="advisors__btn" onClick={this.handleHorizontal}>
          {this.state.horizontal ? "Table Horizontal" : "Table Vertical"}
        </button>
        {this.state.horizontal ? tableHorizontal : tableVertical}
      </div>
    );
  }
}
