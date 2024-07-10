import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./index.css";
export default function page() {
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="social-login">
        <button>
          <FcGoogle />
        </button>
        <button>
          <FaApple className="text-black" />
        </button>
        <button>
          <FaFacebook className="text-[#316FF6]" />
        </button>
      </div>
      <div className="divider">
        <div className="line"></div>
        {/* <p>Or</p> */}
        {/* <div className="line"></div> */}
      </div>

      <form>
        <label>Email:</label>
        <div className="custom-input">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="off"
          />
        </div>
        <label>Password:</label>
        <div className="custom-input">
          <input type="password" name="password" placeholder="Your Password" />
        </div>
        <button className="login">Login</button>
        <div className="links">
          <a href="#">Reset Password</a>
          <a href="#">Don't have an account?</a>
        </div>
      </form>
    </div>
  );
}
