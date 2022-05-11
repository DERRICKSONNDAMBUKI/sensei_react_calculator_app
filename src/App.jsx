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
  return (
   <Wrapper>
     <Screen value= "0"/>
     <ButtonBox>
       {
         btnValues.flat().map((btn,i)=>{
               <Button key={i} className={btn === "="?"equals":""} value = {btn} onClick={()=>{
         console.log(`${btn} clicked!`);
       }}
       />
         })
       }
   
     </ButtonBox>
   </Wrapper>
  );
}

export default App;
