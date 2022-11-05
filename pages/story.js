import Image from 'next/image';

import styles from '../styles/Story.module.css';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Story() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Our Story'>
        <div className='construction'>
          <Image src='/construction.gif' alt='under construction' width={400} height={200} />
        </div>
      </Content>
    </div>
  )
}
