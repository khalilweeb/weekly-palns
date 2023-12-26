import clss from './AddTask.module.css'


const AddTask = (props) => {

 const addTaskHandler = e => {
    e.preventDefault()
 }

 
    return (
        < >
        <div className={clss.backdrop} onClick={props.click}>

        </div>
        <div className={clss.form}>
        <form onSubmit={addTaskHandler} >
            <label>Task</label>
            <input type="text"/>
            <div>
            <label>Time</label>
            <input type="number"/>
            <input type="number"/>
            <span>:</span>
            <input type="number"/>
            <input type="number"/>
            <label>to</label>
            <input type="number"/>
            <input type="number"/>
            <span>:</span>
            <input type="number"/>
            <input type="number"/>
            </div>
       
<button>Add</button>


        </form>
        </div>
   
                    
        </>
    )


}

export default AddTask;