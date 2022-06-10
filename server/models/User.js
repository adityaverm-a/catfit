const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catHabitSchema = mongoose.Schema(
    {
        cleaningLitter: { 
            type: Number, 
            default: 0 
        },
        playTime: { 
            type: Number, 
            default: 0 
        },
        waterIntake: { 
            type: Number, 
            default: 0 
        },
        combingTime: { 
            type: Number, 
            default: 0 
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    }
)

const ProfileSchema = new Schema(
    {
        contactNumber: {
            type: Number, 
            default: 0 
        },
        plan: {
            type: String,
            default: ''
        },
        catName: {
            type: String,
        },
        catAge: {
            type: Number, 
            default: 0 
        },
        catWeight: {
            type: Number, 
            default: 0 
        },
        catDocument: {
            type: String, 
        },
        catHabitsTracking: {catHabitSchema},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    }
);

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isVet: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = User = mongoose.model('user', UserSchema);