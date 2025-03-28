import "./index.css";
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router";
import { Home, About, Courses } from "./pages/";

const routes_second = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
    </Route>
);
const router = createBrowserRouter(routes_second);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
