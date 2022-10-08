import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>HIMANSHU MEDIA</h1>
                <h6>Explore the ideas throught the world</h6>
            </div>
        </div>

        <SignUp />
    </div>

      )
}

function SignUp(){
    return(
        <div className="a-right">
            <form className="infoForm">

                <h3>Sign Up</h3>

                <div>
                    < input type="text" placeholder='First Name' className='infoInput' name= 'firstName'/>
                    < input type="text" placeholder='Last Name' className='infoInput' name= 'lastName'/>
                </div>

                <div>
                    <input type="text" className="infoInput" name='username' placeholder="Usernames"/>
                </div>

                <div>
                    <input type="text" className="infoInput"  name="password" placeholder="Password"/>
                </div>
                
                <div>
                    <input type="text" className="infoInput" name="confirmpass"  placeholder="Confirm Password"/>
                </div>

                <div>
                
                    <span style={{fontSize:'12px'}}>Already have an account. Login</span>
                    
                </div>
                <button className="button infoButton" type='Submit'>Signup</button>
            </form>
        </div>
    )
}


export default Auth
