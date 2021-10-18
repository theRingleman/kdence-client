/**
 * Interface for the 'Users' data
 */
export interface UsersEntity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
