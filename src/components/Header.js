import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default () => (
  <header className="main-head">
    <div className="head-container">
      <h1 className="logo">
        <Link href="/">
          <Image src="/assets/images/logo_transparent_background.png" alt="logo" width={200} height={200} />
        </Link>
      </h1>

      <div className="banner-info">
        <p className="phone-number">
          <span className="brand-color">Call:</span>
          <a href="tel:+44 (0)7887 743295">+44 (0)7887 743295</a>
        </p>

        <ul className="top-social-media">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/roxanelgervais" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/dr-roxane-gervais/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav className="main-nav">
      <ul>
        <li>
          <Link className="nav-link" href="/about">
            About
          </Link>{' '}
        </li>
        <li>
          <Link className="nav-link" href="/services">
            Services
          </Link>{' '}
        </li>
        <li>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
