import * as React from "react";
import Index from "./Components/Main";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Components/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/main",
    element: (
      <div>
        <Index />
      </div>
    ),
  },
  {
    path: "/Menu",
    element: (
      <div>
        <Menu />
      </div>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
