import React from "react";
import CommentShowContainer from '../comments/comment_show_container';

class MainCharPostItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
      body: "",
      visibility: "public",
      user_id: null,
      character_post_id: this.props.characterPost.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
      this.setState({ user_id: this.props.currentUser.id }, () => {
          e.preventDefault();
          this.props.createComment(this.state);
          this.setState({ body: "" });
      });
    }
  }

  handleDropdown(e) {
    this.setState({ dropdown: !this.state.dropdown });
  }

  imgExists() {
    if (this.props.characterPost.photoUrl) {
      return (
        <div className="char-post-img">
          <img src={this.props.characterPost.photoUrl} />
        </div>
      );
    } else {
      return null;
    }
  }

  renderButtons() {
    if (!this.props.loggedIn) {
      return null;
    } else if (this.props.currentUser.id === this.props.character.creator.id) {
      return (
        <div className="char-post-bottom flex">
          <div className="char-main-post-buttons hover flex-center">Edit</div>
          <div className="char-main-post-buttons hover flex-center" onClick={this.handleDropdown}>
            Comment
          </div>
        </div>
      );
    } else {
      return (
        <div className="char-post-bottom flex">
          <div className="char-main-post-buttons hover flex-center">Like</div>
          <div className="char-main-post-buttons hover flex-center" onClick={this.handleDropdown}>
            Comment
          </div>
        </div>
      );
    }
  }

  renderCreateComment(){
      if (!this.props.loggedIn) {
          return null;
      } else {
            const hidden = this.state.dropdown ? "" : "hidden";
            const { currentUser } = this.props;
          return (
                <div className={`single-char-post-comments ${hidden} flex`}>
                    <p>{currentUser.nick_name} <span>@{currentUser.user_name}</span> :</p>
                    <input type="text" placeholder="Write a comment!" value={this.state.body} onChange={this.updateBody} onKeyDown={this.handleSubmit} />
                </div>
          );
      }
  }

  render() {
    const { characterPost, character } = this.props;
    const hasComments = characterPost.comment_ids.length ? "" : "hidden";

    if(!character) return <div>no character</div>
    if(!characterPost) return <div>no character post</div>

    return (
      <div className="main-char-post-container">
        <div className="char-post-top flex">
          <div>
            <img src={character.headPhotoUrl} className="smaller-profile-pic" />
          </div>
          <div>
            <div className="char-post-profile">
              {character.first_name} {character.last_name}{" "}
              <span> {characterPost.updated_at.slice(0, 10)} </span>
            </div>
            {this.imgExists()}
            <div className="char-post-body">{characterPost.body}</div>
          </div>
        </div>
        {this.renderButtons()}
        {this.renderCreateComment()}
        <div className={`single-post-comments-container ${hasComments}`}>
            {characterPost.comment_ids.map(commentId => <CommentShowContainer key={commentId} commentId={commentId} />)}
        </div>
      </div>
    );
  }
}

export default MainCharPostItem;
