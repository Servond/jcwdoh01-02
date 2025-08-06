import styles from "../page.module.css";
import Navbar from "@/component/navbar";

export default function Admin() {
  return (
    <div>
      <Navbar name="budi" />
      <div className={styles.test2}>
        <p>Ini Page Admin</p>
      </div>
      <h2 style={{ color: "green" }}>Ini Subtitle</h2>
      <img src="/images.webp" alt="gambar" />
    </div>
  );
}
