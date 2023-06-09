import { Link, Outlet } from "react-router-dom"

function Products() {
    return (
        <>
            <div>
                <input type="search" placeholder='search product' />
            </div>

            <nav>
                {/* name should be matched to parent route */}
                <Link to="featured">Featured</Link>

                <Link to="new">New</Link>

                {/* 
                    relative link:
                    "/new" now this will try to get the path from home 

                    // absolute link can be used as "features/new"

                    <Link to="/new">New</Link>
                */}
            </nav>

            <Outlet />
        </>
    )
}

export default Products
