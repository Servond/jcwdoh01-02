import dynamic from "next/dynamic";

const Login = dynamic(() => import("./form"), { ssr: false });

export default Login;
