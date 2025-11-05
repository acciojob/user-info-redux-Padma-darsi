
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserInfo from "./UserInfo";
import './../styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserInfo />
      </div>
    </Provider>
  );
};

export default App;
