import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Partners.module.scss';
import { ReactSVG } from 'react-svg';

const Partners = () => {
  return (
    <div className={styles.main_partners}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.img_container}>
            <img src='Assets/logo.png' alt='' />
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className={styles.partners}>
            <div className={styles.head}>
              <h3>
                ZHENPIN <br />
                BUBBLE TEA
              </h3>
            </div>
            {/* <div className={styles.partners_icons}>
              <a href='https://discord.gg/WYDmSGhJ9u' target='_blank'>
              </a>
            </div> */}
            <div className={styles.social_icons}>
              {/* <img src="Assets/discord3.png" alt="discord3" /> */}
              {/* <a href='https://discord.com/' target='_blank'><ReactSVG src='Assets/discord_94308.svg'className={styles.svgOne} /></a> */}
              <a href='https://www.facebook.com/zhenpincafe'>
              <img src='Assets/facebook.png'className={styles.svgOne} /></a>
              <a href='https://www.instagram.com/zhenpin.cafe/'>
              <img src='Assets/instagram.png'className={styles.svgTwo} />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Partners;
