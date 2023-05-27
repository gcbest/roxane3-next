
import Link from 'next/link';

import WorkMeeting from '../../assets/images/work-meeting.jpg'

export default () => (
    <div className="hero-img-wrap">
        <img className="hero-background-img" src={WorkMeeting} alt="meeting"/>
        <div className="hero-overlay"></div>
        <div className="hero-content-small">
            <div className="hero-text-small">
                <h1 className="font_1">Practical Psychology Consultancy Ltd</h1>
                <h3 className="font_2">
                Providing focused solutions to improve and enhance workers’ well-being performance, and productivity; as
                well as effective organisational functionality.
                </h3>
                <Link href="/contact" className="btn">Contact Us</Link>
            </div>
        </div>
    </div>
)