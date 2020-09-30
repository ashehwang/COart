import React from 'react';

class CommunityApply extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        const {community, currentUser, characters} = this.props;

        return(
            <div>
                <div>Apply to {community.name}</div>
                <div>Prior to applying, please read over the world details to make sure your character fits into the world.
                    One character can only be allowed to join one world.
                </div>
                <div>
                    Apply With:
                    {currentUser.character_ids.map(charId => <CharApplyShow key={charId} character={characters[charId]} />)}
                </div>
                <div>Apply</div>
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