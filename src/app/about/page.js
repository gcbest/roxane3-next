import Image from 'next/image';
import Layout from '../../components/Layout';

export default () => (
    <Layout contentHeader="About">

    <h3>
      Practical Psychology Consultancy Ltd works to support all aspects of your work to ensure your
      desired outcome.
    </h3>
    <p className="about-details">
      <br />
      We are a team of experienced and regulated psychologists. Using an evidenced-based approach,
      we will work with you to develop a bespoke solution to address those safety, health and
      overall well-being issues, inclusive of mental health, which have arisen in your workplace. We
      will ensure that the solution adds value to your organisational practices and enhances your
      organisational culture.
    </p>
    <br />
    <p className="about-details">
      Dr. Roxane Gervais is a highly goal-oriented professional with strong data analytic and
      interpretation experience. Highly experienced in research design, survey design, psychological
      assessment, organisational change, organisational development, psychometrics, and career
      development. Extremely organised with the ability to manage multiple projects and meet
      deadlines. Years of experience working in diverse teams and in international environments. A
      strong work ethic combined with a commitment to excellence in all projects undertaken. Strong
      communication and presentation skills.
    </p>
    <br />
    <div>
      <Image
        className="about-me-pic"
        src="/assets/images/roxane-linkedin.jpeg"
        width={300}
        height={300}
        alt="linkedIn"
      />
    </div>
    <div className="youtube-area">
      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/o9Y3M0M_axA"
          frameBorder="0"
          title="roxane"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="youtube-video">
        <iframe
          src="https://www.youtube.com/embed/aYImNDUTeWU"
          frameBorder="0"
          title="employee-wellness"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </Layout>
);
