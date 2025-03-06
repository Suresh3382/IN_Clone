export interface IUser {
    userId?: string;
    email: string;
    password: string;
    fullName: string;
    userName: string;
    follower?:string;
    following?:string;
}