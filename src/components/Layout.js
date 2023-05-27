import React, {Fragment} from 'react';
import HeaderSlimHero from './HeaderSlimHero';
import Aside from './Aside';
import Accreds from './Accreds';
import Footer from './Footer';
import Copyright from './Copyright';


export default (props) => (
    <Fragment>
        <HeaderSlimHero/>
        <div className="wrapper">
        <article className="content">
			<h1 className="content-header">{props.contentHeader}.</h1>
                {props.children}
            </article>
            <Aside/>
            <Accreds/>
        </div>
        <Footer/>
        <Copyright/>
    </Fragment>
);