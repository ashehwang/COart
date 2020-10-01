import React from "react";
import CommentShowContainer from "../comments/comment_show_container";
import { Link } from "react-router-dom";

class CommunityPostItem extends React.Component {
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
        this.props.createComment(this.state);
        this.setState({ body: "" });
      });
    }
  }

  handleTime() {
    const now = new Date();
    const nowString = now.toString();
    const past = new Date(this.props.characterPost.updated_at);
    const pastString = past.toString();

    if (nowString.slice(4, 15) === pastString.slice(4, 15)) {
      if (Number(pastString.slice(16, 18)) === 12) {
        return "Today at 12" + pastString.slice(18, 21) + " PM";
      } else if (Number(pastString.slice(16, 18)) > 12) {
        const hour = Number(pastString.slice(16, 18)) - 12;
        return "Today at " + String(hour) + pastString.slice(18, 21) + " PM";
      } else {
        return "Today at " + pastString.slice(16, 21) + " AM";
      }
    } else {
      return "Posted on " + this.props.characterPost.updated_at.slice(0, 10);
    }
  }

  handleDropdown(e) {
    this.setState({ dropdown: !this.state.dropdown });
  }

  imgExists() {
    if (this.props.characterPost.photoUrl) {
      return (
        <div className="main-char-post-img flex-center">
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
          <div
            className="char-post-buttons hover flex-center"
            onClick={() =>
              this.props.openModal("editcharpost", this.props.characterPost)
            }
          >
            Edit
          </div>
          <div
            className="char-post-buttons hover flex-center"
            onClick={this.handleDropdown}
          >
            Comment
          </div>
        </div>
      );
    } else {
      return (
        <div className="char-post-bottom flex">
          <div className="char-post-buttons hover flex-center">Like</div>
          <div
            className="char-post-buttons hover flex-center"
            onClick={this.handleDropdown}
          >
            Comment
          </div>
        </div>
      );
    }
  }

  renderDelete() {
    if (
      this.props.loggedIn &&
      this.props.currentUser.id === this.props.character.creator.id
    ) {
      return (
        <div
          className="char-post-delete absolute hover"
          onClick={() =>
            this.props.deleteCharacterPost(this.props.characterPost.id)
          }
        >
          {" "}
          Delete <i className="far fa-times-circle"></i>
        </div>
      );
    } else return null;
  }

  renderCreateComment() {
    if (!this.props.loggedIn) {
      return null;
    } else {
      const hidden = this.state.dropdown ? "" : "hidden";
      const { currentUser } = this.props;
      return (
        <div className={`single-char-post-comments ${hidden} flex`}>
          <p>
            {currentUser.nick_name} <span>@{currentUser.user_name}</span> :
          </p>
          <input
            type="text"
            placeholder="Write a comment!"
            value={this.state.body}
            onChange={this.updateBody}
            onKeyDown={this.handleSubmit}
          />
        </div>
      );
    }
  }

  renderBody() {
    if (this.props.characterPost.body) {
      return this.props.characterPost.body.split("\n").map((text, idx) => (
        <p key={idx}>
          {text}
          <br />
        </p>
      ));
    } else return null;
  }

  renderBio() {
    if (this.props.character.bio) {
      return (
        <div className="full-profile-bio">
          {this.props.character.bio.split("\n").map((i) => (
            <>
              <p>{i}</p>
              <br />
            </>
          ))}
        </div>
      );
    } else return null;
  }

  render() {
    const { characterPost, character } = this.props;
    const hasComments = characterPost.comment_ids.length ? "" : "hidden";

    if (!character) return <div>no character</div>;
    if (!characterPost) return <div>no character post</div>;

    return (
      <div className="char-post-container relative">
        {this.renderDelete()}
        <div className="char-post-top flex">
          <div>
            <img src={character.headPhotoUrl} className="smaller-profile-pic" />
          </div>
          <div>
            <div className="char-post-profile flex">
              <Link to={`/character/${character.id}`}>
                {character.first_name} {character.last_name}
              </Link>
              <span> {this.handleTime()} </span>
            </div>
            {this.imgExists()}
            <div className="char-post-body">{this.renderBody()}</div>
          </div>
        </div>
        {this.renderButtons()}
        {this.renderCreateComment()}
        <div className={`single-post-comments-container ${hasComments}`}>
          {characterPost.comment_ids.map((commentId) => (
            <CommentShowContainer key={commentId} commentId={commentId} />
          ))}
        </div>
      </div>
    );
  }
}

export default CommunityPostItem;
