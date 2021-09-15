import { UserRole } from '../../entity/User';

export interface SaveUserDTO {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface UserDTO {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
export interface DeleteDTO {
    name: string;
    email: string;
    role: UserRole;
}



export interface LoginUserDTO {
    email: string;
    password: string;
}
