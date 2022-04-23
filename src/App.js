import Header from './components/header/header';
import MailForm from './components/mail-sender/mail-form';
import '../src/scss/app.scss';
import MessageSent from './components/message-status/message-sent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { clearQueue } from './store/emailSlice';

function App() {
  const { isEmailInQueue, emails } = useSelector((data) => data.emails);
  const handleDragStart = (e) => e.preventDefault();
  const timerRef = useRef();
  const dispatch = useDispatch();
  console.log(`emails`, emails);

  useEffect(() => {
    setInterval(() => {
      dispatch(clearQueue());
    }, 2000);
    return () => clearInterval(timerRef.current);
  }, []);

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
