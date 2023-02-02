import './App.css';
import PixelData from './PixelData'
import Canvas from './Canvas';

function App() {
  const pixelData = PixelData()
  return (
    <div className="App" style={{alignItems: 'center'}}>
      <Canvas props={pixelData}/>
    </div>
  );
}

export default App;
