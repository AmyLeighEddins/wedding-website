import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react';

import { links } from '../data/common'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const musicPlayers = useRef(
    typeof Audio !== "undefined" ? new Audio("PowerRangers.mp3") : undefined
  );

  const clickPlay = () => {
    if (playing) {
      musicPlayers.current?.pause();
    } else {
      musicPlayers.current?.play();
    }
    setPlaying((playing) => !playing);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Johmy Beldins Wedding</title>
        <meta name='description' content='Info about our wedding' />
        {/* TODO: change icon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <button onClick={() => clickPlay()} className={styles.play}>
        {`${playing ? 'Pause' : 'Play'} the theme song from the hit Daytime Emmy Award winning 1990s television show Might Morphin Power Rangers while you browse.`}
      </button>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          <Image src='/title.gif' alt='Johmy Beldins' width={1000} height={100} />
        </h1>

        <div className={styles.grid}>
          {links.map((link) => (
            <Link href={link.href} key={link.title}>
              <div className={styles.card}>
                <div className='rainbowText'>
                  <Image src={link.image} alt={link.title} width={500} height={500} />
                  <div>{link.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
