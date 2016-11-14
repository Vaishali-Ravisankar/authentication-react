import React from 'react';
import {render} from 'react-dom';
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}


class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : 'vaishali',
      password : 'vaishali'
    }
    this.onSubmit = this.onSubmit.bind(this);

  }
  onSubmit(e){
    e.preventDefault();

    alert('clicked');
  }
  render(){
     return(
       <div className="text-center">
      <h2>Login</h2>
    <form onSubmit={this.onSubmit} className="form-horizontal">
        <input className="form-control" name="username" placeholder="Username" type="text" value={this.state.username}></input><br/>
        <input className="form-control" name="password" placeholder="Password" type="password" value={this.state.password}></input>
        <br/>
        <div className="g-recaptcha" data-sitekey="6Lf-5AsUAAAAAD-dyYK0kTzhoGjMV2bgikYSE8zv"></div>
        <ReCAPTCHA ref="recaptcha"s
           sitekey="6Lf-5AsUAAAAAD-dyYK0kTzhoGjMV2bgikYSE8zv"
           onChange={onChange}/>
           <br/>
        <button className="btn btn-warning" type="submit">Sign up for WebApp</button>
    </form>
</div>


     );
  }

}

export default Greeting;
