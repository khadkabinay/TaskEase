
const URL = "http://localhost:4000/tasks"


class TaskModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (taskId) => {
        return fetch(`${URL}/${taskId}`).then(response => response.json());
    }

       
    static create = (taskData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        })
        .then(response => response.json());
    }



    static edit = (taskId, taskData) => {
        return fetch(`${URL}/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData)
        })
        .then(response => response.json());
    
    
    }
    

    static destroy = (taskId, user)=>{
        console.log(user) 
        return fetch(`${URL}/${taskId}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(user)
        
        })
        .then(response => response.json());
       
        

    }





    

}


export default TaskModel;
