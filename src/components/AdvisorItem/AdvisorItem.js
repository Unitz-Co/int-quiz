import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdvisorItem extends Component {
    render() {
        var { advisor } = this.props;
        return (
            <div className="advisor-item">
                <Link to="#" className="advisor-item-link">
                    <div className="advisor-item-frame">
                        <div className="advisor-item-thumbnail">
                            <img src={this.showAvatar(advisor)} alt="" />
                        </div>
                        <div className="advisor-item-info">
                            <div className="advisor-item-name">
                                <span>
                                    {advisor.displayName}
                                </span>
                            </div>
                            <div className="advisor-item-contact">
                                <span className="contact-text">
                                    {`Email: ${this.showEmail(advisor)}`}
                                </span>
                                <span className="contact-text">
                                    {`Phone: ${this.showPhone(advisor)}`}
                                </span>
                                {this.showStatus(advisor)}
                            </div>
                        </div>
                        <div className="advisor-item-category">
                            {this.showCategory(advisor)}
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    showAvatar = (advisor) => {
        if (advisor.avatarUrl !== null) {
            return advisor.avatarUrl.url
        } else {
            return ''
        }
    }

    showEmail = (advisor) => {
        if (advisor.email !== null) {
            return advisor.email
        } else {
            return 'Đang cập nhật'
        }
    }

    showPhone = (advisor) => {
        if (advisor.phone !== null) {
            return advisor.phone
        } else {
            return 'Đang cập nhật'
        }
    }

    showStatus = (advisor) => {
        var classStatus = "";
        if (advisor.status === "Online") {
            classStatus = "status-online"
        } else {
            classStatus = "status-offline"
        }
        return (
            <span className="contact-text">
                <i className={`fas fa-circle ${classStatus}`}></i>
                    {advisor.status}
                </span>
        )
    }

    showCategory = (advisor) => {
        var result = null;
        if (advisor.categoriesCollection.items.length > 0) {
            result = advisor.categoriesCollection.items.map((category, index) => {
                if(category.avatarUrl === null) {
                    category.avatarUrl = ''
                }
                return (
                    <div className="category-wrapper" key={index}>
                        <div className="category-thumbnail">
                            <img src={category.avatarUrl.url} alt={category.avatarUrl.title}/>
                        </div>
                        <span className="category-text">
                            {category.displayName}
                        </span>
                    </div>
                )
            })
        }
        return result;
    }
}

export default AdvisorItem;