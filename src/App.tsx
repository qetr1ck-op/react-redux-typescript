import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { MyCompContainer } from './components/connected';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <MyCompContainer foo="foo-value" />
      </div>
    </Provider>
  );
};

export default App;
