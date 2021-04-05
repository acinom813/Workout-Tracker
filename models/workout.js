const mongoose = require("mongoose");
const schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Data,
        default: Date.now
    },

    exercise: [
        {
            type: {
                type: String
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name is required."
            },
            distance: Number,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
});

WorkoutSchema.virtual("totalDuration").get(function() {
    let duration = 0;
    this.exercises.forEach(exercise =>{
        totalDuration += exercise.duration;
    });
    return totalDuration;
});

WorkoutSchema.set('toJSON', {virtual: true});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;