import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "username atleast 2 chr")
    .max(20, 'username not more than 20')
    .regex(/^[a-zA-Z0-9_]+$/, "username miust not contain sp. char")

export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({message: 'invalid email address'}),
    password: z.string().min(6,{message:'password must be at least 6 characters'})
})