import React from 'react';

class CharPostItem extends React.Component {
    constructor(props){
        super(props);
    }

    imgExists(){
        if(this.props.characterPost.photoUrl){
            return <div className="char-post-img"><img src={this.props.characterPost.photoUrl}/></div>
        } else {return null}
    }

    renderButtons(){
        if (!this.props.loggedIn) {
            return null;
        } else if (this.props.currentUser.id === this.props.character.creator.id){
            return <div className="char-post-buttons hover flex-center">Edit</div>
        } else {
            return <div className="char-post-buttons hover flex-center">Like</div>
        }
    }

    render(){

        const { characterPost, character } = this.props;

        return (
            <div className="char-post-container">
                <div className="char-post-top flex">
                    <div><img src={character.headPhotoUrl} className="smaller-profile-pic" /></div>
                    <div>
                        <div className="char-post-profile">
                            {character.first_name} {character.last_name} <span> {characterPost.created_at.slice(0,10)} </span>
                        </div>
                        {this.imgExists()}
                        <div className="char-post-body">
                            {characterPost.body}
                        </div>
                    </div>
                </div>
                <div className="char-post-bottom flex">
                    {this.renderButtons()}
                    <div className="char-post-buttons hover flex-center">Comment</div>
                </div>
            </div>
        )
    }
}

export default CharPostItem;