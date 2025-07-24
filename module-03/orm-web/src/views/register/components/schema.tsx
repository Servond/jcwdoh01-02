import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Email cannot be empty"),
  password: yup.string().required("Password cannot be empty"),
});

export default RegisterSchema;
