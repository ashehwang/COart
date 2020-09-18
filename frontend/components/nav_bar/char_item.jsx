import React from 'react';

class CharacterItem extends React.Component {

    selected(){
        if(this.props.character.selected){
            return <div className="nav-char-selected">Selected</div>
        } else {
            return <div className="nav-char-change hover" onClick={() => this.props.selectChar(this.props.character.id)}>Select</div>
        }
    }

    render(){

        if(!this.props.character) return null;

        return (
            <div className="nav-char-item flex">
                <div>
                    <img src={this.props.character.headPhotoUrl} className="smaller-profile-pic" />
                </div>
                <div className="nav-char-item-name">
                    {this.props.character.first_name} {this.props.character.last_name}
                    {this.selected()}
                </div>
            </div>
        )
    }
}

export default CharacterItem;