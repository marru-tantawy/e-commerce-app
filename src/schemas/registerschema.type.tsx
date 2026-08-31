import * as zod from "zod"




 export const myRegisterSchema = zod.object({
  name : zod.string("name must be text").nonempty("Name is required").min(3 , "min length is 3 characters").max(10 , "max length is 10 characters "),
  email : zod.email("invalid email").nonempty("email is required") ,
  password : zod.string().min(6, "Password must be at least 6 characters"),
  rePassword : zod.string().min(6, "Please confirm your password"),
  phone : zod.string("").regex(/^01[0125][0-9]{8}$/, "Please enter a valid Egyptian phone number")
 })


    export type RegisterType = zod.infer<typeof myRegisterSchema>


 export const myLogInSchema = zod.object({
  email : zod.email("invalid email").nonempty("email is required") ,
  password : zod.string().min(6, "Password must be at least 6 characters"),
 })


    export type LogInType = zod.infer<typeof myLogInSchema>