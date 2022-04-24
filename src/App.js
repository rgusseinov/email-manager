import Header from './components/header/header';
import MailForm from './components/mail-sender/mail-form';
import MessageSent from './components/message-status/message-sent';
import useApps from './hooks/use-apps';
import '../src/scss/app.scss';

function App() {
  const { isEmailInQueue, handleDragStart } = useApps();
  return (
    <div className="app" onDragStart={handleDragStart}>
      <div className="content">
        <Header />
        {isEmailInQueue ? <MessageSent /> : <MailForm />}
      </div>
    </div>
  );
}

export default App;
