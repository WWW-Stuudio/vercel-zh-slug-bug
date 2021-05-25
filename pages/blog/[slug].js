import blog from 'content/blog'
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
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = blog.map((item) => {
    const { slug, locale } = item
    return {
      params: {
        slug,
      },
      locale,
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const data = blog.find((post) => post.slug === encodeURI(slug))
  // console.log({ slug })
  // console.log('data', data)
  return {
    props: {
      data,
    },
  }
}

export default BlogPost
