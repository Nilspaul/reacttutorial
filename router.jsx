
import { Route, Routes } from 'react-router-dom';

import Productlist from './src/components/Productlist';
import Main from './src/components/Mainpage';
import ContactForm from './src/components/ContactForm';

const AppRouter = () => {
  const products = [
    {
      title: "Burger",
      desc: "LULW",
      image: "/assets/burger.png"
    },
    {
      title: "Hotdog",
      desc: "LULW",
      image: "/assets/hotdog.png"
    },
    {
      title: "Bowl",
      desc: "LULW",
      image: "/assets/bowl.png"
    }
  ];



  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/produkte" element={<Productlist title="test der Produkte" list={products} />} />
      <Route path="/kontakt" element={<ContactForm/>} />
    </Routes>
  );
};

export default AppRouter;
