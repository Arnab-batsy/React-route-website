import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/contact.jsx";
import User from "./components/user/user.jsx";
import Github from "./components/github/github.jsx";

//Here, we pass a array of objects that specify the path and the elements to render in that path
//Add children to specify the other routes

// const router= createBrowserRouter([
// {
//   path:"/",
//   element: <App/>,
//   children: [
//     {
//       path:"",
//       element: <Home/>
//     },
// {
//   path: "about",
//   element: <About/>
// },
// {
//   path: "contact",
//   element: <Contact/>
// }
// ]
// }
// ])

//Another Method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />} >
        <Route path=":id" element={<User />}/>
      </Route>
      <Route path="github" element={<Github />} />
    </Route>
  )
);
//Anything after the : is important to note in the Route path. That is the parameter passed.
//params can be accessed by the element in the Route for ex- here it's User.
//Loader fetches data from the API before useEffects whenever you hover to the button and stores it in cache.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
