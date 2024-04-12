import React, {FC} from 'react';
import './App.css';
import { AddForm } from './copmonents/add-form/add-form';

const App: FC = () => {

  return (
    <div className="App">
        <div className='header'>
          <h1>ToDo</h1>
        </div>
        <div>
          <div className='addForm'>
            <AddForm />
          </div>
          <div className='worksList'></div> 
        </div>
        
    </div>
  );
}

export default App;
