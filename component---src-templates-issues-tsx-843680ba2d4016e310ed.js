"use strict";(self.webpackChunkgg_discussions=self.webpackChunkgg_discussions||[]).push([[135],{3679:function(e,t,n){var a=n(7294),l=n(5104);t.Z=function(e){var t=e.author;return a.createElement("div",{className:"author-info"},a.createElement("span",{className:"author",title:t.url,onClick:function(){return(0,l.go)(t.url)}},a.createElement("img",{src:t.avatarUrl,alt:t.login}),a.createElement("span",null,t.login)),e.date&&a.createElement("i",{className:"date"},(0,l.G$)(e.date)),e.extra)}},722:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1597),r={zap:"⚡",gear:"⚙️",beer:"🍺",star:"⭐",fire:"🔥",tada:"🎉",ninja:"🥷",mega:"📣",crab:"🦀",rocket:"🚀",warning:"⚠️",unicorn:"🦄",lobster:"🦞",cyclone:"🌀",rainbow:"🌈",computer:"💻",nail_care:"💅",sunglasses:"😎",see_no_evil:"🙈",crystal_ball:"🔮",monocle_face:"🧐",speech_balloon:"💬",exploding_head:"🤯",hammer_and_wrench:"🛠️",globe_with_meridians:"🌐",page_facing_up:"📄",thinking:"🤔",sparkling_heart:"💖",boom:"💥",collision:"💥",anger:"💢",book:"📖",open_book:"📖",books:"📚",game_die:"🎲"},c=n(5104),o=function(e){var t=e.data,n=e.go;return t&&null!=t&&t.name?a.createElement(l.Link,{className:"gg-category",to:n||"/category/"+(0,c.FL)(t.name,!0),target:n?"_blank":"_self"},function(e){return r[e.slice(1,-1)]||""}(t.emoji)," ",t.name):null}},2721:function(e,t,n){var a=n(7294),l=n(5505),r=n(5104),c=n(1014);t.Z=function(e){var t,n=(0,c.Z)();switch(n.type){case"issues":t="https://github.com/"+n.issues_owner+"/"+n.issues_repo+"/issues/"+e.number;break;case"discussions2":t="https://github.com/"+n.dis_owner+"/"+n.dis_repo+"/discussions/"+e.number;break;default:t="https://github.com/"+n.owner+"/"+n.repo+"/discussions/"+e.number}return a.createElement("a",{className:(0,l.Z)("number issues-num",e.className),href:t,target:"_blank"},e.len?(0,r.K0)(e.number,e.len):"#"+e.number)}},8302:function(e,t,n){var a=n(7294),l=n(1597),r=n(5104),c=n(1014),o=function(e){var t,n=e.data,o=e.hasLevel,s=(0,c.Z)();return a.createElement(l.Link,{key:n.name,className:"gg-label",style:{borderColor:"#"+n.color},to:"/labels/"+(0,r.FL)(n.name)},a.createElement("b",{style:{background:"#"+n.color}},"#",o&&a.createElement("span",null," ",(0,r.Wv)(n.description,null==s||null===(t=s.website)||void 0===t?void 0:t.label_level))),a.createElement("em",null,n.name))};o.defaultProps={hasLevel:!1},t.Z=o},2984:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(7294),l=n(1471),r={body:'<path fill="currentColor" d="M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1m4-6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1Z"/>',width:24,height:24},c={body:'<path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8.19 3.5c-.89 0-1.6.18-2.14.54c-.55.36-.83.96-.78 1.65h1.97c0-.28.1-.49.26-.63c.2-.14.42-.21.69-.21c.31 0 .58.08.76.26c.18.17.27.39.27.69c0 .28-.08.53-.22.74c-.17.22-.38.4-.64.54c-.52.32-.86.6-1.07.84c-.19.24-.29.58-.29 1.08h2c0-.28.05-.5.14-.68c.09-.17.26-.32.52-.47c.46-.21.84-.49 1.13-.85c.29-.37.44-.76.44-1.2c0-.7-.27-1.26-.81-1.68c-.54-.41-1.29-.62-2.23-.62M11 12v2h2v-2h-2Z"/>',width:24,height:24},o={body:'<path fill="currentColor" d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/>',width:24,height:24},s=n(2458),i=n(3679),u=n(2721),m=n(722),d=n(8302),v=n(1597),h={body:'<path fill="currentColor" d="M2 3h17a2 2 0 0 1 2 2v4h-2V5H2v14h17v-4h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m15 12v-2h7v-2h-7V9l-4 3l4 3M4 13h7v-2H4v2m0-4h7V7H4v2m0 8h4v-2H4v2Z"/>',width:24,height:24},g={body:'<path fill="currentColor" d="M22 3H5a2 2 0 0 0-2 2v4h2V5h17v14H5v-4H3v4a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 15v-2H0v-2h7V9l4 3l-4 3m13-2h-7v-2h7v2m0-4h-7V7h7v2m-3 8h-4v-2h4v2Z"/>',width:24,height:24},b=function(e){var t=e.previous,n=e.next;return a.createElement("div",{className:"gg-issues-prev-next"},t&&a.createElement(v.Link,{className:"prev",to:"/issues/"+t.number},a.createElement("span",null,a.createElement(l.JO,{className:"icon-action",icon:h,fontSize:"20"}),t.title)),n&&a.createElement(v.Link,{className:"next",to:"/issues/"+n.number},a.createElement("span",null,n.title,a.createElement(l.JO,{className:"icon-action",icon:g,fontSize:"20"}))))};function E(e){var t,n,v,h,g,E,p,f=(0,a.useState)(!0),_=f[0],k=f[1],y=(null==e||null===(t=e.data)||void 0===t?void 0:t.issuesJson)||{},N=null===(n=y.labels)||void 0===n?void 0:n.edges,w=null===(v=y.comments)||void 0===v?void 0:v.edges,H=(null==w?void 0:w.length)>0,Z=null==y||null===(h=y.category)||void 0===h?void 0:h.isAnswerable,L=(null==y?void 0:y.author)||{},M=e.pageContext;return(0,a.useEffect)((function(){var e;k(null===(e=y.category)||void 0===e?void 0:e.isAnswerable)}),[]),a.createElement(s.Z,{className:"issues-page",title:y.title+" | Issues"},a.createElement("div",{className:"markdown-body"},a.createElement("h1",null,a.createElement("span",null,a.createElement(u.Z,{number:y.number}),a.createElement("span",null,y.title))),a.createElement("div",{className:"widget"},a.createElement(m.Z,{data:null==y?void 0:y.category}),N&&N.map((function(e){var t=e.node;return a.createElement(d.Z,{key:t.name,data:t})}))),a.createElement("div",null,a.createElement(i.Z,{author:L,date:null==y?void 0:y.updatedAt}),a.createElement("div",{className:"ques-content"},Z&&a.createElement("div",null,a.createElement("span",{className:"icon-action quesicon",title:"Question"},a.createElement(l.JO,{icon:c,fontSize:30})),a.createElement("span",{className:"vote"},a.createElement(l.JO,{icon:o}),a.createElement("b",null,y.upvoteCount))),a.createElement("div",{className:"quescontent",dangerouslySetInnerHTML:{__html:y.bodyHTML}}))),a.createElement(b,{previous:M.previous,next:M.next}),a.createElement("div",{className:"answer-content"},H&&Z&&a.createElement("div",{className:"icon-action answericon",title:"Answer",onClick:function(){return k(!_)}},a.createElement(l.JO,{icon:r,fontSize:30})),a.createElement("div",{className:"comments"},H&&!_&&(null==w||null===(g=w[0])||void 0===g||null===(E=g.node)||void 0===E||null===(p=E.author)||void 0===p?void 0:p.login)&&w.map((function(e){var t,n=e.node,l=null==n||null===(t=n.replies)||void 0===t?void 0:t.edges;return a.createElement("div",{className:"comments-item",key:n.id},a.createElement(i.Z,{author:n.author}),a.createElement("div",{className:"comments-item-content",dangerouslySetInnerHTML:{__html:n.bodyHTML}}),null==l?void 0:l.map((function(e){var t=e.node;return a.createElement("div",{className:"comments-item",key:t.id},a.createElement(i.Z,{author:t.author}),a.createElement("div",{className:"comments-item-content",dangerouslySetInnerHTML:{__html:t.bodyHTML}}))})))}))))))}}}]);
//# sourceMappingURL=component---src-templates-issues-tsx-843680ba2d4016e310ed.js.map