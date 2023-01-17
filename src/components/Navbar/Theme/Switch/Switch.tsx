import { ISwitchProps } from "../../../types";
import "./Switch.css";
import { useEffect, useState } from "react";

const Switch = (props: ISwitchProps) => {
  const [on, setOn] = useState(true);

  const { onChange } = props;

  useEffect(() => {
    onChange(on);
  }, [on, onChange]);

  return (
    <div
      className="switch"
      style={on ? { backgroundColor: "#4a71b1" } : {}}
      onClick={() => setOn(!on)}
    >
      <div
        className="switch-ball"
        style={on ? { transform: "translateX(19px)" } : {}}
      />
    </div>
  );
};

export default Switch;
