import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Startpage</h1>
        {/*https://nextjs.org/docs/app/getting-started/linking-and-navigating*/}
        <Link href='/impressum'>Impressum</Link>
      </main>
    </div>
  );
}