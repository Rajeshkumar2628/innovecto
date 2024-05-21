import './App.css';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import AuthProvider from './components/Auth.js';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import DashBoard from './components/DashBoard.js';
import Bot from './components/ChatBot.js';
import QuizQuestions from './components/Questions.js';

function App() {
  return (
    <div className="App">
      <Bot/>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/quiz" element={<QuizQuestions/>} />
        </Routes>
        <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
