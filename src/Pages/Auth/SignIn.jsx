import React, { useState } from "react";
import amazon_letter_logo from "../../assets/images/logo/amazon_letter_logo.png";
import { Link } from "react-router-dom";
import styles from "./signIn.module.css";
import Loader from "../../components/Loader/Loder";
import {auth} from '../.../../../Utility/firebase'

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });

  return (
    <section className={styles.login}>
      <Link to="/">
        <img src={amazon_letter_logo} alt="" />
      </Link>

      <div className={styles.login__container}>
        <h1>Sign In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            // onClick={authHandler}
            name="signin"
            className={styles.login__signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          name="signup"
          // onClick={authHandler}
          className={styles.login__registerButton}
        >
          {loading.signUP ? (
            <Loader color="#000" size={15}></Loader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
      </div>
    </section>
  );
}

export default SignIn;
