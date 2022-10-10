import './App.css'
import  Wrapper from "./components/Wrapper.jsx";
import  Screen from "./components/Screen.jsx";
import  ButtonBox from "./components/ButtonBox.jsx";
import  Button from "./components/Button.jsx";
import   CalcProvider from "./context/calcContext.jsx";

const btnValues =[
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
 function App() {
  return (
    <CalcProvider>
      <Wrapper>
      <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn,  i)=>(
            <Button
              value = {btn}
              key={i}
              />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}
export default App;