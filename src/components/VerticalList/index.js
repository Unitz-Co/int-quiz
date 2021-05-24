import React from 'react';
import './styles.css';

export default function VerticalList(props) {
  const {
    items,
  } = props;

  return (
    <div className="verticalContainer">
      {
        items.map((item) => (
          <div
            key={`${item.sys.id}V`}
            className="verticalItem"
          >
            <b>{item.displayName}</b><br />
            <img className="avatar" alt={item.avatarUrl?.title} src={item.avatarUrl?.url} /><br />
            {item.email}<br />
            {item.phone}<br />
            <b>Categories: </b>
            {
              item.categoriesCollection?.items?.map((category, index) => (
                <span key={`${category.sys.id}V`}>{category.displayName}{index !== item.categoriesCollection.items.length - 1 ? ',' : ''}</span>
              ))
            }
            <br />
            <b>Skills: </b>
            {
              item.skillsCollection?.items?.map((skill, index) => (
                <span key={`${skill.sys.id}V`}>{skill.displayName}{index !== item.skillsCollection.items.length - 1 ? ',' : ''}</span>
              ))
            }
            <br />
          </div>
        ))
      }
    </div>
  )
}