import './Track.css';
class Track extends React.Component{

  renderAction(){
    if(this.props.isRemoveal){
      return <button>-</button>
    }else{
      return <button>+</button>
    }
  }
render(){

  return(
    <div className="Track">

      <div className="Track-information">
        <h3> TrackName </h3>
        <p>track artist  |  track album </p>
      </div>
    {this.renderAction()}
    
    </div>
  )

}
}
export default Track;
