import User from '../../entity/User';
import { LoginUserDTO, SaveUserDTO } from './UserDTO';

class UserService {
    async register(dto: SaveUserDTO) {
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

    async login(dto: LoginUserDTO) {
        const { email, password } = dto;
        const user = await User.findOne({ email, password });
        return user;
    }

    async deleteUser() {}
}

export default new UserService();
