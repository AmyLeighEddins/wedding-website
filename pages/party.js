import Image from 'next/image';

import styles from '../styles/Party.module.css';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Party() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Wedding Party'>
        <div className='construction'>
          <Image src='/construction.gif' width={400} height={200} />
        </div>
      </Content>
    </div>
  )
}
