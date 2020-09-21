import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CharacterItem extends React.Component {

    selected(){
        if(this.props.character.selected){
            return <div className="nav-char-selected">Selected</div>
        } else {
            return <div className="nav-char-change hover" onClick={() => this.props.selectChar(this.props.character.id).then(() => this.props.history.push(`/character/${this.props.character.id}`))}>Select</div>
        }
    }

    render(){

        if(!this.props.character) return null;

        return (
            <div className="nav-char-item flex">
                <div>
                    <img src={this.props.character.headPhotoUrl} className="smaller-profile-pic" />
                </div>
                <div className="nav-char-item-name" >
                    <Link to={`/character/${this.props.character.id}`}>{this.props.character.first_name} {this.props.character.last_name}</Link>
                    {this.selected()}
                </div>
            </div>
        )
    }
}

export default CharacterItem;