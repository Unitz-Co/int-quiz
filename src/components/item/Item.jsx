/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './item.scss';

const Item = ({ data }) => {
  return (
    <div className='item col'>
      <div className='card h-100'>
        <img
          src={data.avatarUrl && data.avatarUrl.url}
          className='card-img-top item__img'
          alt={data.avatarUrl && data.avatarUrl.title}
        />
        <div className='card-body'>
          <h5 className='card-title'>
            <b>Name:</b> {data.displayName ? data.displayName : 'N/A'}
          </h5>
          <p className='card-text'>
            <b>Email:</b> {data.email ? data.email : 'N/A'}
          </p>
          <p className='card-text'>
            <b>Phone:</b> {data.phone ? data.phone : 'N/A'}
          </p>
          <p className='card-text'>
            <b>Skill:</b>{' '}
            {data.skillsCollection.items.length !== 0
              ? data.skillsCollection.items.map((skill, index) => {
                  if (data.skillsCollection.items.length - 1 === index) {
                    return skill.displayName;
                  } else {
                    return skill.displayName + ', ';
                  }
                })
              : 'N/A'}
          </p>
          <div className='d-flex flex-wrap'>
            {data.categoriesCollection &&
              data.categoriesCollection.items.map((category, index) => (
                <button
                  key={index}
                  type='button'
                  className='item__button btn-lg m-1'
                >
                  <img
                    src={category.avatarUrl && category.avatarUrl.url}
                    alt={category.avatarUrl && category.avatarUrl.url}
                    className='item__button--img'
                  />
                  <span className='item__button--title'>
                    {category.displayName}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
