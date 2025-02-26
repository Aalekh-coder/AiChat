import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router-dom";
import Chat from "./Pages/Chat.jsx"
import AdminUser from "./Pages/AdminUser.jsx"
import NewChat from "./Pages/NewChat.jsx";
import ChatList from "./Pages/ChatList.jsx";
// import {
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
//   createBrowserRouter,
// } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<NewChat/>} />
      <Route path="/chat" element={<ChatList/>} />
      <Route path="/setting" element={<div>Setting</div>} />
      <Route path="/profile" element={<AdminUser/>} />

      <Route path='*' element={<div>404 - Page Not found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <>
      <RouterProvider router={router}/>
  </>
);
