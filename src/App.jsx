import { useState } from "react";
import { Button } from "./Button";
import { ButtonBox } from "./ButtonBox";
import { Screen } from "./Screen";
import { Wrapper } from "./Wrapper";

const btnValues = [
  ["C","+-","%","/"],
  [7,8,9,"X"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="]
]

function App() {

  const [calc, setCalc] = useState({
    sign:"",
    num:0,
    res:0,
  })
  return (
   <Wrapper>
     <Screen value= {calc.num ? calc.num : calc.res}/>
     <ButtonBox>
       {
         btnValues.flat().map((btn,i)=>{
           return (
                  <Button key={i} className={btn === "="?"equals":""} value = {btn} onClick={()=>{
                    btn === "C" 
                    ? resetClickHandler 
                    : btn === "+-" 
                    ? invertClickHandler 
                    : btn === "%" 
                    ? percentClickHandler 
                    : btn === "=" 
                    ? equalsCLickHandler 
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+" 
                    ? signClickHandler : btn === "." 
                    ? commaClickHandler:numClickHandler
                  }}
                  />
           )
          
         })
       }
   
     </ButtonBox>
   </Wrapper>
  );
}

export default App;
