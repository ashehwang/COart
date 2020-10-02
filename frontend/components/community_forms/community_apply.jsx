import React from 'react';

class CommunityApply extends React.Component {
    constructor(props){
        super(props);
        this.state = { character_id: null, status: "pending" };
        this.updateCharacter = this.updateCharacter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateCharacter(e){
        this.setState({ character_id: e.currentTarget.value, user_id: this.props.currentUser.id, admin_id: this.props.community.admin_id, community_id: this.props.community.id })
    }

    handleSubmit(e){
        this.props.createMembershipRequest(this.state)
            .then(res => {
                if (res.type === "RECEIVE_MEMBERSHIP_REQUEST") {
                    this.props.history.push(`/world/${res.payload.url}/applications`);
                }
            })
    }

    render(){

        const {community, currentUser, characters} = this.props; //its-you
        if(!community) return <div className="warning">This World Does Not Exist</div>
        if(!currentUser) return <div className="warning">No Current User</div>
        if(!characters) return <div className="warning">You Have No Characters To Apply</div>

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
                        {currentUser.character_ids.map(charId => <CharApplyShow key={charId} character={characters[charId]} updateCharacter={this.updateCharacter}/>)}
                    </div>
                </div>
                <div className="world-apply-submit flex-center hover" onClick={this.handleSubmit}>Apply</div>
            </div>
        )
    }
}

class CharApplyShow extends CommunityApply {

    render(){
        const {character} = this.props;
        if(!character) return <div>No Character</div>
        if(!character.eligible) return null;

        return(
        <div className="world-apply-char">
            <input type="radio" id={character.first_name} name="char" value={character.id} onChange={this.props.updateCharacter}/>
            <label htmlFor={character.first_name}> <img src={character.headPhotoUrl}/> {character.first_name} {character.last_name}</label>
        </div>
        )
    }
}

export default CommunityApply;