import { UserRole } from '../../entity/User';

export interface UserDTO {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
<<<<<<< HEAD
export interface deleteDTO {
    name: string;
    email: string;
    role: UserRole;
}

=======
>>>>>>> 551407feec2c10129ae4db10a3e59a05d4011a55
export interface SaveUserDTO {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface LoginUserDTO {
    email: string;
    password: string;
}
