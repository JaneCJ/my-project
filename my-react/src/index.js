import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
// import App from './App';
// import Jsx from './comps/jsxComp/Jsx';
import reportWebVitals from './reportWebVitals';
// import ClassComp from './comps/classComp';
// import FunctionComp from './comps/functionComp';
// import SetState from './comps/setState';
// import HomePage from './comps/combinedComp/homePage';
// import UserPage from './comps/combinedComp/userPage';
// import ReduxPage from './comps/reduxPage';
import store from './store';
import ReactReduxPage from './comps/reactReduxPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        {/* <App /> */}
        {/* <Jsx /> */}
        {/* <ClassComp/> */}
        {/* <FunctionComp/> */}
        {/* <SetState /> */}
        {/* <HomePage /> */}
        {/* <UserPage /> */}
        {/* <ReduxPage /> */}
        <ReactReduxPage />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
