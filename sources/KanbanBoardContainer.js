import React, {Component} from 'react';
import KanbanBoard from './KanbanBoard';

class KanbanBoardContainer {
  constructor() {
    super();
    this.state = {
      cards : [],
    };
  }

  render(){
    return <KanbanBoard cards={cards}/>
  };
}

export default KanbanBoardContainer;
