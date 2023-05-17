import Link from 'next/link';
import styles from './A.module.scss';

export default function A({ text, href }) {
  return (
    <Link href={href}>
      <div className={styles.link}>{text}</div>
    </Link>
  );
}
