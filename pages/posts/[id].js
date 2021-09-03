import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    // console.log('paths', paths);
    // [
    //     { params: { id: 'pre-rendering' } },
    //     { params: { id: 'ssg-ssr' } }
    // ]
    // paths.push({ params: { id: 'kkk' } })
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    // console.log('params', params)
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}