import React from 'react';
import MainCharPostItem from '../main_page/main_char_post_item';
import { Link } from 'react-router-dom';

class FeedPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { page: 0, next_avail: true };
        this.getNextPosts = this.getNextPosts.bind(this);
        this.getPreviousPosts = this.getPreviousPosts.bind(this);
    }

    componentDidMount(){
        // this.props.fetchPublicCharacterPosts();
        // if (this.props.history.action === "POP") this.props.fetchPublicCharacterPosts();
        this.props.fetchFollowingCharacterPosts(this.props.currentUser.id, 0);
    }

    getNextPosts(e){
        this.setState({ page: this.state.page + 1 }, () => {
            this.props.fetchFollowingCharacterPosts(this.props.currentUser.id, this.state.page)
                      .then( res => this.checkResLength(res));
        });
    }

    getPreviousPosts(e){
        this.setState({ page: this.state.page - 1 }, () => {
            this.props.fetchFollowingCharacterPosts(this.props.currentUser.id, this.state.page)
                      .then( res => this.checkResLength(res));
        });
    }

    checkResLength(res){
        if(Object.values(res.payload.characterPosts).length === 15) {
            this.setState({ next_avail: true });
        } else this.setState({ next_avail: false }, () => console.log(this.state));
    }

    renderPrevious(){
        if(this.state.page > 0){
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

    // componentDidUpdate(prevProps){
    //     if(prevProps.location.key !== this.props.location.key) {
    //         this.props.fetchPublicCharacterPosts();
    //     }
    // }

    render(){
        const { characterPosts, characters, loggedIn, currentUser, createComment, deleteCharacterPost, openModal, communities, unfollowCommunity, unfollowFeedCharacter } = this.props;
        if(!characterPosts) return null;
        return (
            <div className="main-page-container relative align-center">
                <div className="feed-page-logo absolute">
                    <img className="cotell-logo hover" src="https://i.ibb.co/fYkKYp5/try3.png" alt="logo"></img>
                    <div className="feed-page-alert border">
                        Feed page will show posts from characters and worlds you follow. If this page is empty, look for characters / worlds that interest you!
                    </div>
                </div>
                <div className="main-page">
                    {characterPosts.reverse().map(charPost => <MainCharPostItem key={charPost.id} characterPost={charPost} character={characters[charPost.character_id]} loggedIn={loggedIn} currentUser={currentUser} createComment={createComment} deleteCharacterPost={deleteCharacterPost} openModal={openModal}/>)}
                    <div className="board-page-flip flex relative">
                        {this.renderNext()}
                        {this.renderPrevious()}
                    </div>
                </div>
                <div className="feed-follow-box-container absolute border">
                    <div className="feed-follow-boxes">
                        <div className="feed-follow-category">Following Worlds</div>
                        {currentUser.following_community_ids.map(id => <FollowWorldShow key={id} community={communities[id]} unfollowCommunity={unfollowCommunity} />)}
                    </div>
                    <div className="feed-follow-boxes">
                        <div className="feed-follow-category">Following Characters</div>
                        {currentUser.following_character_ids.map(id => <FollowCharShow key={id} character={characters[id]} unfollowFeedCharacter={unfollowFeedCharacter} />)}
                    </div>
                </div>
            </div>
        )
    }
}

class FollowWorldShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleUnfollowWorld = this.handleUnfollowWorld.bind(this);
    }

    handleUnfollowWorld(){
        const unfollow = { id: this.props.community.id };
        this.props.unfollowCommunity(unfollow)
    }

    render(){

        const {community} = this.props;
        if(!community) return <p>fetching world..</p>

        return(
            <div className="feed-page-follow-item flex">
                <Link to={`/world/${community.url}`}><div>{community.name}</div></Link>
                <i className="far fa-bell-slash" onClick={this.handleUnfollowWorld}></i>
            </div>
        )
    }
}

class FollowCharShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleUnfollowCharacter = this.handleUnfollowCharacter.bind(this);
    }

    handleUnfollowCharacter(){
        const unfollow = { id: this.props.character.id };
        this.props.unfollowFeedCharacter(unfollow);
    }

    render(){

        const {character} = this.props;
        if(!character) return <p>fetching character..</p>

        return(
            <div className="feed-page-follow-item flex">
                <Link to={`/character/${character.id}`}> <div>{character.first_name} {character.last_name}</div> </Link>
                <i className="far fa-bell-slash" onClick={this.handleUnfollowCharacter}></i>
            </div>
        )
    }
}


export default FeedPage;