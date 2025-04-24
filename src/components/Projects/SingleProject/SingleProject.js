import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, images, theme }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const useStyles = makeStyles(() => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
        },
    }));

    const classes = useStyles();

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <Fade bottom>
                <div
                    key={id}
                    className="singleProject"
                    onClick={() => window.open('https://github.com/yadavakriti03', '_blank')}
                    style={{ backgroundColor: theme.primary400 }}
                >

                    <div className="projectContent">
                        <h2 id={name.replace(' ', '-').toLowerCase()} style={{ color: theme.tertiary }}>
                            {name}
                        </h2>
                        <img src={image ? image : placeholder} alt={name} />
                        <div className="project--showcaseBtn">
                            <a href={demo} target="_blank" rel="noreferrer" className={classes.iconBtn} aria-labelledby={`${name.replace(' ', '-').toLowerCase()}-demo`}>
                                <FaPlay id={`${name.replace(' ', '-').toLowerCase()}-demo`} className={classes.icon} aria-label="Demo" />
                            </a>
                            <a href={code} target="_blank" rel="noreferrer" className={classes.iconBtn} aria-labelledby={`${name.replace(' ', '-').toLowerCase()}-code`}>
                                <FaCode id={`${name.replace(' ', '-').toLowerCase()}-code`} className={classes.icon} aria-label="Code" />
                            </a>
                        </div>
                    </div>
                    <p className="project--desc" style={{ background: theme.secondary, color: theme.tertiary }}>
                        {desc}
                    </p>
                    <div className="project--lang" style={{ background: theme.secondary, color: theme.tertiary80 }}>
                        {tags.map((tag, id) => (
                            <span key={id}>{tag}</span>
                        ))}
                    </div>
                </div>
            </Fade>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeModal}>×</button>
                        <img src={images[currentIndex]} alt="Project Display" className="modal-image" />
                        <button className="nav-btn left" onClick={prevImage}>‹</button>
                        <button className="nav-btn right" onClick={nextImage}>›</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default SingleProject;
