import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '../containers/NavigationContainer';
import { useState } from 'react';
import { Button, Drawer, Space, Typography } from 'antd';
import { theme } from '../../Theme';
import { useStyletron } from "styletron-react";

const Navigation = (): JSX.Element => {
  const [css] = useStyletron();
  const [show, setShow] = useState(false);
  const [date] = useState(new Date());

  const menuBtnStyles = css({
    ...theme.texts.brandSubFont,
    fontWeight: 'bold',
    background: theme.colors.blues.fancyBlue,
    borderColor: theme.colors.blues.fancyBlue,
    color: theme.colors.lighterWhite,
    ':hover': {
      color: theme.colors.blues.darkBlue
    }
  });

  const dateStyles = css({
    ...theme.texts.brandFont,
    color: theme.colors.lighterWhite
  });

 return(
  <NavigationContainer>
    <Typography className={dateStyles}>Today, {date.toLocaleDateString()}</Typography>
    {!show && (<FontAwesomeIcon
      color={theme.colors.lighterWhite}
      size='lg'
      style={{ cursor: 'pointer' }}
      icon={faBars} onClick={() => setShow(true)}/>)
    }
    {show && (<FontAwesomeIcon
      color={theme.colors.lighterWhite}
      size='lg'
      style={{ cursor: 'pointer' }}
      icon={faTimes} onClick={() => setShow(false)}/>)
    }
    <Drawer
      placement={'top'}
      onClose={() => setShow(false)}
      open={show}
      key={'top'}
      closable={false}
      style={{
        width: 360,
        height: 120,
        position: 'absolute',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'none !important',
        background: 'linear-gradient(25deg, rgba(141,176,244,1) 35%, rgba(112,153,232,1) 100%)'
      }}
      contentWrapperStyle={{
        width: '100%',
        boxShadow: 'none'
      }}
    >
      <Space direction="vertical">
        <Link to='/'>
          <Button
            block
            onClick={() => setShow(false)}
            className={menuBtnStyles}
          >
            Home
          </Button>
        </Link>
        <Link to='/about'>
          <Button
            block
            onClick={() => setShow(false)}
            className={menuBtnStyles}
          >
            About
          </Button>
        </Link>
      </Space>
    </Drawer>
  </NavigationContainer>
 );
};

export default Navigation;