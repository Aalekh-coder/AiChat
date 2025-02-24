import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SideBar from "./components/SideBar.jsx";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router-dom";
// import {
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   createBrowserRouter,
// } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/setting" element={<div>Setting</div>} />
      <Route path="/profile" element={<div>Profile</div>} />

      <Route path='*' element={<div>404 - Page Not found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <>
      <RouterProvider router={router}/>
  </>
);
