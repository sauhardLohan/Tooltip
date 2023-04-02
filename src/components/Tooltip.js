import styled from 'styled-components'

// styled-component to give animation and position to tooltip depending on position variable
const TooltipDisplay=styled.div`
  @keyframes fade-in {
    from{
      opacity: 0;

      // initial translation of tooltip for animation depending on position

      transform: translate(${({position})=>{return position==="right"? '-8%,0':position==="left"? '8%,0' :position==="bottom"? '0,-8%':'0,8%'}})
    }
    to{
      transform: translate(0,0) ;
      opacity: 1;
    }
  }
  animation: fade-in 1s  ease-in-out ;
  
  // positioning of tooltip depending on position
  
  bottom:${({position,heightTooltip,borderIndicator})=>{return position==="bottom"? `${-(heightTooltip + 2 * borderIndicator + 8)}px`:null}};
  top:${({position,heightTooltip,borderIndicator})=>{return position==="top"? `${-(heightTooltip + 2 * borderIndicator + 8)}px`:position==="right" || position==="left"?`${-(heightTooltip / 2 - 2)}px`:null}};
  left:${({position,widthTooltip,borderIndicator})=>{return position==="bottom"|| position==="top"? '-50px':position==="left"? `${-(widthTooltip + 2 * borderIndicator + 8)}px`:null}};
  right:${({position,widthTooltip,borderIndicator})=>{return position==="right"?`${-(widthTooltip + 2 * borderIndicator+8 )}px`:null}};
  position: absolute;
  width: 200px;
  height: 50;
  background-color: black;
  border-radius: 10px;
  color: white;
  padding: 10px;
  display:${(props)=>props.showTooltip?'block':'none'};

  // positioning of triangular indicator depending on position

  .indicator{
    bottom:${({position,borderIndicator})=>{return position==="top"? `${-(2 * borderIndicator - 2)}px`:null}};
    top:${({position,heightTooltip,borderIndicator})=>{return position==="bottom"? `${-(2 * borderIndicator - 2)}px`:position==="right" || position==="left"?`${(heightTooltip - borderIndicator) / 2 + 4}px`:null}};
    left:${({position,widthTooltip,borderIndicator})=>{return position==="bottom"|| position==="top"? `${(widthTooltip - borderIndicator) / 2 - 2}px`:position==="right"? `${2 - 2 * borderIndicator}px`:null}};
    right:${({position,borderIndicator})=>{return position==="left"?`${2 - 2 * borderIndicator}px`:null}};
    width: 0px;
    height: 0px;
    border: 12px solid;
    position: absolute;
    border-color:${({position})=>{return position==="right"? 'transparent black transparent transparent':position==="left"? 'transparent transparent transparent black' :position==="bottom"? 'transparent transparent black transparent':'black transparent transparent transparent'}}}
  }
  #tooltip-info{
    text-align: center;
    padding: 2px;
  }
  `


function Tooltip(props) {
  const { showTooltip, position } = props;
  // height of tooltip box 
  const heightTooltip = 50;
  // width of tooltip box 
  const widthTooltip = 200;
  // border of indicator 
  const borderIndicator = 12;

  return (
    
    <TooltipDisplay
      id="tooltip" 
      position={position}
      showTooltip={showTooltip}
      heightTooltip={heightTooltip}
      widthTooltip={widthTooltip}
      borderIndicator={borderIndicator}
    >
      <div id="tooltip-info" >Thanks for hovering I'm a tooltip</div>
      <div className="indicator" ></div>
    </TooltipDisplay>
  );
}


export default Tooltip;
