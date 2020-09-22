import React from 'react';

class CommentShow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { comment } = this.props;

        return(
            <div className="comment-box flex">
                <div className="comment-user">{comment.user.nick_name} <span>@{comment.user.user_name}</span> : </div>
                <div>{comment.body}</div>
            </div>
        )
    }
}

export default CommentShow;