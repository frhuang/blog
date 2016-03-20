import mongoose, { Schema } from 'mongoose';


const UserSchema = new Schema({
    name: String,
    password: String
});

UserSchema.statics.findByName = function(params, cb) {
    return this.findOne(params, cb);
};

mongoose.model('User', UserSchema);

