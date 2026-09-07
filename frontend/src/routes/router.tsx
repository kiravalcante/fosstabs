import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Index } from "@/pages/index";
import { About } from "@/pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: "/about",
    Component: About,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
