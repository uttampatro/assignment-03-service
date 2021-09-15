import { model, Schema } from 'mongoose';

export interface Blog {
    title: string;
    article: string;
    date: Date;
}

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 3,
    },
    article: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default model('blog', blogSchema);
