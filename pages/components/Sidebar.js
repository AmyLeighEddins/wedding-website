import Image from 'next/image';
import styles from '../../styles/Sidebar.module.css';

const ads = ['aimlink', 'atari', 'comiczone', 'geocities2', 'wizard', 'office97', 'now', 'mysql', 'ie', 'js', 'hotmail', 'classicgaming', 'braknow', 'java', 'leave', 'macmade', 'winrar', 'yahoomail', 'sun', 'nvidia', 'ebay', 'drpepper', 'mp3', 'gameboy', 'adobe', 'gmail', 'geocities', 'google', 'mcaffee', 'cyberworld'];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {ads.map((ad) => (
        <Image src={`/${ad}.gif`} key={ad} alt={ad} width={'100%'} height={31} />
      ))}
    </div>
  )
}