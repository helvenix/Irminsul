import mongoose from 'mongoose';
const { Schema } = mongoose;

const AwardScchema = new Schema({
    userId:         { type: Schema.Types.ObjectId, ref: 'User',    required: true, index: true },
    projectId:      { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    code:           { type: String, required: true, trim: true },  
    name:           { type: String, required: true, trim: true },
    description:    { type: String, requried: true, trim: true },
    iconUrl:        { type: String, default: null },
    awardedAt:      { type: Date, default: Date.now }
})