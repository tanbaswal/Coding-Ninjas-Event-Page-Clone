import React from 'react';


function LoginPopup(props) {

  function validation(){
    var form=document.getElementById("form");
    var email=document.getElementById("phoneEmail").value;
    var button=document.getElementById("button-submit");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern))
    {
      form.classList.add("valid");
      form.classList.remove("invalid");
      button.style.opacity="1";
      button.style.cursor="pointer";
    }
    else{
      form.classList.remove("invalid");
      form.classList.add("valid");
      button.style.opacity="0.5";
      button.style.cursor="auto";
    }
  }

  return (props.trigger) ? (
  <div className="cdk-overlay-container">
  <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
  <div className="cdk-global-overlay-wrapper" dir="ltr">
  <div id="cdk-overlay-13" className="cdk-overlay-pane">
  <div tabindex="0" className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
  <div tabindex="-1" aria-modal="true" className="mat-dialog-container" id="mat-dialog-13" role="dialog">
  <div className="star-inserted">
  <div className="login-dialog-container">
  <div className="login-header">
  <div className="heading">Login / Sign Up</div>
  <div className="close" onClick={() => props.setTrigger(false)}></div>
  </div>
  <div className="login-container">
  <div className="social-login">
  <div><button className="login-btn"><img src="./images/google.png" width="20" alt="google"/><span>Login with Google</span></button></div>
  <div><button className="login-btn"><img src="./images/facebook.png" width="25" alt="facebook"/><span>Login with Facebook</span></button></div>
  </div>
  <div className="ui horizontal divider">OR</div>
  <div className="ninjas-login">
  <div className="email-address">use your email address</div>
  <section className="form-container">
  <div className="form-wrapper">
  <form className="untouched pristine invalid">
  <div className="field-row field">
  <div color="accent" id="form" className="mat-form-field mat-focused mat-form-field-invalid mat-accent mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder untouched pristine">
  <div className="mat-form-field-wrapper">
  <div className="mat-form-field-flex">
  <div className="mat-form-field-infix">
  <input type="text" matinput="" formcontrolname="emailPhoneControl" id="phoneEmail" required class="mat-input-element mat-form-field-autofill-control untouched pristine invalid cdk-text-field-autofill-monitored" placeholder="Email address" aria-invalid="false" aria-required="true" onKeyDown={validation}/>
  <span className="mat-form-field-label-wrapper">
  <label className="mat-form-field-label mat-empty mat-form-field-empty mat-accent star-inserted" id="mat-form-field-label-27" for="phoneEmail" aria-owns="phoneEmail">
  <span className="star-inserted">Email address</span>
  <span aria-hidden="true" className="mat-placeholder-required mat-form-field-required-marker star-inserted"> *</span>
  </label>
  </span>
  </div>
  </div>
  <div className="mat-form-field-underline star-inserted">
  <span className="mat-form-field-ripple mat-accent"></span>
  </div>
  <div className="mat-form-field-subscript-wrapper">
  <div className="mat-form-field-hint-wrapper trigger trigger-transitionMessages star-inserted" style={{opacity: "1", transform: "translateY(0%)"}}>
  <div className="mat-error star-inserted" role="alert">Email is required</div>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div className="buttons-row">
    <div className="submit-buttons"><button type="submit" id="button-submit" className="submit-button loading-button expand disabled"> Continue </button></div>
  </div>
  </form>
  </div>
  </section>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div tabindex="0" className="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
  </div>
  </div>
  </div>
) : "";

}

export default LoginPopup;
