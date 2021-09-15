import Blog from '../../entity/Blog';
import User from '../../entity/User';
import { CreateBlogDTO } from './BlogDTO';

class BlogService {
    async createBlog(dto: CreateBlogDTO) {
        const { title, article, userId } = dto;
        const user = await User.findOne({ _id: userId }).select([
            'name',
            'email',
        ]);
        const blog = new Blog({
            title: title,
            article: article,
            createdBy: user!,
        });
        await blog.save();
        return blog;
    }
    async getAllBlogs(){
        const blogs = await Blog.find()
        return blogs
    }
}
export default new BlogService();
