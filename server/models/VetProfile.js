const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VetProfileSchema = new Schema(
    {
        vet: {
            type: Schema.Types.ObjectId,
            ref: 'vets'
        },
        approved: {
            type: Boolean,
            default: false
        },
        qualifications: {
            type: String,
        },
        experience: {
            type: Number, 
            default: 0 
        },
        contactNumber: {
            type: Number, 
            default: 0 
        },
        vetDocument: {
            type: String, 
        }
    },
    {
        timestamps: true
    }
);

// const VetSchema = new Schema(
//     {
//         firstName: {
//             type: String,
//             required: true
//         },
//         lastName: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         profile: {VetProfileSchema}
//     },
//     {
//         timestamps: true
//     }
// );

module.exports = VetProfile = mongoose.model('vetProfile', VetProfileSchema);