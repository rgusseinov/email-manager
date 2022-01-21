import Header from './components/header/header';
import Main from './components/main/main';
import '../src/scss/app.scss';
// import MessageStatus from './components/message-status/message-status';

function App() {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <Main />
        {/* <MessageStatus /> */}
      </div>
    </div>
  );
}

export default App;
