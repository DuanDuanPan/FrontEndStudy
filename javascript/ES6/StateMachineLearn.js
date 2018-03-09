var StateMachine = require('javascript-state-machine');

var createStateMachine = function () {
  var fsm = new StateMachine({
    // 初始状态
    init: 'solid',
    // 连线--起始状态至结束状态
    transitions: [
      { name: 'melt', from: 'solid', to: 'liquid' },
      { name: 'freeze', from: 'liquid', to: 'solid' },
      { name: 'vaporize', from: 'liquid', to: 'gas' },
      { name: 'condense', from: 'gas', to: 'liquid' }
    ],
    // 状态监听
    methods: {
      onMelt: function () { console.log('I melted') },
      onFreeze: function () { console.log('I froze') },
      onVaporize: function () { console.log('I vaporized') },
      onCondense: function () { console.log('I condensed') }
    }
  });
  return fsm;
}



var main = function () {
  var fsm = createStateMachine();
  console.dir(fsm);
  return fsm;
}

module.exports = {
  main: main
}