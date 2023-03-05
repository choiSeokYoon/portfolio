import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.scss'

export const showHide = {
    start: {
        opacity:0,
        transition:{
            duration:0,
            traggerChildren:0.5,
        },
    },
    end: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        }
    }
}

export const showHideChild = {
    start: {
        y: -20,
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1,
    },
};
export default function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <motion.div 
                    className='home_box' variants={showHide} initial="start" animate="end"
                >
                    <motion.h2 variants={showHideChild}>
                        CHOI SEOKYOON
                    </motion.h2>
                    <motion.div className='line' variants={showHideChild}></motion.div>
                    <motion.span className='job' variants={showHideChild}>Web Front-end Developer</motion.span>
                    <motion.div 
                    className='project_btn'
                    variants={showHideChild}
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 1000, damping:5}}
                    >
                        <Link to="project">project</Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
