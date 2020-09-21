import React from 'react';
import CharPostItem from './char_post_item'

class CharPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRelatedCharacterPosts(this.props.characterId);
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
                <>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('createcharpost')}>
                        Write as {character.first_name}
                    </div>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.history.push(`/edit/${character.id}`)}>
                        Edit {character.first_name}
                    </div>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('deletechar', character)}>
                        Delete {character.first_name}
                    </div>
                </>
            )
        } else {
            return(
                <div className="char-page-buttons hover flex-center">
                    Follow {character.first_name}
                </div>
            )
        }
    }

    render(){
        const { character, characterPosts, loggedIn, currentUser, createComment } = this.props;
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
                                </div>
                            </div>
                        </div>
                        <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('showchar', character)}>
                            View Full Profile
                        </div>
                        <div>
                            {this.renderButtons()}
                        </div>
                    </div>
                    <div className="char-page-right">
                        <div>
                            {characterPosts.reverse().map(charPost => <CharPostItem key={charPost.id} characterPost={charPost} character={character} loggedIn={loggedIn} currentUser={currentUser} createComment={createComment}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CharPage;
