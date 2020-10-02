import React from 'react';

class UserPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUserByUsername(this.props.username)
    }

    renderButtons(){
        const { loggedIn, currentUser, user } = this.props;
        if(!loggedIn || !user) return null; 
        if (currentUser.id === user.id) { //user on his/her own page
            return(
                <>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('edituser', user)}>
                        Edit Your Profile
                    </div>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('createcharpost')}>
                        Check Messages
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('createcharpost')}>
                        Send Messages to {user.nick_name}
                    </div>
                </>
            )
        }

    }

    render(){
        const { user } = this.props;
        if (!user) return <div className="warning">No User</div>
        return(
            <div className="char-page-container align-center">
                <div className="relative flex">
                    <div className="char-page-left">
                        <div className="char-page-profile flex">
                            <img src={user.photoUrl} className="small-profile-pic" />
                            <div className="char-page-profile-detail">
                                {user.nick_name} <span>@{user.user_name}</span>
                                <div className="char-page-creator-detail">
                                    {user.bio}
                                </div>
                            </div>
                        </div>
                        <div className="char-page-buttons hover flex-center" onClick={() => this.props.openModal('showchar', character)}>
                            View {user.nick_name}'s Characters
                        </div>
                        <div>
                            {this.renderButtons()}
                        </div>
                    </div>
                    <div className="char-page-right">
                        USERPOSTS COME HERE
                    </div>
                </div>
            </div>

        )
    }
}

export default UserPage;