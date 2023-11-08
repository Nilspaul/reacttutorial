
import { Route, Routes } from 'react-router-dom';

import Productlist from './components/Productlist';
import Main from './components/Mainpage';
import ContactForm from './components/ContactForm';
import staticProducts from './data/staticProducts';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/produkte" element={<Productlist title="Statische Produkte" list={staticProducts} />} />
      <Route path="/kontakt" element={<ContactForm/>} />
    </Routes>
  );
};

export default AppRouter;
