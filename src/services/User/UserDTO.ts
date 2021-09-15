import { UserRole } from '../../entity/User';

export interface UserDTO {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
export interface deleteDTO {
    name: string;
    email: string;
    role: UserRole;
}

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
