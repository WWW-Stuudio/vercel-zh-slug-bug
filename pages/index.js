import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>INDEX</h1>
      <Link href="/%e5%8d%9a%e5%ae%a2" locale="zh">
        <a>Chinese blog</a>
      </Link>
    </div>
  )
}
