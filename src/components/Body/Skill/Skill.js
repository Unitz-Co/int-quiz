const Skill = (props) => {
  const skills = props.listSkill.map((s) => s.displayName).join(", ");

  return <span>{skills ? `Skill: ${skills}` : "Skill: null "}</span>;
};

export default Skill;
