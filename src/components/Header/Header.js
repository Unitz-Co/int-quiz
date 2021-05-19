import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {actSearchAdvisorRequest,actFetchAdvisorsRequest} from './../../actions/index';
import $ from 'jquery';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword:""
        }
    }

    render() {
        var {keyword} = this.state;
        return (
            <div className="header-section">
                <div className="header-section_navBar">
                    <div className="grid-container">
                        <div className="grid-row">
                            <div className="grid-col grid-col10-sm-10 grid-col10-lg-2 grid-col10-xl-2 ">
                                <div className="header-section__logo__menu">
                                    <div className="header-section__logo">
                                        <Link to="/" className="header-section__logo-link" onClick={() => this.handleClickLogo()}>
                                            <img src="./HTML_CSS/assets/img/navBar__logo__main.jpeg" alt="" className="header-section__logo-img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-col grid-col10-lg-6 grid-col10-xl-6 header-section__search--mobile">
                                <div className="header-section__search">
                                    <input 
                                        type="text" 
                                        className="header-section__search-input" 
                                        placeholder="Nhập từ khóa mong muốn ..." 
                                        value={keyword}
                                        onChange={this.onChange}
                                        onKeyPress={(e) => this.handleKeyPress(e)}
                                    />
                                    <Link
                                        to="#" 
                                        className="btn-search header-section__search-button"
                                        type = "button"
                                        onClick={() => this.onSearch(keyword)}
                                    >
                                        <img src="./HTML_CSS/assets/img/search__btn-icon.png" alt="" />
                                        Tìm Kiếm
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    onChange = (e) => {
        var value = e.target.value;
        this.setState ({
            keyword: value
        })
    }

    onSearch = (keyword) => {
        if (keyword !== "") {
            this.props.onSearchAdvisor(keyword);
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            $('.header-section__search-button')[0].click();
            this.onSearch(this.state.keyword);
        }
    }

    handleClickLogo = () => {
        this.setState({keyword : ''})
        this.props.fetchAllAdvisors('');
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllAdvisors: (keyword) => {
            dispatch(actFetchAdvisorsRequest())
            dispatch(actSearchAdvisorRequest(keyword))
        },
        onSearchAdvisor: (keyword) => {
            dispatch(actSearchAdvisorRequest(keyword))
        }
    }
}

export default connect(null,mapDispatchToProps)(Header);