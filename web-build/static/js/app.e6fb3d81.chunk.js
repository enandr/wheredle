(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{259:function(e,t,n){e.exports=n(377)},377:function(e,t,n){"use strict";n.r(t);var r=n(385),a=(n(376),n(383)),c=n(384),s=n(9),o=n.n(s),l=n(23),i=n.n(l),u=n(0),d=n(118),j=n(61),h=n(83),g=n(158),p=n(131),b=n(13),x=n(159),O=n(60),f=n(119),y=n(11),m=n(25),w=n(75),T=n(70),S=n(160),v=n(8),C=n(47),L={darkGrey:"#191919",grey:"#CCC9DC",pink:"#DF367C",purple:"#9A0680",black:"#000",textLight:"#fafafa",textGrey:"#808e9b"},P=n(15);function k(e){return Object(P.jsx)(T.a,{onPress:e.onPress,style:[A.loginButton,e.disabled?A.disabledButton:null],disabled:e.disabled,children:Object(P.jsx)(m.a,{style:A.loginButtonText,children:e.text})})}var A=y.a.create({loginButton:{backgroundColor:L.purple,paddingVertical:12,borderRadius:6,marginTop:20},loginButtonText:{fontSize:20,fontWeight:"500",color:L.textLight,alignSelf:"center"},disabledButton:{backgroundColor:"lightgrey"}}),I=n(34);function G(e){var t=function(t){return t=t.toUpperCase(),e.greenCaps.includes(t)?"green":e.orangeCaps.includes(t)?"orange":e.greyCaps.includes(t)?"#282828":"grey"};return Object(P.jsx)(v.a,{style:[D.keyboard,D.showKeyboard],children:W.map((function(n,r){return Object(P.jsx)(v.a,{style:D.row,children:n.map((function(n){return Object(P.jsx)(T.a,{onPress:function(){return e.onKeyPressed(n)},style:[D.key,n===R||n===E?{width:1.4*z}:{},{backgroundColor:t(n)}],children:Object(P.jsx)(m.a,{style:D.keyText,children:n.toUpperCase()})},n)}))},"row-"+r)}))})}var R="ENTER",E="CLEAR",W=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],[R,"Z","X","C","V","B","N","M",E]],z=(I.a.get("window").width-10)/W[0].length,N=1.3*z,D=y.a.create({keyboard:{alignSelf:"stretch",marginTop:"auto",backgroundColor:"#191919"},hideKeyboard:{display:"none"},showKeyboard:{position:"absolute",bottom:0},row:{alignSelf:"stretch",flexDirection:"row",justifyContent:"center"},key:{width:z-4,height:N-4,margin:2,borderRadius:5,backgroundColor:L.grey,justifyContent:"center",alignItems:"center"},keyText:{color:L.textLight,fontWeight:"bold"}}),H=n(245),U=n.n(H),Y=n(247),B="won",K="lost",M="pending";function J(e){e.navigation;var t=Object(u.useState)(!1),n=o()(t,2),r=n[0],a=n[1],c=Object(u.useState)(!1),s=o()(c,2),l=s[0],y=(s[1],Object(u.useState)("")),A=o()(y,2),I=A[0],R=A[1],E=Object(u.useState)([]),W=o()(E,2),z=W[0],N=W[1],D=Object(u.useState)([""]),H=o()(D,2),J=H[0],Z=H[1],V=Object(u.useState)([""]),q=o()(V,2),Q=q[0],X=q[1],$=Object(u.useState)([""]),_=o()($,2),ee=_[0],te=_[1],ne=Object(u.useState)(""),re=o()(ne,2),ae=re[0],ce=re[1],se=Object(u.useState)([]),oe=o()(se,2),le=oe[0],ie=(oe[1],Object(u.useState)(M)),ue=o()(ie,2),de=ue[0],je=ue[1],he=Object(u.useState)(!1),ge=o()(he,2),pe=ge[0],be=ge[1],xe=Object(u.useState)(""),Oe=o()(xe,2),fe=Oe[0],ye=Oe[1],me=Object(u.useRef)(0),we=Object(u.useRef)(0),Te=Object(u.useRef)(0),Se=Object(u.useState)({answer:"",date:"",id:0,image:"../../assets/loading.gif"}),ve=o()(Se,2),Ce=ve[0],Le=ve[1],Pe=Object(u.useRef)(),ke=Object(u.useRef)(),Ae=Object(u.useState)(!1),Ie=o()(Ae,2),Ge=Ie[0],Re=Ie[1],Ee=function(){var e=new Date,t=e.getFullYear().toString(),n=e.getMonth()+1,r=e.getDate();return(n<10?"0"+n:""+n)+"/"+(r<10?"0"+r:""+r)+"/"+t};Object(u.useEffect)((function(){Z([]),X([]),te([]);var e=h.a.addListener("keyboardWillShow",(function(){h.a.dismiss()})),t=Ee();return function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,i.a.awrap(C.a.getItem("lastPlayed"));case 3:return t.t1=t.sent,t.abrupt("return",t.t0===t.t1);case 5:case"end":return t.stop()}}),null,null,null,Promise)}(t).then((function(e){e||C.a.clear(),function(e){var t,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.awrap(fetch("https://3hvzjclms6.execute-api.us-east-1.amazonaws.com/challenges",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({date:e})}));case 2:return t=r.sent,r.next=5,i.a.awrap(t.json());case 5:return n=r.sent,r.abrupt("return",n[0]);case 7:case"end":return r.stop()}}),null,null,null,Promise)}(t).then((function(e){var t;Le(e),function(){var e,t,n;i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.awrap(C.a.getItem("totalGuesses"));case 3:return e=r.sent,r.next=6,i.a.awrap(C.a.getItem("gameStatus"));case 6:return t=r.sent,r.next=9,i.a.awrap(C.a.getItem("lastPlayed"));case 9:return n=r.sent,null!==e&&null!==t&&(me.current=e,je(t)),r.abrupt("return",n);case 14:return r.prev=14,r.t0=r.catch(0),r.abrupt("return",null);case 17:case"end":return r.stop()}}),null,null,[[0,14]],Promise)}(),null==Pe||null==(t=Pe.current)||t.focus(),ke.current=setInterval((function(){var e=new Date,t=23-e.getHours(),n=59-e.getMinutes(),r=59-e.getSeconds();ye(t+":"+(n<10?"0"+n:""+n)+":"+(r<10?"0"+r:""+r))}),1e3)}))})),function(){e.remove()}}),[]),Object(u.useEffect)((function(){Te.current=I.split(" ").length-1,we.current=I.length-Te.current,6===we.current&&de===M?be(!0):(ce(I),R(I.slice(0,6+Te.current)),be(!1))}),[I]),Object(u.useEffect)((function(){var e=ae.toUpperCase().replace(/[^A-Z]/g,"");""===e||6===e.length?N([]):fetch("https://3hvzjclms6.execute-api.us-east-1.amazonaws.com/autocomplete",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({city:ae})}).then((function(e){return e.json()})).then((function(e){N(e)}))}),[ae]);var We=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://3hvzjclms6.execute-api.us-east-1.amazonaws.com/checkcity",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({city:e})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)},ze=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.dismiss(),We(I).then((function(e){return e.json()})).then((function(e){if(e){for(var t=[],n=0,r=I.toUpperCase().replace(/[^A-Z]/g,""),a=null==Ce?void 0:Ce.answer,c=0;c<6;c++)r[c]===a[c]?(t.push({guess:r[c],accuracy:"correct"}),J.push(r[c]),a=a.replace(r[c]," "),n+=1):a.includes(r[c])?(t.push({guess:r[c],accuracy:"wrongLocation"}),Q.push(r[c]),a=a.replace(r[c]," ")):(ee.push(r[c]),t.push({guess:r[c],accuracy:"wrong"}));if(le.push(t),R(""),Te.current=0,we.current=0,me.current+=1,6===n)return je(B),C.a.setItem("gameStatus",B),C.a.setItem("totalGuesses",me.current+""),C.a.setItem("correctAnswer",(null==Ce?void 0:Ce.answer)||""),C.a.setItem("lastPlayed",Ee()),void d.a.alert("Congrats!!","You Won After "+me.current+" Guesses.",[{text:"Close"},{text:"Share",onPress:Ne}]);if(6!==n&&6===me.current)return je(K),C.a.setItem("gameStatus",K),C.a.setItem("totalGuesses",me.current+""),C.a.setItem("correctAnswer",(null==Ce?void 0:Ce.answer)||""),C.a.setItem("lastPlayed",Ee()),void d.a.alert("Better Luck Next Time","You Lost After "+me.current+" Guesses.",[{text:"Close"},{text:"Share",onPress:Ne}]);setTimeout((function(){var e;de===M&&(null==Pe||null==(e=Pe.current)||e.focus())}),100)}else"web"!==b.a.OS?d.a.alert(I+" might not be a real city. please try again"):alert(I+" might not be a real city. please try again"),R(""),setTimeout((function(){var e;de===M&&(null==Pe||null==(e=Pe.current)||e.focus())}),100)}));case 2:case"end":return e.stop()}}),null,null,null,Promise)},Ne=function(){var e,t,n,r,a;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=le.map((function(e,t){return e.map((function(e,t){return He[e.accuracy]})).join("")})).join("\n"),c.prev=1,t="Wheredle: "+me.current+"/6 guesses\n",n=Ee()+"\n",r=e+"\n","Play At wheredle.rogerenand.com\n","Or find it in the app store and google play store",c.next=9,i.a.awrap(f.a.share({message:""+t+n+r+"Play At wheredle.rogerenand.com\nOr find it in the app store and google play store"}));case 9:(a=c.sent).action===f.a.sharedAction?a.activityType:(a.action,f.a.dismissedAction),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(1),alert(c.t0.message);case 16:case"end":return c.stop()}}),null,null,[[1,13]],Promise)},De=Object(P.jsxs)(v.a,{children:[Object(P.jsx)(Y.a,{data:z,value:ae,onChangeText:function(e){return ce(e)},renderTextInput:function(){return Object(P.jsx)(w.a,{ref:Pe,style:F.input,placeholder:"Guess The Location",placeholderTextColor:"#808e9b",autoCapitalize:"characters",autoFocus:!0,value:I,maxLength:6+Te.current,editable:de===M,onChangeText:function(e){e=e.toUpperCase().slice(0,6+Te.current).replace(/[^A-Z ]/g,""),R(e)},onKeyPress:function(e){13===e.keyCode&&pe&&(6==I.length?ze():setTimeout((function(){var e;null==Pe||null==(e=Pe.current)||e.focus()}),100))}})},flatListProps:{keyExtractor:function(e,t){return t},renderItem:function(e){var t=e.item;return Object(P.jsx)(T.a,{onPress:function(){R(t),ce(t),N([])},children:Object(P.jsx)(m.a,{children:t})})}}}),Object(P.jsx)(k,{disabled:!pe,text:"Submit",onPress:function(){6===we.current&&pe&&ze()}}),Object(P.jsx)(v.a,{children:le.map((function(e,t){return Object(P.jsx)(v.a,{style:F.map,children:Object(P.jsxs)(v.a,{style:F.row,children:[Object(P.jsx)(v.a,{style:[F.cell,F[e[0].accuracy]],children:Object(P.jsx)(m.a,{style:F.cellText,children:e[0].guess})}),Object(P.jsx)(v.a,{style:[F.cell,F[e[1].accuracy]],children:Object(P.jsx)(m.a,{style:F.cellText,children:e[1].guess})}),Object(P.jsx)(v.a,{style:[F.cell,F[e[2].accuracy]],children:Object(P.jsx)(m.a,{style:F.cellText,children:e[2].guess})}),Object(P.jsx)(v.a,{style:[F.cell,F[e[3].accuracy]],children:Object(P.jsx)(m.a,{style:F.cellText,children:e[3].guess})}),Object(P.jsx)(v.a,{style:[F.cell,F[e[4].accuracy]],children:Object(P.jsx)(m.a,{style:F.cellText,children:e[4].guess})}),Object(P.jsx)(v.a,{style:[F.cell,F[e[5].accuracy]],children:Object(P.jsx)(m.a,{style:F.cellText,children:e[5].guess})})]})},t)}))})]}),He={wrong:["\ud83d\udfe5"],wrongLocation:["\ud83d\udfe7"],correct:["\ud83d\udfe9"],blackSquare:["\u2b1b"]},Ue=Object(P.jsxs)(v.a,{style:{marginTop:20},children:[Object(P.jsx)(m.a,{style:F.textGameOver,children:"won"===de?"CONGRATULATIONS. YOU WON!!!!":"SORRY, YOU LOST"}),Object(P.jsxs)(m.a,{style:F.textGameOver,children:["Correct Answer:",Object(P.jsx)(m.a,{style:F.correctGameOver,children:" "+(null==Ce?void 0:Ce.answer)})]}),Object(P.jsxs)(m.a,{style:F.textGameOver,children:["Total Guesses:",Object(P.jsx)(m.a,{style:F.wrongLocationGameOver,children:" "+me.current})]}),Object(P.jsxs)(m.a,{style:F.textGameOver,children:["Time To New Game:",Object(P.jsx)(m.a,{style:F.textTimeLeftGameOver,children:" "+fe})]}),Object(P.jsx)(v.a,{style:{marginTop:50},children:Object(P.jsx)(k,{text:"Share Results",onPress:Ne})}),Object(P.jsx)(v.a,{style:{marginTop:10},children:Object(P.jsx)(k,{text:"Clear Data",onPress:function(){C.a.clear()}})})]});return Object(P.jsx)(x.a,{style:[F.container],children:Object(P.jsxs)(v.a,{style:{height:"100%"},children:[Object(P.jsx)(O.a,{style:{paddingHorizontal:20},children:Object(P.jsx)(g.a,{children:Object(P.jsx)(S.a,{onPress:function(){var e,t;"web"===b.a.OS?null==Pe||null==(e=Pe.current)||e.focus():null==Pe||null==(t=Pe.current)||t.blur()},children:Object(P.jsxs)(v.a,{style:[F.container],children:[Object(P.jsx)(m.a,{style:F.title,children:"WHEREDLE"}),Object(P.jsx)(T.a,{onPress:function(){a(!0)},children:Object(P.jsx)(m.a,{style:F.helpText,children:"How To Play?"})}),Object(P.jsx)(T.a,{onPress:function(){Re(!0)},children:Object(P.jsx)(j.a,{style:{width:"100%",minHeight:300},source:{uri:null==Ce?void 0:Ce.image}})}),Object(P.jsx)(p.a,{visible:Ge,transparent:!0,children:Object(P.jsx)(U.a,{enableSwipeDown:!0,saveToLocalByLongPress:!1,onSwipeDown:function(){Re(!1)},imageUrls:[{url:null==Ce?void 0:Ce.image,props:{style:{width:"100%",minHeight:300}}}]})}),de===M?De:Ue,Object(P.jsx)(p.a,{animationType:"slide",transparent:!1,visible:r,onDismiss:function(){},children:Object(P.jsx)(v.a,{style:[F.container,"ios"===b.a.OS?{paddingTop:50}:null],children:Object(P.jsxs)(v.a,{children:[Object(P.jsx)(m.a,{style:{color:L.textLight},children:"Welcome To Where-dle"}),Object(P.jsx)(m.a,{style:{color:L.textLight},children:"HOW TO PLAY:"}),Object(P.jsx)(m.a,{style:{color:L.textLight},children:"Each City Is 6 Letters Long"}),Object(P.jsx)(m.a,{style:{color:L.textLight},children:"Type In Your Guess"}),Object(P.jsxs)(m.a,{style:{color:L.textLight},children:["A ",Object(P.jsx)(m.a,{style:F.wrong,children:"RED"})," Letter Means That Letter Is NOT In The Word"]}),Object(P.jsxs)(m.a,{style:{color:L.textLight},children:["An ",Object(P.jsx)(m.a,{style:F.wrongLocation,children:"ORANGE"})," ","Letter Means That Letter Is In The Word But Wrong Spot"]}),Object(P.jsxs)(m.a,{style:{color:L.textLight},children:["A ",Object(P.jsx)(m.a,{style:F.correct,children:"GREEN"})," Letter Means That Letter Is Correct"]}),Object(P.jsx)(m.a,{style:{color:L.textLight},children:"You Can Tap On The Image To Open A Pop-Up To Zoom On The Image. Swipe Down To Close The Image"}),Object(P.jsx)(m.a,{style:{color:L.textLight},children:"You Can Play Once Daily And Have 6 Tries To Win"}),Object(P.jsx)(k,{text:"Close Help",onPress:function(){a(!1)}})]})})})]})})})}),Object(P.jsx)(G,{visible:l,onKeyPressed:function(e){"ENTER"!==e&&"CLEAR"!==e&&R(I+e),"CLEAR"===e&&R("")},greenCaps:J,orangeCaps:Q,greyCaps:ee})]})})}var F=y.a.create({container:{flex:1,paddingTop:10,paddingHorizontal:20,backgroundColor:L.darkGrey,paddingBottom:200},title:{color:"lightgrey",fontSize:32,fontWeight:"bold",letterSpacing:7,textAlign:"center"},map:{alignSelf:"stretch"},row:{alignSelf:"stretch",flexDirection:"row"},cell:{borderWidth:3,borderColor:"grey",flex:1,aspectRatio:1,margin:3,alignItems:"center",justifyContent:"center"},cellText:{color:"white",fontWeight:"bold",fontSize:30},text:{fontSize:30,fontWeight:"900",alignSelf:"center",color:L.textLight},textGameOver:{fontSize:20,fontWeight:"900",alignSelf:"flex-start",color:L.textLight},input:{width:"100%",height:50,backgroundColor:L.grey,borderRadius:6,marginTop:10,paddingHorizontal:10,fontSize:16,color:L.black},guessTile:{width:10,padding:10,borderColor:"grey",display:"flex",justifyContent:"center",alignItems:"center"},correct:{backgroundColor:"green"},wrongLocation:{backgroundColor:"orange"},wrong:{backgroundColor:"#282828"},helpText:{alignSelf:"center",color:L.pink,fontSize:18,fontWeight:"600",marginBottom:10},correctGameOver:{color:"green"},wrongLocationGameOver:{color:"orange"},wrongGameOver:{color:"red"},textTimeLeftGameOver:{color:"lightblue"}});function Z(){var e=Object(u.useState)(""),t=o()(e,2),n=t[0],r=t[1],a=Object(u.useState)(""),c=o()(a,2),s=c[0],l=c[1],d=Object(u.useState)(""),j=o()(d,2),h=j[0],g=j[1];return Object(u.useEffect)((function(){!function(){var e,t,n;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(C.a.getItem("correctAnswer"));case 3:return e=a.sent,a.next=6,i.a.awrap(C.a.getItem("totalGuesses"));case 6:return t=a.sent,a.next=9,i.a.awrap(C.a.getItem("gameStatus"));case 9:n=a.sent,null!==e&&null!==t&&null!==n&&(r(e),l(t),g(n)),a.next=15;break;case 13:a.prev=13,a.t0=a.catch(0);case 15:case"end":return a.stop()}}),null,null,[[0,13]],Promise)}()}),[]),Object(P.jsxs)(v.a,{style:V.container,children:[Object(P.jsx)(m.a,{style:V.text,children:"won"===h?"CONGRATULATIONS. YOU WON!!!!":"SORRY, YOU LOST"}),Object(P.jsxs)(m.a,{style:V.text,children:["Correct Answer:",Object(P.jsx)(m.a,{style:V.correct,children:" "+n})]}),Object(P.jsxs)(m.a,{style:V.text,children:["Total Guesses:",Object(P.jsx)(m.a,{style:V.wrongLocation,children:" "+s})]}),Object(P.jsx)(k,{text:"TEMPORARY BUTTON TO RESET APP",onPress:function(){C.a.clear(),"web"===b.a.OS&&window.location.reload()}})]})}var V=y.a.create({container:{flex:1,paddingTop:50,paddingHorizontal:20,backgroundColor:L.darkGrey},text:{fontSize:20,fontWeight:"900",alignSelf:"flex-start",color:L.textLight},input:{width:"100%",height:50,backgroundColor:L.grey,borderRadius:6,marginTop:10,paddingHorizontal:10,fontSize:16,color:L.black},correct:{color:"green"},wrongLocation:{color:"orange"},wrong:{color:"red"}}),q=Object(c.a)();m.a.defaultProps=m.a.defaultProps||{},m.a.defaultProps.allowFontScaling=!1,Object(r.a)((function(){return Object(P.jsx)(a.a,{children:Object(P.jsxs)(q.Navigator,{screenOptions:{headerShown:!1},initialRouteName:"Home",children:[Object(P.jsx)(q.Screen,{name:"Home",component:J}),Object(P.jsx)(q.Screen,{name:"Win",component:Z})]})})}))}},[[259,1,2]]]);
//# sourceMappingURL=app.e6fb3d81.chunk.js.map