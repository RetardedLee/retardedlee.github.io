import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/vedioDetail'
import Player from './modules/player'
import './index.scss'
 class VedioPlayer extends React.Component{
    constructor(props){
        super(props)
        this.id=props.match.params.id
    }
    componentDidMount(){
        this.props.showMenuAction(false)
        this.props.vedioDetailAction({id:this.id})
        this.props.vedioCommentAction({id:this.id})
        this.props.vedioRelativeAction({id:this.id,type:1})
        this.props.vedioUrlAction({id:this.id,type:240})
    }
    render(){

        let {props,state}=this
        return <div className="vedio-detail">
            <Player url={props.vedioPlay.vedioUrl} detail={props.vedioPlay.vedioDetail}/>
        </div>
    }
}
export default createContainer(withRouter(VedioPlayer),"vedioPlay",actions)