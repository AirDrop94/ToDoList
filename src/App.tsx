import React, {FC, ChangeEvent, useState} from 'react';
import './App.scss';
import { IWorksList } from './Interfaces';
import ToDoWorksList from './copmonents/ToDoWorksList';


const App: FC = () => {

  const [worksElement, setWorksElement] = useState<string>('');
  const [worksList, setWorksList] = useState<IWorksList[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setWorksElement(event.target.value);
  }

  const addWorksListElement = (): void => {
    const newWorksListElement = { worksElementName: worksElement }
    setWorksList([...worksList, newWorksListElement]);
    setWorksElement('');
    console.log(worksList);
  }

  const completeWork = (worksNameToDelete:string):void => {
    setWorksList(worksList.filter((worksElement) => {
      return worksElement.worksElementName !== worksNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>ToDo</h1>
      </div>
      <div className='addForm'>
        <div className='addForm'>
          <div className="inputContainer">
            <input type="text" 
                  placeholder="work" 
                  name="work"
                  value={worksElement} 
                  onChange={handleChange}/>
            <button onClick={addWorksListElement}>ADD</button>
        </div>
      </div>
    </div>
      <div className='worksList'>
        <div className="worksElement">
          <span> {worksList.map((worksElement: IWorksList, key: number) => {
              return <ToDoWorksList 
                key={key} 
                worksElement={worksElement} 
                completeWork={completeWork}/>;
            })}
          </span> 
        </div>
      </div>
    </div>
  );
}

export default App;
