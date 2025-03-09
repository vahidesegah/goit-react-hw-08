import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <h1>Welcome to the Contact Manager!</h1>
      {isLoggedIn ? (
        <p>Here are your contacts...</p>
      ) : (
        <p>Please log in or register to manage your contacts.</p>
      )}
    </div>
  );
};

export default HomePage;
