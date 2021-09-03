import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

const CustomImg = () => (
  <Image
    src="/images/profile.jpeg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello Next</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <img src="/images/profile.jpeg" alt="Next" />
      <CustomImg></CustomImg>
    </Layout>
  )
}