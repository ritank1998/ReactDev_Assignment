import React from "react";
import "./Repository.css"
//Bootstrap is used to make the UI card for each repository on UI.
const GetRepository = (props) => {
    const { repository } = props
    // Stars on user repository
    const stars = repository.stargrazers_count > 999 ? (repository.stargazers_count / 1000).toFixed(1) + 'k' : repository.stargazers_count;
    //Open Issues on user repository
    const issues = repository.open_issues_count > 999 ? (repository.open_issues_count / 1000).toFixed(1) + 'k' : repository.open_issues_count;
    //Submission date
    const dateSubmited = Date.parse(new Date()) - Date.parse(repository.created_at);
    const NDays = Math.floor(dateSubmited / (1000 * 60 * 60 * 24));
    return (
        <div className="card mb-3 myCard mx-auto">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={repository.owner.avatar_url} className="img-fluid rounded-start" alt="avatar" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{repository.name}</h5>
                        <p className="card-text">{repository.description}</p>
                        <p className="card-text"><small className="text-muted"><span className="btn1">Stars:{stars} </span> <span className="btn1">Issues:{issues} </span> Submited {NDays} days ago by {repository.owner.login}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GetRepository