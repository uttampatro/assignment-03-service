import { model, Schema } from 'mongoose';
import { BlogDTO } from '../services/Blog/BlogDTO';

const blogSchema = new Schema<BlogDTO>({
    title: {
        type: String,
        required: true,
        min: 3,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    article: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
});

export default model<BlogDTO>('blog', blogSchema);
