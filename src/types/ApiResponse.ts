import { Message } from "@/models/User";

export interface ApiResopnse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean 
    messages?:Array<Message>
}