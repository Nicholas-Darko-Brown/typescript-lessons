import './App.css';
import Sample1 from './Sample1/Sample1';
import { Data } from "./Sample1/data"
import Sample2 from './Sample2/Sample2';
import Sample3 from './Sample3/Sample3';
import Sample4 from './Sample4/Sample4';
import Sample5 from './Sample5/Sample5';
import Sample6 from './Sample6/Sample6';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Sample1 data={Data} />
      <Sample2 name="Brown" email="abc@gmail.com" />
      <Sample3 />
      <Sample4 title="Doctor of Philosophy" />
      <Sample5 />
      <Sample6 />
    </div>
  );
}

export default App;
