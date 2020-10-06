import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CommunityItem extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        const {community} = this.props;
        if (!community) return <p>fetching world</p>
        const logo = community.logoUrl ? <img src={`${community.logoUrl}`} /> : <p>No Logo</p>
        const active = community.status === "active" ? <span>YES</span> : <span>NO</span>
        const recruiting = community.recruiting === "active" ? <span>YES</span>: <span>NO</span>
        const intro = community.intro.length < 180 ? community.intro : community.intro.slice(0, 180) + " ..."

        return(
            <div className="world-item-container">
                {/* <div className="hover world-item-name flex-center" onClick={() => this.props.history.push(`/world/${community.url}`)}>{community.name}</div> */}
                <Link to={`/world/${community.url}`}><div className="hover world-item-name flex-center">{community.name}</div></Link>
                <div className="world-item-logo flex-center">{logo}</div>
                <div className="world-item-intro">{intro}</div>
                <div className="world-item-detail">Admin: {community.admin.nick_name}<span>@{community.admin.user_name}</span></div>
                <div className="world-item-detail">Recruiting Members: {recruiting}</div>
                <div className="world-item-detail">Active: {active}</div>
            </div>
        )
    }
}

// export default withRouter(CommunityItem);
export default CommunityItem;