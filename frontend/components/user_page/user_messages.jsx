import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMessages, deleteMessage, seenMessage } from '../../actions/message_actions';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class UserMessages extends React.Component {

    constructor(props){
        super(props);
        this.state = { page: 0 };
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllMessages(this.props.user.id);
    }

    handleNext(){
        this.setState({ page: this.state.page + 1 }, () => {
            console.log(this.state)
            console.log(Object.keys(this.props.messages).length / 12);
        });
    }
    
    handlePrev(){
        this.setState({ page: this.state.page - 1 }, () => {
            console.log(this.state)
            console.log(Object.keys(this.props.messages).length / 12);
        });
    }

    renderPrevIcon() {
        if (this.state.page > 0) {
            return (
                <div className="hover" onClick={this.handlePrev}><i className="fas fa-chevron-left" ></i> Prev</div>
            )
        } else return null;
    }

    renderNextIcon() {
        let num = Math.floor(Object.keys(this.props.messages).length / 12);
        if ( num - 1 > this.state.page ) {
            return (
                <div className="hover" onClick={this.handleNext}><i className="fas fa-chevron-right" ></i> Next</div>
            )
        } else return null;
    }

    render(){

        const { messages, user, currentUser, deleteMessage, seenMessage, openModal } = this.props;

        if (currentUser.id !== user.id) return <div className="warning red">You are unauthorized to see this.</div>
        if (!messages) return <div>No Messages</div>
        const start = this.state.page * 12;
        const end = (this.state.page + 1) * 12;
        console.log(start, end)

        return(
            <div className="user-messages-show-container border">
                <div className="user-messages-show-top flex">
                    <div className="user-messages-show-seen flex-center"></div>
                    <div className="user-messages-show-from flex-center">From</div>
                    <div className="user-messages-show-expand flex-center">Content</div>
                    <div className="user-messages-show-date flex-center">Date</div>
                    <div className="user-messages-show-action flex-center"></div>
                </div>
                {Object.keys(messages).reverse().slice(start,end).map( id => 
                    <MessageItemShow 
                        key={id} 
                        message={messages[id]} 
                        user={user} 
                        deleteMessage={deleteMessage}
                        seenMessage={seenMessage}
                        openModal={openModal}
                    /> )}
                <div className="board-page-flip flex relative">
                    {/* <div className="hover" onClick={this.handleNext}><i className="fas fa-chevron-right" ></i> Next</div> */}
                    {/* <div className="hover" onClick={this.handlePrev}><i className="fas fa-chevron-left" ></i> Prev</div> */}
                    {this.renderNextIcon()}
                    {this.renderPrevIcon()}
                    <div className="message-page-warning absolute"><i className="fas fa-exclamation-circle"></i> Messages older than 30 days will be deleted.</div>
                </div>
            </div>
        )
    }
}

class MessageItemShow extends React.Component {

    constructor(props){
        super(props);
        this.state = { expand: false };
        this.handleSeen = this.handleSeen.bind(this);
    }

    handleTime(){ //formatting time
      const now = new Date();
      const nowString = now.toString();
      const past = new Date(this.props.message.created_at);
      const pastString = past.toString();

      if (nowString.slice(4, 15) === pastString.slice(4, 15)) {
          if (Number(pastString.slice(16, 18)) === 12) {
              return "12" + pastString.slice(18,21) + " PM";
          } else if (Number(pastString.slice(16, 18)) > 12) {
              const hour = Number(pastString.slice(16,18)) - 12;
              return String(hour) + pastString.slice(18,21) + " PM"              
          } else { return pastString.slice(16, 21) + " AM" }
      } else {
          return this.props.message.created_at.slice(0, 10)
      }
    }

    handleSeen(){
        if (this.props.message.seen) { //already seen; just toggle
            this.setState({ expand: !this.state.expand })
        } else {
            this.props.seenMessage(this.props.message.id)
                .then(res => {
                    if (res.type === "MESSAGE_SEEN") this.setState({ expand: !this.state.expand })
                })
        }
    }

    render(){
        const { message, user, openModal, deleteMessage } = this.props;
        const icon = message.seen ? <i className="far fa-envelope-open"></i> : <i className="far fa-envelope"></i>
        const body = message.body.length > 51 ? message.body.slice(0, 50) + "..." : message.body;
        const seen = this.state.expand ? "hidden" : "";
        const expand = this.state.expand ? "" : "hidden";

        return(
            <div className="user-messages-show-item flex">
                <div className="user-messages-show-seen flex-center">{icon}</div>
                <div className="user-messages-show-from flex-center hover"><Link to={`/user/${message.author.user_name}`}>{message.author.nick_name} <span>@{message.author.user_name}</span></Link></div>
                <div className={`user-messages-show-content hover ${seen}`} onClick={this.handleSeen}>{body}</div>
                <div className={`user-messages-show-expand hover ${expand}`} onClick={this.handleSeen}>{message.body}</div>
                <div className="user-messages-show-date flex-center">{this.handleTime()}</div>
                <div className="user-messages-show-action flex">
                    <div className="user-messages-show-actions border hover" onClick={() => openModal("createmessage", message.author)}>
                        <i className="fas fa-reply"></i> Reply
                    </div>
                    <div className="user-messages-show-actions border hover" onClick={() => deleteMessage(message.id)}>
                        <i className="fas fa-trash"></i> Delete
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id),
    user: state.entities.users[ownProps.match.params.username],
    messages: state.entities.messages
})

const mDTP = dispatch => ({
    fetchAllMessages: userId => dispatch(fetchAllMessages(userId)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId)),
    seenMessage: messageId => dispatch(seenMessage(messageId)),
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default connect(mSTP, mDTP)(UserMessages);