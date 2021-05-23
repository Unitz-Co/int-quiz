import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./TableVertical.styles";
import defaultAvatar from "../../assets/images/avatar.svg";
import filter from "../../assets/images/filter.svg";
import Input from '@material-ui/core/Input';

class TableVertical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: [], 
      data: [],
      loaded: false,
      filterList: [
        { index: 0, value: 'displayName' },
        { index: 1, value: 'email' },
        { index: 2, value: 'phone' }
      ],
      filterActive: true,
      history: []
    };
  }

  componentDidMount() {
    let { value, data, loaded } = this.props;
 
    this.setState({ value: value, data: data, history: data, loaded: loaded });

    if (loaded) {
      if (data.length > 0) {
        data = data.sort((a, b) => a[`displayName`].localeCompare(b[`displayName`]));
        this.setState({data: data});
      }
    }
  }

  /**
   * filterByColumn: Filter By Column
   * @param {*} value: value to filter 
   */
  filterByColumn = (value) => {
    let { filterActive, data } = this.state;
    
    if (filterActive) {
      data = data.sort((a, b) => (
        a[`${value}`] !== null && b[`${value}`] !== null && a[`${value}`].localeCompare(b[`${value}`]
      )));
    } else {
      data = data.sort((a, b) => (
        a[`${value}`] !== null && b[`${value}`] !== null && b[`${value}`].localeCompare(a[`${value}`]
      )));
    }

    this.setState({data: data, filterActive: !filterActive});
  }

  searchTable = (event) => {
    let { data, history } = this.state;
    let value = event.target.value.trim();

    console.log(event.target.value);
    if (value.length === 0) data = history;
    else {
      data = data.filter(item => (
        item.displayName !== null && item.displayName.toLowerCase().includes(value) ||
        item.categoriesCollection.items.length > 0 && (
          item.categoriesCollection.items.map((el) => (
            el.displayName === null && item.displayName.toLowerCase().includes(value)
          ))
        )    
      ));
    }
    this.setState({data: data});
  }

  render() {
    const { classes } = this.props;
    const { value, data, loaded, filterList } = this.state;
    
    return (
      <div>
        <div className={classes.searchButton}>
          <Input placeholder="Search by name" inputProps={{ 'aria-label': 'description' }} onKeyUp={(e) => this.searchTable(e)}/>
        </div>

        <div className={classes.tableVerticalArea}>
          <div className="item header"></div>
          {
            value
              .filter((item) => item.indexOf('Avatar') < 0)
              .map((item, key) => (
                <div className="item header" key={key}>
                  <span className={classes.headerText}>{item}</span>
                  {
                    filterList.map((el, keys) => (
                      console.log(el.index),
                      console.log(key),
                      el.index === key && (
                        <span key={keys} onClick={() => this.filterByColumn(el.value)}><img src={filter} alt="filter" className={classes.filterBtn} /></span>
                      )
                    ))
                  }
                </div>
              ))
          }
        </div>
        
        {
          loaded ? (
            data.length > 0 && (
              data
              .map((item, key) => (
                <div className={classes.tableVerticalArea} key={key}>
                  {
                    item.avatarUrl === null ? 
                      <div className="item"><span className={classes.avaElement} style={{background: `url(${defaultAvatar})`}}></span></div> :
                      <div className="item"><span className={classes.avaElement} style={{background: `url(${item.avatarUrl.url})`}}></span></div>
                  }
                  {
                    item.displayName === null ? 
                      <div className="item"><span className={classes.textElement}>N/A</span></div> :
                      <div className="item"><span className={classes.textElement}>{item.displayName}</span></div>
                  }
                  {
                    item.email === null ? 
                      <div className="item"><span className={classes.textElement}>N/A</span></div> :
                      <div className="item"><span className={classes.textElement}>{item.email}</span></div>
                  }
                  {
                    item.phone === null ? 
                      <div className="item"><span className={classes.textElement}>N/A</span></div> :
                      <div className="item"><span className={classes.textElement}>{item.phone}</span></div>
                  }
                  {
                    item.categoriesCollection.items.length > 0 ? 
                      (
                        <div className="item cateItemArea">
                          {
                            item.categoriesCollection.items.map((el, key) => (
                              <div className={classes.cateItem} key={key}>
                                {
                                  el.avatarUrl !== null && (
                                    <span className={classes.imgCatoElement} style={{background: `url(${el.avatarUrl.url})`}}></span>
                                  ) 
                                }
                                {
                                  el.displayName === null ? 
                                    <span className={(classes.textElement, classes.cateText)}>N/A</span> :
                                    <span className={(classes.textElement, classes.cateText)}>{el.displayName}</span>
                                }
                              </div>
                            ))
                          }
                        </div>
                      ) :
                      <div className="item"><span className={classes.textElement}>N/A</span></div>
                  }
                  {
                    item.servicesCollection.items.length > 0 ? 
                      <div className="item serviceItemArea">
                        {
                          item.servicesCollection.items.map((el, key) => (
                            <span key={key} className={(classes.textElement, classes.serviceText)}>
                              {el.name}
                            </span>
                          ))
                        }
                      </div> :
                      <div className="item"><span className={classes.textElement}>N/A</span></div>
                  }
                  {
                    item.skillsCollection.items.length > 0 ? 
                      <div className="item serviceItemArea">
                        {
                          item.skillsCollection.items.map((el, key) => (
                            <span key={key} className={(classes.textElement, classes.serviceText)}>
                              {el.displayName}
                            </span>
                          ))
                        }
                      </div> :
                      <div className="item"><span className={classes.textElement}>N/A</span></div>
                  }
                </div>
              ))
            )
          ) : <h2>Not Have Data</h2>
        }
      </div>
    );
  }
}
export default withStyles(useStyles)(TableVertical);