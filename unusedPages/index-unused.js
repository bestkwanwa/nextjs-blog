// import Link from 'next/link'
// import Date from '../components/date'
// import utilStyles from '../styles/utils.module.css'

// // 测试getStaticProps在每次请求都执行
// // let count=0
// export default function Home(props) {
//   return (
//     <li className={utilStyles.listItem} key={id}>
//       <Link href={`/posts/${id}`}>
//         <a>{title}</a>
//       </Link>
//       <br />
//       <small className={utilStyles.lightText}>
//         <Date dateString={date} />
//       </small>
//     </li>
//   )
// }

// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.
//   const data = 'This is data.'
//   // let count = 0

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: { data }
//   }
// }