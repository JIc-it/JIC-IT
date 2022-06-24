import logo from "./logo.svg";
import "./App.css";
import Index from "./Views/Index";
import Home from "./Views/Home/Home";
import { useEffect } from "react";
import Router from "./Router";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color='251,215,4'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={2}
      />
      <Router />
    </>
  );
}

export default App;
