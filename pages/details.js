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
          <h2>{details.title}</h2>
          <h2>{details.names}</h2>
          
          <h2>ON</h2>
          <h2>{details.when.date}</h2>
          <h2>{details.when.time}</h2>

          <h2>@</h2>
          <h3>{details.where.name}*</h3>
          <h3>{details.where.address}</h3>
          <h3>{details.where.address2}</h3>

          <h2>RSVP</h2>
          <h3>{details.rsvp}</h3>

          <h2>Attire:</h2>
          <h3>{details.dressCode}</h3>

          <h2>Reception:</h2>
          <h3>{details.reception}</h3>

          <h5>*{details.where.gated}</h5>
        </div>
      </Content>
    </div>
  )
}
