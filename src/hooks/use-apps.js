import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearQueue, updateEmailStatus } from '../store/emailSlice';
import { TIME_INTERVAL } from '../utils/utils';

const useApps = () => {
  const { isEmailInQueue } = useSelector((data) => data.emails);
  const handleDragStart = (e) => e.preventDefault();
  const dispatch = useDispatch();
  const timerRef = useRef();

  useEffect(() => {
    setInterval(() => {
      const randStatus = Math.floor(Math.random() * 3) + 1;
      dispatch(updateEmailStatus(randStatus));
      dispatch(clearQueue());
    }, TIME_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  return {
    handleDragStart,
    isEmailInQueue
  };
};

export default useApps;
