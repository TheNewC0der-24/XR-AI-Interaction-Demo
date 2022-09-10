import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Question1 from './components/Question-1';
import Question2 from './components/Question-2';
import Question3 from './components/Question-3';
import Question4 from './components/Question-4';
import ThankYou from './components/ThankYou';
import Responses from './components/Responses/Responses';
import Start from './components/Start';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route exact path="/question1" element={<Question1 />} />
          <Route exact path="/question2" element={<Question2 />} />
          <Route exact path="/question3" element={<Question3 />} />
          <Route exact path="/question4" element={<Question4 />} />
          <Route exact path="/thanks" element={<ThankYou />} />
          <Route exact path="/response" element={<Responses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
