import React, {useState} from 'react';
import publicationsStyles from "./styles/publications.module.css";

export default ({title, description, url}) => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
        getClassNames();
    }

    const getClassNames = () => {
        if(open) return publicationsStyles.active;
        return '';
    }

    return (
        <div className={`${publicationsStyles.panelGroup}`}>
            <button type="button" onClick={handleToggle} className={`${publicationsStyles.collapsible} ${getClassNames()}`}>
                <h3>{title}</h3>
                <div className={open ? `${publicationsStyles.panelCollapse}`: `${publicationsStyles.panelCollapse} ${publicationsStyles.panelClose}`}>
                    {description}
                    <br/>
                    <a href={url} target="_blank" rel="noopener noreferrer" className={`${publicationsStyles.viewArticle}`}>Read the report</a>
                </div>
            </button>
        </div>
    );
}