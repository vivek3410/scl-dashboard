"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "../ui/form-error";
import { useState, useTransition } from "react";
import { FormSuccess } from "../ui/form-success";
import { Adminsignupforms } from "@/actions/Adminsignupforms";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AdminsignUpForm() {
  const [error, seterror] = useState<string | undefined>("");
  const [success, setsuccess] = useState<string | undefined>("");
  const [ispending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "", 
      isActive: "isActive",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    seterror("");
    setsuccess("");
    startTransition(() => {
      Adminsignupforms(values).then((data) => {
        seterror(data.error);
        setsuccess(data.success);
      });
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="justify-between  text-white"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="John"
                  type="text"
                  disabled={ispending}
                  className="p-[30px] bg-[#151c2c] border-[2px] border-[#2e374a] rounded-[5px] mt-[30px] w-[45%]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="email"
                  type="email"
                  disabled={ispending}
                  className="p-[30px]  bg-[#151c2c] border-[2px] border-[#2e374a] rounded-[5px] mt-[30px] w-[45%]"
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
                <Input
                  {...field}
                  placeholder="******"
                  type="password"
                  disabled={ispending}
                  className="p-[30px]  bg-[#151c2c] border-[2px] border-[#2e374a] rounded-[5px] mt-[30px] w-[45%]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ConfirmPassword</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="******"
                  type="password"
                  disabled={ispending}
                  className="p-[30px] bg-[#151c2c] border-[2px] border-[#2e374a] rounded-[5px] mt-[30px] w-[45%]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
  control={form.control}
  name="role"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Select Role</FormLabel>
      <FormControl>
        <Select
          value={field.value}
          onValueChange={field.onChange}
        >
          <SelectTrigger className="w-[45%] p-[30px] border-[2px]  bg-[#151c2c] border-[#2e374a] rounded-[5px] mt-[30px]">
            <SelectValue placeholder="Select Role "/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-[#151c2c] text-white">
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Teacher">Teacher</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="isActive"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Select Active</FormLabel>
      <FormControl>
        <Select
          value={field.value}
          onValueChange={field.onChange}
        >
          <SelectTrigger className="w-[45%] p-[30px] border-[2px]  bg-[#151c2c] border-[#2e374a] rounded-[5px] mt-[30px]">
            <SelectValue placeholder="Select isActive" />
          </SelectTrigger>
          <SelectContent className="bg-[#151c2c] text-white">
            <SelectGroup>
              <SelectItem value="isActive">isActive</SelectItem>
              <SelectItem value="NotActive">NotActive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          className="w-full p-[30px] bg-teal-700 border-none rounded-[5px] cursor-pointer"
          disabled={ispending}
        >
          {ispending ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
}
