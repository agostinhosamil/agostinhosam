import Link from 'next/link'

export default function Index () {
  return (
    <div>
      <h1>Hi, Welcome to my blog</h1>

      <span>View my first post: </span>
      <Link href="/posts/hello">
        Hello World
      </Link>
    </div>
  )
}
