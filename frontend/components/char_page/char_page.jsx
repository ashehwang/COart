import React from 'react';
import CharPostItem from './char_post_item';
import { Link } from 'react-router-dom';

class CharPage extends React.Component {
    constructor(props){
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    componentDidMount(){
        this.props.fetchRelatedCharacterPosts(this.props.characterId);
        // if (this.props.history.action === "POP") this.props.fetchRelatedCharacterPosts(this.props.characterId)
    }

    handleFollow(){
        const follow = { id: this.props.character.id };
        this.props.followCharacter(follow);
    }

    handleUnfollow(){
        const unfollow = { id: this.props.character.id };
        this.props.unfollowCharacter(unfollow);
    }

    hasWorld(){
        if(!this.props.character) return null;
        if(this.props.character && this.props.character.community) {
            const logo = this.props.character.community.logoUrl ? <img src={this.props.character.community.logoUrl}/> : null ;
            return (
                <Link to={`/world/${this.props.character.community.url}`}>
                    <div className="char-page-world-show flex-center border hover flex">
                        <div className="flex-center">
                        {logo}
                        </div>
                        <div className="char-page-world">
                        <span>Member Of</span> <br /> {this.props.character.community.name}
                        </div>
                    </div>
                </Link>
            );
        } else return null;
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.location.key !== this.props.location.key) {
    //         this.props.fetchRelatedCharacterPosts(this.props.characterId);
    //     }
    // }

    renderButtons(){
        const { character, currentUser, loggedIn } = this.props;
        if (!character) return null;

        if (!loggedIn) {
            return null;
        } else if (currentUser.id === character.creator.id) {
            return(
                <div className="char-page-buttons-center flex-center">
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('createcharpost')}>
                        Write as {character.first_name}
                    </div>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.history.push(`/edit/${character.id}`)}>
                        Edit {character.first_name}
                    </div>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('deletechar', character)}>
                        Delete {character.first_name}
                    </div>
                </div>
            )
        } else if (character.follower_ids.includes(currentUser.id)) {
            return(
                <div className="char-page-buttons hover flex-center" onClick={this.handleUnfollow}>
                    Unfollow {character.first_name}
                </div>
            )
        } else {
            return(
                <div className="char-page-buttons hover flex-center" onClick={this.handleFollow}>
                    Follow {character.first_name}
                </div>
            )
        }
    }

    render(){
        const { character, characterPosts, loggedIn, currentUser, deleteCharacterPost, createComment, openModal } = this.props;
        if (!character) return <div className="warning flex-center">Sorry, this character does not exist.</div>;

        return (
            <div className="char-page-container align-center">
                <div className="relative flex">
                    <div className="char-page-left">
                        <div className="char-page-profile flex">
                            <img src={character.headPhotoUrl} className="small-profile-pic" />
                            <div className="char-page-profile-detail">
                                {character.first_name} {character.last_name}
                                <div className="char-page-creator-detail">
                                    <span>Creator: {character.creator.nick_name}</span>
                                    @{character.creator.user_name}
                                    {this.hasWorld()}
                                </div>
                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('showchar', character)}>
                                View Full Profile
                            </div>
                        </div>
                        <div>
                            {this.renderButtons()}
                        </div>
                    </div>
                    <div className="char-page-right">
                        <div>
                            {characterPosts.reverse().map(charPost => <CharPostItem key={charPost.id} characterPost={charPost} character={character} loggedIn={loggedIn} currentUser={currentUser} createComment={createComment} deleteCharacterPost={deleteCharacterPost} openModal={openModal}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CharPage;
