import Link from 'next/link';
import styles from './links.module.css'

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.title} href={link.path}>{link.title}</Link>
      ))}
    </div>
  )
}

export default Links