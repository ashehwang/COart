import React from 'react';
import CommunityPostItem from './community_post_item';

class CommunityStory extends React.Component {
    constructor(props){
        super(props);
    }

    isMember(){
        const { character, loggedIn, currentUser, community } = this.props;
        if (loggedIn && community.member_ids.includes(currentUser.selected_id)) {
            return(
                <div className="flex" onClick={() => this.props.openModal('story', community.id)}>
                    <div className="flex"><img src={character.headPhotoUrl}/></div>   
                    <div className="flex">What's on your mind, {character.first_name}?</div>
                </div>
            )
        } else return null;
    }

    render(){
        const { characterPosts, characters, loggedIn, currentUser, createComment, deleteCharacterPost, openModal } = this.props;
        if (!characterPosts ) return null;

        return(
            <div className="world-story-container">
                {this.isMember()}
                <div>
                    {/* {characterPosts.reverse().map(charPost => <CommunityPostItem key={charPost.id} characterPost={charPost} character={characters[charPost.character_id]} loggedIn={loggedIn} currentUser={currentUser} createComment={createComment} deleteCharacterPost={deleteCharacterPost} openModal={openModal}/>)} */}
                </div>
            </div>
        )
    }
}

export default CommunityStory;