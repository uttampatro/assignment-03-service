import { model, Schema } from 'mongoose';
import { SaveUserDTO } from '../services/User/UserDTO';

export enum UserRole {
    ADMIN = 'admin',
    CONTENT_WRITER = 'content-writer',
}

const userSchema = new Schema<SaveUserDTO>({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 6,
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 8,
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.CONTENT_WRITER,
        required: true,
    },
    blogs: {
        type: Schema.Types.ObjectId,
        ref: 'blog',
    },
});

export default model<SaveUserDTO>('user', userSchema);
