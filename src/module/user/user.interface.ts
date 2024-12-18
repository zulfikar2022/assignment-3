export type TUser = {
  // define the user properties
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  isBlocked: boolean;

  // define the instance methods
};
