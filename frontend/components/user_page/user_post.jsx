import React from 'react';
import UserComment from './user_comment';

class UserPost extends React.Component {

    constructor(props){
        super(props);
        this.state = { body: "", user_id: null, post_id: this.props.post.id };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    updateBody(e){
        this.setState({ body: e.target.value });
    }

    handleSubmit(e){
        if (e.key === "Enter") {
            this.setState({ user_id: this.props.currentUser.id}, () => {
                this.props.createUserComment(this.state);
                this.setState({body: ""});
            })
        }
    }

    isMine(){
        const { loggedIn, currentUser, user } = this.props;
        return (loggedIn && currentUser.id === user.id) ? true : false ;
    }

    renderCommentBox(){ //only logged  in users can comment
        if(!this.props.loggedIn) return null;
        return(
            <div className="user-single-post-comments flex">
                <p>{this.props.currentUser.nick_name} <span>@{this.props.currentUser.user_name}</span> :</p>
                <input type="text" placeholder="Write a comment.." value={this.state.body} onChange={this.updateBody} onKeyDown={this.handleSubmit}/>
            </div>
        )
    }

    handleTime(){ //formatting time
      const now = new Date();
      const nowString = now.toString();
      const past = new Date(this.props.post.updated_at);
      const pastString = past.toString();

      if (nowString.slice(4, 15) === pastString.slice(4, 15)) {
          if (Number(pastString.slice(16, 18)) === 12) {
              return "Today at 12" + pastString.slice(18,21) + " PM";
          } else if (Number(pastString.slice(16, 18)) > 12) {
              const hour = Number(pastString.slice(16,18)) - 12;
              return "Today at " + String(hour) + pastString.slice(18,21) + " PM"              
          } else { return "Today at " + pastString.slice(16, 21) + " AM" }
      } else {
          return "Posted on " + this.props.post.updated_at.slice(0, 10)
      }
    }

    renderUserButtons(){ //allow users to edit and delete if own
        const { openModal, post, deletePost } = this.props;
        if(this.isMine()){
            return (
                <div className="user-single-post-cruds absolute flex">
                    <div className="user-single-post-crud border hover" onClick={() => openModal('editpost', post)}>
                        Edit
                    </div>
                    <div className="user-single-post-crud border hover" onClick={() => deletePost(post.id)}>
                        Delete
                    </div>
                </div>
            )
        } else return null;
    }

    showComments(){ //displays comments
        const { post, user } = this.props;
        if(!post.user_comment_ids.length) return null;
        return(
            <div>
                {post.user_comment_ids.map( id => <UserComment key={id} commentId={id} user={user}/>)}
            </div>
        )
    }

    render(){
        const { post } = this.props;
        const image = post.photoUrl ? <div className="flex-center"><img src={post.photoUrl}/></div> : null ;
        const body = post.body ? <div className="user-single-post-body">{post.body}</div> : null ;
        return(
            <div className="user-single-post-container relative border">
                {this.renderUserButtons()}
                <div className="user-single-post-time">{this.handleTime()}</div>
                {image}
                {body}
                {this.renderCommentBox()}
                {this.showComments()}
            </div>
        )
    }
}

export default UserPost;