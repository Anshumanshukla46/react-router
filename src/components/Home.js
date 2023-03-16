import { useNavigate } from "react-router-dom"

function Home() {

    // used  to move from one page to other by actionListener
    const navigatorFun = useNavigate();

    return (
        <>
            <div>Home Page</div>

            {/* OrderSummary to show on url */}
            {/* although "replace" is optional hence once it when to some else the backing to it will back to home page of browser   */}
            <button onClick={() => navigatorFun("orderSummary", { replace: true })}>Place Order</button>
        </>
    )
}

export default Home
