import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import NavBar from "./components/Navbar";
import {Route} from "react-router-dom";

function App() {
  return (
     <>
         <NavBar/>
         <main style={{marginTop:'8em'}}>
             <Route exact path='/news' component={Main} />
             <Route exact path='/' component={Dashboard}/>
         </main>

     </>
  );
}
export default App;
