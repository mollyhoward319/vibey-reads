const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="username" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};
export default Signup;
