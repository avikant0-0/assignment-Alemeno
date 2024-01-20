import NavbarMain from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Coursedetailed from "./components/coursesindetail";
import ExploreCourse from "./components/explorecourses";
import { fetchusercourses } from "./api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToUserData } from "./reducers/allDataSlice";
// const userid = "0974e950-38e6-4e82-9b3a-f6d68659a732"; //Evan smiths
// const userid = "a95eb083-385d-4ced-ad6b-2b653e60c122"; //ALice
const userid = "3bdeba01-0059-4c10-9112-fede5c4be394"; //Goerge

function App() {
  const [coursedata, setcoursedata] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchusercourses(userid).then((data) => {
      setcoursedata(data);
      dispatch(addToUserData(data));
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/coursedetails",
      element: <Coursedetailed />,
    },
    {
      path: "/explorecourses",
      element: <ExploreCourse coursedata={coursedata} />,
    },
  ]);

  return (
    <>
      {coursedata === null ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <>
          <NavbarMain fixed="top" />
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}

export default App;
