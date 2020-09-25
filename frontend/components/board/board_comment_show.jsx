import React from 'react';

class BoardCommentShow extends React.Component {

    constructor(props){
        super(props);
        this.state = Object.assign({ editable: false }, this.props.boardComment);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    allowDelete() {
      if (
        this.props.loggedIn &&
        this.props.boardComment.user_id === this.props.currentUser.id
      ) {
        return (
          <i
            className="far fa-times-circle hover"
            onClick={() => this.props.deleteBoardComment(this.props.boardComment.id)}
          ></i>
        );
      } else return null;
    }

    toggleEdit() {
      if (
        this.props.loggedIn &&
        this.props.boardComment.user_id === this.props.currentUser.id
      )
        this.setState({ editable: true });
    }

    updateBody(e) {
      this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
      if (e.key === "Enter") {
        this.props.updateBoardComment(this.state).then((res) => {
          if (res.type === "RECEIVE_BOARD_COMMENT") this.setState({ editable: false });
        });
      }
    }

    handleTime() {
      const now = new Date();
      const nowString = now.toString();
      const past = new Date(this.props.boardComment.updated_at);
      const pastString = past.toString();
    
      if (nowString.slice(4, 15) === pastString.slice(4, 15)) {
        return "Today " + pastString.slice(16, 24);
      } else {
        return this.props.boardComment.updated_at.slice(0, 10);
      }
    }

    render(){
        const { boardComment } = this.props;
        const edit = this.state.editable ? "" : "hidden";
        const hide = this.state.editable ? "hidden" : "";

        if(!boardComment) return <div>no board comment</div>
        return (
          <div className="comment-box-container flex">
            <div className="comment-box flex">
              <div className="comment-user">
                {boardComment.author.nick_name} <span>@{boardComment.author.user_name}</span> :{" "}
              </div>
              <div className={`comment-body ${hide}`} onClick={this.toggleEdit}>
                {boardComment.body}
              </div>
              <div className={`comment-edit ${edit}`}>
                <input
                  type="text"
                  value={this.state.body}
                  onChange={this.updateBody}
                  onKeyDown={this.handleSubmit}
                />
              </div>
            </div>
            <span>
              {this.handleTime()} {this.allowDelete()}
            </span>
          </div>
        );
    }
}

export default BoardCommentShow;







//   render() {

//   }
// }