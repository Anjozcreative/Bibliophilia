import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";

// import "./index.css";
import Login from "./components/authForm/Login.jsx";
import SignUp from "./components/authForm/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<App />}> </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
