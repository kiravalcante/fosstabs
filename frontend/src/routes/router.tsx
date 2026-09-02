import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Index } from "@/pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
