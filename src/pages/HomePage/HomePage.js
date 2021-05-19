import React, { Component } from 'react';
import {connect} from 'react-redux';
import AdvisorList from './../../components/AdvisorList/AdvisorList';
import AdvisorItem from './../../components/AdvisorItem/AdvisorItem';
import {actFetchAdvisorsRequest} from './../../actions/index';
import $ from 'jquery'

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            advisors: this.props.advisors,
            subAdvisors:this.props.advisors,
            searchKeyword: '',
            idKeyword: 0
        }
    }

    componentDidMount() {
        this.props.fetchAllAdvisors();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setViewdefaultState();
        if (nextProps.advisors.length > 0) {

            this.setState({
                advisors:nextProps.advisors,
                subAdvisors:nextProps.advisors
            })
        }
        if(this.state.idKeyword !== nextProps.searchKeyword.id) {
            this.setState({
                advisors:nextProps.advisorsInSearch,
                subAdvisors:nextProps.advisorsInSearch,
                searchKeyword: nextProps.searchKeyword.keyword,
                idKeyword: nextProps.searchKeyword.id
            })
        }
    }

    render() {
        var {advisors,searchKeyword} = this.state;
        return (
            <AdvisorList
                sortAllAdvisor = {this.sortAllAdvisor}
                sortAdvisorOnline = {this.sortAdvisorOnline}
                sortAdvisorOffline = {this.sortAdvisorOffline}
                searchKeyword = {searchKeyword}
            >
                {this.showAdvisor(advisors)}
            </AdvisorList>        
        )
    }

    showAdvisor = (advisors) => {
        var result = null;
        if (advisors.length > 0) {
            result = advisors.map((advisor,index) => {
                return (
                    <div className="grid-col10-5 grid-col10-sm-5 grid-col12-md-4 grid-col12-lg-3 grid-col12-xl-3" key={index}>
                        <AdvisorItem
                            key={index}
                            advisor={advisor}
                        />
                    </div>
                )
            })
        } else {
            result = (
                <h3 
                    className="grid-col" 
                    style={{textAlign: 'center',color: 'rgb(223,189,21)', padding: '20px', margin:'20px',border: '2px solid rgb(223,189,21)'}}
                >
                    Rất tiếc, không tìm thấy cố vấn phù hợp với lựa chọn của bạn
                </h3>
            )
            
        }
        return result;
    }

    sortAllAdvisor = () => {
        this.setState({advisors: this.state.subAdvisors})
    }

    sortAdvisorOnline = () => {
        var sortedOnline = this.state.advisors.filter((advisor) => { return advisor.status === "Online"});
        var sortedOffline = this.state.advisors.filter((advisor) => { return advisor.status === "Offline"});
        var result = sortedOnline.concat(sortedOffline)
        this.setState({advisors: result})
    }

    sortAdvisorOffline = () => {
        var sortedOnline = this.state.advisors.filter((advisor) => { return advisor.status === "Online"});
        var sortedOffline = this.state.advisors.filter((advisor) => { return advisor.status === "Offline"});
        var result = sortedOffline.concat(sortedOnline);
        this.setState({advisors: result});
    }

    setViewdefaultState = () => {
        $(".sort-item-link").map((index,element) => {
            return element.className = "sort-item-link";
        });
        $(".sort-item-link")[0].className="sort-item-link active";
        $(".view-item-link").map((index,element) => {
            return element.className = "view-item-link";
        });
        $(".view-item-link")[0].className="view-item-link active";
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


}

const mapStateToProps = (state) => {
    return {
        advisors: state.advisors,
        searchKeyword: state.searchKeyword,
        advisorsInSearch: state.search
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllAdvisors: () => {
            dispatch(actFetchAdvisorsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);