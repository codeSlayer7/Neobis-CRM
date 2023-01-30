import { useState } from 'react';

interface AuthUser {
  name: string;
  email: string;
}

function User() {
  // const [user, setUser] = useState<AuthUser | null>(null); // primitive type can be untyped
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const HandleLogin = () => {
    setUser({
      name: 'bakyt',
      email: 'lkmsppsc',
    });
  };
  //   const HandleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button type="submit" onClick={HandleLogin}>
        Logoin
      </button>
      <button type="submit" onClick={HandleLogout}>
        Logout
      </button>
      <div> user {user?.name}</div>
    </div>
  );
}

export default User;
