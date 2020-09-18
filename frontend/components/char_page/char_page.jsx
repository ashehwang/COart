import React from 'react';
import CharPostItem from './char_post_item'

class CharPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRelatedCharacterPosts(this.props.characterId);
    }

    renderButtons(){
        const { character, users, currentUser, loggedIn } = this.props;
        if (!character) return null;
        const creator = users[character.user_id];
        if (!creator) return null;


        if (!loggedIn) {
            return null;
        } else if (currentUser.id === creator.id) {
            return(
                <>
                    <div className="char-page-buttons hover flex-center">
                        Edit {character.first_name}
                    </div>
                    <div className="char-page-buttons hover flex-center">
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
        const { character, users, characterPosts } = this.props;
        if (!character) return null;
        const creator = users[character.user_id];
        if (!creator) return null;

        return (
            <div className="char-page-container align-center">
                <div className="relative flex">
                    <div className="char-page-left">
                        <div className="char-page-profile flex">
                            <img src={character.headPhotoUrl} className="small-profile-pic" />
                            <div className="char-page-profile-detail">
                                {character.first_name} {character.last_name}
                                <div className="char-page-creator-detail">
                                    <span>Creator: {creator.nick_name}</span>
                                    @{creator.user_name}
                                </div>
                            </div>
                        </div>
                        <div className="char-page-buttons hover flex-center">
                            View Full Profile
                        </div>
                        <div>
                            {this.renderButtons()}
                        </div>
                    </div>
                    <div className="char-page-right">
                        <div>
                            {characterPosts.map(charPost => <CharPostItem key={charPost.id} characterPost={charPost} creator={creator} character={character}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CharPage;
