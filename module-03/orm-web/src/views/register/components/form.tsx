"use client";

import { useState } from "react";
import { Formik, FormikProps, Form } from "formik";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/auth/auth.store";
import RegisterSchema from "./schema";
import { IRegisterParams } from "../types";
import Image from "next/image";

import createUserService from "@/features/user/api/post.api";

export default function RegisterForm() {
  const { onSuccess } = useAuthStore((state) => state);
  const [avatarPreview, setAvatarPreview] = useState<File | null>(null);
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    avatar: null,
    role: "",
  };

  const handleSubmit = async (values: IRegisterParams) => {
    try {
      await createUserService(values);
      // router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik<IRegisterParams>
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<IRegisterParams>) => {
        const { values, handleChange, setFieldValue } = props;

        return (
          <Form>
            <div className="flex flex-col">
              <label htmlFor="Avatar">Avatar:</label>
              <input
                id="avatar"
                type="file"
                multiple={false}
                onChange={(e) => {
                  if (e.target.files) {
                    setFieldValue("avatar", e.target.files[0]);
                    setAvatarPreview(e.target.files[0]);
                  }
                }}
              />
              {avatarPreview && (
                <div className="relative rounded-full w-64 h-64">
                  <Image
                    className="absolute rounded-full"
                    fill
                    alt="avt"
                    src={URL.createObjectURL(avatarPreview)}
                  />
                </div>
              )}
            </div>
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
            <div className="flex flex-col">
              <label htmlFor="password">First Name:</label>
              <input
                id="firstname"
                type="text"
                onChange={handleChange}
                value={values.firstname}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname">Last Name:</label>
              <input
                id="lastname"
                type="text"
                onChange={handleChange}
                value={values.lastname}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="role">Role:</label>
              <input
                id="role"
                type="text"
                onChange={handleChange}
                value={values.role}
              />
            </div>
            <button type="submit">Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}
