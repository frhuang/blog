import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var LabsSchema = new Schema({
    title: String,
    routeLink: String,
    demoLink: String,
    gitLink: String,
    content: String,
    create_time: {type: Date, default: Date.now}
});

mongoose.model("Labs", LabsSchema);

