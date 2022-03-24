import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';
import Button from '@mui/material/Button';

const sidebarNavItems = [
    {
        display: 'Overview',
        icon: <i class='bx bx-chart'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Products',
        icon: <i class='bx bxs-shopping-bag'></i>,
        to: '/started',
        section: 'started'
    },
    {
        display: 'Campaigns',
        icon: <i class='bx bxs-bar-chart-square'></i>,
        to: '/calendar',
        section: 'calendar'
    },
    {
        display: 'Schedules',
        icon: <i className='bx bx-calendar'></i>,
        to: '/user',
        section: 'user'
    },
    {
        display: 'Payouts',
        icon: <i class='bx bxs-wallet-alt'></i>,
        to: '/payouts',
        section: 'payouts'
    },
    {
        display: 'Statements',
        icon: <i class='bx bx-detail'></i>,
        to: '/statements',
        section: 'statements'
    },
    {
        display: 'Setting',
        icon: <i class='bx bxs-brightness-half'></i>,
        to: '/setting',
        section: 'setting'
    }
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
    <div className='sidebar'>
        <div className="sidebar__logo">
            Neuro
        </div>
        <div className='sidebar__header'>
                Admin Tools
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
        <div className='sidebar__card'>
            <p>Have any problem with manage your dashboard?Try to connact the customer support</p>
            <Button variant="contained" sx={{ marginTop:"20px",marginLeft:"10px",backgroundColor:"#23dbdb"}} >Contact Us</Button>
        </div>
    </div>
    )
};

export default Sidebar;