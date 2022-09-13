import React from 'react'
import data from "./data.json";

class List extends React.Component {
  render() {
    // define index selected on Select-Box
    const ADVISOR_IDX     = "0";
    const CATEGORY_IDX    = "1";
    const STS_ONLINE_IDX  = "2";
    const STS_OFFLINE_IDX = "3";

    // define status value
    const STS_ONLINE_VAL  = "1";
    const STS_OFFLINE_VAL = "0";

    // get user search input
    let inputText   = this.props.input[0];
    let filterType  = this.props.input[1];
    
    // get list data
    const filteredData = data.data.advisorProfileCollection.items.filter( (listItems) => {
      switch (filterType) {
        case ADVISOR_IDX:     // filter by advisor
          if (inputText === '') {
            return listItems;
          } else {
            return listItems.displayName.toLowerCase().includes(inputText)
          }
        case CATEGORY_IDX:    // filter by category
          if (inputText === '') {
            return listItems;
          } else {
            return listItems.categoriesCollection.items.some( (itm) => {
              return itm.displayName.toLowerCase().includes(inputText)
            });
          }
        case STS_ONLINE_IDX:   // filter by online
          if (inputText === '') {
            return (listItems.status === STS_ONLINE_VAL);
          } else {
            return (listItems.status === STS_ONLINE_VAL) &&
              listItems.displayName.toLowerCase().includes(inputText)
          }

        case STS_OFFLINE_IDX:   // filter by offline
          if (inputText === '') {
            return listItems.status === STS_OFFLINE_VAL;
          } else {
            return (listItems.status === STS_OFFLINE_VAL) &&
              listItems.displayName.toLowerCase().includes(inputText)
          }
        default:
          return listItems;
      }
    })

    // displaying data
    return (
      <div>
      {
      filteredData.map(advisor => {  
        return (
          <div className="App-advisor">
            <div className="App-img">
            <img src={(advisor.avatarUrl === null) ? "" : advisor.avatarUrl.url} 
              alt={(advisor.avatarUrl === null) ? "" : advisor.avatarUrl.title} 
              width="200"
              height="200"/>
            </div>

            <div>
            Advisor: {advisor.displayName} <br />
            Phone: {advisor.phone} <br />
            Email: {advisor.email} <br />
            {advisor.status === STS_ONLINE_VAL ? "Online" : "Offline"}
            </div>

            <div className="clear-fix">
            </div>

            <Category  value={advisor.categoriesCollection.items} />
            <Skill  value={advisor.skillsCollection.items} />
            <Service  value={advisor.servicesCollection.items} />
        
            <div className="clear-fix">
            </div>
          </div>
        );
      })
      }
      </div>
    );
  }
}

class Category extends React.Component {
  render() {
    return (
      <div className="box">
        <b>Categories: </b>
        {
          this.props.value.map(category => {
            return (
              <div>
                <div className="cate-img">
                <img src={(category.avatarUrl === null) ? "" : category.avatarUrl.url} 
                  alt={(category.avatarUrl === null) ? "" : category.avatarUrl.title} 
                  width="40"
                  height="40"/>
                </div>

                <div className="categories-container">
                  {category.displayName}
                </div>
                
                <div className="clear-fix">
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
  
class Skill extends React.Component {
  render() {
    return (
      <div className="box">
        <b>Skills: </b>
        {
        this.props.value.map(skill => {
          return (
            <div className="">
              {skill.displayName}
            </div>
          );
        })
        }
      </div>
    );
  }
}
  
class Service extends React.Component {
  render() {
    return (
      <div className="box">
        <b>Services: </b>
        {
        this.props.value.map(service => {
          return (
            <div className="">
              {service.name}
            </div>
          );
        })
        }
      </div>
    );
  }
}

export default List
