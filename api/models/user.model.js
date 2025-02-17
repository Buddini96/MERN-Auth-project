import mongoose from 'mongoose'

// rules and conditions

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true}); // Timestamp true means each user is going to 
                        // have 2 extra information. (the time of creation and the time of edit). 
                        // So mongo db automatically add these 2 information.

const User = mongoose.model('User', userSchema);

export default User;