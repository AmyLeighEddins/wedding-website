import Image from 'next/image';

import { bridesmates, groomsmen } from '../data/party.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Party() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Wedding Party'>
        <div className='title'>
          <Image src='/BridesmatesText.gif' alt='Our Story' width={600} height={150} priority={true} />
        </div>
        <div className='title'>
          {bridesmates.map((mate, index) => (
            <div className={index === 0 ? 'bigTitle' : ''} key={mate}>{mate}</div>
          ))}
        </div>
        <video width='100%' height='auto' autoPlay loop muted playsInline>
          <source src='/Bridesmates.mp4' type='video/mp4'/>
        </video>
        <div className='title'>
          <Image src='/GroomsmenText.gif' alt='Our Story' width={600} height={150} priority={true} />
        </div>
        <div className='title'>
          {groomsmen.map((man, index) => (
            <div className={index === 0 ? 'bigTitle' : ''} key={man}>{man}</div>
          ))}
        </div>
        <video width='100%' height='auto' autoPlay loop muted playsInline>
          <source src='/Groomsmen.mp4' type='video/mp4'/>
        </video>
      </Content>
    </div>
  )
}
