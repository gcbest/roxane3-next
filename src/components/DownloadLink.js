import { FaFileDownload } from 'react-icons/fa';

export default ({ href, title }) => {
    return (<a href={href} download>{title} <FaFileDownload/></a>)
}