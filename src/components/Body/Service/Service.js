const Service = (props) => {
  const services = props.listService.map((s) => s.name).join(", ");

  return <span>{services ? `Service: ${services}` : "Service: null "}</span>;
};

export default Service;
