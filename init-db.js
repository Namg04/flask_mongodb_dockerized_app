db = db.getSiblingDB("task_db");
db.task_db.drop();

db.task_db.insertMany([
    {
        "task": "Task1",
        "result": "completed",

    },
    
]);
