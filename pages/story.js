import { story } from '../data/story.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Story() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Our Story'>
        <video width='100%' height='auto' autoPlay loop muted playsInline>
          <source src='/JohmyBeldins.mp4' type='video/mp4'/>
        </video>
        <div className="colorParagraph">
          {story.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Content>
    </div>
  )
}
