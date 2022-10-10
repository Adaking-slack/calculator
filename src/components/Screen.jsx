import { useContext } from "react"
import { CalcContext } from "../context/calcContext.jsx";

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return (
    <div className="screen">{calc.num ? calc.num : calc.res}</div>
  )
}

export default Screen;