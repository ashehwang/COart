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

        const intKeys = Object.keys(this.props.worlds).filter( key => parseInt(key));

        return(
            <div className="worlds-page-container relative">
                <div className="charform-limit">
                    <div className="worlds-page-top flex">
                        <div className="worlds-page-search border">
                            <i className="fas fa-search"></i><input type="text" placeholder="search for worlds..."/>
                            <i className="far fa-square hover"></i> All
                            <i className="far fa-square hover"></i> Accepting Members
                        </div> 
                        <div className="worlds-page-recruit flex-center hover" onClick={() => this.props.history.push("/recruit")}>
                            <i className="fas fa-plus"></i> Generate World
                        </div>
                    </div>
                    <div className="worlds-page flex">
                        {intKeys.map( id => <CommunityItem key={id} community={this.props.worlds[id]} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommunitiesPage;