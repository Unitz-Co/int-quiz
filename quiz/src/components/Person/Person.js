import './Person.css'
const Person = (props) => {
  const data = props.data;
  let content =''
  content = data.categoriesCollection.items.map((item) => (
    <p key={item.sys.id+Math.random()}>{item.displayName}</p>
  ));
  return (
    <div className={`person ${props.order}`}>
      <h1 className={content==''&&'middle'}>{data.displayName}</h1>
      {content}
    </div>
  );
};
//  className={`person ${props.order}`}
export default Person;
