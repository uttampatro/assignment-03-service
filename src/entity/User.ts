import { model, Schema } from 'mongoose';
import { UserDTO } from '../services/User/UserDTO';

export enum UserRole {
    ADMIN = 'admin',
    CONTENT_WRITER = 'content-writer',
}

const userSchema = new Schema<UserDTO>({
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
});

export default model<UserDTO>('user', userSchema);
