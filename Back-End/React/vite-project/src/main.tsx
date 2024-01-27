import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
     {/* React Redux includes a Provider component, which makes the Redux store available to the rest of your app: */}
    <App />
  </Provider>
);