import DownloadLink from "../components/DownloadLink";

export default () => {
    const resources = [
        {
            title: '5 Essential Tips for Personal Leadership',
            url: '/assets/articles/5tips_personal_leadership.pdf'
        },
        {
            title: 'Work Stressors: Exploring Solutions',
            url: '/assets/articles/work_stressors_exploring_solutions.pdf'
        },
        {
            title: 'Six Coaching Outcomes',
            url: '/assets/articles/six_coaching_outcomes.pdf'
        },
        {
            title: 'Asses Work Effectiveness',
            url: '/assets/articles/assess_work_effectiveness.pdf'
        }
    ];
    
    return (
        <footer className="main-footer">
            <div className="about">
                <h2>Practical Psychology Consultancy Ltd</h2>
                We are a team of experienced and regulated psychologists. Using an evidenced-based approach, we will work with you to develop a bespoke solution to address those safety, health and overall well-being issues, inclusive of mental health, which have arisen in your workplace. We will ensure that the solution adds value to your organisational practices and enhances your organisational culture.
            </div>
            <div className="posts">
            <h2>Resources</h2>
            <ul>
                {resources.map(resource => (<li key={resource.title}><DownloadLink key={resource.title} href={resource.url} title={resource.title} /></li>))}
            </ul>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Unit 34, Craven Park Training and Enterprise Centre</p>
                <p>Kingston-Upon-Hull</p>
                <p>HU9 5HE</p>
                <p>+44 (0)7887 743295</p>
                <p className="email"><span>roxane.gervais</span><span>@practicalpsychologyconsultancy.com</span></p>


            </div>
        </footer>
    )
}