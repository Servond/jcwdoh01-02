"use client";

import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/auth/authStore";
export default function Login() {
  const { onLoginSuccess } = useAuthStore((state) => state);
  return (
    <div className="container flex justify-center items-center py-6">
      <Button
        variant="outline"
        onClick={() =>
          onLoginSuccess({
            email: "test@gmail.com",
            firstname: "test",
            lastname: "1",
          })
        }
      >
        Login
      </Button>
    </div>
  );
}
