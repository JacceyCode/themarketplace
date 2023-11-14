import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from "./redux/store.js";
import { store, persistor } from "./redux/store.js";
import "react-toastify/dist/ReactToastify.css";
import { app } from "./firebase.config.js";
import "./index.css";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
