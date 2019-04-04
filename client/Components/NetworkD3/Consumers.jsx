import React from 'react';

const renderConsumers = (props) => {
  return (coords, index) => {
    const consumerProps = {
      x: props.nodes[props.producers+props.exchanges+props.queues+index].x,
      y: props.nodes[props.producers+props.exchanges+props.queues+index].y,
      width: 25,
      height: 25,
      key: 19+index,
      stroke: 'black',
      strokeWidth: 2,
      fill: "purple"
    }
    return <rect {...consumerProps} onClick={(e)=>props.updateNodeCards(props.nodes[props.producers+props.exchanges+props.queues+index])}/> // <rect> is d3 function
  }
}

export default (props) => {
  return <g>{ props.nodes.filter(el => el.group === 4).map(renderConsumers(props))}</g>
}