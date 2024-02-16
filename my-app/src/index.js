import React from "react";
import ReactDOM from "react-dom/client";  //React dom tells the react how to create elements
import "./index.css";

// import { add, subtract } from "./calculator";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
// alert(add(5, 6));
// alert(subtract(6, 4));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <App/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
