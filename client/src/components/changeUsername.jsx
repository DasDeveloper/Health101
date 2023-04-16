import "../css/changeUsername.css"


const ChangeUsername = () =>{
    
    return(
        <div className="username">
            
            <p className="title"><h3>Change your username</h3></p>
            <br/>

            <p><b>New username:</b></p>
            <br/>
            <input placeholder="New username"></input>
            <br/>
            <button>Confirm</button>
            
        </div>
    )
}

export default ChangeUsername;