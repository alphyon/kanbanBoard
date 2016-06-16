import React, {Component}from 'react';
import {render}from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';

// // let cardList =[
//   {
//     id:1,
//     title:"Leer un libro ",
//     description: "Debo leer el libro de **Historias** de Usuarios",
//     color:'#bd8d31',
//     status: "in-progress",
//     tasks:[]
//   },
//   {
//     id:2,
//     title:"Terminar el Codigo del libro Terminar el Codigo del libro Terminar el Codigo del libro ",
//     description: "terminar los codigos de este ejemplo mi repo es [github](https://github.com/alphyon) ",
//     color:'#3a7e28',
//     status: "todo",
//     tasks:[
//       {
//         id:1,
//         name:"Crear Estructura base",
//         done:true
//       },
//       {
//         id:2,
//         name:"Ejemplo de tablero ",
//         done:false
//       },
//       {
//         id:3,
//         name:"Hacer experimentos ",
//         done:false
//       },
//     ]
//   },
//   {
//     id:3,
//     title:"React kanban  ",
//     description: "hacer la app  ",
//     color:'#3a7eff',
//     status: "done",
//     tasks:[
//       {
//         id:1,
//         name:"Crear Estructura base",
//         done:true
//       },
//       {
//         id:2,
//         name:"Ejemplo de tablero ",
//         done:false
//       },
//       {
//         id:3,
//         name:"Hacer experimentos ",
//         done:false
//       },
//     ]
//   }
// ];


render(<KanbanBoardContainer />,document.getElementById('root'));
