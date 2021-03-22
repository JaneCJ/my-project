import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Jsx from './comps/jsxComp/Jsx';
import reportWebVitals from './reportWebVitals';
// import ClassComp from './comps/classComp';
import FunctionComp from './comps/functionComp';

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <App /> */}
      {/* <Jsx /> */}
      {/* <ClassComp/> */}
      <FunctionComp/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
