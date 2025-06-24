import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Format email salah")
    .required("Email tidak boleh kosong"),
  password: Yup.string()
    .trim()
    .min(5, "Password minimal 5 karakter")
    .matches(/\b/, "Tidak boleh ada spasi didalam password")
    .required("Password tidak boleh kosong"),
});

export default LoginSchema;
