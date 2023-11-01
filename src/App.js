import './App.css';
import Calculator from './component/Calculator';

function App() {
  return (
    <div style={{minHeight:'100vh',width:'100%',margin:'0px auto'}} className=' d-flex align-items-center justify-content-center container'>
      <div  className="border shadow  rounded-5 p-3  Calculator">
          <Calculator />
      </div>
     
    </div>
  );
}

export default App;
