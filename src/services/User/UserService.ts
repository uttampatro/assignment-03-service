import User from '../../entity/User';
import { SaveUserDTO, UserDTO } from './UserDTO';

class UserService {
    async register(dto: UserDTO) {
        const { name, email, password, role } = dto;
        const user = new User({
            name,
            email,
            password,
            role,
        });
        await user.save();
        return user;
    }
    async login(dto: SaveUserDTO) {
        const { email, password } = dto;
        const user = await User.findOne({ email, password });
        return user;
    }
    async deleteUser() {}
}

export default new UserService();
