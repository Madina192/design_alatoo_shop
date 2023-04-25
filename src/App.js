import './App.css';
import Header from "./components/Header/Header";
import {Route, RouterProvider, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
          <div className="App">
              <Header/>
              <Routes>
                  <Route path='/home' element={<Home/>}/>
              </Routes>
          </div>
  );
}

export default App;
