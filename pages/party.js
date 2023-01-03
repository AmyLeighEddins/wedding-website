import Image from 'next/image';

import styles from '../styles/Party.module.css';

import { bridesmates, groomsmen } from '../data/party.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Party() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Wedding Party'>
        <div className='title'>
          <Image src='/BridesmatesText.gif' alt='Our Story' width={600} height={150} />
        </div>
        <div className='title'>
          {bridesmates.map((mate, index) => (
            <div className={index === 0 ? 'bigTitle' : ''}>{mate}</div>
          ))}
        </div>
        <video width='100%' height='auto' autoPlay loop muted>
          <source src='/Bridesmates.mp4' type='video/mp4'/>
        </video>
        <div className='title'>
          <Image src='/GroomsmenText.gif' alt='Our Story' width={600} height={150} />
        </div>
        <div className='title'>
          {groomsmen.map((man, index) => (
            <div className={index === 0 ? 'bigTitle' : ''}>{man}</div>
          ))}
        </div>
        <video width='100%' height='auto' autoPlay loop muted>
          <source src='/Groomsmen.mp4' type='video/mp4'/>
        </video>
      </Content>
    </div>
  )
}
