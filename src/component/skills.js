import React from "react";

export default function Skills(props) {
  const data = props.skills.map((skill) => skill.displayName).join(", ");

  return (
    <span className={data != null && data != "" ? "" : "updating"}>
      {data != null && data !== "" ? data : "updating"}
    </span>
  );
}
