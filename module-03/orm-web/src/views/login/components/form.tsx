"use client";

import { Formik, FormikProps, Form } from "formik";
import useAuthStore from "@/stores/auth/auth.store";
import LoginSchema from "./schema";
import { ILoginParams } from "../types";

import { LoginService } from "@/features/auth/api/post.api";

export default function LoginForm() {
  const { onSuccess } = useAuthStore((state) => state);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginParams) => {
    try {
      const resp = await LoginService(values);
      onSuccess(resp.data.user);
      localStorage.setItem("token", resp.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<ILoginParams>) => {
        const { values, handleChange } = props;

        return (
          <Form>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="text"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <button type="submit">Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}
