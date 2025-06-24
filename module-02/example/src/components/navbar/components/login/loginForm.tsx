"use client";
import { useState } from "react";
import { Formik, Form, FormikProps } from "formik";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";
import { ILoginArgs } from "@/features/auth/type";
import LoginSchema from "./schema";
import { LoginService } from "@/features/auth/api/get.auth";
import { useSnackbar } from "notistack";

export default function LoginForm() {
  const { onAuthSuccess } = useAuthStore((state) => state);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const initialValues: ILoginArgs = {
    email: "",
    password: "",
  };

  const handleSubmit = ({ email, password }: ILoginArgs) => {
    LoginService({ email, password })
      .then((data) => {
        onAuthSuccess({ email: data.email });
        enqueueSnackbar("Login Success", {
          autoHideDuration: 1000,
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      })
      .catch((err) =>
        enqueueSnackbar("Email atau password salah", {
          autoHideDuration: 1000,
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        })
      );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<ILoginArgs>) => {
        const { values, errors, touched, handleChange } = props;

        return (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl mb-4">
                LOGIN
              </DialogTitle>
            </DialogHeader>
            <Form>
              <div className="grid flex-1 gap-4">
                <div className="flex flex-col gap-1">
                  <Input
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <div className="text-red-500 text-xs ml-1 min-h-4">
                    {touched.email && errors.email && `*${errors.email}`}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="relative w-full">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <span
                      className="absolute inset-y-0 right-4 flex items-center hover:cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </span>
                  </div>
                  <div className="text-red-500 text-xs ml-1 min-h-4">
                    {touched.password &&
                      errors.password &&
                      `*${errors.password}`}
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="submit" variant="secondary">
                      Login
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </div>
            </Form>
          </DialogContent>
        );
      }}
    </Formik>
  );
}
