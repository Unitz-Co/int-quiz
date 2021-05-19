import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

class AdvisorList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: this.props.searchKeyword
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.searchKeyword !== this.state.searchKeyword) {
            this.setState({
                searchKeyword: nextProps.searchKeyword
            })
        }
    }


    render() {
        var {searchKeyword} = this.state;
        return (
            <div className="advisors_list">
                <div className="grid-row">
                    <div className="grid-col">
                        <div className="search-summary">
                            {this.showTitleSearch(searchKeyword)}
                            <div className="search-summary-sorter">
                                <div className="search-sort-container">
                                    <div className="sortlist">
                                        <Link 
                                            to="#" 
                                            className="sort-item-link active" 
                                            onClick={(e) => this.sortAllAdvisor(e)}
                                        >
                                            Tất cả   
                                        </Link>
                                        <Link 
                                            to="#" 
                                            className="sort-item-link" 
                                            onClick={(e) => this.sortAdvisorOnline(e)}
                                        >
                                            <i className="fas fa-circle status-online"></i>
                                            Online
                                        </Link>
                                        <Link 
                                            to="#" 
                                            className="sort-item-link" 
                                            onClick={(e) => this.sortAdvisorOffline(e)}
                                        >
                                            <i className="fas fa-circle status-offline"></i>
                                            Offline
                                        </Link>
                                    </div>
                                    <div className="view-mode">
                                        <Link 
                                            to="#" 
                                            className="view-item-link active" 
                                            onClick={(e) => this.handleClickHorizontalView(e)}
                                        >
                                            <i className="fas fa-ruler-horizontal"></i>
                                            Xem ngang
                                        </Link>
                                        <Link 
                                            to="#" 
                                            className="view-item-link" 
                                            onClick={(e) => this.handleClickVerticalView(e)}
                                        >
                                            <i className="fas fa-ruler-vertical"></i>
                                            Xem dọc
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advisor__list-wapper">
                    <div className="grid-row advisor__list-content">
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }

    showTitleSearch = (searchKeyword) => {
        if(searchKeyword !== '') {
            return (
                <div className="title">
                    <h1>{`Kết quả tìm kiếm cho '${searchKeyword}'`}</h1>
                </div>
                )
        }
    }

    sortAllAdvisor = (e) => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        e.target.classList.add('active')
        this.props.sortAllAdvisor();
    }

    sortAdvisorOnline = (e) => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        e.target.classList.add('active')
        this.props.sortAdvisorOnline();
    }

    sortAdvisorOffline = (e) => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        e.target.classList.add('active')
        this.props.sortAdvisorOffline();
    }

    handleClickHorizontalView = (e) => {
        $(".view-item-link").map((index,element) => {
            return element.className = "view-item-link";
        });
        e.target.classList.add('active')
        var elements = $('.grid-col10-10.grid-col10-sm-10.grid-col12-md-12.grid-col12-lg-12.grid-col12-xl-12')
        elements.map((index,element) => {
            return element.className = "grid-col10-5 grid-col10-sm-5 grid-col12-md-4 grid-col12-lg-3 grid-col12-xl-3"
        })
        $('.advisor-item-frame').map((index,element) => {
            return $(element).css({'flex-direction':'column'})
        })
        $('.advisor-item-thumbnail').map((index,element) => {
            return $(element).css({'width':'200px', 'height':'200px'})
        })
        $('.advisor-item-info').map((index,element) => {
            return $(element).css({'margin':'12px 0px 8px 0px'})
        })
    }

    handleClickVerticalView = (e) => {
        $(".view-item-link").map((index,element) => {
            return element.className = "view-item-link";
        });
        e.target.classList.add('active')
        var elements = $('.grid-col10-5.grid-col10-sm-5.grid-col12-md-4.grid-col12-lg-3.grid-col12-xl-3')
        elements.map((index,element) => {
            return element.className = "grid-col10-10 grid-col10-sm-10 grid-col12-md-12 grid-col12-lg-12 grid-col12-xl-12"
        })
        $('.advisor-item-frame').map((index,element) => {
            return $(element).css({'flex-direction':'row'})
        })
        $('.advisor-item-thumbnail').map((index,element) => {
            return $(element).css({'width':'140px', 'height':'140px'})
        })
        $('.advisor-item-info').map((index,element) => {
            return $(element).css({'margin':'0px 24px'})
        })
    }
}

export default AdvisorList;