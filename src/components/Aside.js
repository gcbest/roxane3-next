import Link from 'next/link';

export default function Aside() {
  return (
    <aside className="side">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link> </li>
        <li><Link href="/services">Services</Link> </li>
        <li><Link href="/resources">Resources</Link> </li>
        <li><Link href="/publications">Publications</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </aside>
  )
}
    


