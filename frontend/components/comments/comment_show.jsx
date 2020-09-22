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
        if(this.props.comment.user_id === this.props.currentUser.id){
            return <i className="far fa-times-circle hover" onClick={() => this.props.deleteComment(this.props.comment.id)}></i>
        } else return null;
    }

    toggleEdit(){
        this.setState({ editable: true })
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
                    <span>{comment.updated_at.slice(0,10)}  {this.allowDelete()}</span>
            </div>
        )
    }
}

export default CommentShow;