import "../css/changeMinimumCalories.css"

const ChangeMinimumCalories = () =>{

    return (
        <div className="calories">
            <p className="title"><h3>Set new minimum calories</h3></p>
            <br/>

            <p><b>New minimum calories:</b></p>
            <br/>
            <input placeholder="New minimum calories"></input>
            <br/>
            <button>Confirm</button>
        </div>
    );
}

export default ChangeMinimumCalories;