import React from 'react' 

const ProgressBar =(props) =>{
    
        function countTask(taskArr){
            let completedTask = 0
            let totalLen = props.userProgress.tasks.length
        
        taskArr.forEach(task => {
            if(task.isCompleted){
                completedTask += 1
            }
            
        });

            if(totalLen === null || totalLen < 1){
                return 0
            }else{
            return (completedTask / props.userProgress.tasks.length) * 100

            }

            }


        return (
            <div className="progress mb-2"  style={{width: "100%", height:"25%" }}>
                <div className="progress-bar" role="progressbar" style={{width: `${Math.floor(countTask(props.userProgress.tasks))}%`}} aria-valuenow={0}  aria-valuemax={100}> <h5>{props.userProgress.name} {Math.floor(countTask(props.userProgress.tasks))}% </h5></div><br></br>
            </div>
       
         )
}


export default ProgressBar;
