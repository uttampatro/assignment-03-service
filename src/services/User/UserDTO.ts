import { UserRole } from '../../entity/User';

export interface UserDTO {
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
    email: string;
    password: string;
}
