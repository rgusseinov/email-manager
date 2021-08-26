import './App.sass';
import Header from './components/header/header';
import Main from './components/main/main';
import MessageStatus from './components/send-history/send-history';

function App() {
  return (
      <div className="app">
        <div className="content">
          <Header />
          <Main />
          <MessageStatus />
        </div>
      </div>
  );
}

export default App;
