import React from 'react';

class CommunityApply extends React.Component {
    constructor(props){
        super(props);
        this.state = { character_id: null }
    }

    render(){

        const {community, currentUser, characters} = this.props; //its-you

        return(
            <div className="world-apply">
                <div className="world-apply-title flex-center">Apply to {community.name}</div>
                <div className="world-apply-prompt">Prior to applying, please read over the world details to make sure your character fits into the world.
                    A character can only be allowed to join one world. But one user can have multiple characters in one world. If you want an existing character
                     to join this world, that character should resign from existing world before applying to a different one.
                </div>
                <div className="world-apply-chars flex">
                    <div>Apply With: </div>
                    <div>
                        {currentUser.character_ids.map(charId => <CharApplyShow key={charId} character={characters[charId]} />)}
                    </div>
                </div>
                <div className="world-apply-submit flex-center">Apply</div>
            </div>
        )
    }
}

class CharApplyShow extends React.Component {

    render(){

        const {character} = this.props;
        if(!character) return <div>No Character</div>

        return(
        <div className="world-apply-char">
            <input type="radio" id={character.first_name} name="char" value={character.id}/>
            <label htmlFor={character.first_name}> <img src={character.headPhotoUrl}/> {character.first_name} {character.last_name}</label>
        </div>
        )
    }
}

export default CommunityApply;