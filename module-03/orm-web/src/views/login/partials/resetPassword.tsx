"use client";

import { Formik, FormikProps, Form } from "formik";

import { IResetPasswordParams } from "../types";

import { ResetPasswordService } from "@/features/auth/api/post.api";

export default function ResetPasswordForm() {
  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values: IResetPasswordParams) => {
    try {
      const resp = await ResetPasswordService(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik<IResetPasswordParams>
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<IResetPasswordParams>) => {
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
            <button type="submit">Reset Password</button>
          </Form>
        );
      }}
    </Formik>
  );
}
