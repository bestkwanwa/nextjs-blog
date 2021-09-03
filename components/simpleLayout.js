import styles from './layout.module.css'
// import styles from './layout.less'   // 需要less的编译器
// import styles from './layout.sass'  //
// import styles from './layout.scss'   //
export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}