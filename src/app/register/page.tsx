"use client"


import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { myRegisterSchema, RegisterType } from '@/schemas/registerschema.type'
// import { toast } from "@/components/ui/toast"

 
export default function Register() {
   const form = useForm<RegisterType>( {
    defaultValues : {
        "name": "",
        "email":"",
        "password":"",
        "rePassword":"",
        "phone":""
    } , 
    resolver : zodResolver(myRegisterSchema)
    }) ;

       const {handleSubmit , control } = form 

       async function submitfunc(data : RegisterType ) {
          console.log(data)
          try {
              const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup` , 
            {
              method : 'POST' ,
              body :   JSON.stringify(data) ,
              headers : {'content-type'  : 'application/json'}
            }
          );
          const dataa = await res.json()
            if(res.ok) {
              console.log(dataa.message)
              
            }else{
              console.log(dataa.message)
            }
                    }
          catch(err){
              console.log(err)
          }
            
      }


  return (

   
    <>
      <div className=' w-1/2 my-8 p-4 mx-auto '>
          <h1 className='text-center font-bold mb-7 text-4xl '> Welcome To Our Fresh Cart Website</h1>

          <form  onSubmit={handleSubmit(submitfunc)} className='flex flex-col gap-4'>
              <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="nameInput">Name : </FieldLabel>
                        <Input
                          {...field}
                          id="nameInput"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter Your Name"
                          autoComplete="off"
                        />
      
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
              <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="emailInput">Email : </FieldLabel>
                        <Input
                          {...field}
                          id="emailInput"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter Your Email"
                          autoComplete="off"
                        />
      
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
              <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="passwordInput">Password : </FieldLabel>
                        <Input
                        type="password"
                          {...field}
                          id="passwordInput"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter YOur Password"
                          autoComplete="off"
                        />
      
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
              <Controller
                    name="rePassword"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="rePasswordInput">rePassword : </FieldLabel>
                        <Input
                        type='password'
                          {...field}
                          id="rePasswordInput"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter RePassword "
                          autoComplete="off"
                        />
      
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
              <Controller
                    name="phone"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="phoneInput">Phone : </FieldLabel>
                        <Input
                          {...field}
                          id="phoneInput"
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter YOur Phone Number"
                          autoComplete="off"
                        />
      
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                      </Field>
                    )}
                  />
                  <Button className='w-full bg-black p-2 text-center' type="submit">Register Now .....</Button>
          </form>
      </div>
    </>
  )
}


