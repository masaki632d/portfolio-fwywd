import NextImage from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <NextImage
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      ></NextImage>
      <Link href="/">
        <a>test</a>
      </Link>
    </div>
  )
}
