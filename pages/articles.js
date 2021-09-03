import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css'

// 这个方法会读文件，所以在开发模式下，这里的js其实都是被node执行的。
import { getSortedPostsData } from '../lib/posts'

export default function Articles({ allPostsData }) {
  return (
    <Layout home={false}>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}