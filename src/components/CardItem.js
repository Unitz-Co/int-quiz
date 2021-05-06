import React from 'react'
import { Card } from 'react-bootstrap'
import Category from './Category'

const CardItem = ({ user, mode }) => {
  const dummyImage = 'https://bsems.com.au/wp-content/uploads/2018/08/Dummy-image.jpg'
  const categories = user.categoriesCollection.items

  return (
      <Card>
        <div className={ mode === 'horizontal' ? 'col-md-4 ratio' : 'ratio' }>
          <Card.Img className="fit-cover" src={ user.avatarUrl ? user.avatarUrl['url'] : dummyImage } alt={ user.avatarUrl ? user.avatarUrl['title'] : '' } />
        </div>
        <Card.Body className={ mode === 'horizontal' ? 'col-md-8' : 'col-md-12' }>
          { user.displayName && <Card.Title as="h5">{ user.displayName }</Card.Title> }
          { categories.length > 0 && categories.map((category, index) => (
            <Category key={index} category={category} /> ))}
        </Card.Body>
      </Card>
    )
}

export default CardItem
