import HeaderSlimHero from './HeaderSlimHero';
import Aside from './Aside';
import Accreds from './Accreds';
import Footer from './Footer';
import Copyright from './Copyright';

export default ({children, contentHeader}) => (
    <>
        <HeaderSlimHero/>
        <div className="wrapper">
        <article className="content">
			<h1 className="content-header">{contentHeader}</h1>
                {children}
            </article>
            <Aside/>
            <Accreds/>
        </div>
        <Footer/>
        <Copyright/>
    </>
);