
import './App.css';

import { BrowserRouter as Router} from 'react-router-dom';
import Login from './pages/Auth/Login';
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Login/>
        </Router>

      </Provider>
      
      
      
    </div>
  );
}

export default App;
