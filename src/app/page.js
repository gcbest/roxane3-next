import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Accreds from '../components/Accreds';
import Aside from '../components/Aside';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import animatedStyles from '../components/styles/animate.module.css';

export default function Main() {
  return (
    <div>
      <Header />
      <div className="hero-video-wrap">
        <video autoPlay={true} muted={true} loop={true}>
          <source src="/assets/videos/rotating-city.webm" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-grid">
            <Image
              className={`${animatedStyles.animated} ${animatedStyles.slideInUp} animated-pic`}
              src="/assets/images/roxy_transparent_background.png"
              width={300}
              height={300}
              alt="roxane"
            />
            <div className="hero-text">
              <h1 className="font_1">Practical Psychology Consultancy Ltd</h1>
              <h3 className="font_2">
                Providing focused solutions to improve and enhance workers’ well-being performance,
                and productivity; as well as effective organisational functionality.
              </h3>
              <Link href="/contact">
                <button className="btn">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <Home />
        <Aside />
        <Accreds />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}
