import blog from 'content/blog'
import Link from 'next/link'

const BlogIndex = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <Link href={`/%e5%8d%9a%e5%ae%a2/${post.slug}`} locale="zh">
              <a>
                <h3>{post.title}</h3>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      posts: blog,
    },
  }
}

export default BlogIndex
