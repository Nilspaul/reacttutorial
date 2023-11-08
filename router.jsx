
import { Route, Routes } from 'react-router-dom';

import Productlist from './src/components/Productlist';
import Main from './src/components/Mainpage';
import ContactForm from './src/components/ContactForm';
import staticProducts from './src/data/staticProducts';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/produkte" element={<Productlist title="test der Produkte" list={staticProducts} />} />
      <Route path="/kontakt" element={<ContactForm/>} />
    </Routes>
  );
};

export default AppRouter;
