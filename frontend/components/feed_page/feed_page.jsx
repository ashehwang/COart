import React from 'react';
import MainCharPostItem from '../main_page/main_char_post_item';

class FeedPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { page: 0 }
    }

    componentDidMount(){
        // this.props.fetchPublicCharacterPosts();
        // if (this.props.history.action === "POP") this.props.fetchPublicCharacterPosts();
        this.props.fetchFollowingCharacterPosts(this.props.currentUser.id, 0);
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.location.key !== this.props.location.key) {
    //         this.props.fetchPublicCharacterPosts();
    //     }
    // }

    render(){
        const { characterPosts, characters, loggedIn, currentUser, createComment, deleteCharacterPost, openModal } = this.props;
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
                    <div>Following</div>
                    <div>
                        Following Worlds
                    </div>
                    <div>
                        Following Chars
                    </div>
                </div>
            </div>
        )
    }
}


export default FeedPage;