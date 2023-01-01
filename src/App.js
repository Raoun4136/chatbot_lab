import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ChatbotPage from './pages/ChatbotPage';

function App() {
  return (
    <Routes>
      <Route path="/chatbot_lab" element={<Main />}></Route>
      <Route path="/chatbot" element={<ChatbotPage />}></Route>
    </Routes>
  );
}

export default App;
