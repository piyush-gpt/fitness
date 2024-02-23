
import "./App.css";
import Navbar from "./components/navbar";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
    </Routes>
    </>
  )
}

export default App;
