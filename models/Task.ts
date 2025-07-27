import mongoose from 'mongoose';
const { Schema } = mongoose;

const TaskSchema = new Schema({
    projectId:      { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    userId:         { type: Schema.Types.ObjectId, ref: 'User', required: true },

    title:          { type: String, required: true, trim: true },
    description:    { type: String, trim: true },
    start:          { type: Date, required: true },
    deadline:       { type: Date, required: true },

    proof:          [{ type: String }], 
    effortPoints:   { type: Number, default: 1 },

    status:         { type: String, enum: ['pending','completed'], default: 'pending' },
    completedAt:    { type: Date }
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
