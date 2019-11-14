(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(t,e,n){"use strict";n.r(e);n(168);var a=n(6),i=n.n(a),r=n(47),o=n.n(r),s=n(0),c=n.n(s),h=n(147),u=(n(27),n(140)),l=n.n(u),d=n(156),f=n.n(d);var p=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).handleRef=e.handleRef.bind(o()(o()(e))),e}i()(e,t),f()(e,null,[{key:"defaultProps",get:function(){return{width:800,height:600}}}]);var n=e.prototype;return n.handleRef=function(t){t&&(this.canvas=t,this.ctx=t.getContext("2d"),function(t,e){if("undefined"!=typeof window){var n=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,a=(window.devicePixelRatio||1)/n;a>1&&(t.style.height=t.height+"px",t.style.width=t.width+"px",t.width*=a,t.height*=a,e.scale(a,a))}}(this.canvas,this.ctx),this.props.innerRef(this.canvas,this.ctx))},n.render=function(){var t=this.props,e=(t.innerRef,l()(t,["innerRef"]));return c.a.createElement("canvas",Object.assign({ref:this.handleRef},e))},e}(s.PureComponent),v=(n(142),function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).handleRef=e.handleRef.bind(o()(o()(e))),e}i()(e,t),f()(e,null,[{key:"defaultProps",get:function(){return{innerRef:function(){}}}}]);var n=e.prototype;return n.handleRef=function(t){t&&(this.audio=t,this.props.innerRef(t))},n.render=function(){var t=this.props,e=(t.innerRef,l()(t,["innerRef"]));return c.a.createElement("audio",Object.assign({ref:this.handleRef},e))},e}(s.PureComponent)),m=n(173),w=n.n(m),g=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleAudioRef=n.handleAudioRef.bind(o()(o()(n))),n.handleCanvasRef=n.handleCanvasRef.bind(o()(o()(n))),n.draw=n.draw.bind(o()(o()(n))),n}i()(e,t);var n=e.prototype;return n.handleAudioRef=function(t){var e=new(window.AudioContext||window.webkitAudioContext);this.analyser=e.createAnalyser(),this.analyser.fftSize=256,this.audio=t,this.audioContext=e,e.createMediaElementSource(t).connect(this.analyser),this.analyser.connect(e.destination),this.currentAudioSamples=new Uint8Array(this.analyser.frequencyBinCount),this.tryStartDrawing()},n.handleCanvasRef=function(t){this.canvas=t,this.canvasContext=t.getContext("2d"),this.canvasContext.lineWidth=1,this.canvasContext.strokeStyle="white",this.tryStartDrawing()},n.tryStartDrawing=function(){this.canvas&&this.audio&&this.draw()},n.draw=function(){0,window.requestAnimationFrame(this.draw);var t=this.canvasContext.getImageData(0,0,500,500);this.canvasContext.clearRect(0,0,500,500),this.analyser.getByteTimeDomainData(this.currentAudioSamples);var e=50/this.currentAudioSamples.length;this.canvasContext.putImageData(t,100,0),this.canvasContext.beginPath();for(var n=0;n<this.currentAudioSamples.length;n++){var a=e*n,i=500*(this.currentAudioSamples[n]/128)/2;0===n?this.canvasContext.moveTo(a,i):this.canvasContext.lineTo(a,i)}this.canvasContext.stroke()},n.render=function(){return c.a.createElement("div",null,c.a.createElement(p,{width:500,height:500,innerRef:this.handleCanvasRef}),c.a.createElement(v,{src:w.a,controls:!0,innerRef:this.handleAudioRef}))},e}(c.a.Component),R=function(){return c.a.createElement("p",{className:"major"},"I'm a musician and programmer.")};e.default=function(){return c.a.createElement(h.a,{demo:c.a.createElement(g,null),about:c.a.createElement(R,null)})}},142:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n(6),i=n.n(a),r=n(47),o=n.n(r),s=n(0),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={progress:0,lastTickAt:null},n.tick=n.tick.bind(o()(o()(n))),n}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.start()},n.start=function(){this.setState({lastTickAt:new Date},this.tick)},n.tick=function(){var t=this;this.requestAnimationFrameId=window.requestAnimationFrame(function(){var e=t.state,n=e.lastTickAt,a=e.progress,i=new Date,r=a+function(t,e){return(t-e)/1e3}(i,n)*t.props.speed;t.setState({lastTickAt:i,progress:r},t.tick)})},n.render=function(){return this.props.children(this.state.progress)},e}(n.n(s).a.Component)},147:function(t,e,n){"use strict";var a=n(0),i=n.n(a);e.a=function(t){return i.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:t.backgroundColor||"black"}},t.demo)}},173:function(t,e,n){t.exports=n.p+"static/Polyglot-55a64b98835fc199750890c135d3d933.wav"}}]);
//# sourceMappingURL=component---src-pages-sketches-parallax-song-landscapes-js-bf62b163ddcdc09c44f8.js.map