import styles from '../styles/Details.module.css';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Details() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Details'>
        <p>Test</p>
      </Content>
    </div>
  )
}
