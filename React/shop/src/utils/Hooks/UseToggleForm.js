import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';

function useToggleForm() {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.user.showForm);

  const handleToggle = () => {
    dispatch(toggleForm(!showForm));
  };

  return [showForm, handleToggle];
}

export default useToggleForm;