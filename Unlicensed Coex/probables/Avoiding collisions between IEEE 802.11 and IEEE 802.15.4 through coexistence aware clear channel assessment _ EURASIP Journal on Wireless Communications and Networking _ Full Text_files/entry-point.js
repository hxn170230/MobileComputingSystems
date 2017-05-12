var shared_numbers={},shared_errors={},shared_collections={},shared_html={},shared_selection={},shared_strings={},shared_http={},shared_location={},shared_requests={},shared_scroll={},shared_state={},shared_storage={},shared_templates={},config_config={},shared_events={},shared_messaging={},iframe_host={},safari_journey_safari_support={},entry_point_launcher={},entry_point_entry_point={};shared_numbers=function(t){function e(t,e){return Math.floor(Math.random()*(e-t+1))+t}return t.randomInteger=e,t}(shared_numbers);var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};shared_errors=function(t){var e=function(){function t(){}return t.unhandled=function(t){r.log(t)},t.capture=function(e){return function(){try{e()}catch(e){t.unhandled(e)}}},t}();t.UnhandledError=e;var n=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e}(Error);t.NoSuchElement=n;var r=function(){function t(){}return t.log=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];t.enabled&&console.log(e,n)},t.enable=function(e){t.enabled=e},t.isDebug=function(t){return t.indexOf("uptodate-debug=true")!=-1},t.enabled=!1,t}();return t.Debug=r,t}(shared_errors);var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};shared_collections=function(t,e,n){function r(t){for(var n=t.length-1;n>0;n--){var r=e.randomInteger(0,n),o=t[n];t[n]=t[r],t[r]=o}return t}function o(t){var e=new i;if(!t)return e;for(var n=0;n<t.length;++n)e.push(t[n]);return e}t.shuffle=r;var i=function(t){function e(){t.apply(this,arguments)}return __extends(e,t),e.prototype.each=function(t){for(var e=0;e<this.length;++e)t(this[e],e);return this},e.prototype.map=function(t){var n=new e;return this.each(function(e,r){n.push(t(e,r))}),n},e.prototype.flatMap=function(t,n){return void 0===n&&(n=new e),this.each(function(e,r){var o=t(e,r);Array.prototype.push.apply(n,o)}),n},e.prototype.filter=function(t){var n=new e;return this.each(function(e,r){t(e)&&n.push(e)}),n},e.prototype.find=function(t){return this.filter(t).head()},e.prototype.as=function(t){var e=this;return e.filter(function(e){return e instanceof t})},e.prototype.head=function(){return this[0]},e.prototype.last=function(){if(this.isEmpty())throw new n.NoSuchElement;return this[this.length-1]},e.prototype.isEmpty=function(){return 0==this.length},e.prototype.groupBy=function(t){return this.reduce(function(n,r){var o=t instanceof Function?t(r):r[t];return(n[o]=n[o]||new e).push(r),n},{})},e}(Array);return t.List=i,t.list=o,t}(shared_collections,shared_numbers,shared_errors),shared_html=function(t,e){function n(t,e){for(var n=o(e),r=0;r<n.length;r++){var i=n[r];t.appendChild(i)}return t}function r(t){return void 0!==t.outerHTML}function o(t){var e=document.createElement("div");return e.innerHTML=r(t)?t.outerHTML:t,e.childNodes}function i(t,e){for(var n=t.parentNode,r=o(e),i=0;i<r.length;i++){var s=r[i];n.insertBefore(s,t)}return t}function s(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];return function(e){for(var n=0;n<t.length;n++){var r=t[n];Object.keys(r).forEach(function(t){var n=r[t],o=typeof n;switch(o){case"function":e.setAttribute(t,n(e.getAttribute(t)));break;case"boolean":n?e.setAttribute(t,""):e.removeAttribute(t);break;default:e.setAttribute(t,String(n))}})}return e}}function a(t,e,n,r){"string"==typeof e&&(e=[e]);for(var o=0;o<e.length;o++){var i=e[o];t.addEventListener(i,function(t){var e=n(t);e||(t.preventDefault(),t.stopPropagation())},r)}}function c(){return"BackCompat"==document.compatMode?document.body:document.documentElement}function u(t){return void 0===t&&(t=c()),t.scrollHeight>t.clientHeight}function h(t){return void 0===t&&(t=c()),t.scrollWidth>t.clientWidth}var l=function(){function t(){}return t.path=function(t){for(var n=new e.List;t;)n.push(t),t=t.parentElement;return n},t.matches=function(t,e){return t.matches=t.matches||t.msMatchesSelector||function(t){return!1},t.matches(e)},t.calculateBoxShadow=function(e){try{var n=t.path(e).map(function(t){return window.getComputedStyle(t).boxShadow}).find(function(t){return"none"!=t});return parseInt(n.split("px ")[2])}catch(t){return 0}},t}();return t.Elements=l,t.appendHtml=n,t.isHTML=r,t.parseHtml=o,t.insertHtml=i,t.attributes=s,t.on=a,t.root=c,t.hasVerticalScrollBar=u,t.hasHorizontalScrollBar=h,t}(shared_html,shared_collections);var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};shared_selection=function(t,e,n){function r(t,e){function n(e,n){for(var r=n.querySelectorAll(t),o=0;o<r.length;++o)e.push(r[o]);return e}void 0===e&&(e=document);var r=new i;if("string"!=typeof t)return r.push(t),r;if(e instanceof i){for(var o=0;o<e.length;o++){var s=e[o];n(r,s)}return r}return n(r,e)}function o(t,e){return e.querySelector(t)}var i=function(t){function r(){t.apply(this,arguments)}return __extends(r,t),r.prototype.on=function(t,e,r){return this.each(function(o){n.on(o,t,function(t){return e(o,t)},r)})},r.prototype.attr=function(t,e){return null==e?this.map(function(e){return e.getAttribute(t)}):this.each(function(n){n.setAttribute(t,e)})},r.prototype.removeAttr=function(t){return this.each(function(e){e.removeAttribute(t)})},r.prototype.prop=function(t,e){return null==e?this.map(function(e){return e[t]}):this.each(function(n){n[t]=e})},r.prototype.text=function(t){return null==t?this.map(function(t){return t.textContent}):this.each(function(e){e.textContent=t})},r.prototype.html=function(t){return null==t?this.map(function(t){return t.innerHTML}):this.each(function(e){e.innerHTML=t})},r.prototype.css=function(t,e){return null==e?this.map(function(e){return window.getComputedStyle(e).getPropertyValue(t)}):this.each(function(n){n.style[t]=e})},r.prototype.append=function(t){return this.map(function(e){return n.appendHtml(e,t)}),this},r.prototype.appendTo=function(t){return this.each(function(e){t.appendChild(e)})},r.prototype.insert=function(t){return this.map(function(e){return n.insertHtml(e,t)}),this},r.prototype.remove=function(t){return void 0===t&&(t=function(t){return!0}),this.each(function(e){t&&e.parentNode.removeChild(e)})},r.prototype.children=function(){return this.flatMap(function(t){return e.list(t.childNodes)},new r)},r.prototype.detach=function(){var t=document.createDocumentFragment();return this.each(function(e){t.appendChild(e)}),t},r.prototype.clone=function(){var t=document.createDocumentFragment();return this.each(function(e){t.appendChild(e.cloneNode(!0))}),t},r.prototype.show=function(){return this.each(function(t){t.style.display=""})},r.prototype.hide=function(){return this.each(function(t){t.style.display="none"})},r.prototype.addClass=function(t){return this.each(function(e){e.classList.add(t)})},r.prototype.removeClass=function(t){return this.each(function(e){e.classList.remove(t)})},r}(e.List);return t.Select=i,t.select=r,t.get=o,t}(shared_selection,shared_collections,shared_html),shared_strings=function(t){function e(t){return null==t||""==t}function n(t){if("undefined"==typeof t||"undefined"==t)return null;try{return JSON.parse(t)}catch(e){return t}}function r(t,e){return 0==e.indexOf(t)}return t.isEmpty=e,t.coerce=n,t.startsWith=r,t}(shared_strings),shared_http=function(t,e,n){function r(n,r){if(void 0===r&&(r=t.fireAndForget),JSON.stringify(n)==JSON.stringify(c))return e.Debug.log("duplicate request",n,c),function(){};c=n;var o=new XMLHttpRequest;o.open(n.method,n.url,!0),o.withCredentials=!0;var i=n.headers||{};return Object.keys(i).forEach(function(t){o.setRequestHeader(t,i[t])}),o.addEventListener("readystatechange",e.UnhandledError.capture(function(){if(4==o.readyState){var t=o.getAllResponseHeaders().split("\n").reduce(function(t,e){var n=e.split(": ");return t[n[0]]=n[1],t},{});r({status:o.status,headers:t,entity:new a(o.responseText)})}})),o.send(n.entity),function(){o.abort()}}function o(t){var e=document.createElement("a");return e.href=t,{scheme:e.protocol?e.protocol.replace(/(:$)/,""):"",host:e.hostname,authority:e.host,path:e.pathname,query:e.search?e.search.replace(/(^\?)/,""):"",fragment:e.hash?e.hash.replace(/(^#)/,""):""}}function i(t){void 0===t&&(t=document.location.href);var e=o(t).query;return""==e?{}:e.split("&").map(function(t){return t.split("=")}).reduce(function(t,e){var r=e[0],o=n.coerce(e[1]),i=t[r];return"undefined"==typeof i?t[r]=o:"object"==typeof i?i.push(o):t[r]=[i,o],t},{})}function s(t){var e=[];return Object.keys(t).forEach(function(n){var r=t[n];null==r?e.push(encodeURIComponent(n)):"object"==typeof r?r.forEach(function(t){e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}),e.join("&")}var a=function(){function t(t){this.content=t}return t.prototype.xml=function(){return(new DOMParser).parseFromString(this.content,"application/xml")},t.prototype.text=function(){return this.content},t.prototype.json=function(){return JSON.parse(this.content)},t.prototype.html=function(){return(new DOMParser).parseFromString(this.content,"text/html")},t}();t.Entity=a,t.fireAndForget=function(t){};var c={};t.http=r,t.uri=o,t.queryObject=i,t.toQueryString=s;var u=function(){function t(){}return t.baseUrl=function(t){var e={regex:new RegExp("(https?://[^/]+/[^/]+/).*"+t),process:function(t){return t.match(e.regex)[1]}};try{throw new Error}catch(n){try{return e.process(n.stack)}catch(n){return e.process(document.querySelector('script[src$="'+t+'"]').src)}}},t.origin=function(t){var e=document.createElement("a");return e.href=t,e.protocol+"//"+e.host},t}();return t.BaseUrl=u,t}(shared_http,shared_errors,shared_strings),shared_location=function(t,e,n){var r=function(){function t(e,n,r,o,i,s,a){void 0===e&&(e=t.extractType()),void 0===n&&(n=t.extractDisplayType()),void 0===r&&(r=t.extractDesignType()),void 0===o&&(o=t.extractDoi()),void 0===i&&(i=t.extractIssn()),void 0===s&&(s=window.location.href),void 0===a&&(a=t.extractHostsite(s)),this.type=e,this.display_type=n,this.design_type=r,this.doi=o,this.issn=i,this.url=s,this.hostsite=a,this.dois=o?[o]:[]}return t.extractHostsite=function(t){var e=n.uri(t).authority;return e.indexOf("nature.com")!=-1?"nature":e.indexOf("springer.com")!=-1?"springer":e.indexOf("biomedcentral.com")!=-1?"biomedcentral":e.indexOf("springeropen.com")!=-1?"springeropen":e.indexOf("localhost")!=-1?"localhost":"unknown"},t.prototype.toQuery=function(){return encodeURIComponent(this.json())},t.prototype.json=function(){return JSON.stringify(this)},t.extractDisplayType=function(){return e.get("#uptodate-inline",document)?"inline":"popup"},t.extractDesignType=function(){return e.get("link[href*=mosaic], meta[name='WT.template'][content=mosaic]",document)?"mosaic":"unknown"},t.extractType=function(){var n=t.extractDoi();if(n)return"article";var r=e.select("meta[name='citation_article_type'], meta[name='WT.cg_s']").attr("content").head();if(r){var o=r.toLowerCase();"latest research"==o&&(o="research");var i=["article","research","issue"];if(i.indexOf(o)!=-1)return o}return 0==document.title.indexOf("Table of contents")?"issue":null},t.extractDoi=function(){return e.select("meta[name='citation_doi'], meta[name='dc.identifier'], meta[name='DC.identifier'], meta[name='prism.doi'], meta[name='dc.Identifier']").attr("content").map(function(e){if(!e)return null;var n=e.match(t.doiRegex);return null!=n?n[1]:null}).filter(function(t){return null!=t}).head()},t.extractIssn=function(){var t=e.select("meta[name='citation_issn'], meta[name='prism.issn'], meta[name='prism.eIssn']").attr("content").head();if(t)return t.toUpperCase();var n=e.select(".issn, .eissn").text().head(),r=n?n.match(this.regexp):null;return r?r[0].toUpperCase():null},t.doiRegex=/.*(10\.\d{4,9}\/[-._;()\/:A-Z0-9]+).*/i,t.regexp=/\d{4}\-\d{3}[\dxX]/i,t}();return t.CurrentLocation=r,t}(shared_location,shared_selection,shared_http),shared_requests=function(t){var e=function(){function t(){}return t.config=function(t,e){return{method:"POST",headers:{Accept:"application/json","Content-Type":"text/plain"},url:t+"user/config",entity:JSON.stringify(e)}},t.postEvent=function(t){return{method:"POST",url:t.config.host+"events/"+encodeURIComponent(t.event.subject)+"_"+encodeURIComponent(t.event.action)+"_"+encodeURIComponent(t.event.object),headers:{"Content-Type":"text/plain"},entity:JSON.stringify(t)}},t.get=function(t){return{method:"GET",url:t}},t.recommendations=function(t){return{method:"POST",headers:{Accept:"application/json","Content-Type":"text/plain"},url:t.config.host+"recommendations",entity:JSON.stringify(t)}},t}();return t.Requests=e,t}(shared_requests),shared_scroll=function(t,e){var n=function(){function t(t){this.config=t}return t.prototype.required=function(){return e.hasVerticalScrollBar()&&!this.hasScrolledEnough()},t.prototype.hasScrolledEnough=function(){return window.pageYOffset>this.config.minimum_scroll_height},t.prototype.await=function(t){var e=this,n=function(){e.hasScrolledEnough()&&(window.removeEventListener("scroll",n),t())};window.addEventListener("scroll",n)},t}();t.WindowScrollCondition=n;var r=function(){function t(t,e,n){var r=this;this.sender=t,this.receiver=e,this.config=n,this.receiver.scroll_info=function(t){return r.scroll_info(t)},this.receiver.scroll_bars_response=function(t){return r.scroll_bars_response(t)},this.sender.send("scroll_bars_request")}return t.prototype.scroll_bars_response=function(t){this.scrollBars=t},t.prototype.scroll_info=function(t){if(this.scrollInfo=t,this.done&&this.hasScrolledEnough()){var e=this.done;this.done=null,this.sender.send("scroll_info_stop"),e()}},t.prototype.required=function(){return this.scrollBars&&this.scrollBars.vertical&&!this.hasScrolledEnough()},t.prototype.hasScrolledEnough=function(){return this.scrollInfo&&this.scrollInfo.y>this.config.minimum_scroll_height},t.prototype.await=function(t){this.done=t,this.sender.send("scroll_info_start")},t}();t.ClientScrollListener=r;var o=function(){function t(t,e){var n=this;this.sender=t,this.receiver=e,this.receiver.scroll_info_start=function(){return n.start()},this.receiver.scroll_info_stop=function(){return n.stop()},this.receiver.scroll_bars_request=function(){return n.scroll_bars_request()}}return t.prototype.scroll_bars_request=function(){this.sender.send("scroll_bars_response",{vertical:e.hasVerticalScrollBar(),horizontal:e.hasHorizontalScrollBar()})},t.prototype.start=function(){var t=this;this.handler=window.setInterval(function(){t.sender.send("scroll_info",{x:window.pageXOffset,y:window.pageYOffset})},250)},t.prototype.stop=function(){window.clearInterval(this.handler)},t}();return t.HostScrollListener=o,t}(shared_scroll,shared_html),shared_state=function(t,e,n,r,o,i,s){function a(t,e,n){return void 0===e&&(e=new r.CurrentLocation),void 0===n&&(n=window.screen),l.toUnderscore({config:t,current_location:e,screen:n})}function c(t){return null!=t&&t.constructor==Array}function u(t){return null!=t&&"object"==typeof t}t.state=a;var h=function(){function t(t,e){void 0===e&&(e=new o.ConsoleEventHandler),this.root=t,this.events=e,this.capture(),this.setInitialState()}return t.prototype.capture=function(){var t=this;i.on(this.root,"change",function(e){var n=e.target;return i.Elements.matches(n,".state[name][value]")&&t.setState(n),i.Elements.matches(n,"[data-event-subject][data-event-action][data-event-object]")&&t.trackEvent(n),!0},!0),i.on(this.root,["click","contextmenu"],function(e){var n=o.Events.path(e).find(function(t){return i.Elements.matches(t,":not(.state)[data-event-object]")});return n&&t.trackEvent(n),!0},!0)},t.prototype.setState=function(t){var n=e.get("input[name="+t.name+"]",this.root),r=n.getAttribute("state-new")||n.defaultValue,o=t.value;r!=o&&(n.setAttribute("state-old",r),n.setAttribute("state-new",o))},t.prototype.trackEvent=function(t){var e=this.dataAttributes(t);this.events.fire(encodeURIComponent(t.getAttribute("data-event-subject")),encodeURIComponent(t.getAttribute("data-event-action")),encodeURIComponent(t.getAttribute("data-event-object")),e)},t.prototype.dataAttributes=function(t,e){return void 0===e&&(e={}),s.list(t.attributes).filter(function(t){return n.startsWith("data-",t.name)}).filter(function(t){return!n.startsWith("data-event",t.name)}).reduce(function(t,e){return t[encodeURIComponent(e.name.replace("data-",""))]=e.value,t},e)},t.prototype.setInitialState=function(){var t=this;e.select(".state[name][value]:not([state-new]):checked",this.root).as(HTMLInputElement).each(function(n){var r=e.get("input[name="+n.name+"]",t.root);r.setAttribute("state-new",r.defaultValue)})},t}();t.StateChange=h,t.isArray=c,t.isObject=u;var l=function(){function t(){}return t.toUnderscore=function(t){return this.map(t,function(t){return t.replace(/-/g,"_")})},t.toHyphen=function(t){return this.map(t,function(t){return t.replace(/_/g,"-")})},t.map=function(t,e){var n=this;if(c(t)){var r=t;return r.reduce(function(t,r){return t.push(n.map(r,e)),t},[])}if(u(t)){var o={};for(var i in t){var s=t[i];null!=s&&"function"!=typeof s&&(o[e(i)]=this.map(s,e))}return o}return t},t}();return t.Converter=l,t}(shared_state,shared_selection,shared_strings,shared_location,shared_events,shared_html,shared_collections),shared_storage=function(t,e){function n(){try{var t="uptodate-test",e="works";window.localStorage.setItem(t,e);var n=window.localStorage.getItem(t);return window.localStorage.removeItem(t),e===n}catch(t){return!1}}function r(t){void 0===t&&(t=window.localStorage);for(var n={},r=0;r<t.length;r++){var o=t.key(r);n[o]=e.coerce(t.getItem(o))}return n}function o(t,n,r){Object.keys(t).forEach(function(o){if(e.startsWith(r,o)){var i=t[o];null==i||"undefined"==typeof i?n.removeItem(o):n.setItem(o,i)}})}return t.hasStorage=n,t.storageObject=r,t.copyIntoStorage=o,t}(shared_storage,shared_strings),shared_templates=function(t,e){var n=function(){function t(){}return t.clone=function(t){return this.polyfill(t),t.ownerDocument.importNode(t.content,!0)},t.polyfill=function(t){t.content||(t.content=e.select(t).children().detach())},t.polyfillTemplates=function(t){var n=this;e.select("template",t).each(function(t){return n.polyfill(t)})},t}();return t.Templates=n,t}(shared_templates,shared_selection),config_config=function(t,e,n,r,o,i,s,a){var c=function(){function t(n,o){var i=this;this.parent=o,this.storage=window.localStorage,this.parent.config=this,e.copyIntoStorage(s.queryObject(n.current_location.url),this.storage,t.prefix),this.data=t.mergeObjects(n.config,t.extractConfig(e.storageObject(this.storage))),this.render(),r.select("#"+this.id("debug")).on("change",function(t){i.debug(t.checked)}),this.persist("debug",null),this.debug(a.Debug.isDebug(n.current_location.url))}return t.extractConfig=function(e){var r=this;return Object.keys(e).reduce(function(o,i){if(n.startsWith(r.prefix,i)){var s=i.substr(t.prefix.length);o[s]=e[i]}return o},{})},t.mergeObjects=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];for(var n={},r=function(e){var r=t[e];return null==r?"continue":void Object.keys(r).forEach(function(t){n[t]=r[t]})},o=0;o<t.length;o++)r(o);return n},t.prototype.json=function(){return JSON.stringify(this.data)},t.prototype.render=function(){var t=this;Object.keys(this.data).forEach(function(e){t.createProperty(e,t.data[e])})},t.prototype.createProperty=function(t,e){var i=this.id(t),s=typeof e,a=r.get("#"+i,this.parent);if(a)"boolean"==s?a.checked=e:a.value=String(e);else{var c=r.get("template.config",this.parent),u=o.Templates.clone(c);a=r.get("input",u),"boolean"==s?a.setAttribute("type","checkbox"):"string"==s?a.setAttribute("type","text"):"number"==s&&a.setAttribute("type","number"),a.setAttribute("id",i),"boolean"==s?e?a.setAttribute("checked",""):a.removeAttribute("checked"):a.setAttribute("value",String(e));var h=r.get("label",u);h.setAttribute("for",i);var l=r.get(".text",h);l.textContent=t.replace(/_/g," "),this.parent.insertBefore(u,c.nextSibling)}Object.defineProperty(this.data,t,{enumerable:!0,get:function(){return"boolean"==s?a.checked:n.coerce(a.value)},set:function(t){return"boolean"==s?a.checked=t:a.value=t}})},t.prototype.id=function(e){return t.prefix+e.replace(/_/g,"-")},t.prototype.debug=function(t){a.Debug.enable(t),this.full_screen(t),t?this.parent.classList.add("debug"):this.parent.classList.remove("debug")},t.prototype.full_screen=function(t){i.MessageDispatcher.dispatch(this.parent,{name:"full_screen",body:t})},t.prototype.persist=function(e,n){var r=t.prefix+e;null==n?this.storage.removeItem(r):this.storage.setItem(r,n)},t.prefix="uptodate-",t}();return t.Config=c,t}(config_config,shared_storage,shared_strings,shared_selection,shared_templates,shared_messaging,shared_http,shared_errors),shared_events=function(t,e,n,r,o,i){var s=function(){function t(){}return t.prototype.fire=function(t,e,n,r){console.log&&console.log("Event: "+t+" "+e+" "+n+" -> "+JSON.stringify(r))},t}();t.ConsoleEventHandler=s;var a=function(){function t(t){this.state=t}return t.prototype.fire=function(t,i,s,a){o.http(r.Requests.postEvent(e.Converter.toUnderscore(n.Config.mergeObjects(this.state,{event:{subject:t,action:i,object:s,data:a}}))))},t.create=function(t,e){if(void 0===e&&(e={bubbles:!0,cancelable:!0,detail:null}),e.detail)try{return new CustomEvent(t,e)}catch(r){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}else try{return new Event(t,e)}catch(n){var r=document.createEvent("Event");return r.initEvent(t,e.bubbles,e.cancelable),r}},t.path=function(t){return i.Elements.path(t.target)},t}();return t.Events=a,t}(shared_events,shared_state,config_config,shared_requests,shared_http,shared_html),shared_messaging=function(t,e,n,r){var o=function(){function t(){}return t.dispatch=function(t,n){t.dispatchEvent(e.Events.create("client_message",{bubbles:!0,cancelable:!0,detail:n}))},t}();t.MessageDispatcher=o;var i=function(){function t(t,e){var o=this;this.window=t,this.expectedOrigin=e,t.addEventListener("message",function(t){var i=n.uri(t.origin).host,s=n.uri(e).host;if(i!=s)return void r.Debug.log("Origin host did not match expected: expectedHost:"+s+" actualHost:"+i);var a=t.data;r.Debug.log("Message received: "+a.name+" -> "+JSON.stringify(a.body));var c=o[a.name];if(!c)return void r.Debug.log("No slot called "+a.name+" found");try{c.call(o,a.body)}catch(t){r.UnhandledError.unhandled(t)}})}return t}();t.MessageReceiver=i;var s=function(){function t(t,e){this.window=t,this.destinationOrigin=e}return t.prototype.send=function(t,e){this.window.postMessage({name:t,body:e},this.destinationOrigin)},t}();return t.MessageSender=s,t}(shared_messaging,shared_events,shared_http,shared_errors);var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};iframe_host=function(t,e,n,r,o,i){var s=function(t){function s(i,s,a){var c=r.BaseUrl.origin(i);t.call(this,window,c),o.Debug.log("Host expecting to send and receive messages from "+c),this.state=a,this.state.config.inline_version=r.queryObject(a.current_location.url)["uptodate-inline-version"]===!0,this.style={width:"0",height:"0"},this.iframe=this.createIframe(""+i+s+"?source="+r.BaseUrl.origin(window.location.href)),this.appendIframe(),this.iframe.id="uptodate-client",this.iframe.name="uptodate-client",this.sender=new n.MessageSender(this.iframe.contentWindow,c),new e.HostScrollListener(this.sender,this)}return __extends(s,t),s.prototype.state_request=function(){this.sender.send("state_response",this.state)},s.prototype.resize=function(t){this.fullScreen?this.style=t:(this.iframe.style.width=t.width,this.iframe.style.height=t.height)},s.prototype.inlineEvent=function(t){if(this.state.config.inline_version){var e=this.getInlineElement();e.classList.add(t)}},s.prototype.full_screen=function(t){t?(this.iframe.style.width="100%",this.iframe.style.height="100%"):(this.iframe.style.width=this.style.width,this.iframe.style.height=this.style.height),this.fullScreen=t},s.prototype.createIframe=function(t){var e=document.createElement("iframe");return e.style.width="0",e.style.height="0",e.style.bottom="0",e.style.right="0",e.style.zIndex="100000",e.frameBorder="0",e.scrolling="no",e.src=t,e.name="uptodate-client",e.setAttribute("allowtransparency","true"),e},s.prototype.appendIframe=function(){var t=this.getInlineElement();t&&this.state.config.inline_version?t.appendChild(this.iframe):(this.iframe.style.position="fixed",document.body.appendChild(this.iframe))},s.prototype.getInlineElement=function(){return i.get("#uptodate-inline",document)},s}(n.MessageReceiver);return t.Host=s,t}(iframe_host,shared_scroll,shared_messaging,shared_http,shared_errors,shared_selection),safari_journey_safari_support=function(t,e,n,r){function o(){return navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")}function i(t,n){e.http({method:"GET",url:t+"user/id"},function(t){200==t.status&&n({user_id:t.entity.text()})})}function s(t,e){if(!n.hasStorage())return e(t);var s="uptodate-user-id";null==window.localStorage.getItem(s)&&(r.Debug.log("Storing user-id: "+t.user_id+" in local storage"),window.localStorage.setItem(s,t.user_id));var c=window.localStorage.getItem(s);if(t.user_id!==c){if(o())return i(t.host,function(n){t.user_id===n.user_id?(r.Debug.log("Updating user_id: "+t.user_id+" in local storage to match persistent cookie"),window.localStorage.setItem(s,t.user_id)):a(t,c),e(t)});a(t,c)}e(t)}function a(t,e){r.Debug.log("Updating user_id to value: "+e),t.user_id=e}return t.isSafari=o,t.currentUser=i,t.updateUserId=s,t}(safari_journey_safari_support,shared_http,shared_storage,shared_errors),entry_point_launcher=function(t,e,n,r,o){var i=function(){function t(t,n,i){var s=this;void 0===i&&(i=new e.Events(t)),this.state=t,this.done=n,this.events=i,o.Debug.enable(o.Debug.isDebug(t.current_location.url)),r.updateUserId(t.config,function(t){s.state.config=t,s.trackCurrentPage(),s.display()})}return t.prototype.trackCurrentPage=function(){"article"==this.state.current_location.type&&this.events.fire("website","displays","article")},t.prototype.display=function(){n.isEmpty(this.state.current_location.type)||n.isEmpty(this.state.current_location.issn)||(this.state.config.show_recommendations||this.state.config["show_recommendations_on_"+this.state.current_location.hostsite])&&(window.screen.availWidth<this.state.config.minimum_width||(this.state.config.experiment_auto_minimise&&(this.state.config.minimised="mosaic"==this.state.current_location.design_type&&window.screen.availWidth<1920),this.done(this.state)))},t}();return t.Launcher=i,t}(entry_point_launcher,shared_events,shared_strings,safari_journey_safari_support,shared_errors),entry_point_entry_point=function(t,e,n,r,o,i,s,a){try{var c=n.BaseUrl.baseUrl("entry-point.js"),u=new e.CurrentLocation;n.http(r.Requests.config(c,u),function(t){if(200==t.status){var e=t.entity.json(),n=s.state(e,u);new a.Launcher(n,function(t){new o.Host(e.host,"generated/client.html",t)})}})}catch(t){i.UnhandledError.unhandled(t)}return t}(entry_point_entry_point,shared_location,shared_http,shared_requests,iframe_host,shared_errors,shared_state,entry_point_launcher);
//# sourceMappingURL=entry-point.js.map
