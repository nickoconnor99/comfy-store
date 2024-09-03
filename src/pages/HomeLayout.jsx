import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Loading, Header } from '../components';
const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    return (
        <section>
            <Header />
            <Navbar />
            {isPageLoading ? (
                <Loading />
            ) : (
                <section className='align-element py-20'>
                    <Outlet />
                </section>
            )}
        </section>
    );
};
export default HomeLayout;