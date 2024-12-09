import { fetchallusers } from './action/users';
import './App.css';
import { Navbar } from '././Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {useEffect,useState} from 'react';
import Allroutes from './Allroutes';
import { useDispatch } from 'react-redux';

function App() {
  const[slidein,setslide]=useState(true)

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchallusers());
  },[dispatch])

  

  
    useEffect(()=>{
      if(window.innerWidth<=768){
        setslide(false)
      }
    },[])
    const handleslidein=()=>{
      if(window.innerWidth<=768){
        setslide((state)=> !state);
      }
    }
    
  
  return (
    <div className="App">
      <Router>
      <Navbar handleslidein={handleslidein} />
      <Allroutes slidein={slidein} handleslidein={handleslidein}/>
      </Router>
     
    </div>
  );
}
export default App;
