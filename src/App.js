import './App.css';
import PixelData from './PixelData'
import Canvas from './Canvas';
import RandIMG from './RandIMG';

function App() {
  const pixelData = PixelData()
  return (
    <div className="App" style={{alignItems: 'center'}}>
      {/* <Canvas props={pixelData}/> */}
      <RandIMG props={pixelData}/>
    </div>
  );
}

export default App;
