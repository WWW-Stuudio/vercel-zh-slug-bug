import pages from 'content/pages'
import { useRouter } from 'next/router'

const BlogPost = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // if (!data) {
  //   console.log(data)
  //   return null
  // }

  return (
    <div>
      <h1>PAGE: {data.title}</h1>
      <p>{data.content}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = pages.map((item) => {
    const { slug, locale } = item
    return {
      params: {
        slug: [slug],
      },
      locale,
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const data = pages.find((post) => post.slug === encodeURI(slug))

  return {
    props: {
      data,
    },
  }
}

export default BlogPost
