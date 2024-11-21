export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];

// This is an example of how to use enum types (useful for strict type checking)
