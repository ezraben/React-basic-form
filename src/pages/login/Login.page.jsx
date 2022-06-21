import { useState } from "react";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const handelFirsetnameChange = (ev) => {
    setFirstName(ev.target.value);
  };

  //////
  const [email, setEmail] = useState("");

  const handelEmailEvent = (ev) => {
    setEmail(ev.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handelLastNameEvent = (ev) => {
    setLastName(ev.target.value);
  };

  const [password, setPassword] = useState("");
  const handelPasswordEvent = (ev) => {
    setPassword(ev.target.value);
  };

  const [confirmPassword, setConfirmPass] = useState("");
  const handelConfirmPasswordEvent = (ev) => {
    setConfirmPass(ev.target.value);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={firstName}
          onChange={handelFirsetnameChange}
        />

        {!firstName && <div>do yo have name{firstName}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={lastName}
          onChange={handelLastNameEvent}
        />
      </div>
      {!lastName && <div>what is yor last name{lastName}</div>}
      /////////
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handelEmailEvent}
        />
        {!email && (
          <div id="emailHelp" className="form-text">
            pleas porvide email{email}
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={handelPasswordEvent}
        />
        {password.length < 8 && (
          <div>pass word need to be at least 8 charecter</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Confirm password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={confirmPassword}
          onChange={handelConfirmPasswordEvent}
        />
        {confirmPassword.length < 8 && (
          <div>password must be at least 8 charecters</div>
        )}
      </div>
      {confirmPassword != password && <div>confirm password dosnt match</div>}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default LoginPage;
