import React from 'react';
import { connect } from 'react-redux';
import { deleteUserComment, updateUserComment } from '../../actions/user_comment_actions';

class UserComment extends React.Component {

    constructor(props){
        super(props);
        this.state = Object.assign({ editable: false }, this.props.comment);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    allowDelete(){

        const {loggedIn, currentUser, user, comment, deleteUserComment} = this.props;
        if ((loggedIn && comment.user_id === currentUser.id) || (loggedIn && currentUser.id === user.id)){
            return <i className="far fa-times-circle hover" onClick={() => deleteUserComment(comment.id)}></i>
        } else return null;
    }

    updateBody(e){
        this.setState({ body: e.target.value })
    }

    handleSubmit(e){
        if (e.key === "Enter"){
            this.props.updateUserComment(this.state)
                .then((res) => {
                    if (res.type === "RECEIVE_USER_COMMENT") this.setState({ editable: false })
                })
        }
    }

    handleTime(){
        const now = new Date();
        const nowString = now.toString();
        const past = new Date(this.props.comment.updated_at);
        const pastString = past.toString();

        if (nowString.slice(4, 15) === pastString.slice(4, 15)) {
            return "Today " + pastString.slice(16,24);
        } else {
            return this.props.comment.updated_at.slice(0, 10);
        }
    }

    toggleEdit(){
        if (this.props.loggedIn && this.props.comment.user_id === this.props.currentUser.id) this.setState({ editable: true })
    }

    render(){

        const { comment } = this.props;
        const edit = this.state.editable ? "" : "hidden";
        const hide = this.state.editable ? "hidden" : "";

        if (!comment) return null;

        return(
            <div className="comment-box-container flex">
                <div className="comment-box flex">
                    <div className="comment-user">{comment.author.nick_name} <span>@{comment.author.user_name}</span> : </div>
                    <div className={`comment-body ${hide}`} onClick={this.toggleEdit}>{comment.body}</div>
                    <div className={`comment-edit ${edit}`}><input type="text" value={this.state.body} onChange={this.updateBody} onKeyDown={this.handleSubmit}/></div>
                </div>
                    <span>{this.handleTime()}  {this.allowDelete()}</span>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    comment: state.entities.userComments[ownProps.commentId],
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    user: ownProps.user
});

const mDTP = dispatch => ({
    deleteUserComment: commentId => dispatch(deleteUserComment(commentId)),
    updateUserComment: userComment => dispatch(updateUserComment(userComment))
});

export default connect(mSTP, mDTP)(UserComment)