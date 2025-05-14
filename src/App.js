import React, { lazy, Suspense, useEffect } from "react";

import Aos from "aos";
import 'aos/dist/aos.css';
import GlassNavbar from "./components/nav/navbar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./pages/Contact/contact";
import AboutUs from "./pages/AboutUs/aboutus";

const Home = lazy(() => import("./pages/home/Home"));



const router = createBrowserRouter([
      {
        path: "",
        element: <Home />,
      },
      {
        path: "kontakt",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      }
]);


function App() {
  useEffect(() => {

    Aos.init({
      disable: 'mobile'
    });
  }, [])

  return (
    <div>
      <Suspense fallback={<p>Ładowanie strony...</p>}>
        <GlassNavbar />
        <div className="">
        <RouterProvider router={router} />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
