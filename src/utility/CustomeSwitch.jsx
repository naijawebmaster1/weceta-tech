import React, { useEffect, useState } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

const CustomSwitch = ({ children }) => {
    const [progress, setProgress] = useState(false);
    const [prevLoc, setPrevLoc] = useState('');
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname);
        setProgress(true);
        if (location.pathname === prevLoc) {
            setPrevLoc('');
        }
    }, [location]);

    useEffect(() => {
        setTimeout(() => {
            setProgress(false);
        }, 2000);
    }, [prevLoc]);

    return (
        <>
            {progress && <TopBarProgress />}
            <Switch>{children}</Switch>
        </>
    );
};

export default CustomSwitch;
