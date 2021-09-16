import Blog from '../../entity/Blog';
import User from '../../entity/User';
import { CreateBlogDTO } from './BlogDTO';

class BlogService {
    async createBlog(dto: CreateBlogDTO) {
        const { title, article, userId, imageUrl } = dto;
        const user = await User.findOne({ _id: userId }).select([
            'name',
            'email',
        ]);
        const blog = new Blog({
            title: title,
            article: article,
            imageUrl: imageUrl,
            createdBy: user!,
        });
        await blog.save();
        return blog;
    }
    async getAllBlogs() {
        const blogs = await Blog.find();
        return blogs;
    }
    async getBlogByBlogId(id: any) {
        const blog = await Blog.findOne({ _id: id });
        return blog;
    }
    async deleteBlog(_id: any) {
        const blog = await Blog.findByIdAndDelete(_id);
        return blog;
    }
    async getBlogsByWriter(id: any) {
        const blogs = await Blog.find({ _id: id });
        return blogs;
    }
}
export default new BlogService();
