import { FC, ChangeEvent, useState } from 'react';
import './app.scss';
import { IWorksList } from './Interfaces';
import ToDoWorksList from './copmonents/ToDoWorksList';


const App: FC = () => {

  const [worksElement, setWorksElement] = useState<string>('');
  const [worksList, setWorksList] = useState<IWorksList[]>([]);

  const inputTextElement = (event: ChangeEvent<HTMLInputElement>): void => {
    setWorksElement(event.target.value);
  }

  const addWorksListElement = (): void => {
    const newWorksListElement = { worksElementName: worksElement }
    setWorksList([...worksList, newWorksListElement]);
    setWorksElement('');
  }

  const deleteWork = (worksNameToDelete: string): void => {
    setWorksList(worksList.filter((worksElement) => 
      worksElement.worksElementName !== worksNameToDelete
    ))
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
              onChange={inputTextElement} />
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
              deleteWork={deleteWork} />;
          })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
