import { useState } from 'react';

function LoggedIn() {
  const [isLogin, setisLogin] = useState(false); // primitive type can be untyped
  const HandleLogin = () => {
    setisLogin(true);
  };
  const HandleLogout = () => {
    setisLogin(false);
  };
  return (
    <div>
      <button type="submit" onClick={HandleLogin}>
        Logoin
      </button>
      <button type="submit" onClick={HandleLogout}>
        Logout
      </button>
      <div> user {isLogin ? 'login' : 'logout'}</div>
    </div>
  );
}

export default LoggedIn;
