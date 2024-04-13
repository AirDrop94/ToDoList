import React, {FC, ChangeEvent, useState} from 'react';
import './App.scss';


const App: FC = () => {

  const [worksElement, setWorksElement] = useState<string>('');
  const [worksList, setWorksList] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div className="App">
      <div className='header'>
        <h1>ToDo</h1>
      </div>
      <div className='addForm'>
        <div className='addForm'>
          <div className="inputContainer">
            <input type="text" placeholder="work" onChange={handleChange}/>
            <button>add</button>
        </div>
      </div>
    </div>
      <div className='worksList'>
        <div className="worksElement">
          <div className="content">
          <input type="checkbox"></input>
          <span>Hello world!</span>
          <button>X</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
