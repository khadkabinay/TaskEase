const db = require('./models');
const userData = require('./users.json');
const taskData = require('./tasks.json');
require('dotenv').config()

db.User.deleteMany({}, (err, deletedUsers) => {
    db.User.create(userData.users, (err, seededUsers) => {
        if (err) console.log(err);
        
        console.log(userData.users.length, 'users created successfully');
        
        process.exit();
    });
});



db.Task.deleteMany({}, (err, deletedTasks) => {
    db.Task.create(taskData.tasks, (err, seededTasks) => {
        if (err) console.log(err);
        
        console.log(taskData.tasks.length, 'tasks created successfully');
        
        process.exit();
    });
});