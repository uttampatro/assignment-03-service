import User from '../../entity/User';
import { DeleteDTO, LoginUserDTO, SaveUserDTO } from './UserDTO';

class UserService {
    async register(dto: SaveUserDTO) {
        const { name, email, password, role } = dto;
        //TODO: encrypt password
        const user = new User({
            name,
            email,
            password,
            role,
        });
        await user.save();
        return user;
    }
    async login(dto: LoginUserDTO) {
        const { email, password } = dto;
        const user = await User.findOne({ email, password });
        return user;
    }
    async deleteUser(_id: any) {
        const user = await User.findByIdAndDelete(_id);
        return user;
    }
    async getAllUsers() {
        const users = await User.find();
        return users;
    }
    async getUser(_id: string) {
        const users = await User.findById(_id);
        return users;
    }
}

export default new UserService();
