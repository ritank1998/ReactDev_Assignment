import React, { Component } from "react";
import GetRepository from "../Component/Repository";   
import getAllRepositories from "../API_Request/Api_Request";    //Importing Data Fetched from API using Axios Method
import Loader from "../Component/Loader";  //Importing Loader which tell data is being loaded




class UiComponent extends Component {
    state = {
        repositories: [],
        page: 1,
        isLoading: false,
        hasMore: true,
    };

    componentDidMount() {
        this.loadRepositories();
        window.addEventListener("scroll", this.onScroll);
    }
    //componnentDidMount is used to load the repositories fetched from API to mount it over the UI and the onScroll eventlistener will call 
    //onScroll method whent the user scrolls down the UI 

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }
    
    //componentWillUnmount will remove the scroll eventlistener from the window object , important to clean the so that they are no longer in use when done executing.

    onScroll = () => {
        const { isLoading, hasMore } = this.state;
        if (isLoading || !hasMore) return;
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            this.loadMoreRepositories();
        }
    };
    //onScroll method is used to load the data when the user scrolls down the UI , Common in webapplications to show infinite loading.


    loadRepositories = () => {
        this.setState({ isLoading: true });

        getAllRepositories(this.state.page)
            .then(response => {
                const newRepositories = response.data.items;
                this.setState(prevState => ({
                    hasMore: newRepositories.length > 0,
                    isLoading: false,
                    repositories: [...prevState.repositories, ...newRepositories],
                }));
            })
            .catch(err => {
                this.setState({ isLoading: false });
            });
    };
    //Load Initial Repositories function is used to load the repositories on the current page , and if there are few left then it returns true else it retuns false.

    loadMoreRepositories = () => {
        this.setState(
            prevState => ({
                isLoading: true,
                page: prevState.page + 1,
            }),
            () => {
                this.loadRepositories();
            }
        );
    };
    //LoadMoreRepositories is used to increment the page to load the data on the other pages.

    render() {
        const { isLoading, repositories } = this.state;
        return (
            <div>
                {repositories.length < 1 ? <Loader /> : (
                    repositories.map(repository => (
                        <GetRepository repository={repository} key={repository.id} />
                    ))
                )}
                {isLoading && <Loader />}
              {/*  //destructuring of the Data from isLoading and repositories is done */}
            </div>
        );
    }
}

export default UiComponent;