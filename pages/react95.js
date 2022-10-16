import React from 'react';
import { ThemeProvider } from 'styled-components';
import Draggable from 'react-draggable';
import Image from 'next/image';
import Link from 'next/link';

import { Anchor, List, ListItem, Divider, AppBar, Toolbar, Button, Window, WindowHeader, WindowContent } from 'react95';
import highContrast from 'react95/dist/themes/highContrast';

import win95 from '../public/icons/win95.png';
import music from '../public/icons/music.png';
import shutdown from '../public/icons/shutdown.png';
import datetime_small from '../public/icons/datetime_small.png';
import users from '../public/icons/users.png';
import book from '../public/icons/book.png';
import datetime from '../public/icons/datetime.png';
import mailbox from '../public/icons/mailbox.png';
import share from '../public/icons/share.png';

const React95 = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openRegistry, setOpenRegistry] = React.useState(false);
  const [active, setActive] = React.useState('');
  const nodeRef = React.useRef(null);

  return (
  <div>
    <ThemeProvider theme={highContrast}>
      {openDetails && (
        <Draggable nodeRef={nodeRef}>
          <Window className='window' ref={nodeRef}>
            <WindowHeader active={true} className='window-header'>
              <span>WeddingDetails.txt</span>
              <Button onClick={() => setOpenDetails(false)}>
                <span className='close-icon' />
              </Button>
            </WindowHeader>
            <WindowContent>deets</WindowContent>
          </Window>
        </Draggable>
      )}
      {openRegistry && (
        <Draggable nodeRef={nodeRef}>
          <Window className='window' ref={nodeRef}>
            <WindowHeader active={true} className='window-header'>
              <span>Registry.txt</span>
              <Button onClick={() => setOpenRegistry(false)}>
                <span className='close-icon' />
              </Button>
            </WindowHeader>
            <WindowContent>
              <p>We will not have a registry since we have everything we need already. Instead we'd like you to give to our favorite charities!</p>
              <h4><Anchor href='https://www.aclu.org/issues/racial-justice'>American Civil Liberties Union</Anchor></h4>
              <h4><Anchor href='https://give.feedingal.org/give/324197/#!/donation/checkout'>Community Food Bank of Central Alabama</Anchor></h4>
              <h4><Anchor href='https://firehouseshelter.com/get-involved/donate/'>Firehouse Ministries</Anchor></h4>
              <h4><Anchor href='https://www.firstlightshelter.org/give_hope/donate_now.html'>First Light</Anchor></h4>
              <h4><Anchor href='https://gbhs.org/donate'>Greater Birmingham Humane Society</Anchor></h4>
              <h4><Anchor href='https://www.nlg-npap.org/donate-to-npap/'>National Police Accountability Project</Anchor></h4>
              <h4><Anchor href='https://give.thetrevorproject.org/give/63307/#!/donation/checkout'>The Trevor Project</Anchor></h4>
              <h4><Anchor href='https://www.yellowhammerfund.org/donate/'>Yellowhammer Fund</Anchor></h4>
            </WindowContent>
          </Window>
        </Draggable>
      )}
      <AppBar style={{ top: 'auto', bottom: 0 }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button
              onClick={() => setOpenMenu(!openMenu)}
              active={openMenu}
              style={{ fontWeight: 'bold' }}
            >
              <Image
                src={win95}
                alt='win95 logo'
                style={{ marginRight: 8 }}
              />
              Start
            </Button>
            {openDetails && (
              <Button
                onClick={() => setActive('details')}
                active={active === 'details'}
                style={{ fontWeight: 'bold', marginLeft: '8px' }}
              >
                <Image
                  src={datetime_small}
                  alt='datetime icon'
                  className='menu-item-image'
                />
                Details
              </Button>
            )}
            {openRegistry && (
              <Button
                onClick={() => setActive('registry')}
                active={active === 'registry'}
                style={{ fontWeight: 'bold', marginLeft: '8px' }}
              >
                <Image
                  src={share}
                  alt='share icon'
                  className='menu-item-image'
                />
                Registry
              </Button>
            )}
            {openMenu && (
              <List
                style={{
                  position: 'absolute',
                  left: '0',
                  bottom: '50%',
                  minWidth: 200,
                }}
                onClick={() => setOpenMenu(false)}
              >
                <ListItem className='menu-item'>
                  <Image
                    src={mailbox}
                    alt='mailbox icon'
                  />
                  <div className='menu-item-text'>RSVP</div>
                </ListItem>
                <ListItem className='menu-item' onClick={() => setOpenDetails(true)}>
                  <Image
                    src={datetime}
                    alt='datetime icon'
                  />
                  <div className='menu-item-text'>Details</div>
                </ListItem>
                <ListItem className='menu-item' onClick={() => setOpenRegistry(true)}>
                  <Image
                    src={share}
                    alt='share icon'
                  />
                  <div className='menu-item-text'>Registry</div>
                </ListItem>
                <ListItem className='menu-item'>
                  <Image
                    src={book}
                    alt='book icon'
                  />
                  <div className='menu-item-text'>Our Story</div>
                </ListItem>
                <ListItem className='menu-item'>
                  <Image
                    src={users}
                    alt='users icon'
                  />
                  <div className='menu-item-text'>Wedding Party</div>
                </ListItem>
                <ListItem className='menu-item'>
                  <Image
                    src={music}
                    alt='music icon'
                  />
                  <div className='menu-item-text'>Playlist</div>
                </ListItem>
                <Divider />
                <Link href="/">
                <ListItem className='menu-item'>
                  <Image
                    src={shutdown}
                    alt='shutdown icon'
                  />
                  <div className='menu-item-text'>Shut Down...</div>
                </ListItem>
                </Link>
              </List>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  </div>
)};

export default React95;