import React from 'react';
import MainCharPostItem from '../main_page/main_char_post_item';
import { Link } from 'react-router-dom';

class FeedPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { page: 0 };
        // this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.getNextPosts = this.getNextPosts.bind(this);
        this.getPreviousPosts = this.getPreviousPosts.bind(this);
    }

    componentDidMount(){
        // this.props.fetchPublicCharacterPosts();
        // if (this.props.history.action === "POP") this.props.fetchPublicCharacterPosts();
        this.props.fetchFollowingCharacterPosts(this.props.currentUser.id, 0);
    }

    getNextPosts(e){
        this.setState({ page_num: this.state.page_num + 1 }, () => {
            this.props.fetchPageCharacterPosts(this.props.character.id, this.state.page_num)
                      .then( res => this.checkResLength(res));
        });
    }

    getPreviousPosts(e){
        this.setState({ page_num: this.state.page_num - 1 }, () => {
            this.props.fetchPageCharacterPosts(this.props.character.id, this.state.page_num)
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

    handleUnfollow(){
        const unfollow = { id: this.props.character.id };
        this.props.unfollowCharacter(unfollow);
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.location.key !== this.props.location.key) {
    //         this.props.fetchPublicCharacterPosts();
    //     }
    // }

    render(){
        const { characterPosts, characters, loggedIn, currentUser, createComment, deleteCharacterPost, openModal, communities } = this.props;
        if(!characterPosts) return null;
        return (
            <div className="main-page-container relative align-center">
                <div className="feed-page-logo absolute">
                    <img className="cotell-logo hover" src="https://i.ibb.co/fYkKYp5/try3.png" alt="logo"></img>
                    <div className="feed-page-alert">
                        Feed page will show posts from characters and worlds you follow. If this page is empty, look for characters / worlds that interest you!
                    </div>
                </div>
                <div className="main-page">
                    {characterPosts.reverse().map(charPost => <MainCharPostItem key={charPost.id} characterPost={charPost} character={characters[charPost.character_id]} loggedIn={loggedIn} currentUser={currentUser} createComment={createComment} deleteCharacterPost={deleteCharacterPost} openModal={openModal}/>)}
                </div>
                <div className="feed-follow-box-container absolute border">
                    <div className="feed-follow-boxes">
                        <div className="feed-follow-category">Following Worlds</div>
                        {currentUser.following_community_ids.map(id => <FollowWorldShow key={id} community={communities[id]} />)}
                    </div>
                    <div className="feed-follow-boxes">
                        <div className="feed-follow-category">Following Characters</div>
                        {currentUser.following_character_ids.map(id => <FollowCharShow key={id} character={characters[id]} />)}
                    </div>
                </div>
            </div>
        )
    }
}

class FollowWorldShow extends React.Component {
    render(){
        const {community} = this.props;
        if(!community) return <p>fetching world..</p>
        return(
            <Link to={`/world/${community.url}`}>
                <div className="feed-page-follow-item flex">
                    <div>{community.name}</div>
                    <i className="far fa-bell-slash"></i>
                </div>
            </Link>
        )
    }
}

class FollowCharShow extends React.Component {
    render(){
        const {character} = this.props;
        if(!character) return <p>fetching character..</p>
        return(
            <Link to={`/character/${character.id}`}>
                <div className="feed-page-follow-item flex">
                    <div>{character.first_name} {character.last_name}</div>
                    <i className="far fa-bell-slash"></i>
                </div>
            </Link>
        )
    }
}


export default FeedPage;