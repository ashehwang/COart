import React from 'react';
import CharPostItem from './char_post_item'

class CharPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRelatedCharacterPosts(this.props.characterId);
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
                        <div>
                            Click to see Full Profile
                        </div>
                        <div>
                            Edit vs Follow Button Here
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
