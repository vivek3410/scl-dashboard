"use client";
import { CardWrapper } from './card-wrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod";
import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '../ui/form-error';
import { useState, useTransition } from 'react';
import { FormSuccess } from '../ui/form-success';
import { AdminLogin } from '@/actions/AdminLogin';

export default function StudentLoginform() { 
  const [error,seterror]=useState<string | undefined>("");
  const [success,setsuccess]=useState<string | undefined>("");
  const [ispending,startTransition]=useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      name: "",
      password: "",
    }
  });
const onSubmit=(values:z.infer<typeof LoginSchema>)=>{
  seterror("");
  setsuccess("");
startTransition(()=>{
  StudentLogin(values).then((data)=>{
    seterror(data.error);
    setsuccess(data.success);
  })
})
}
  return (
    <CardWrapper
      header="🎓 Student Login"
      headerLabel='Welcome to Student Login'
      backButtonhomeLabel='Back to home'
      backButtonloginLabel='Back to Login Page'
      backButtonhomeHref='/'
      backButtonloginHref='/login'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="email or username" type="text" 
                    disabled={ispending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" 
                     disabled={ispending}
                     />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error}/>
          <FormSuccess message={success}/>
          <Button
          type="submit"
          className='w-full'
          disabled={ispending}
          >
             {ispending? 'Loading...': 'Login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}