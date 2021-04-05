const db = require ("../models");

module.exports = function(app) {
   // come back and add route
    app. get("/api/workouts", (req, res) => {
        db.Workout.find ({})
        .then(bdWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    app.put("/api/workouts/:id", (req, res) => {
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
            res.json(err);
        });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(bdWorkout => {
            res.json(dbWorkout);
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbUser => {
            res.json(dbUser);
        });
    });
};