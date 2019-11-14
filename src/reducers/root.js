//TODO ( 4 .-) The action ping (type:"PING") gets dispatched here 
export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true };
    //? AS the action ping is true, in return we get {isPinging:true}
    case 'PONG':
      return { isPinging: false };
    //? As the action pong of type : 'PONG' comes from the epic we get that {isPinging:false}
    //? sending it to the props and returning the app and state to its original form
    default:
      return state;
  }
};