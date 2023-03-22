import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import './Header.scss'

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='nav'>
                    <div className='logo'>
                        <h2><Link to="/">SY's</Link></h2>
                    </div>
                    <ul className='menu'>
                        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring" }}><Link to="/">Home</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}  transition={{ type: "spring" }}><Link to="/about">About</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}  transition={{ type: "spring" }}><Link to="/project">Project</Link></motion.li>
                    </ul>
                </div>
            </div>
            
        </header>
    )
}

