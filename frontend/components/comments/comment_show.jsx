import React from 'react';

class CommentShow extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign({ editable: false }, this.props.comment);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    allowDelete(){
        if(this.props.loggedIn && this.props.comment.user_id === this.props.currentUser.id){
            return <i className="far fa-times-circle hover" onClick={() => this.props.deleteComment(this.props.comment.id)}></i>
        } else return null;
    }

    toggleEdit(){
        if (this.props.loggedIn && this.props.comment.user_id === this.props.currentUser.id) this.setState({ editable: true })
    }

    updateBody(e){
        this.setState({ body: e.target.value })
    }

    handleSubmit(e){
        if (e.key === "Enter"){
            this.props.updateComment(this.state)
                .then((res) => {
                    if (res.type === "RECEIVE_COMMENT") this.setState({ editable: false })
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

    render(){
        const { comment } = this.props;
        const edit = this.state.editable ? "" : "hidden";
        const hide = this.state.editable ? "hidden" : "";

        return(
            <div className="comment-box-container flex">
                <div className="comment-box flex">
                    <div className="comment-user">{comment.user.nick_name} <span>@{comment.user.user_name}</span> : </div>
                    <div className={`comment-body ${hide}`} onClick={this.toggleEdit}>{comment.body}</div>
                    <div className={`comment-edit ${edit}`}><input type="text" value={this.state.body} onChange={this.updateBody} onKeyDown={this.handleSubmit}/></div>
                </div>
                    <span>{this.handleTime()}  {this.allowDelete()}</span>
            </div>
        )
    }
}

export default CommentShow;