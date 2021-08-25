import './App.sass';
import Header from './components/header/header';
import Main from './components/main/main';
import SendHistory from './components/send-history/send-history';

function App() {
  return (
      <div className="app">
        <div className="container">
          <Header />
          <Main />
          <SendHistory />
        </div>
      </div>
  );
}

export default App;
