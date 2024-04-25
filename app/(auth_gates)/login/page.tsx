import { LoginForm } from "@/app/ui/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Connect",
  description: "Automate your large custom sales orders with ease.",
};

export default async function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}
