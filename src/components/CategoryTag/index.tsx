import { Typography, Tag } from "antd"

interface ICategoryTag {
  id: string,
  name: string,
}

const CategoryTag = ({
  id,
  name
}: ICategoryTag) => {
  return (
    <Typography.Link key={`category-item-${id}`} href="/" target="_blank" rel="noopener noreferrer">
      <Tag color="cyan">{name}</Tag>
    </Typography.Link> 
  )
}

export default CategoryTag;