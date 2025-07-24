import dynamic from "next/dynamic";

const Register = dynamic(() => import("./form"), { ssr: true });

export default Register;
