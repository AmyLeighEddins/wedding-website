import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johmy Beldins Wedding</title>
        <meta name="description" content="Info about our wedding" />
        {/* TODO: change icon */}
        <link rel="icon" href="/win95.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          <Image src="/title.gif" alt="Johmy Beldins" width={1000} height={100} />
        </h1>

        <a href="/react95" className={styles.card}>
          <div className={styles.rainbowText}>
            <div>Try out React95 version</div>
          </div>
        </a>

        <div className={styles.grid}>
          <a href="mailto:amyleigheddins@gmail.com,doomedforlife91@gmail.com?subject = Wedding RSVP&body = YES/NO" className={styles.card}>
            <div className={styles.rainbowText}>
              <Image src="/rsvp2.gif" alt="RSVP" width={500} height={500} />
              <div>RSVP</div>
            </div>
          </a>

          <Link href="/details">
            <div className={styles.card}>
              <div className={styles.rainbowText}>
                <Image src="/daria.gif" alt="DETAILS" width={500} height={500} />
                <div>DETAILS</div>
              </div>
            </div>
          </Link>

          <Link href="/registry">
            <div className={styles.card}>
              <div className={styles.rainbowText}>
                <Image src="/registry.gif" alt="RESGISTRY" width={500} height={500} />
                <div>REGISTRY</div>
              </div>
            </div>
          </Link>

          <Link href="/story">
            <div className={styles.card}>
              <div className={styles.rainbowText}>
                <Image src="/spongebook.gif" alt="OUR STORY" width={500} height={500} />
                <div>OUR STORY</div>
              </div>
            </div>
          </Link>

          <Link href="/party" className={styles.card}>
            <div className={styles.card}>
              <div className={styles.rainbowText}>
                <Image src="/wedding.gif" alt="WEDDING PARTY" width={500} height={500} />
                <div>WEDDING PARTY</div>
              </div>
            </div>
          </Link>

          <a href="https://open.spotify.com/playlist/2gfmCMmHwrK4cSoY6vGu1W" className={styles.card}>
            <div className={styles.rainbowText}>
              <Image src="/carlton.gif" alt="COLLABORATIVE PLAYLIST" width={500} height={500} />
              <div>PLAYLIST</div>
            </div>
          </a>
        </div>
      </main>

      {/* TODO: change this to a joke */}
      {/* <footer className={styles.footer}> */}
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      {/* </footer> */}
    </div>
  )
}
