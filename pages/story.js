import styles from '../styles/Story.module.css';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Story() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Our Story'>
        <p>Test</p>
      </Content>
    </div>
  )
}
