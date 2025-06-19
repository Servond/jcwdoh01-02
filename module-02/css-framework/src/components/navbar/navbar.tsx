import { Button } from "../ui/button";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="figtree-bold">LOGO</div>
      <div className="flex gap-1 md:gap-5">
        <button className="button figtree-normal">Login</button>
        <button className="button figtree-normal">Register</button>
        <Button>Ini Button ShadCN</Button>
      </div>
    </div>
  );
}
