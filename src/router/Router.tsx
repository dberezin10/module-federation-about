import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App";

const routes = [
  {
    path: '/about',
    element: <App />,
  }
]

export const router = createBrowserRouter(routes);

export default routes
