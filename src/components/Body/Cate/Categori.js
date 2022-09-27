const Cate = (props) => {
  const categor = props.categorieList.map((c) => c.displayName).join(", ");

  return (
    <span>{categor ? `Categories: ${categor}` : "Categories: null "}</span>
  );
};

export default Cate;
