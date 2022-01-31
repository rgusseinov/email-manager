import Header from './components/header/header';
import MailForm from './components/mail-sender/mail-form';
// import MessageStatus from './components/message-status/message-status';
import '../src/scss/app.scss';

function App() {
  const handleDragStart = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app" onDragStart={handleDragStart}>
      <div className="content">
        <Header />
        <MailForm />
        {/* <MessageStatus /> */}
      </div>
    </div>
  );
}

export default App;
