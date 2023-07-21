import React from 'react'
import Icon from '../icon/icon';
import './card.css';
import {memo} from 'react';

function Card({onPlay, player, index, gameEnd}) {
  let icon=<Icon />
  if(player=='X'){
    icon=<Icon name={'cross'} />
  }
  else if(player=='0'){
    icon=<Icon name={'circle'} />
  }
  return (
    <div className='card' onClick={()=> !gameEnd && player=='' && onPlay(index)}>
        {icon}
    </div>
  )
}

export default memo(Card);
