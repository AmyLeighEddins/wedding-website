import styles from '../styles/Registry.module.css';

import { charities, explanation } from '../data/registry';
import Sidebar from './components/Sidebar.js';

export default function Registry() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <div className='rainbowText rainbowTextTitle'><h1 className='bouncing'>Registry</h1></div>
        <div className={styles.content}>
          <div className='text-area'>
            <p>{explanation}</p>
            {charities.map((charity) => (
              <h4 key={charity.title}>
                <a href={charity.link} target="_blank" rel="noreferrer">{charity.title}</a>
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
