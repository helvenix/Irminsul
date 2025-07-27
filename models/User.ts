import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    // ─────────────── Authentication ───────────────
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    passwordHash: { type: String, required: true },

    // ─────────────── Profile ───────────────
    name: { type: String, required: true, trim: true, maxlength: 50 },
    avatarUrl: { type: String, default: null },

    // ─────────────── Stats ───────────────
    currentLevel: { type: Number, default: 1 },
    streak: { type: Number, default: 0 },
    totalBlessings: { type: Number, default: 0 },
    lastActivityAt: { type: Date, default: null },
    selectedAward:  { type: Schema.Types.ObjectId, ref: 'Award', default: null }
}, {timestamps: true});

export default mongoose.models.User || mongoose.model('User', UserSchema);