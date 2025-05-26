import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import StudentPages from "./pages/StudentPages";
import CreateStudent from "./pages/CreateStudent";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <StudentPages />,
        },
        {
          path: "/student/add",
          element: <CreateStudent />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
