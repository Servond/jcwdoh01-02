import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Email cannot be empty"),
  password: yup.string().required("Password cannot be empty"),
});

export default LoginSchema;
