import FunctionalCom from "./Component/FunctionalCom.js";
import ClassComponent from "./Component/ClassComponent.js";
import OneExport from "./Component/OneExport.js";
import PropsFunctional from "./Component/Day4/PropsFunctional.js";
import Propsclass from "./Component/Day4/Propsclass.js";
import ArrowProps from "./Component/Day4/ArrowProps.js";
import Arro from "./Component/Arro.js";
import StateClassCom from "./Component/Day4/StateClassCom.js";
import StateFunction from "./Component/Day4/StateFunction.js";
import StateHoldObject from "./Component/Day4/StateHoldObject.js";
import Twoway from "./Component/Day4/Twoway.js";
import Dynamic from "./Component/Day4/Dynamic.js";        
import Parent from "./Component/Day4/Parent.js";
import Default from "./Component/Day4/Default.js";
import List from "./Component/Day5/Day6/List.js";
import Key from "./Component/Day5/Day6/Key.js";
import Task from "./Component/Day5/Day6/Task.js";
import { ErrorBoundary } from "./Component/Day8/ErrorBoundary.js";
import Hero from "./Component/Day8/Hero.js";
import BasicButtons from "./Component/Matui/BasicButtons.js";
import TryCatch from "./Component/Day8/TryCatch.js";
import ComponentLifeCycle from "./Component/Day8/ComponentLifeCycle.js";
function App() {
  return (
    <div>
      <FunctionalCom/>
      <ClassComponent/>
      <OneExport/>
      <PropsFunctional name="Dharani" college ="Bioshp Hebper"></PropsFunctional>
      <PropsFunctional name="UdhayaSri" college ="SKCT"></PropsFunctional>
      <Propsclass office="TCS"></Propsclass>
      <ArrowProps game="kabaddi"></ArrowProps>
      <Arro/>
      <StateClassCom/>
      <StateFunction/>
      <StateHoldObject/>
      <Twoway/>
      <Dynamic/>
        <Parent/>
        <Default/>
          <List/>
          <Key/>
      <Task/>
        <BasicButtons/>  
        <ErrorBoundary>
          <Hero heroName="Vijay"></Hero>
        </ErrorBoundary>
        <TryCatch  fruit="Onion"/>
        <ComponentLifeCycle/>

    </div>
  )
}
export default App;