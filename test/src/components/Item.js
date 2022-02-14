import React from 'react';

function Item(props) {
    // console.log(props.profile.categoriesCollection.items.length);
    let url = props.profile.avatarUrl
    url = url ? url.url : 'https://www.smartdatajob.com/images/joomlart/demo/default.jpg'
    let myStyle = { backgroundImage: `url(${url})` }
    let email = props.profile.email ? props.profile.email : null
    let phone = props.profile.phone ? props.profile.phone : null
    let category = props.profile.categoriesCollection.items.length > 0 ?
        props.profile.categoriesCollection.items : null
    return (
        <div className="item">
            <div className="img" style={myStyle}></div>
            <div className="info">
                <div>
                    <h6>Name</h6>
                    <p>{props.profile.displayName}</p>
                </div>
                <div className={email ? '' : 'hide'}>
                    <h6>Email</h6>
                    <p>{props.profile.email}</p>
                </div>
                <div className={phone ? '' : 'hide'}>
                    <h6>Phone</h6>
                    <p>{props.profile.phone}</p>
                </div>
                <div className={category ? '' : 'hide'}>
                    <h6>Category</h6>
                    {
                        category && category.map((item, index) => {
                            return <span className='skill' key={index}>{item.displayName}</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Item