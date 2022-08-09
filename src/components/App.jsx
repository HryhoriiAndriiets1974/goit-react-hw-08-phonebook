import {
  Routes,
  Route,
  // Navigate
   } from "react-router-dom";
import {
  Suspense
} from 'react';
import HomePages from "pages/HomePages";
import RegisterPages from "pages/RegisterPages";
import LoginPages from "pages/LoginPages";
import ContactList from "./ContactList";
import Loader from "./Loader";


export const App = () => {

    return (
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="*" element={<Navigator to='register' />} />
          <Route path="/" element={<Navigator to='register' />} /> */}
          <Route path="/" element={<HomePages/>}>
            <Route path="register" element={<RegisterPages/>} />
            <Route path="login" element={<LoginPages/>} />
            <Route path="contacts" element={<ContactList/>} />
          </Route>
        </Routes>
      </Suspense>
    )
};
