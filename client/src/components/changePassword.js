import "../css/changePassword.css"

const ChangePassword = () =>{
    
    return(
        <div className="password">

            <p className="title">Change your password</p>
            <br/>

            <p><b>New password:</b></p>
            <br/>
            <input></input>
            <br/>
            <p><b>Confirm new password:</b></p>
            <br/>
            <input></input>
            <br/>
            <button>Confirm</button>
            
        </div>
    )
}

export default ChangePassword;