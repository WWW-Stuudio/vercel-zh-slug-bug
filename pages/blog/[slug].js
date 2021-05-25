import blog from 'content/blog'

const BlogIndex = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = blog.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
      locale: 'zh',
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const data = blog.find((post) => post.slug === slug)

  return {
    props: {
      data,
    },
  }
}

export default BlogIndex
