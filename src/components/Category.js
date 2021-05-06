import React from 'react'

const Category = ({ category }) => {
  return (
      category.displayName &&  <div className="h6 text-muted">{ category.displayName }</div>
    )
}

export default Category
