
import './App.css';
import routes from "./routes"
import {useRoutes} from "react-router-dom"
import Header from './components/Header/Header';
import SideBar from "./components/SideBar/SideBar"

function App() {
  let routesinapp = useRoutes(routes)



  return (
   <>
   <Header/>
   <div className='app-container'>
   <SideBar />
   {routesinapp}
   </div>
   </>
  );
}

export default App;
