import './App.css';
import CentralCard from './components/CentralCard';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h1>Here you can calcualte your <span className="green">Tax rate</span> and <span className="green">Gross income</span></h1>
      <div>
          <CentralCard/>
      </div>
    
    </div>
  );
}

export default App;
