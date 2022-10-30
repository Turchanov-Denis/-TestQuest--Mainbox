import React from 'react';
import './sass/style.scss'
import { TodosForm } from './components/TodosForm'
const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <TodosForm> </TodosForm>
    </div>
  );
}

export default App;
