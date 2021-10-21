export const BASE_APP_URL = 'http://localhost:3000';
export const profileRoute = (): string => `${BASE_APP_URL}/profile`;
export const loginRoute = (): string => `${BASE_APP_URL}/auth/login`;
export const householdsRoute = (): string => `${BASE_APP_URL}/households`;
export const usersRoute = (householdId: number): string =>
  `${BASE_APP_URL}/households/${householdId}/users`;
export const goalsRoute = (householdId: number): string =>
  `${BASE_APP_URL}/households/${householdId}/goals`;
