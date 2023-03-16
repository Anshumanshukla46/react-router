import { useParams } from "react-router-dom"

function UserDetails() {

    // extracting element passed dynamically
    const params = useParams()
    const userId = params.userId // rendered from parent path(:userId)

    // destructuring
    // const { userId } = useParams()

    return (
        <div>
            Details about user {userId}
        </div>
    )
}

export default UserDetails
