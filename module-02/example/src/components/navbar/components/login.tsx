"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useSnackbar } from "notistack";
import useAuthStore from "@/store/useAuthStore";

export function LoginModal() {
  const { onAuthSuccess } = useAuthStore((state) => state);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = () => {
    if (emailRef.current?.value !== "") {
      onAuthSuccess({ email: emailRef.current?.value as string });
      enqueueSnackbar("Login Success", {
        autoHideDuration: 2000,
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">LOGIN</DialogTitle>
        </DialogHeader>
        <div className="grid flex-1 gap-4">
          <Input ref={emailRef} id="email" type="text" placeholder="Email" />
          <Input id="password" type="password" placeholder="password" />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={handleSubmit}>
              Login
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
