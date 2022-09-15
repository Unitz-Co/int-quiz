import {FC} from 'react'
import {Advisor} from "../types"
import "./AdvisorItem.css"

interface Props {
  advisor: Advisor
}

const AdvisorItem: FC<Props> = ({advisor}) => {
  return (
    <div className={`wrapper ${advisor.status}`}>
      <img src={advisor.avatarUrl?.url || ""} alt="avatar"/>
      <h3>{advisor.displayName}</h3>
      <h5>{advisor.email}</h5>
      <h5>{advisor.phone}</h5>
      <h5>Skill: {advisor.skillsCollection?.items.map(skill => (
        <span>{skill.displayName}</span>
      ))}</h5>
      <h5>Service: {advisor.servicesCollection?.items.map(service => (
        <span>{service.name}</span>
      ))}</h5>
    </div>
  );
};

export default AdvisorItem;
