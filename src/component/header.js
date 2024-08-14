import './header.css'
export default function header(){
  return (
      <header className="header">
       <div>React App</div>
        <nav className="navbar">
          <ul className='list'>
            <li>Home</li>
            <li>Service</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

  );
}