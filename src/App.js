import Header from './components/header/header';
import MailSender from './components/mail-sender/mail-sender';
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
        <MailSender />
        {/* <MessageStatus /> */}
      </div>
    </div>
  );
}

export default App;
