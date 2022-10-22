import styles from '../styles/Party.module.css';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Party() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Wedding Party'>
        <p>Test</p>
      </Content>
    </div>
  )
}
