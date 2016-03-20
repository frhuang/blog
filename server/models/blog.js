import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title: String,
    describe: String,
    content: String,
    create_time: {type: Date, default: Date.now}
});

mongoose.model("Blog", BlogSchema);

