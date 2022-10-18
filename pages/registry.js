import styles from '../styles/Registry.module.css';
import Image from 'next/image';
import Link from 'next/link';

import charities from './data/registry.json';
import Sidebar from './components/Sidebar.js';

export default function Registry() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className='rainbowText rainbowTextTitle'><h1 className='bouncing'>Registry</h1></div>
        <div className={styles.content}>
          <div className='text-area'>
            <p>We will not have a registry since we have everything we need already. Instead we'd like you to give to our favorite charities!</p>
            {charities.map((charity) => (
              <h4 key={charity.title}>
                <a href={charity.link}>{charity.title}</a>
              </h4>
            ))}
          </div>
          <div className={styles.footer}>
            <Link href='/'>
              <div>
                <Image src='/back.gif' alt='back' width={300} height={150} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
