import dynamic from "next/dynamic";

const Login = dynamic(() => import("./form"), { ssr: true });

export default Login;
