import Image from 'next/image';

import styles from '../styles/Details.module.css';

import { details } from '../data/details.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Details() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Details'>
        <div className={styles.container}>
          <div className={styles.titleMain}>
            <Image src='/rsvp3.gif' alt='invited' width={200} height={200} />
            <Image src='/invited.png' alt='invited' width={800} height={100} />
            <Image src='/rsvp3.gif' alt='invited' width={200} height={200} />
          </div>

          <div className={styles.names}>{`${details.decorationLeft}${details.names}${details.decorationRight}`}</div>
          
          <div className={styles.title}>
            <Image src='/on.png' alt='on' width={100} height={60} />
          </div>
          <div className={styles.descMed}>{details.when.date}</div>
          <div className={styles.descMed}>{details.when.time}</div>

          <div className={styles.title}>
            <Image src='/at.png' alt='at' width={100} height={60} />
          </div>
          <div className={styles.descSml}>{details.where.name}</div>
          <div className={styles.descSml}>{details.where.address}</div>
          <div className={styles.descSml}>{details.where.address2}</div>
          <div className={styles.descXSm}>{details.where.gated}</div>

          <div className={styles.title}>
            <Image src='/rsvp.png' alt='rsvp' width={200} height={60} />
          </div>
          <div className={styles.descSml}>{details.rsvp}</div>

          <div className={styles.title}>
            <Image src='/attire.png' alt='attire' width={275} height={60} />
          </div>
          <div className={styles.descSml}>{details.dressCode}</div>

          <div className={styles.title}>
            <Image src='/reception.png' alt='reception' width={425} height={60} />
          </div>
          <div className={styles.descSml}>{details.reception}</div>

          <div className={styles.gif}>
            <Image src='/karaoke.gif' alt='karaoke' width={425} height={250} />
          </div>
        </div>
      </Content>
    </div>
  )
}
