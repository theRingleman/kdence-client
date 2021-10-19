/**
 * Interface for the 'Households' data
 */
import { UsersEntity } from '@kdence-client/users/data-access';

export interface HouseholdsEntity {
  id: number; // Primary ID
  name: string;
  users?: UsersEntity[];
}

export interface CreateHouseholdDto {
  name: string;
}
