import React from 'react';
import MainCharPostItem from './main_char_post_item';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { page_num: 0, next_avail: true };
        this.getNextPosts = this.getNextPosts.bind(this);
        this.getPreviousPosts = this.getPreviousPosts.bind(this);
    }

    componentDidMount(){
        this.props.fetchPublicCharacterPosts(0);
        // if (this.props.history.action === "POP") this.props.fetchPublicCharacterPosts();
    }

    componentDidUpdate(prevProps){
        if(prevProps.location.key !== this.props.location.key) {
            this.props.fetchPublicCharacterPosts(0);
        }
    }

    getNextPosts(e){
        this.setState({ page_num: this.state.page_num + 1 }, () => {
            this.props.fetchPublicCharacterPosts(this.state.page_num)
                      .then( res => this.checkResLength(res));
        });
    }

    getPreviousPosts(e){
        this.setState({ page_num: this.state.page_num - 1 }, () => {
            this.props.fetchPublicCharacterPosts(this.state.page_num)
                      .then( res => this.checkResLength(res));
        });
    }

    checkResLength(res){
        if(Object.values(res.payload.characterPosts).length === 5) {
            this.setState({ next_avail: true });
        } else this.setState({ next_avail: false }, () => console.log(this.state));
    }

    renderPrevious(){
        if(this.state.page_num > 0){
            return <div className="hover" onClick={this.getPreviousPosts}><i className="fas fa-chevron-left" ></i>  Previous</div>
        } else return null;
    }

    renderNext(){
        if (this.state.next_avail) {
            return (
              <div className="hover" onClick={this.getNextPosts}>
                <i className="fas fa-chevron-right"></i> Next
              </div>
            );
        } else return null;
    }

    render(){
        const { characterPosts, characters, loggedIn, currentUser, createComment, deleteCharacterPost, openModal } = this.props;
        if(!characterPosts) return null;
        return (
            <div className="main-page-container relative align-center">
                <div className="feed-page-logo absolute">
                    <img className="cotell-logo hover" src="https://i.ibb.co/fYkKYp5/try3.png" alt="logo"></img>
                    <div className="feed-page-alert border">
                        Welcome to Co-Tell! Clicking our logo at the upper left corner will bring you to the <Link to="/">introduction page</Link>. 
                        <br/><br/>
                        This page can be loaded by clicking the small home sign next to the search bar. Please join/log in to access your feed!
                    </div>
                </div>
                <div className="main-page">
                    {characterPosts.reverse().map(charPost => <MainCharPostItem key={charPost.id} characterPost={charPost} character={characters[charPost.character_id]} loggedIn={loggedIn} currentUser={currentUser} createComment={createComment} deleteCharacterPost={deleteCharacterPost} openModal={openModal}/>)}
                    <div className="board-page-flip-white flex relative">
                        {this.renderNext()}
                        {this.renderPrevious()}
                    </div>
                </div>
            </div>
        )
    }
}


export default MainPage;