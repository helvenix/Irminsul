import mongoose from 'mongoose';
const { Schema } = mongoose;

const MemberSubschema = new Schema({
    userId:        { type: Schema.Types.ObjectId, ref: 'User', required: true },
    contributions: { type: Number, default: 0 }
}, { _id: false });

const ProjectSchema = new Schema({
    name:       { type: String, required: true, trim: true },
    description:{ type: String, default: '', trim: true },
    ownerId:    { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isTeam:     { type: Boolean, default: false },
    members:    [MemberSubschema],
    blessings:  { type: Number, default: 0 },
    height:     { type: Number, default: 0 }
}, { timestamps: true });

ProjectSchema.index({ 'members.userId': 1 });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
