import { Outlet } from "react-router-dom"

const HomeLayout = () => {
    return (<div>
        <nav>
            <span className="text-4xl text-primary">NavBar</span>
        </nav>
        <Outlet></Outlet>
    </div>


    )
}

export default HomeLayout
