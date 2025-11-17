import { useState } from "react";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#101422";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  const router = createBrowserRouter([
    {
      path: "/React",
      element: (
        <>
          <Navbar darkMode={darkMode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <TextForm
              heading="MakeWords"
              darkMode={darkMode}
              showAlert={showAlert}
            />
          </div>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar darkMode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          <About darkMode={darkMode} />,
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
