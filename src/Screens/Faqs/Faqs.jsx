import React, { useEffect, useState } from 'react';
import styles from './Faqs.module.scss';
import { Row, Col } from 'reactstrap';
import { Collapse } from 'antd';
import './OverRide.scss';
import { Animated } from 'react-animated-css';
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const { Panel } = Collapse;

const Faqs = () => {
  let [keyCheckerState, setKeyCheckerState] = useState();

  const genExtra = () => (
    <PlusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const genExtra2 = () => (
    <MinusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  function callback(key) {
    if (key[1]) {
      key.shift();
      setKeyCheckerState(key[0]);
    } else {
      setKeyCheckerState(key[0]);
    }
  }
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className={styles.main_faqs} id='faqs'>
      {/* <Animated
        isVisible={true}
        animationIn='animate__fadeInUp'
        animationOut='animate__fadeInUp'
      > */}
      <Row>
        <Col xs={12} sm={12} md={12}>
          <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
              <div className={styles.faqs_head}>
                <h1>FAQ</h1>
              </div>
          </ScrollAnimation>
        </Col>
          <Col xs={12} sm={12} md={12} id='faqs'>
          <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce>
            <Collapse
              defaultActiveKey={[]}
              onChange={callback}
              expandIconPosition='right'
            >
              <Panel
                header='What is Lonely Bear Society?'
                key='1'
                extra={keyCheckerState === '1' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='When will The Lonely Bear Society launch?'
                key='2'
                extra={keyCheckerState === '2' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='How can I join'
                key='3'
                extra={keyCheckerState === '3' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='IS LONELY BEAR SOCIETY A PROMISING PROJECT?'
                key='4'
                extra={keyCheckerState === '4' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='Why mental health?'
                key='5'
                extra={keyCheckerState === '5' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='Why does the body of the bear not match the head?'
                key='6'
                extra={keyCheckerState === '6' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?'
                key='7'
                extra={keyCheckerState === '7' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
            </ScrollAnimation>
          </Col>
        </Row>
      {/* </Animated> */}
    </div>
  );
};

export default Faqs;
