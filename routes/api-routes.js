const db = require("../models")

module.exports = function(app){
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
            .then(function(dbWorkout){
                res.json(dbWorkout)
            })
    })
    app.post("/api/workouts", function(req, res){
        db.Workout.create({})
            .then(function(dbWorkout){
                res.json(dbWorkout)
            })
            .catch(function(err) {
                res.json(err)
            })

    })
    app.put("/api/workouts/:id", function(req, res){
        db.Workout.findOneAndUpdate({_id:req.params.id}, {$push:{exercises:req.body}})
        .then(function(dbWorkout){
            res.json(dbWorkout)
        })
        .catch(function(err) {
            res.json(err)
        })
    })
}