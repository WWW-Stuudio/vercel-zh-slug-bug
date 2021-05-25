import Link from 'next/link'
import pages from 'content/pages'

export default function Home() {
  return (
    <div>
      <h1>INDEX</h1>
      <Link href="/%e5%8d%9a%e5%ae%a2" locale="zh">
        <a>Chinese blog</a>
      </Link>{' '}
      <Link href="/blog" locale="en">
        <a>English blog</a>
      </Link>
      <h2>Pages</h2>
      {pages.map((page, index) => {
        const { slug, locale, title } = page

        return (
          <Link href={`/${slug}`} locale={locale} key={index}>
            <a>
              <h3>{title}</h3>
            </a>
          </Link>
        )
      })}
    </div>
  )
}
