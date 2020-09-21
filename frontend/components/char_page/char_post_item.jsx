import React from 'react';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

class CharPostItem extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { dropdown: false, body: "", visibility: "public", user_id: this.props.currentUser.id, character_post_id: this.props.characterPost.id};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    updateBody(e){
        this.setState({ body: e.target.value });
    }

    handleSubmit(e){
        if(e.key === "Enter") {
            e.preventDefault();
            this.props.createComment(this.state);
            this.setState({ body: "" });
        }
    }

    handleDropdown(e){
        this.setState({ dropdown: !this.state.dropdown });
    }

    imgExists(){
        if(this.props.characterPost.photoUrl){
            return <div className="char-post-img"><img src={this.props.characterPost.photoUrl}/></div>
        } else {return null}
    }

    renderButtons() {
        if (!this.props.loggedIn) {
        return null;
        } else if (this.props.currentUser.id === this.props.character.creator.id) {
        return (<div className="char-post-bottom flex">
                    <div className="char-post-buttons hover flex-center">Edit</div>
                    <div className="char-post-buttons hover flex-center" onClick={this.handleDropdown}>Comment</div>
                </div>);
        } else {
        return (<div className="char-post-bottom flex">
                    <div className="char-post-buttons hover flex-center">Like</div>
                    <div className="char-post-buttons hover flex-center" onClick={this.handleDropdown}>Comment</div>
                </div>);
        }
    }

    render(){

        const { characterPost, character, currentUser } = this.props;
        const hidden = this.state.dropdown ? "" : "hidden";

        return (
            <div className="char-post-container">
                <div className="char-post-top flex">
                    <div><img src={character.headPhotoUrl} className="smaller-profile-pic" /></div>
                    <div>
                        <div className="char-post-profile">
                            {character.first_name} {character.last_name} <span> {characterPost.updated_at.slice(0,10)} </span>
                        </div>
                        {this.imgExists()}
                        <div className="char-post-body">
                            {characterPost.body}
                        </div>
                    </div>
                </div>
                {this.renderButtons()}
                <div className={`single-char-post-comments ${hidden} flex`}>
                    <p>{currentUser.nick_name} <span>@{currentUser.user_name}</span> :</p>
                    <input type="text" placeholder="Write a comment!" value={this.state.body} onChange={this.updateBody} onKeyDown={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default CharPostItem;