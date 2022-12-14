import React, { useEffect, useState } from 'react';
import styles from './Heading.module.scss';
import { Row, Col, Button } from 'reactstrap';
import { Animated } from 'react-animated-css';
import { useWindowScrollPositions } from '../../Components/Scrolls/Scrolls';
import './OverRide.scss';
import {
    useWeb3React
} from "@web3-react/core";
import {
    InjectedConnector
} from "@web3-react/injected-connector";

const Heading = ({ showNavbar = true }) => {
    let [sideBarState, setSiteBarState] = useState(false);
    const { scrollX, scrollY } = useWindowScrollPositions();
    let [activeState, setActiveState] = useState('');

    function sidebarOpener() {
        setSiteBarState(true);
    }
    function sidebarCloser() {
        setSiteBarState(false);
    }

    const {
        activate,
        deactivate,
        library,
        account
    } = useWeb3React();
    console.log("account", account)

    const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42, 97],
    });

    const onConnectClicked = async () => {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    };

    const onDisconnectClicked = () => {
        try {
            deactivate();
        } catch (ex) {
            console.log(ex);
        }
    };

    useEffect(() => {
        setActiveState(window.location.hash);
    }, [scrollY]);

    return (
        <div className={styles.main_heading} id='home'>
        <Row>
            <Col sm={12} md={12}>
            <div
                className={`${styles.heading_nav} ${
                scrollY > 20 ? 'scrollable' : ''
                }`}
            >
                <div className={`${styles.head} ${showNavbar ? '' : 'adjustHead'}`}>
                <h3>
                    <a href='#home'>
                    Stickman Diamond <br />
                    Club
                    </a>
                </h3>
                </div>
                {/* <div> */}
                <div className={`${styles.links}`}>
                {showNavbar ? (
                    <>
                    <p
                        className={`${
                        activeState === '#aboutus' ? styles.active_links : ''
                        }`}
                    >
                        <a href='#aboutus'>ABOUT US</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#works' ? styles.active_links : ''
                        }`}
                    >
                        <a href='#works'>WORKS</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#teams' ? styles.active_links : ''
                        }`}
                    >
                        <a href='#teams'>ARTIST</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#roadmaps' ? styles.active_links : ''
                        }`}
                    >
                        <a href='#roadmaps'>ROADMAP</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#faqss' ? styles.active_links : ''
                        }`}
                    >
                        <a href='#faqss'>FAQ</a>
                    </p>
                    <p>
                        <a>JOIN</a>
                    </p>
                    {
                        account ? <Button className={styles.connectBtn} outline color="danger" onClick={onDisconnectClicked}>{account ? account.slice(0, 14) + "..." : ""}</Button>
                                : <Button className={styles.connectBtn} outline color="danger" onClick={onConnectClicked}>Connect</Button>
                    }
                    </>
                ) : <>
                        {
                            account ? <Button className={styles.connectBtn} outline color="danger" onClick={onDisconnectClicked}>{account ? account.slice(0, 14) + "..." : ""}</Button>
                                    : <Button className={styles.connectBtn} outline color="danger" onClick={onConnectClicked}>Connect</Button>
                        }
                    </>
                    }
                </div>

                {/* </div> */}
                {showNavbar === true ? (
                    <>
                        <div className={`${styles.connectMobileBtn}`}>
                            {
                                account ? <Button className={styles.connectBtn} outline color="danger" onClick={onDisconnectClicked}>{account ? account.slice(0, 14) + "..." : ""}</Button>
                                        : <Button className={styles.connectBtn} outline color="danger" onClick={onConnectClicked}>Connect</Button>
                            }
                        </div>
                        <div className={styles.side_bar}>
                            <img
                            src='Assets/sidebar.png'
                            alt=''
                            onClick={sideBarState ? sidebarCloser : sidebarOpener}
                            />
                        </div>
                    </>
                ) : null}
                {sideBarState && showNavbar === true ? (
                <div className={styles.sidebar}>
                    <div className={styles.lists}>
                    <p
                        className={`${
                        activeState === '#aboutus'
                            ? styles.active_links_mobile
                            : ''
                        }`}
                    >
                        <a href='#aboutus'>ABOUT US</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#works' ? styles.active_links_mobile : ''
                        }`}
                    >
                        <a href='#works'>WORKS</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#teams' ? styles.active_links_mobile : ''
                        }`}
                    >
                        <a href='#teams'>ARTIST</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#roadmaps'
                            ? styles.active_links_mobile
                            : ''
                        }`}
                    >
                        <a href='#roadmaps'>ROADMAP</a>
                    </p>
                    <p
                        className={`${
                        activeState === '#faqss' ? styles.active_links_mobile : ''
                        }`}
                    >
                        <a href='#faqss'>FAQ</a>
                    </p>
                    <p>
                        <a>JOIN</a>
                    </p>
                    </div>
                    <div>
                    <img
                        src='Assets/sidebar.png'
                        alt=''
                        onClick={sideBarState ? sidebarCloser : sidebarOpener}
                    />
                    </div>
                </div>
                ) : null}
            </div>
            </Col>
            <Col sm={12} md={4}>
            <Animated
                animationIn='animate__fadeInLeft'
                animationOut='fadeOut'
                isVisible={true}
            >
                <div className={`${styles.bearImg}`}>
                <img src='Assets/bear.png' alt='Bear Pic' />
                </div>
            </Animated>
            </Col>
            <Col sm={12} md={8}>
            <div className={styles.bearContent}>
                <h1>
                Stickman Diamond <br />
                Club
                </h1>
                <Animated
                animationIn='animate__fadeInUp'
                animationOut='fadeIn'
                isVisible={true}
                >
                <button
                    className={`${styles.discordBtn} ${
                    showNavbar ? '' : 'buttonOverride'
                    }`}
                >
                    <span>JOIN OUR DISCORD</span>
                </button>
                </Animated>
            </div>
            </Col>
        </Row>
        </div>
    );
};

export default Heading;
