import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    //check user auth status
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn === "true"){
      window.location.reload();
      navigate('/profile');
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameOrEmail === 'hope' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      navigate('/profile')
      window.location.reload();
      alert('Successfully logged in!')

    } else {
      alert('Invalid username/email or password');
    }
  };

  return (
    <div className="login_form">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="login-form">
            <h2 className="text-center">Student Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group pt-2">
                <label htmlFor="username_or_email">Username or Email</label>
                <input type="text" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} className="form-control" id="username_or_email" name="username_or_email" placeholder="Enter username or email" required/>
              </div>
              <div className="form-group pt-2">
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" name="password" placeholder="Enter password" required/>
              </div>
              <div className="form-group pt-4">
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </div>

              {/* <div className='pt-2'>
                <NavLink to="/register">Don&apos;t have an account?</NavLink>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login