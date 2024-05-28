"use client";

import { userLogin } from "@/lib/action";
import { SubmitButton } from "./ui/SubmitButton";

export function Login() {
  return (
    <form action={userLogin}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <SubmitButton>Login</SubmitButton>
    </form>
  );
}
