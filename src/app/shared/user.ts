export interface User {
  username: string;
  //password: string;
  email: string;
  first_name: string;
  last_name: string;
  watch_list: string[];
  error: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface SignupRequest {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}