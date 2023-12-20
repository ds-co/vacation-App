import { Route, Routes } from 'react-router-dom';
import Home from "./Home"; 
import LoginForm from './LoginForm';
import VacationApp from './VacationApp';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-login" element={<LoginForm />} />
      <Route path="/vacation-app" element={<VacationApp />} />
    </Routes>
  );
};

export default App;