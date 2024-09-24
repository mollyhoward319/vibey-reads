// todo: login logic
// todo: sign-up logic
// what needs to populate here: logo, 1 form for login with a login button, the login button will take you to th homepage, a sign-up botton will start the process of a sign-up form either in popup or another page. on finish sign-up they will go back to log-in
import logo from '../assets/VibeyReadsLong.png'

const Login = () => {
  return (
    <div className="form-wrapper">
       <img src={logo} alt="Vibey Reads Logo" className="logo" style={{ width: '750px', height: 'auto', marginBottom: '50px' }}/>

      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
