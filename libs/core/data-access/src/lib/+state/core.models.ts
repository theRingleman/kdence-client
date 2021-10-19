/**
 * Interface for the 'Core' data
 */
import { Role } from '@kdence-client/users/data-access';

export interface CoreEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface SignupInput {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  roleType: Role;
}
