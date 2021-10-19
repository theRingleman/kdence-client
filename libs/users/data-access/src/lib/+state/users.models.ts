/**
 * Interface for the 'Users' data
 */
import { HouseholdsEntity } from '@kdence-client/households/data-access';

export interface UsersEntity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roles?: Role[];
  household?: HouseholdsEntity;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleType: Role;
}

export interface LoginResponse {
  access_token: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export enum Role {
  Parent = 'parent',
  Child = 'child',
}
