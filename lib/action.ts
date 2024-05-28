"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { sign, verify } from "./jwt";
import { prisma } from "./prisma";

export async function userLogin(formData: FormData) {
  const user = await prisma.user.findUniqueOrThrow({
    where: { email: formData.get("email") as string },
    include: { Password: {} },
  });
  const passwordIsEqual = bcrypt.compareSync(
    formData.get("password") as string,
    user.Password?.password as string,
  );
  if (!passwordIsEqual) {
    throw new Error("Invalid password");
  }
  const token = await sign({ userLogin: user.id });
  cookies().set("userLogin", token);
  revalidatePath("/");
}

export async function userLogout() {
  cookies().delete("userLogin");
  revalidatePath("/");
}

export async function userContext() {
  const token = cookies().get("userLogin")?.value;
  const { userLogin } = await verify(token!);
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userLogin },
  });
  return { user };
}
