import Person from "./Person";
const PersonList = (props) => {
  console.log(props.list)
  if (!props.list) return <p>No record found</p>;
  return (
    <div>
      {props.list.map((person) => (
        <Person data={person} key={person.sys.id} order={props.order}></Person>
      ))}
    </div>
  );
};
export default PersonList;
