import { About } from "./components/About";
import Navbar from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
const App = () =>{
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");

      document.body.style.backgroundColor = "#18283d";
      showalert("dark mode enable", "success :");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode enable", "success : ");
    }
  };
  const showalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  return (
    <Router>
    <>

      
        <Navbar
          title="Textutils"
          name="home"
          mode={mode}
          toggleMode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
        <Route path="/about" element={<About />} />
          <Route path="" element={ <div className="container my-3">
              <TextForm
                showalert={showalert}
                heading="Enter The text Utilize"
                mode={mode}
              />
            </div>} />
        </Routes>
        
      
           
            </>
            </Router>
  );
};

export default App;
