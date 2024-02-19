// import logo from './logo.svg';
// import Bootnav from './navbar';
import Bisection from './bisection';
import FalsePosition from './false-position';
import Onepoint from './onepoint';
import NewtonRaphson from './newtonraphson';
import SuchadaMethod from './SuchadaMethod';
import TaylorSeries from './TaylorSeries';
import Test from './test1';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bisection/>}/>
        <Route path="/bisection" element={<Bisection/>}/>
        <Route path="/false-position" element={<FalsePosition/>}/>
        <Route path="/onepoint" element={<Onepoint/>}/>
        <Route path="/newtonraphson" element={<NewtonRaphson/>}/>
        <Route path="/TaylorSeries" element={<TaylorSeries/>}/>
        <Route path="/SuchadaMethod" element={<SuchadaMethod/>}/>
        <Route path="/test1" element={<Test/>}/>
      </Routes>  
    </BrowserRouter>
  );
  
}
export default App;
