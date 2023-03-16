import { Outlet, useSearchParams } from 'react-router-dom'

function User() {

    const [searchParams, setSearchParams] = useSearchParams(); // return object and function to set the object

    // like as in the amazon about filters
    const showActiveUsers = searchParams.get('filter') === 'active' // searchParams as "user?filter=active"



    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>


            {/*     "user?filter=active"     */}
            <div>

                <button
                    onClick={() => setSearchParams({ filter: "active" })}>
                    Active Users
                </button>

                {/*  "user"    */}

                <button
                    onClick={() => setSearchParams({})}>
                    Reset Users
                </button>



                {
                    showActiveUsers ? <h3>Showing Active Users</h3> : <h3>Showing all Users</h3>
                }
            </div>
        </div>
    )
}

export default User
