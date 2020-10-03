import React from 'react';

class UserPost extends React.Component {
    constructor(props){
        super(props);
    }

    handleTime(){
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

    render(){
        const { post } = this.props;
        const image = post.photoUrl ? <img src={post.photoUrl}/> : null ;
        return(
            <div className="user-single-post-container">
                <div>{this.handleTime()}</div>
                {image}
                <div>{post.body}</div>
            </div>
        )
    }
}

export default UserPost;