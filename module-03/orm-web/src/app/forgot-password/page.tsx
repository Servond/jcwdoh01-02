"use client";
import { Formik, FormikProps, Form } from "formik";
import { useSearchParams } from "next/navigation";

import { IForgotPasswordParams } from "./types";
import { ChangePasswordService } from "@/features/auth/api/post.api";
import { ResetPasswordService } from "@/features/auth/api/post.api";
export default function ForgotPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const initialValues = {
    password: "",
  };

  const handleSubmit = async (values: IForgotPasswordParams) => {
    try {
      const resp = await ChangePasswordService({
        password: values.password,
        token,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik<IForgotPasswordParams>
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<IForgotPasswordParams>) => {
        const { values, handleChange } = props;

        return (
          <Form>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="text"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <button type="submit">Reset Password</button>
          </Form>
        );
      }}
    </Formik>
  );
}
