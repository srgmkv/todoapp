(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n(29)},23:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),s=(n(23),n(8)),c=n(1),u=n(2),d=n(4),l=n(3),p=n(5),h=n(6),m=n(7);function f(){var t=Object(h.a)(["\n\t\t\tcolor: #d00;\n\t\t\tfont-size: 1.45em;\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 1;\n\t\t\tmargin-left: auto;\n\t\t\tpadding-right: 5px;\n\t\t"]);return f=function(){return t},t}var b=function(t){function e(){return Object(c.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=m.a.div(f());return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{id:this.props.item.id,type:"checkbox",checked:this.props.item.completed,onChange:function(){return t.props.handleChange(t.props.item.id)}}),o.a.createElement("label",{htmlFor:this.props.item.id},o.a.createElement("p",{style:this.props.item.completed?{fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"}:null},this.props.item.text)),o.a.createElement(e,{onClick:function(){return t.props.delItem(t.props.item.id)}},"\xd7"))}}]),e}(o.a.Component),S=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(d.a)(this,Object(l.a)(e).call(this))).addTolist=function(){var e=t.input.current.value,n=Object(s.a)(t.props.state.todos);if(e&&""!==e.trim()){var a={id:t.props.state.todos.length,text:e,completed:!1};n.push(a),t.input.current.value=null}t.props.toSetNewState(n),localStorage.setItem("todoDataInLS",JSON.stringify(n)),t.props.toHideInput()},t.handlePressKey=function(e){"Enter"===e.key&&t.addTolist()},t.input=o.a.createRef(),t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.input.current.focus()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"add-field"},o.a.createElement("div",null,o.a.createElement("input",{id:"text-input",type:"text",placeholder:"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0431\u043e\u0440\u0430 \u043d\u0430\u0436\u0438\u0442\u0435 Enter \u0438\u043b\u0438 \u041e\u041a",onKeyUp:this.handlePressKey,ref:this.input})),o.a.createElement("div",null,o.a.createElement("button",{id:"okbutton",onClick:this.addTolist},"\u043e\u043a"))))}}]),e}(o.a.Component);function v(){var t=Object(h.a)(["\n\t\t\tdisplay: inline-block;\n\t\t\tpadding: 0px 3px;\n\t\t\tbackground-color: rgb(255, 0, 0, 0.6);\n\t\t\tcolor: white;\n\t\t\tvertical-align: middle;\n\t\t\tmargin: 0 3px;\n\t\t\tcursor: pointer;\n\t\t"]);return v=function(){return t},t}function g(){var t=Object(h.a)(["\n\t\t\tposition: absolute;\n\t\t\tbackground-color: rgba(244, 255, 89, 0.8);\n\t\t\twidth: 100%;\n\t\t\theight: 60px;\n\t\t\tz-index: 2;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.2em;\n\t\t\tcolor: royalblue;\n\t\t\tpadding-top: 20px;\n\t\t\tborder-radius: 3px;\n\t\t\tmax-width: 400px;\n\t\t\ttop: 60px;\n\t\t\tleft: 50%;\n\t\t\ttransform: translateX(-50%);\n    "]);return g=function(){return t},t}var j=function(t){function e(){return Object(c.a)(this,e),Object(d.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=m.a.div(g()),e=m.a.span(v());return o.a.createElement(o.a.Fragment,null,o.a.createElement(t,null,"\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0443\u043d\u043a\u0442\u0430 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443",o.a.createElement(e,{id:"plus",onClick:this.props.toShowInput},"+"),"\u0441\u043b\u0435\u0432\u0430 \u0432\u0432\u0435\u0440\u0445\u0443"))}}]),e}(o.a.Component),I=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(d.a)(this,Object(l.a)(e).call(this))).toSetNewState=function(e){return t.setState({todos:e})},t.handleChange=function(e){var n=Object(s.a)(t.state.todos).map(function(t){return t.id===e&&(t.completed=!t.completed),t});t.setState({todos:n}),localStorage.setItem("todoDataInLS",JSON.stringify(n))},t.delItem=function(e){var n=Object(s.a)(t.state.todos).filter(function(t){return t.id!==e}).map(function(t,e){return t.id=e,t});t.setState({todos:n}),localStorage.setItem("todoDataInLS",JSON.stringify(n)),t.setState({justloaded:!1})},t.toShowInput=function(){t.setState({justloaded:!1}),t.setState({isInputShown:!0})},t.toHideInput=function(){return t.setState({isInputShown:!1})},t.state={todos:[],isInputShown:!1,justloaded:!1},t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=JSON.parse(localStorage.getItem("todoDataInLS"));this.setState({todos:e}),this.setState({justloaded:!0}),document.addEventListener("click",function(e){var n=e.target.id;"add-field"!==n&&"text-input"!==n&&"okbutton"!==n&&"add-button"!==n&&"plus"!==n&&t.toHideInput()}),document.addEventListener("keyup",function(e){"Escape"===e.key&&t.toHideInput()})}},{key:"render",value:function(){var t=this,e=this.state.todos.map(function(e){return o.a.createElement(b,{key:e.id,item:e,handleChange:t.handleChange,delItem:t.delItem,toShowInput:t.toShowInput})});return o.a.createElement(o.a.Fragment,null,this.state.justloaded&&!this.state.todos.length&&o.a.createElement(j,{toShowInput:this.toShowInput}),this.state.isInputShown&&o.a.createElement(S,{addTolist:this.addTolist,handlePressKey:this.handleChange,state:this.state,toSetNewState:this.toSetNewState,toHideInput:this.toHideInput}),o.a.createElement("div",{id:"main",className:this.state.isInputShown?"list-disable":void 0},o.a.createElement("button",{id:"add-button",onClick:this.toShowInput},"+"),o.a.createElement("div",{id:"header"},"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"),o.a.createElement("div",{className:"todo-list"},e)))}}]),e}(o.a.Component);r.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c477f50c.chunk.js.map