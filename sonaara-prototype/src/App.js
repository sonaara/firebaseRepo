import Login from "./Screens/Login";
import Friends from "./Screens/Friends";
import NoFriends from "./Screens/NoFriends";
import Discover from "./Screens/Discover";
import Tunez from "./Screens/Tunez";
import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useKeyboardNavigation } from "./hooks/use-keyboard-navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/no-friends",
    element: <NoFriends />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/tunez",
    element: <Tunez />,
  },
]);

export default function App() {
  useKeyboardNavigation();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
