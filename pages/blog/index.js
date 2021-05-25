import blog from 'content/blog'
import Link from 'next/link'

const BlogIndex = ({ posts }) => {
  const blogSlug = {
    en: 'blog',
    zh: '%e5%8d%9a%e5%ae%a2',
  }

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post, index) => {
        const { slug, locale, title } = post

        return (
          <div key={index}>
            <Link href={`/${blogSlug[locale]}/${slug}`} locale={locale}>
              <a>
                <h3>{title}</h3>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const currentLanguagePosts = blog.filter((post) => post.locale === locale)
  return {
    props: {
      posts: currentLanguagePosts,
    },
  }
}

export default BlogIndex
