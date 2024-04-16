import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FoodTracking } from './Pages/FoodTracking';
import { GoalTracking } from './Pages/GoalTracking';
import { ExerciseTracking } from './Pages/ExerciseTracking';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <h1>Fitness Tracker</h1>
          <NavLink className="link" to="/">Dashboard</NavLink>
          <NavLink className="link" to="/exercises">Exercise</NavLink>
          <NavLink className="link" to="/foods">Food</NavLink>
          <NavLink className="link" to="/goals">Goals</NavLink>
          <NavLink className="link" to="https://github.com/ShivamT16/fitness-tracker" target='_blank' >GitHub</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercises" element={<ExerciseTracking />} />
          <Route path="/foods" element={<FoodTracking />} />
          <Route path="/goals" element={<GoalTracking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
