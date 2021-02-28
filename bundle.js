var app=function(){"use strict";function noop(){}function run(e){return e()}function blank_object(){return Object.create(null)}function run_all(e){e.forEach(run)}function is_function(e){return"function"==typeof e}function safe_not_equal(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function is_empty(e){return 0===Object.keys(e).length}function append(e,t){e.appendChild(t)}function insert(e,t,n){e.insertBefore(t,n||null)}function detach(e){e.parentNode.removeChild(e)}function destroy_each(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function element(e){return document.createElement(e)}function text(e){return document.createTextNode(e)}function space(){return text(" ")}function empty(){return text("")}function listen(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function attr(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function children(e){return Array.from(e.childNodes)}function set_data(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function set_input_value(e,t){e.value=null==t?"":t}function set_style(e,t,n,a){e.style.setProperty(t,n,a?"important":"")}class HtmlTag{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=element(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)insert(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(detach)}}let current_component;function set_current_component(e){current_component=e}const dirty_components=[],binding_callbacks=[],render_callbacks=[],flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(e){render_callbacks.push(e)}let flushing=!1;const seen_callbacks=new Set;function flush(){if(!flushing){flushing=!0;do{for(let e=0;e<dirty_components.length;e+=1){const t=dirty_components[e];set_current_component(t),update(t.$$)}for(set_current_component(null),dirty_components.length=0;binding_callbacks.length;)binding_callbacks.pop()();for(let e=0;e<render_callbacks.length;e+=1){const t=render_callbacks[e];seen_callbacks.has(t)||(seen_callbacks.add(t),t())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,flushing=!1,seen_callbacks.clear()}}function update(e){if(null!==e.fragment){e.update(),run_all(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(add_render_callback)}}const outroing=new Set;function transition_in(e,t){e&&e.i&&(outroing.delete(e),e.i(t))}const globals="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function mount_component(e,t,n,a){const{fragment:r,on_mount:c,on_destroy:o,after_update:s}=e.$$;r&&r.m(t,n),a||add_render_callback((()=>{const t=c.map(run).filter(is_function);o?o.push(...t):run_all(t),e.$$.on_mount=[]})),s.forEach(add_render_callback)}function destroy_component(e,t){const n=e.$$;null!==n.fragment&&(run_all(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function make_dirty(e,t){-1===e.$$.dirty[0]&&(dirty_components.push(e),schedule_update(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function init(e,t,n,a,r,c,o=[-1]){const s=current_component;set_current_component(e);const i=e.$$={fragment:null,ctx:null,props:c,update:noop,not_equal:r,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:blank_object(),dirty:o,skip_bound:!1};let l=!1;if(i.ctx=n?n(e,t.props||{},((t,n,...a)=>{const c=a.length?a[0]:n;return i.ctx&&r(i.ctx[t],i.ctx[t]=c)&&(!i.skip_bound&&i.bound[t]&&i.bound[t](c),l&&make_dirty(e,t)),n})):[],i.update(),l=!0,run_all(i.before_update),i.fragment=!!a&&a(i.ctx),t.target){if(t.hydrate){const e=children(t.target);i.fragment&&i.fragment.l(e),e.forEach(detach)}else i.fragment&&i.fragment.c();t.intro&&transition_in(e.$$.fragment),mount_component(e,t.target,t.anchor,t.customElement),flush()}set_current_component(s)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!is_empty(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var browserSupportsTextareaTextNodes;function canManipulateViaTextNodes(e){if("TEXTAREA"!==e.nodeName)return!1;if(void 0===browserSupportsTextareaTextNodes){var t=document.createElement("textarea");t.value=1,browserSupportsTextareaTextNodes=!!t.firstChild}return browserSupportsTextareaTextNodes}function index(e,t){if(e.focus(),document.selection){var n=document.selection.createRange();return n.text=t,n.collapse(!1),void n.select()}if(!document.execCommand("insertText",!1,t)){var a=e.selectionStart,r=e.selectionEnd;if("function"==typeof e.setRangeText)e.setRangeText(t);else{var c=document.createRange(),o=document.createTextNode(t);if(canManipulateViaTextNodes(e)){var s=e.firstChild;if(s){for(var i=0,l=null,d=null;s&&(null===l||null===d);){var u=s.nodeValue.length;a>=i&&a<=i+u&&c.setStart(l=s,a-i),r>=i&&r<=i+u&&c.setEnd(d=s,r-i),i+=u,s=s.nextSibling}a!==r&&c.deleteContents()}else e.appendChild(o)}if(canManipulateViaTextNodes(e)&&"#text"===c.commonAncestorContainer.nodeName)c.insertNode(o);else{var p=e.value;e.value=p.slice(0,a)+t+p.slice(r)}}e.setSelectionRange(a+t.length,a+t.length);var h=document.createEvent("UIEvent");h.initEvent("input",!0,!1),e.dispatchEvent(h)}}const{document:document_1}=globals;function get_each_context(e,t,n){const a=e.slice();return a[6]=t[n],a[7]=t,a[8]=n,a}function create_each_block(e){let t,n,a,r,c,o,s,i,l,d,u=e[6].name+"";function p(){return e[2](e[6])}function h(){e[3].call(o,e[7],e[8])}return{c(){t=element("label"),n=element("button"),a=text("plot "),r=text(u),c=space(),o=element("input"),s=space(),i=element("br"),attr(o,"type","text"),attr(o,"size","150")},m(u,_){insert(u,t,_),append(t,n),append(n,a),append(n,r),append(t,c),append(t,o),set_input_value(o,e[6].cmd),append(t,s),insert(u,i,_),l||(d=[listen(n,"click",p),listen(o,"input",h)],l=!0)},p(t,n){e=t,2&n&&u!==(u=e[6].name+"")&&set_data(r,u),2&n&&o.value!==e[6].cmd&&set_input_value(o,e[6].cmd)},d(e){e&&detach(t),e&&detach(i),l=!1,run_all(d)}}}function create_fragment(e){let t,n,a,r,c,o,s,i,l,d,u,p,h,_,m,f,g,b,x,y="<script type='text/javascript' id='injected'>"+e[0]+"<\/script>",v=e[1],$=[];for(let t=0;t<v.length;t+=1)$[t]=create_each_block(get_each_context(e,v,t));return{c(){t=element("script"),a=element("link"),r=space(),c=element("a"),c.textContent="click to return github repository",o=space(),s=element("h3"),s.textContent="choose command",i=space();for(let e=0;e<$.length;e+=1)$[e].c();l=space(),d=element("textarea"),u=space(),p=element("button"),p.textContent="rerender",h=space(),_=element("div"),m=space(),g=empty(),attr(t,"type","text/javascript"),attr(t,"charset","UTF-8"),t.src!==(n="https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js")&&attr(t,"src","https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js"),attr(a,"rel","stylesheet"),attr(a,"type","text/css"),attr(a,"href","https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraph.css"),set_style(c,"text-decoration","none"),attr(c,"href","https://github.com/wuyudi/svelte-jsxgraph"),attr(d,"id","jscode"),attr(d,"name","jscode"),attr(d,"rows","4"),attr(d,"cols","160"),attr(_,"id","box"),attr(_,"class","jxgbox"),set_style(_,"width","600px"),set_style(_,"height","300px"),f=new HtmlTag(g)},m(n,v){append(document_1.head,t),append(document_1.head,a),insert(n,r,v),insert(n,c,v),insert(n,o,v),insert(n,s,v),insert(n,i,v);for(let e=0;e<$.length;e+=1)$[e].m(n,v);insert(n,l,v),insert(n,d,v),set_input_value(d,e[0]),insert(n,u,v),insert(n,p,v),insert(n,h,v),insert(n,_,v),insert(n,m,v),f.m(y,n,v),insert(n,g,v),b||(x=[listen(d,"input",e[4]),listen(p,"click",e[5])],b=!0)},p(e,[t]){if(2&t){let n;for(v=e[1],n=0;n<v.length;n+=1){const a=get_each_context(e,v,n);$[n]?$[n].p(a,t):($[n]=create_each_block(a),$[n].c(),$[n].m(l.parentNode,l))}for(;n<$.length;n+=1)$[n].d(1);$.length=v.length}1&t&&set_input_value(d,e[0]),1&t&&y!==(y="<script type='text/javascript' id='injected'>"+e[0]+"<\/script>")&&f.p(y)},i:noop,o:noop,d(e){detach(t),detach(a),e&&detach(r),e&&detach(c),e&&detach(o),e&&detach(s),e&&detach(i),destroy_each($,e),e&&detach(l),e&&detach(d),e&&detach(u),e&&detach(p),e&&detach(h),e&&detach(_),e&&detach(m),e&&detach(g),e&&f.d(),b=!1,run_all(x)}}}function instance($$self,$$props,$$invalidate){let textareaContent="var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-20, 10, 20, -10], axis:true});\n",itemList=[{name:"Segment",cmd:"let segment = board.create('segment', [p1, p2]);"},{name:"Circle",cmd:"let circle = board.create('circle', [p1, p2]);"},{name:"Conic",cmd:"let conic = board.create('conic',[A,B,C,D,E]);"},{name:"Point",cmd:"let point = board.create('point', [1.0, 1.0]);"}];const click_handler=e=>index(document.getElementById("jscode"),e.cmd+"\n");function input_input_handler(e,t){e[t].cmd=this.value,$$invalidate(1,itemList)}function textarea_input_handler(){textareaContent=this.value,$$invalidate(0,textareaContent)}const click_handler_1=()=>{let injected=document.getElementById("injected");eval(injected.innerHTML)};return[textareaContent,itemList,click_handler,input_input_handler,textarea_input_handler,click_handler_1]}class App extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}const app=new App({target:document.body});return app}();
//# sourceMappingURL=bundle.js.map
