"use strict";(self.webpackChunk_pyviz_jupyterlab_pyviz=self.webpackChunk_pyviz_jupyterlab_pyviz||[]).push([[47],{47:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var o=n(779),i=n(175),r=n(764),a=n(58),s=n(263),d=n(85),c=n(312),l=n(923),p=n(667);const m='<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   width="63.84808mm"\n   height="63.912464mm"\n   viewBox="0 0 63.84808 63.912464"\n   version="1.1"\n   id="svg867">\n  <defs\n     id="defs861" />\n  <metadata\n     id="metadata864">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <g\n     id="layer1"\n     transform="translate(-41.403339,-133.59734)">\n    <g\n       id="g5614"\n       transform="matrix(0.56444446,0,0,0.56444446,819.73897,-509.17309)">\n      <rect\n         y="1138.7665"\n         x="-1378.941"\n         height="113.23074"\n         width="113.11668"\n         id="rect4136-8-8-1"\n         style="opacity:1;fill:#0072b5;fill-opacity:1;stroke:none;stroke-width:4;stroke-miterlimit:1;stroke-dasharray:none"\n         ry="9.4330282" />\n      <g\n         id="g5603">\n        <g\n           id="g5591">\n          <rect\n             y="1165.5731"\n             x="-1361.4104"\n             height="8"\n             width="78.055412"\n             id="rect4327-3-71"\n             style="opacity:1;fill:#eeeeee;fill-opacity:1;stroke:none;stroke-width:4;stroke-miterlimit:1;stroke-dasharray:none" />\n          <circle\n             r="9"\n             cy="1169.5731"\n             cx="-1341.4192"\n             id="path4355-79-2"\n             style="opacity:1;fill:#eeeeee;fill-opacity:1;stroke:none;stroke-width:4;stroke-miterlimit:1;stroke-dasharray:none" />\n        </g>\n        <g\n           id="g5595">\n          <rect\n             y="1191.3817"\n             x="-1361.4104"\n             height="8"\n             width="78.055412"\n             id="rect4327-5-1-0"\n             style="opacity:1;fill:#eeeeee;fill-opacity:1;stroke:none;stroke-width:4;stroke-miterlimit:1;stroke-dasharray:none" />\n          <circle\n             r="9"\n             cy="1195.3817"\n             cx="-1305.4111"\n             id="path4355-7-3-7"\n             style="opacity:1;fill:#eeeeee;fill-opacity:1;stroke:none;stroke-width:4;stroke-miterlimit:1;stroke-dasharray:none" />\n        </g>\n        <g\n           id="g5599">\n          <rect\n             y="1217.1904"\n             x="-1361.4104"\n             height="8"\n             width="78.055412"\n             id="rect4327-54-6-2"\n             style="opacity:1;fill:#eeeeee;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none" />\n          <circle\n             r="9"\n             cy="1221.1904"\n             cx="-1341.4274"\n             id="path4355-3-9-8"\n             style="opacity:1;fill:#eeeeee;fill-opacity:1;stroke:none;stroke-width:4;stroke-miterlimit:1;stroke-dasharray:none" />\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n',h=new p.LabIcon({name:"@pyviz/jupyterlab_pyviz:panel",svgstr:m});class u{constructor(e,t){this._context=e,this._wManager=t,this._comm=null,e.sessionContext.statusChanged.connect(((e,t)=>{"restarting"!==t&&"dead"!==t||(this._comm=null)}),this)}get context(){return this._context}get comm(){var e,t;return null==this._context.sessionContext?null:(null===this._comm&&null!==(null===(e=this._context.sessionContext.session)||void 0===e?void 0:e.kernel)&&(this._comm=null===(t=this._context.sessionContext.session)||void 0===t?void 0:t.kernel.createComm("hv-extension-comm"),null!=this._comm&&this._comm.open()),this._comm)}set comm(e){this._comm=e}get isDisposed(){return null===this._context}dispose(){this.isDisposed||(this._context=null,this._comm=null)}}var g=n(676),v=n(526),y=n(840),w=n(271);const f=new v.Token("@pyviz/jupyterlab_pyviz:IPanelPreviewTracker");class _ extends r.IFrame{constructor(e={}){super(e),this.srcdoc=e.srcdoc||null}get srcdoc(){return this._srcdoc}set srcdoc(e){this._srcdoc=e;const t=this.node.querySelector("iframe");null!=e&&(t.setAttribute("srcdoc",e),t.addEventListener("load",(()=>t.removeAttribute("srcdoc"))))}}const x=`\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Jupyter Kernel Starting</title>\n  <style>\n    body {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      height: 100vh;\n      background-color: #f7f7f7;\n      font-family: Futura;\n    }\n\n    .loading-container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 20px 0;\n    }\n\n    .loading-indicator {\n      width: 100px;\n      height: 100px;\n      border: 8px solid rgb(48, 112, 146);\n      border-top-color: #f7f7f7;\n      border-radius: 50%;\n      animation: spin 1s infinite linear;\n    }\n\n    @keyframes spin {\n      from {\n        transform: rotate(0deg);\n      }\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  </style>\n</head>\n<body>\n  ${m}\n  <h1>Panel Preview Launching...</h1>\n  <div class="loading-container">\n    <div class="loading-indicator"></div>\n  </div>\n</body>\n</html>\n`;class b extends g.DocumentWidget{constructor(e){super(Object.assign(Object.assign({},e),{content:new _({srcdoc:x,sandbox:["allow-same-origin","allow-scripts","allow-downloads"]})})),window.onmessage=e=>{var t,n,o,i,r;switch(null===(t=e.data)||void 0===t?void 0:t.level){case"debug":console.debug(...null===(n=e.data)||void 0===n?void 0:n.msg);break;case"info":console.info(...null===(o=e.data)||void 0===o?void 0:o.msg);break;case"warn":console.warn(...null===(i=e.data)||void 0===i?void 0:i.msg);break;case"error":console.error(...null===(r=e.data)||void 0===r?void 0:r.msg);break;default:console.log(e)}};const{getPanelUrl:t,context:n,renderOnSave:o}=e;this.content.url=t(n.path),this.content.title.icon=h,this._renderOnSave=null!=o&&o,n.pathChanged.connect((()=>{this.content.url=t(n.path)}));const i=new r.ToolbarButton({icon:p.refreshIcon,tooltip:"Reload Preview",onClick:()=>{this.reload()}}),a=r.ReactWidget.create(w.createElement("label",{className:"jp-PanelPreview-renderOnSave"},w.createElement("input",{name:"renderOnSave",type:"checkbox",defaultChecked:o,onChange:e=>{this._renderOnSave=e.target.checked}}),w.createElement("span",null,"Render on Save")));this.toolbar.addItem("reload",i),n&&(this.toolbar.addItem("renderOnSave",a),n.ready.then((()=>{n.fileChanged.connect((()=>{this.renderOnSave&&this.reload()}))})))}dispose(){this.isDisposed||(super.dispose(),y.Signal.clearData(this))}reload(){const e=this.content.node.querySelector("iframe");null!=e.contentWindow&&(e.parentElement.classList.add("jp-PanelPreview-loading"),e.contentWindow.location.reload(),e.addEventListener("load",(()=>{e.parentElement.classList.remove("jp-PanelPreview-loading")})))}get renderOnSave(){return this._renderOnSave}set renderOnSave(e){this._renderOnSave=e}}class k extends g.ABCWidgetFactory{constructor(e,t){super(t),this.getPanelUrl=e,this.defaultRenderOnSave=!1}createNewWidget(e){return new b({context:e,getPanelUrl:this.getPanelUrl,renderOnSave:this.defaultRenderOnSave})}}var C=n(832);const P="application/vnd.holoviews_load.v0+json",T="application/vnd.holoviews_exec.v0+json";class O extends C.Widget{constructor(e,t){super(),this._load_mimetype=P,this._script_element=document.createElement("script"),this._manager=t}renderModel(e){const t=e.data[this._load_mimetype];return this._script_element.textContent=t,this.node.appendChild(this._script_element),this._manager.comm,Promise.resolve()}}class S extends C.Widget{constructor(e,t){super(),this._html_mimetype="text/html",this._js_mimetype="application/javascript",this._exec_mimetype=T,this._createNodes(),this._manager=t,this._displayed=!1,this._dispose=!0}_createNodes(){this._div_element=document.createElement("div"),this._script_element=document.createElement("script"),this._script_element.setAttribute("type","text/javascript")}_registerKernel(e){var t;const n={create_view:(e,t)=>this._manager._wManager.create_view(e,t),set_state:e=>this._manager._wManager.set_state(e),display_view:(e,t)=>this._manager._wManager.display_view(e,t)};window.PyViz.widget_manager=n;const o=null===(t=this._manager.context.sessionContext.session)||void 0===t?void 0:t.kernel,i={connectToComm:(e,t)=>{if(void 0===o)return console.log("Kernel not found, could not connect to comm target ",e),{open:function(){},send:function(){},onMsg:function(){}};const n=o.createComm(e,t);return{set onMsg(e){n.onMsg=e},open:(e,t,o)=>{n.open(e,t,o)},send:(e,t,o,i)=>{n.isDisposed||n.send(e,t,o,i)}}},registerCommTarget:(e,t)=>{if(void 0!==o)return o.registerCommTarget(e,t);console.log("Kernel not found, could not register comm target ",e)}};window.PyViz.kernels[e]=i,this._manager.context.sessionContext.statusChanged.connect(((t,n)=>{"restarting"!==n&&"dead"!==n||(delete window.PyViz.kernels[e],this._dispose=!1)}),this)}renderModel(e){const t=e.metadata[this._exec_mimetype],n=t.id;if(this._displayed&&(this._disposePlot(),this.node.removeChild(this._div_element),this.node.removeChild(this._script_element),this._createNodes()),this._dispose=!0,void 0!==n){void 0===window.PyViz?window.PyViz={comms:{},comm_status:{},kernels:{},receivers:{},plot_index:[]}:void 0===window.PyViz.plot_index&&(window.PyViz.plot_index={});const t=e.data[this._html_mimetype];this._div_element.innerHTML=t;const o=[],i=this._div_element.querySelectorAll("script");for(const e in i)i.hasOwnProperty(e)&&o.push(i[e]);if(o.forEach((e=>{const t=document.createElement("script"),n=[],o=e.attributes;for(const e in o)o.hasOwnProperty(e)&&n.push(o[e]);n.forEach((e=>t.setAttribute(e.name,e.value))),t.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(t,e)})),this.node.appendChild(this._div_element),this._js_mimetype in e.data){const t=e.data[this._js_mimetype];this._script_element.textContent=t,this.node.appendChild(this._script_element)}this._registerKernel(n),this._displayed=!0,this._document_id=n}else if(void 0!==t.server_id){this._server_id=t.server_id;const n=e.data[this._html_mimetype],o=document.createElement("div");o.innerHTML=n;const i=o.children[0],r=[],a=i.attributes;for(const e in a)a.hasOwnProperty(e)&&r.push(a[e]);r.forEach((e=>this._script_element.setAttribute(e.name,e.value))),this._script_element.appendChild(document.createTextNode(i.innerHTML)),this.node.appendChild(this._script_element)}return Promise.resolve().then((()=>{void 0!==window.Bokeh&&n in window.Bokeh.index?window.PyViz.plot_index[n]=window.Bokeh.index[n]:window.PyViz.plot_index[n]=null}))}_disposePlot(){if(this._server_id)null!=this._manager.comm&&this._dispose&&this._manager.comm.send({event_type:"server_delete",id:this._server_id}),this._server_id=null;else if(this._document_id){const e=this._document_id;if(null!=this._manager.comm&&this._dispose&&this._manager.comm.send({event_type:"delete",id:e}),void 0!==window.PyViz&&(void 0!==window.PyViz.kernels&&delete window.PyViz.kernels[e],void 0!==window.PyViz.plot_index&&delete window.PyViz.plot_index[e]),void 0!==window.Bokeh&&e in window.Bokeh.index){const t=window.Bokeh.index[e].model.document;t.clear();const n=window.Bokeh.documents.indexOf(t);n>-1&&window.Bokeh.documents.splice(n,1)}this._document_id=null}}dispose(){this.isDisposed||(super.dispose(),this._disposePlot(),this._manager=null)}}var R=n(181),z=n.n(R),E=n(379),M=n.n(E),N=n(110);M()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;let j=null;try{const e=n(294);j=e.registerWidgetManager}catch(e){console.log("Could not load ipywidgets support for @pyviz/jupyterlab_pyviz")}var W;!function(e){e.panelRender="notebook:render-with-panel",e.panelOpen="notebook:open-with-panel",e.lumenRender="notebook:render-with-lumen",e.lumenOpen="notebook:open-with-lumen"}(W||(W={}));class B{constructor(e){this._commands=e}createNew(e){const t=new r.ToolbarButton({className:"panelRender",icon:h,onClick:()=>{this._commands.execute(W.panelRender)}});return setTimeout((()=>{requestAnimationFrame((()=>{z()(t.node,{allowHTML:!0,arrow:!0,content:"\n<span>Preview with Panel<span>\n<br>\n<br>\n<span>\n  <b>Note:</b> Your notebook must publish Panel contents with .servable().\n<span>\n",placement:"bottom"})}))}),0),e.toolbar.insertAfter("cellType","panelRender",t),t}}class I{constructor(e){this._commands=e}createNew(e){const t=new r.ToolbarButton({className:"lumenRender",icon:h,onClick:()=>{this._commands.execute(W.lumenRender)}});return setTimeout((()=>{requestAnimationFrame((()=>{z()(t.node,{arrow:!0,content:"Preview with Lumen",placement:"bottom"})}))}),0),e.toolbar.addItem("lumenRender",t),t}}class L{createNew(e,t){const n=this._docmanager._findContext(t.path,"notebook"),o={manager:null};null!=j&&j(n,e.content.rendermime,[o]);const i=new u(t,o.manager);return e.content.rendermime.addFactory({safe:!1,mimeTypes:[P],createRenderer:e=>new O(e,i)},-1),e.content.rendermime.addFactory({safe:!1,mimeTypes:[T],createRenderer:e=>new S(e,i)},-1),new l.DisposableDelegate((()=>{e.content.rendermime&&e.content.rendermime.removeMimeType(T),i.dispose()}))}}const A={id:"@pyviz/jupyterlab_pyviz:plugin",autoStart:!0,requires:[s.IDocumentManager,o.INotebookTracker],optional:[r.ICommandPalette,i.ILayoutRestorer,c.IMainMenu,d.ISettingRegistry],provides:f,activate:(e,t,n,o,i,s,d)=>{const c=new L;c._docmanager=t,e.docRegistry.addWidgetExtension("Notebook",c);const l=new r.WidgetTracker({namespace:"panel-preview"});function p(t){const o=n.currentWidget;return!1!==t.activate&&o&&e.shell.activateById(o.id),o}function m(){const t=e.shell.currentWidget;return null!=t&&null!=t.context&&(t.context.path.endsWith(".yaml")||t.context.path.endsWith(".yml")||null!==n.currentWidget&&n.currentWidget===t)}function h(e){return`${a.PageConfig.getBaseUrl()}panel-preview/render/${e}`}i&&i.restore(l,{command:"docmanager:open",args:e=>({path:e.context.path,factory:u.name}),name:e=>e.context.path,when:e.serviceManager.ready});const u=new k(h,{name:"Panel-preview",fileTypes:["notebook"],modelName:"notebook"}),g=new k(h,{name:"Lumen-preview",fileTypes:["yaml","yml","text","py"],modelName:"text"});u.widgetCreated.connect(((e,t)=>{t.context.pathChanged.connect((()=>{l.save(t)})),l.add(t)})),g.widgetCreated.connect(((e,t)=>{l.add(t)}));const v=e=>{u.defaultRenderOnSave=e.get("renderOnSave").composite};d&&Promise.all([d.load(A.id),e.restored]).then((([e])=>{v(e),e.changed.connect(v)})).catch((e=>{console.error(e.message)})),e.docRegistry.addWidgetFactory(u),e.docRegistry.addWidgetFactory(g);const{commands:y,docRegistry:w}=e;if(y.addCommand(W.panelRender,{label:"Preview Notebook with Panel",execute:async e=>{const t=p(e);let n;t&&(n=t.context,await n.save(),y.execute("docmanager:open",{path:n.path,factory:"Panel-preview",options:{mode:"split-right"}}))},isEnabled:m}),y.addCommand(W.lumenRender,{label:"Render Yaml with Lumen",execute:async t=>{const n=e.shell.currentWidget;let o;n&&(o=n.context,await o.save(),y.execute("docmanager:open",{path:o.path,factory:"Lumen-preview",options:{mode:"split-right"}}))},isEnabled:m}),y.addCommand(W.panelOpen,{label:"Open with Panel in New Browser Tab",execute:async e=>{const t=p(e);if(!t)return;await t.context.save();const n=h(t.context.path);window.open(n)},isEnabled:m}),o){const e="Notebook Operations";[W.panelRender,W.panelOpen].forEach((t=>{o.addItem({command:t,category:e})}))}s&&s.viewMenu.addGroup([{command:W.panelRender},{command:W.panelOpen}],1e3);const f=new B(y);w.addWidgetExtension("Notebook",f);const _=new I(y);return w.addWidgetExtension("Editor",_),l}},D=A},110:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,'.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}',""]);const r=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var o,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],i=0;i<e.length;i++){var s=e[i],d=t.base?s[0]+t.base:s[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var p=a(l),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(r[p].references++,r[p].updater(m)):r.push({identifier:l,updater:g(m,t),references:1}),o.push(l)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function m(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,u=0;function g(e,t){var n,o,i;if(t.singleton){var r=u++;n=h||(h=d(t)),o=p.bind(null,n,r,!1),i=p.bind(null,n,r,!0)}else n=d(t),o=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);r[i].references--}for(var d=s(e,t),c=0;c<n.length;c++){var l=a(n[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=d}}}}}]);