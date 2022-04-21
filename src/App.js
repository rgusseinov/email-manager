import Header from './components/header/header';
import MailForm from './components/mail-sender/mail-form';
import '../src/scss/app.scss';
import MessageSent from './components/message-status/message-sent';
import { useSelector } from 'react-redux';

function App() {
  const { isEmailInQueue } = useSelector((data) => data.emails);
  const handleDragStart = (e) => e.preventDefault();
  console.log(`isEmailInQueue`, isEmailInQueue);
  return (
    <div className="app" onDragStart={handleDragStart}>
      <div className="content">
        <Header />
        <MailForm />
        <br />
        <MessageSent />
      </div>
    </div>
  );
}

export default App;
