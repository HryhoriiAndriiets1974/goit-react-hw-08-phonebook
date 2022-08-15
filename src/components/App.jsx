import {
  Routes,
  Route,
  Navigate
   } from "react-router-dom";
import {
  Suspense,
  useEffect,
  lazy
} from 'react';
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePages from "pages/HomePages";
import Loader from "./Loader";
import { fetchCurrentUser } from "redux/auth/authOperations";
import PublicRoute from "routes/PublicRoute";

const PrivateRoute = lazy(()=> import('routes/PrivateRoute'));
const RegisterPages = lazy(()=> import('pages/RegisterPages'));
const LoginPages = lazy(()=> import('pages/LoginPages'));
const ContactsPages = lazy(()=> import('pages/ContactsPages'));

export const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCurrentUser());
  }, [dispath]);

   return (
        <Suspense fallback={<Loader />}>
        <ToastContainer
          autoClose={5000}
        />
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
                <Route path="contacts" element={<ContactsPages/>} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
    )
};
