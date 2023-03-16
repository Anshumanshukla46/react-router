import { NavLink } from 'react-router-dom'
// it is similar to anchor tag (check index.js)

function Navbar() {

    // using active

    // get from NavLink
    const navLinkStyles = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bolder' : "normal"
        }
    }

    return (
        <nav className='primary-nav'>
            {/* inspected we can see it is anchor tag */}
            {/* NavLink shows when some is active or not just by adding className at the time of running code SO STYLE IT USING ACTIVE className */}
            <NavLink
                style={navLinkStyles}
                to='/'>
                Home
            </NavLink>

            {/* not similar with route in App.j */}
            <NavLink
                style={navLinkStyles}
                to="/about">
                About
            </NavLink>



            {/* Products */}
            <NavLink style={navLinkStyles} to="/products">
                Products
            </NavLink>
        </nav>
    )
}

export default Navbar
