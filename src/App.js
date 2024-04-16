import './App.css';
import { FoodTracking } from './Pages/FoodTracking';
import { GoalTracking } from './Pages/GoalTracking';
import { ExerciseTracking } from './Pages/ExerciseTracking';
import { Dashboard } from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Dashboard />
      <ExerciseTracking />
      <FoodTracking />
      <GoalTracking />
    </div>
  );
}

export default App;
