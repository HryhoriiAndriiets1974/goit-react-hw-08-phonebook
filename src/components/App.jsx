import {
  Routes,
  Route,
  Navigate
   } from "react-router-dom";
import {
  Suspense,
  useEffect
} from 'react';
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePages from "pages/HomePages";
import RegisterPages from "pages/RegisterPages";
import LoginPages from "pages/LoginPages";
import ContactList from "./ContactList";
import Loader from "./Loader";
import { fetchCurrentUser } from "redux/auth/authOperations";
import PublicRoute from "routes/PublicRoute";
import PrivateRoute from 'routes/PrivateRoute';

export const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCurrentUser());
  }, [dispath]);

   return (
     <>
        <ToastContainer
          autoClose={5000}
        />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="*" element={<Navigate to='register' />} />
            <Route path="/" element={<Navigate to='register' />} />
            <Route path="/" element={<HomePages/>}>
              <Route element={<PublicRoute restricted redirectTo="contacts" />} >
                <Route path="register" element={<RegisterPages/>} />
              </Route>
              <Route element={<PublicRoute restricted redirectTo="contacts" />} >
                <Route path="login" element={<LoginPages/>} />
              </Route>
              <Route element={<PrivateRoute redirectTo="login" />} >
                <Route path="contacts" element={<ContactList/>} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </>
    )
};
