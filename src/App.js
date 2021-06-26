import React,{useContext}  from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/Context/auth-context';
function App() {
const ctx = useContext(AuthContext)
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn','1')
  //   setIsLoggedIn(true);
  //   console.log(isLoggedIn);
  // };
  // useEffect(()=>{
  //   const storedUSerLoggedInformation  = localStorage.getItem('isLoggedIn')
  //   if(storedUSerLoggedInformation === '1'){
  //     setIsLoggedIn(true);
  //   }
  // },[]);
  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  //   console.log(isLoggedIn);
  // };

  return (
    <React.Fragment>
       {/* <AuthContext.Provider value = {{
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler
      }}> */}
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home  />}
      </main>
      {/* </AuthContext.Provider> */}
     </React.Fragment>
  );
}

export default App;
