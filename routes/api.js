const router = require("express").Router();
const db = require ("../models");


    router. get("/api/workouts", (req, res) => {
        db.Workout.find ({})
        .then(bdWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    
    router.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    exercises: req.body
                }
            }
        )

        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    router.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(bdWorkout => {
            res.json(dbWorkout);
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    router.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbUser => {
            res.json(dbUser);
        });
    });

    module.exports = router;