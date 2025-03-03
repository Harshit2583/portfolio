import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css';

function AchievementCard({ id, title, details, date, field, image, link }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        achievementCard: {
            backgroundColor: theme.primary30,
            cursor: 'pointer',
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank'); // Opens the link in a new tab
        }
    };

    return (
        <Fade bottom>
            <div key={id} className={`achievement-card ${classes.achievementCard}`} onClick={handleClick}>
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{ color: theme.primary }}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
            </div>
        </Fade>
    );
}

export default AchievementCard;
