import { fetchallusers } from "./action/users";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Allroutes from "./Allroutes";
import { useDispatch } from "react-redux";

function App() {
  const [slidein, setslide] = useState(true);

  const dispatch = useDispatch();

  // Fetch all users when the component mounts
  useEffect(() => {
    dispatch(fetchallusers());
  }, [dispatch]);

  // Dynamically load Google Translate script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en"
      
        },
        "google_translate_element"
      );
    };
    

    return () => {
      // Clean up the script to avoid memory leaks
      document.body.removeChild(script);
    };
  }, []);

  // Handle responsive slide-in menu
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setslide(false);
    }
  }, []);

  const handleslidein = () => {
    if (window.innerWidth <= 768) {
      setslide((state) => !state);
    }
  };

  return (
    <>
      <h4>To Translate</h4>
      <div id="google_translate_element"></div>
      <div className="App">
        <Router>
          <Navbar handleslidein={handleslidein} />
          <Allroutes slidein={slidein} handleslidein={handleslidein} />
        </Router>
      </div>
    </>
  );
}

export default App;
