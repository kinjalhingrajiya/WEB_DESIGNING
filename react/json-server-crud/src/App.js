import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import EmpList from './EmpList';
import EmpCreate from './EmpCreate';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmpEdit from './EmpEdit';
import EmpView from './EmpView';
function App() {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpList/>}></Route>
    <Route path='/create' element={<EmpCreate/>}></Route>
    <Route path='/view/:empid' element={<EmpView/>}></Route>
    <Route path='/edit/:empid' element={<EmpEdit/>}></Route>
  </Routes>
</BrowserRouter>
  </>
 )
}
export default App;
