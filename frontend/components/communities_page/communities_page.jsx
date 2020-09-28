import React from 'react';
import CommunityItem from './community_item';

class CommunitiesPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllOpenCommunities();
    }

    render(){
        return(
            <div className="worlds-page-container">
                <div className="charform-limit">
                    <div className="worlds-page flex">
                        {this.props.communities.map( community => <CommunityItem key={community.id} community={community} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunitiesPage;