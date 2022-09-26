import { useNavigate } from "react-router-dom";
import "./Css_file/login.css"
import logo from "./logo.png"
export default function Test(){
  const signupText = useNavigate()
  function GoToSignUp(){
    signupText('/signup')
  }
    return(
        <>
            <div className="Login_outer">
                <div className="outer_row1">
                    <div className="outer_row11">
                        <div className="outer_row11_inner1">
                            <img src={logo} alt="invalid path"></img>
                            <label><h3>Logo</h3></label>
                        </div>
                        <div className="outer_row11_inner2">
                            <h3>Welcome!</h3>
                            <label>Please sign-in to your account</label>
                        </div>
                        <div className="outer_row11_inner3">
                            <input type='text' placeholder="Email"/>
                        </div>
                        <div className="outer_row11_inner4">
                            <input type='password' placeholder="Password"/>
                        </div>
                        <div className="outer_row11_inner5">
                            <input type='checkbox'/>
                            <label>Remember me?</label>
                            <div className="outer_row11_inner51">
                                <span>Forgot Password?</span>
                            </div>
                        </div>
                        <div className="outer_row11_inner6">
                            <button className="loginButton">Login</button>
                        </div>
                    </div>
                </div>
                <div className="outer_row2">
                    <label>New member?</label><span className="signupText" onClick={GoToSignUp}> Sign Up</span>
                </div>
            </div>
            
        </>
    );
}