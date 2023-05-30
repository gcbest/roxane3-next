import Layout from '../../components/Layout';
import DownloadLink from '../..//components/DownloadLink';

export default () => {
    return (
        <Layout contentHeader="Resources">
            <section className="resources">
                <h3>Leadership</h3>
                <DownloadLink href="/assets/articles/5tips_personal_leadership.pdf" title="5 Essential Tips for Personal Leadership" />
                <h3>Mental Health</h3>
                <DownloadLink href="/assets/articles/work_stressors_exploring_solutions.pdf" title="Work Stressors: Exploring Solutions" />
                <h3>Coaching</h3>
                <DownloadLink href="/assets/articles/six_coaching_outcomes.pdf" title="Six Coaching Outcomes" />
                <DownloadLink href="/assets/articles/assess_work_effectiveness.pdf" title="Asses Work Effectiveness" />
            </section>
        </Layout>
    )
}