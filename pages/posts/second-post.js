import Link from 'next/link'
import styles from '../../styles/test.module.scss';

export default function SecondPost() {
  return (
    <div className={styles.textBox}>
      <span className={styles.text}>
        测试scss
      </span>
    </div>
  )
}