import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail"

import { ApiResopnse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResopnse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'email',
            subject: 'PuzzleGram message | verification code',
            react: VerificationEmail({username, otp: verifyCode}),
        })
        return{success:true, message:'successfully sent verification email'}
    } catch (emailError){
        console.error("Error sending verification email", emailError)
        return{success:false, message:'failed to send verification email'}
    }
}