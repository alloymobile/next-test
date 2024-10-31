import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="text-primary">Welcome to Next.js with Bootstrap!</h1>
      <button className="btn btn-success">Click Me</button>
      <main className={styles.main}>
      <h1>Hello World</h1>
      </main>
    </div>
  );
}
