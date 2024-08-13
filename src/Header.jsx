import './Header.css'

export function Header () {
    return (
        <header className='header'>
            <div className="nav-logo">
                <img src="https://i.pinimg.com/originals/1b/a3/60/1ba360833e7f1c8e457b4bc08992f119.png"></img>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about-us">About us</a></li>
                    <li><a href="#buy">Buy</a></li>
                </ul>
            </nav>
            <button>asd</button>
        </header>
    )
}