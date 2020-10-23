const router=require("express").Router();
const db = require("../models")


router.get("/api/workouts",function(req, res){
    db.Workout.find().then(function(dbWorkout){
        res.json(dbWorkout)
    })
})

router.post("/api/workouts", function (req, res){
    db.Workout.create(req.body).then(function(dbWorkout){
        res.json(dbWorkout)
    })
})

router.put("/api/workouts/:id",function(req, res){
    db.Workout.findOneAndUpdate({_id:req.params.id},{$push:{
        exercises:req.body
    }}).then(function(dbWorkout){
        res.json(dbWorkout)
    })
})

router.get("/api/workouts/range", function(req, res){
    db.Workout.find().then(function(dbWorkout){
        res.json(dbWorkout)
    })
})

module.exports=router