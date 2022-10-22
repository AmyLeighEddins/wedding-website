import styles from '../styles/Registry.module.css';

import { charities, explanation } from '../data/registry';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Registry() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Registry'>
        <p>{explanation}</p>
        {charities.map((charity) => (
          <h4 key={charity.title}>
            <a href={charity.link} target="_blank" rel="noreferrer">{charity.title}</a>
          </h4>
        ))}
      </Content>
    </div>
  )
}
