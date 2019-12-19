import React from 'react';
import './App.css';
// import ParentComp from './Component/Pure and momo/parentcompoent';
// import Refs from './Component/Reference/Refs';
// import FRParREF from './Component/Reference/FRParREF';
import CheckingError from './Component/CheckingError';
import ErrorBoundary from './Component/ERROR/ErrorBoundary';
import HocComp from './Component/HOC/HOCCOMP';
import Higer from './Component/HOC/higer';
// import Clickcounter from './Component/Conditional/RenderProsp/Clickcounter';
// import HoverCounter from './Component/Conditional/RenderProsp/Hovercounter';
import Counter from './Component/Conditional/RenderProsp/Counter';
import Clickcounter from './Component/Conditional/RenderProsp/Clickcounter';
import HoverCounter from './Component/Conditional/RenderProsp/Hovercounter';
import Hai1 from './Component/Propschildren/children';
// import Clickcounter from './Component/Conditional/RenderProsp/Clickcounter';
import Fragment from './Component/Fragment';
import Demo from './Component/MultipleClass/demo';
import Count from './Context/Count'
import Getmethod from './Component/HTTP/HTTps'
import Post from './Component/HTTP/Post'
// import learn from './Component/Lifes/Learn';
// import FunctionClick from './Component/Functionclick';
// import Clickinclass from './Component/ClassClick';
// import Eventbind from './Component/Eventbind';
// import JSX from './Component/JSX';
// import Element from './Component/Conditional/Element'
// import Logical from './Component/Conditional/Logical';
// import Clock from './Component/clock';
// import Mounting from './Component/Life/Mounting';
// import Child from './Component/Life/child';
// import Learn from './Component/Lifes/Learn'
function App() {
  return (
    <div className="App">
{/* <FunctionClick />
<Clickinclass />
<Eventbind />
<JSX />
<Element />
<Logical />
<Clock />
<Mounting />
<Child /> */}
{/* <Learn /> */}
    <Fragment />
       {/* <ParentComp />  */}
   {/* <Refs /> */}
 
   {/* <FRParREF /> */}
<ErrorBoundary >
   <CheckingError />
   </ ErrorBoundary >
<HocComp />
<Higer />
{/* <Clickcounter />
<HoverCounter />    */}
<Counter render={(count,incrementCount)=>(<Clickcounter count={count} incrementCount={incrementCount} />)} />   
<Counter render={(count,incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount} />)} />   
<Hai1 />
<Demo />
<Count />
<Getmethod />
<Post />
</div>
  );
}

export default App;
