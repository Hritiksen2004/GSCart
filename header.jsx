import '../App.css'
// Importing navigation components from React Router
// Link and NavLink are used to create navigation links that don’t reload the page
import { NavLink } from 'react-router-dom'
import CartSidebar from './CartSidebar'
export const Header = () => {
    return (
        <header className='header'>

            {/* Website logo or title that links back to the home page */}
            <div className='logo'>
                {/* NavLink automatically add an "active" class
                    when the link’s path matches the current URL.
                    This helps to style the current active page differently.
                */}
                <NavLink to="/">GSCart</NavLink>
            </div>
            <nav className='nav'>

                {/* NavLink to the "Cart" page.
                    The className function checks if this link is currently active.
                    If yes, it adds the 'active' class, which can be styled in CSS.
                */}
                <NavLink 
                    to='/cart' 
                    onClick={() =>{
                        CartSidebar();
                    }}
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Cart
                </NavLink>

                {/* NavLink to the "Orders" page with the same active class logic */}
                <NavLink 
                    to='/orders' 
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Orders
                </NavLink>
            </nav>
        </header>
    )
}
