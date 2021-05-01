import { Slider } from './components/Slider';
import {SliderData} from './data/SliderData'
import './App.css'

function App() {
  return (
    <div className="App">
      <Slider sliderData={SliderData} />
    </div>
  );
}

export default App;
