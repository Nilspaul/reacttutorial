import { Route, Routes } from 'react-router-dom';

import Productlist from './src/components/Productlist';
import Main from './src/components/Mainpage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/produkte" element={<Productlist title="test der Produkte" />} />
    </Routes>
  );
};

export default AppRouter;
