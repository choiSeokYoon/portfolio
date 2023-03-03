import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <div className='header'>
        <div className='container'>
            <div className='nav'>
                <div className='logo'>
                    <h2><Link to="/">SY's</Link></h2>
                </div>
                <ul className='menu'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Project</Link></li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

