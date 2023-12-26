import clss from './AddTask.module.css'


const AddTask = (props) => {

 const addTaskHandler = e => {
    e.preventDefault()
    console.log('hei')

 }
 const timeInputHandler = e => {
    console.log(e.target.value);
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
            <input type="time" onChange={timeInputHandler}/>
           
            <label>to</label>
            <input type="time"  onChange={timeInputHandler}/>
           
            </div>
       
            <button>Add</button>


        </form>
        </div>
   
                    
        </>
    )


}

export default AddTask;