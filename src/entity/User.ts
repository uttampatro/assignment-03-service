import { model, Schema } from 'mongoose';

export enum UserRole {
    ADMIN = 'admin',
    CONTENT_WRITER = 'content-writer',
}

export interface User {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    email: {
        type: String,
        required: true,
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

export default model<User>('user', userSchema);
