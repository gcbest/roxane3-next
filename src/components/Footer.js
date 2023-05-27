export default () => {
    const publications = [
        {
            title: `The effects of strategic organisational change and practices on psychosocial risks`,
            description: 'Organisational change is a useful process within an organisation, and could lead to improved practices and procedures. However, it tends to occur to a greater extent during periods of recession or economic turmoil. Regardless as to when it occurs, it is useful to explore the impacts of these changes on occupational safety and health (OSH). This article examines the relationship between various organisational practices (such as, lean production, downsizing and resizing, globalisation, outsourcing, continuous improvement, and process reengineering), and how they affect psychosocial risks in the workplace. In addition, the implications for workers’ health and wellbeing are outlined and discussed.',
            url: 'http://oshwiki.eu/wiki/The_effects_of_organisational_practices_on_psychosocial_risks' 
        },
        {
            title: `Prevention of work-related violence to staff in the education sector`,
            description: 'One of the risks to which staffs in the education sector are exposed is violence. When workers are exposed to violence, it may impact adversely on their health and wellbeing. Additionally, this may affect their ability to function as educators. This article focuses mainly on third-party violence, i.e., that which is perpetrated against staff by pupils / students / parents, but provides as well some information on violence perpetrated by colleagues. It outlines the impact that work-related violence has on those who experience it, and presents good practice and prevention examples that are available for educational institutions and workers in this sector.',
            url: 'http://oshwiki.eu/wiki/Prevention_of_work-related_violence_to_staff_in_the_education_sector' 
        },
        {
            title: `Worker participation in the United Kingdom`,
            description: 'In the United Kingdom, worker participation is promoted as an essential element of the work environment. It is accepted that workers are key sources of information about the jobs in which they are engaged and are therefore in the best position to work with management as well as safety and health personnel to develop safer work systems and practices[1]. It is known also that effective worker participation, or the more widely used term in the United Kingdom, worker involvement, could help to reduce accidents and ill health[1]. This article explores worker participation and representation in respect of occupational safety and health (OSH) across the sector level and the enterprise level.',
            url: 'http://oshwiki.eu/wiki/Worker_participation_-_United_Kingdom' 
        },
        {
            title: `Detachment and recovery after work: An overview`,
            description: 'Psychological detachment, i.e. the need to detach from work, when not at work, is becoming more vital, due to the increasing technological advances that make it easier to stay connected to the workplace, through e.g., e-mail, ‘smart’ phones and teleworking. These changes have contributed to researchers progressively highlighting the importance of recovery from the work environment, especially in terms of maintaining a good balance between work and life, and thereby, enabling better health and wellbeing. This article discusses: the detachment and recovery concepts; their relationship; and impact on workers’ health, wellbeing and productivity.',
            url: 'http://oshwiki.eu/wiki/Detachment_and_recovery_after_work:_An_overview' 
        },
        {
            title: `Presenteeism: An overview`,
            description: 'Presenteeism as a concept is increasing in importance in the work environment. It occurs when workers go to work when ill and are unable to perform effectively due to their ill health. Due to this loss in productivity, it has been estimated that presenteeism costs organisations more than sickness absence, and as such should be monitored to a greater extent. It impacts on workers’ health, wellbeing and resilience, as well as organisational health. These issues are discussed as are the implications for workplace policies and practices to manage presenteeism.',
            url: 'http://oshwiki.eu/wiki/Presenteeism:_An_overview' 
        },
        {
            title: `Workaholism and the culture of competition: OSH consequences`,
            description: 'This article defines workaholism and the culture of competition. These concepts are not usually considered from an occupational safety and health (OSH) perspective. With respect to workaholism, most of the information on this topic thus far has either been anecdotal or has used a clinical approach[1]. However, as one of the consequences of these behaviours could be ill health, they should be viewed as a risk within the workplace. The benefits of addressing these behaviours in the work environment by implementing good practice are discussed.',
            url: 'http://oshwiki.eu/wiki/Workaholism_and_the_culture_of_competition:_OSH_consequences' 
        }
    ]
    
    return (
        <footer className="main-footer">
            <div className="about">
                <h2>Practical Psychology Consultancy Ltd</h2>
                We are a team of experienced and regulated psychologists. Using an evidenced-based approach, we will work with you to develop a bespoke solution to address those safety, health and overall well-being issues, inclusive of mental health, which have arisen in your workplace. We will ensure that the solution adds value to your organisational practices and enhances your organisational culture.
            </div>
            <div className="posts">
            <h2>Published Works</h2>
            <ul>
                {publications.map(pub => (<li key={pub.title}><a href={pub.url} target="_blank" rel="noopener noreferrer">{`${pub.title}`}</a></li>))}
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