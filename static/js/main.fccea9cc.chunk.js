(this.webpackJsonpboardgame=this.webpackJsonpboardgame||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),s=n.n(c),i=(n(60),n(61),n(30)),o=n(5),u=n(4),l=n.n(u),m=n(10),d=n(11),j=n(106),b=n(25),p=n(22),h=n.n(p),g="https://api.boardgameatlas.com/api",x=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:Object(b.a)(Object(b.a)({},t),{},{client_id:"4L5B0WNj2H"})},e.next=3,h.a.get("".concat(g,"/search"),n);case 3:return a=e.sent,e.abrupt("return",a.data.games);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(108),v=n(2),f=function(e){var t=e.setPhase,n=e.setNumOfPeople,a=(e.numOfPeople,function(e){console.log(e.currentTarget.value),t("playTime"),n(Number(e.currentTarget.value))});return Object(v.jsx)(v.Fragment,{children:[1,2,3,4,5,6,7,8].map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsxs)(O.a,{variant:"outlined",value:e,onClick:a,children:[e,"\uba85"]})},t)}))})},y=function(e){var t=e.setPhase,n=e.gnt,a=e.setGnt,r=e.lxt,c=e.setLxt,s=function(e){console.log(e.currentTarget.value),n===Number(e.currentTarget.value)?a():a(Number(e.currentTarget.value))},i=function(e){console.log(e.currentTarget.value),r===Number(e.currentTarget.value)?c():c(Number(e.currentTarget.value))};return Object(v.jsxs)(v.Fragment,{children:[[10,30,60,120].map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsxs)(O.a,{variant:"outlined",value:e,onClick:s,style:e===n?{backgroundColor:"#ececec"}:{},children:[e,"\ubd84"]})},t)})),"----------------------------",[30,60,120,180].map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsxs)(O.a,{variant:"outlined",value:e,onClick:i,style:e===r?{backgroundColor:"#ececec"}:{},children:[e,"\ubd84"]})},t)})),Object(v.jsx)(O.a,{onClick:function(){t("mechanics")},children:" \ub2e4\uc74c "})]})},w={hBqZ3Ar4RJ:{name:"Abstract",comment:"\uccb4\uc2a4\uac19\uc740 \uc804\ub7b5\uaee8"},MWoxgHrOJD:{name:"Animals",comment:"\ub3d9\ubb3c\ub098\uc624\ub294\uaee8"},PinhJrhnxU:{name:"Bluffing",comment:"\uc18d\uc784\uc218\uaee8"},eX8uuNlQkQ:{name:"Card Game",comment:"\uce74\ub4dc\uaee8"},"329DxyFL9D":{name:"Civilization",comment:"\ubb38\uba85\ub958\uaee8"},ZTneo8TaIO:{name:"Fantasy",comment:"\ud310\ud0c0\uc9c0\uaee8"},Kk70K0524Z:{name:"Murder/Mystery",comment:"\ubbf8\uc2a4\ud130\ub9ac/\ucd94\ub9ac"},X8J7RM6dxX:{name:"Party Game",comment:"\ud30c\ud2f0\uaee8"},WVMOS3s2pb:{name:"Puzzle",comment:"\ud37c\uc990"},"3B3QpKvXD3":{name:"Sci-Fi",comment:"SF"}},k=function(e){var t=e.setPhase,n=(e.category,e.setCategory),a=function(e){console.log(e.currentTarget.value),t("player"),n(e.currentTarget.value)};return Object(v.jsx)(v.Fragment,{children:["hBqZ3Ar4RJ","MWoxgHrOJD","PinhJrhnxU","eX8uuNlQkQ","329DxyFL9D","ZTneo8TaIO","Kk70K0524Z","X8J7RM6dxX","WVMOS3s2pb","3B3QpKvXD3"].map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{variant:"outlined",onClick:a,value:e,children:w[e].comment})},t)}))})},N={"9mNukNBxfZ":{name:"Cooperative Play",comment:"\ud611\ub825"},BGrhzIN69D:{name:"Player Elimination",comment:"\uac1c\uc778\uc804"},"9jnCsVuRat":{name:"Teams",comment:"\ud300\uc804"}},_=function(e){var t=e.setPhase,n=(e.mechanics,e.setMechanics),a=function(e){console.log(e.currentTarget.value),n(e.currentTarget.value),t("request")};return Object(v.jsx)(v.Fragment,{children:["9mNukNBxfZ","BGrhzIN69D","9jnCsVuRat"].map((function(e,t){return Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{variant:"outlined",onClick:a,value:e,children:N[e].comment})},t)}))})},F=function(e){var t=e.games,n=Object(o.f)(),a=Object(o.g)();return 0===t.length?Object(v.jsx)(v.Fragment,{children:"\uc6b0\ub9b0\uc870\uc84c\uc5b4 \uc544\ubb34\uac83\ub3c4 \uc5c6\uc5b4"}):Object(v.jsxs)(v.Fragment,{children:["\uc644\ubcbd\ud558\uac8c \uc77c\uce58\ud558\ub294\uac74 \uc5c6\uace0 \ub300\ucda9 \uc774\uc911\uc5d0\uc11c \ud558\ub098 \ud074\ub9ad\ud558\uc138\uc694",t.map((function(e,t){return t<3&&Object(v.jsxs)("div",{onClick:function(){n.push("".concat(a.pathname,"detail/").concat(e.id))},children:[Object(v.jsx)("img",{src:e.image_url,alt:"",width:"40%"}),e.name]},t)}))]})},C=function(){var e=Object(a.useState)("category"),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(d.a)(c,2),i=s[0],u=s[1],j=Object(a.useState)(),b=Object(d.a)(j,2),p=b[0],h=b[1],g=Object(a.useState)(),w=Object(d.a)(g,2),N=w[0],C=w[1],P=Object(a.useState)(),S=Object(d.a)(P,2),T=S[0],A=S[1],R=Object(a.useState)(),I=Object(d.a)(R,2),B=I[0],q=I[1],D=Object(a.useState)([]),L=Object(d.a)(D,2),X=L[0],z=L[1],J=Object(o.f)(),M=Object(o.g)();function Q(e){return W.apply(this,arguments)}function W(){return(W=Object(m.a)(l.a.mark((function e(t){var a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:a=e.sent,console.log(a),c=/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/,0===(s=a.filter((function(e){return 0!==e.tags.filter((function(e){return c.test(e)})).length}))).length?r("noResult"):"noResult"!==n?J.push("".concat(M.pathname,"detail/").concat(s[0].id)):z(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){if("request"===n)Q({mechanics:B,categories:T,gt_min_playtime:p?p-1:void 0,lt_max_playtime:N?N+1:void 0,gt_max_players:i?i-1:void 0,lt_min_players:i?i+1:void 0});else if("noResult"===n){Q({categories:T,gt_min_playtime:p?p-1:void 0,lt_max_playtime:N?N+1:void 0,gt_max_players:i?i-1:void 0,lt_min_players:i?i+1:void 0})}}),[n,T,p,N,i,B,Q]);return Object(v.jsxs)(v.Fragment,{children:["category"===n?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(k,{setPhase:r,category:T,setCategory:A})}):"player"===n?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(f,{setPhase:r,numOfPeople:i,setNumOfPeople:u})}):"playTime"===n?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y,{setPhase:r,gnt:p,setGnt:h,lxt:N,setLxt:C})}):"mechanics"===n?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(_,{setPhase:r,mechanics:B,setMechanics:q})}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(F,{games:X})}),Object(v.jsx)(O.a,{onClick:function(){u(void 0),h(void 0),C(void 0),A(void 0),q(void 0),z([]),r("category")},children:"\ub9ac\uc14b"})]})},P=(Object(j.a)({root:{backgroundColor:"red"}}),n(107)),S=Object(j.a)({detailArea:{border:"2px solid blue",padding:"3% 3% 3% 3%"},image:{width:"100%"},video:{margin:"0 auto",position:"absolute",width:"100%",height:"100%"},videoAlign:{position:"relative",width:"100%",paddingBottom:"56.25%"},centerAlign:{textAlign:"center"}}),T=function(e){var t=S();return Object(v.jsxs)("div",{className:t.detailArea,children:[Object(v.jsx)("img",{className:t.image,src:e.image_url,alt:"\ubcf4\ub4dc\uac8c\uc784"}),Object(v.jsx)("h3",{children:"\ub8f0 \uc124\uba85 "}),Object(v.jsx)("hr",{}),Object(v.jsx)("div",{className:t.videoAlign,children:Object(v.jsx)("iframe",{className:t.video,src:e.youtubeURL,title:"gamerule"})})]})},A=n(109),R=n(51),I=n.n(R),B=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment",n={params:{gameId:t}},e.next=4,h.a.get("https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment",n);case 4:return a=e.sent,r=JSON.parse(a.data.body),c=r.items,s=I.a.sortBy(c,["CreatedTime"]),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(m.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment",a={gameId:t,content:n},e.next=4,h.a.post("https://axqfvkig95.execute-api.ap-northeast-2.amazonaws.com/beta/lambda/boardgame/comment",a);case 4:return e.abrupt("return");case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=Object(j.a)({reviewArea:{padding:"3% 3% 3% 3%",border:"2px solid red"},formArea:{width:"100%"}}),L=function(e){var t=D(),n=e.reviews,r=Object(a.useState)(""),c=Object(d.a)(r,2),s=c[0],i=c[1],o=function(){var t=Object(m.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(s.length<=0)){t.next=6;break}return alert("\ub313\uae00\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),t.abrupt("return");case 6:return console.log("gameId",e.boardgameId),t.next=9,q(e.boardgameId,s);case 9:return t.next=11,e.updateReviews();case 11:u();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){i(""),document.querySelector("Input").value=""},j=n.length>0?n.map((function(e){return Object(v.jsxs)("li",{children:[e.id.substring(0,5)," : ",e.Content]},e.id)})):Object(v.jsx)("div",{children:Object(v.jsx)("p",{children:"\uc544\uc9c1 \ub313\uae00\uc774 \uc5c6\uc74c\ub465"})});return Object(v.jsxs)("div",{className:t.reviewArea,children:[Object(v.jsx)("h3",{children:"\ub313\uae00 \ubaa9\ub85d"}),Object(v.jsx)("hr",{}),Object(v.jsx)("ul",{children:j}),Object(v.jsx)("form",{className:t.formArea,onSubmit:o,children:Object(v.jsx)(A.a,{placeholder:"\ub313\uae00 \uc785\ub825",fullWidth:!0,onChange:function(e){i(e.target.value)},endAdornment:Object(v.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",children:"\uc81c\ucd9c"})})})]})};function X(e){var t=e.image_url,n=/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/;return{image_url:t,name:e.tags.filter((function(e){return n.test(e)}))[0]}}var z=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.googleapis.com/youtube/v3/search","AIzaSyA4bsWgPXVsprXWm0nk_RheeQqFKoEa51Q",n="\ubcf4\ub4dc\uac8c\uc784 ".concat(t," \ub8f0"),a={params:{part:"snippet",type:"video",q:n,key:"AIzaSyA4bsWgPXVsprXWm0nk_RheeQqFKoEa51Q",maxResults:1}},e.next=6,h.a.get("https://www.googleapis.com/youtube/v3/search",a);case 6:return r=e.sent,c=r.data.items[0].id.videoId,s="https://www.youtube.com/embed/".concat(c),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=Object(j.a)({box:{margin:"5% 5% 5% 5%",padding:"3% 3% 3% 3%",border:"2px solid black",borderRadius:"10px"},text:{textAlign:"center",color:"red"},images:{width:"100%"}}),M=function(e){var t=e.match,n=J(),r=t.params.boardgameId,c=Object(a.useState)({image_url:"",name:"",youtubeURL:""}),s=Object(d.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)(!1),j=Object(d.a)(u,2),p=j[0],h=j[1],g=Object(a.useState)([]),O=Object(d.a)(g,2),f=O[0],y=O[1];Object(a.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x({ids:r});case 2:return t=e.sent,n=X(t[0]),e.next=6,z(n.name);case 6:return a=e.sent,e.next=9,B(r);case 9:c=e.sent,y(c),o(Object(b.a)(Object(b.a)({},n),{},{youtubeURL:a})),h(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]);var w=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(r);case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsx)(P.a,{children:Object(v.jsx)("div",{className:n.box,children:p?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{className:n.text,children:i.name}),Object(v.jsx)("hr",{}),Object(v.jsx)(T,{image_url:i.image_url,youtubeURL:i.youtubeURL}),Object(v.jsx)(L,{reviews:f,updateReviews:w,boardgameId:r})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("h1",{className:n.text,children:"\ub85c\ub529\uc911"})})})})};var Q=function(){return Object(v.jsx)(i.a,{basename:"/scaling-journey",children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/detail/:boardgameId",component:M}),Object(v.jsx)(o.a,{path:"/",component:C})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),W()}},[[90,1,2]]]);
//# sourceMappingURL=main.fccea9cc.chunk.js.map