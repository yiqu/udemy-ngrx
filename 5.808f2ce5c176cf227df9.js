(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{pKmL:function(t,e,s){"use strict";s.r(e),s.d(e,"CoreModule",(function(){return K}));var i=s("SVse"),c=s("s7LF"),n=s("iInd");class o{constructor(t,e,s=0,i=null,c){this.userName=t,this.content=e,this.date=s,this.id=i,this.status=c}}var r=s("rL0q"),b=s("XNiG"),a=s("1G5W"),l=s("tqRt"),u=s("jxBw");const d=Object(l.o)("tweets"),g=Object(l.q)(d,u.a.getSelectors().selectAll),f=Object(l.q)(d,u.a.getSelectors().selectIds),m=Object(l.q)(d,u.a.getSelectors().selectEntities),p=Object(l.q)(d,u.a.getSelectors().selectTotal),h=Object(l.q)(g,(t,e)=>t.filter(t=>t.userName===e.nameToFilter)),w=t=>Object(l.q)(m,e=>e[t]),T=Object(l.q)(d,t=>t.loading),S=Object(l.q)(d,t=>t.error),v=Object(l.q)(d,t=>t.errorMsg);var B=s("Pk+l"),j=s("8Y7J"),O=s("mbak"),y=s("IYfF"),$=s("1WO+");let D=(()=>{class t{constructor(t){this.store=t}getAllTweets(){this.store.dispatch($.c())}postTweet(t){this.store.dispatch($.e({tweetToPost:t}))}updateTweet(t){this.store.dispatch($.a({update:{id:t.id,changes:t}}))}}return t.\u0275fac=function(e){return new(e||t)(j.Xb(l.h))},t.\u0275prov=j.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var I=s("Dxy4"),E=s("Q2Ze"),N=s("e6WT");function q(t,e){if(1&t&&(j.Rb(0),j.Bc(1),j.Qb()),2&t){const t=e.ngIf;j.Bb(1),j.Dc(" Current logged-in user: ",null==t?null:t.email," ")}}function F(t,e){1&t&&(j.Tb(0,"div",4),j.Tb(1,"div",2),j.Bc(2," You have not logged in. "),j.Sb(),j.Sb())}function k(t,e){1&t&&(j.Rb(0),j.Bc(1," Loading your tweets... "),j.Qb())}function A(t,e){if(1&t&&(j.Rb(0),j.Bc(1),j.fc(2,"async"),j.Qb()),2&t){const t=j.ec(2);j.Bb(1),j.Dc(" Error occured: ",j.gc(2,1,t.tweetErrorMsg$)," ")}}function L(t,e){if(1&t){const t=j.Ub();j.Rb(0),j.Tb(1,"div",18),j.Tb(2,"div",2),j.Bc(3),j.Tb(4,"button",19),j.ac("click",(function(){j.qc(t);const s=e.$implicit;return j.ec(4).editTweet(s)})),j.Bc(5,"Edit"),j.Sb(),j.Sb(),j.Sb(),j.Qb()}if(2&t){const t=e.$implicit;j.Bb(3),j.Ec(" ",t.userName," said: ",t.content," ")}}function z(t,e){if(1&t&&(j.Rb(0),j.zc(1,L,6,2,"ng-container",17),j.Qb()),2&t){const t=e.ngIf;j.Bb(1),j.jc("ngForOf",t)}}function C(t,e){if(1&t&&(j.zc(0,z,2,1,"ng-container",16),j.fc(1,"async")),2&t){const t=j.ec(2);j.jc("ngIf",j.gc(1,1,t.allTweets$))}}function Q(t,e){if(1&t&&(j.zc(0,A,3,3,"ng-container",5),j.fc(1,"async"),j.zc(2,C,2,3,"ng-template",null,15,j.Ac)),2&t){const t=j.oc(3),e=j.ec();j.jc("ngIf",j.gc(1,2,e.tweetError$))("ngIfElse",t)}}function R(t,e){if(1&t){const t=j.Ub();j.Tb(0,"div",7),j.Bc(1," Edit tweet "),j.Tb(2,"div",8),j.Tb(3,"mat-form-field",9),j.Tb(4,"mat-label"),j.Bc(5,"Your name"),j.Sb(),j.Ob(6,"input",10),j.Sb(),j.Tb(7,"mat-form-field",9),j.Tb(8,"mat-label"),j.Bc(9,"Say something..."),j.Sb(),j.Ob(10,"input",11),j.Sb(),j.Tb(11,"div"),j.Tb(12,"button",12),j.ac("click",(function(){return j.qc(t),j.ec().submitEdit()})),j.Bc(13,"Post"),j.Sb(),j.Sb(),j.Sb(),j.Sb()}if(2&t){const t=j.ec();j.Bb(2),j.jc("formGroup",t.editTweetFg),j.Bb(10),j.jc("disabled",!t.editTweetFg.valid)}}const x=[{path:"",component:(()=>{class t{constructor(t,e,s,i,n){this.rs=t,this.store=e,this.as=s,this.ts=i,this.fb=n,this.title="Loading, saving, and updating using NgRx Entity",this.compDest$=new b.a,this.loggedinUser$=this.store.select(r.b),this.tweetsLoading$=this.store.select(T),this.allTweets$=this.store.select(g),this.tweetError$=this.store.select(S),this.tweetErrorMsg$=this.store.select(v),this.aSingleTweet$=this.store.select(w("-M52fZohiACwgDDfwuqQ")),this.composeTitle="Tweet Something...",this.editing=!1,this.tweetFg=this.fb.group({userName:B.b("Kevin",!1,[c.p.required]),tweet:B.b(null,!1,[c.p.required])})}ngOnInit(){this.getAllTweets(),this.store.select(g).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(m).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(f).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(p).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(h,{nameToFilter:"gg"}).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(w("-M52fZohiACwgDDfwuqQ")).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{})}refreshTweets(){this.getAllTweets()}getAllTweets(){this.ts.getAllTweets()}postTweet(){const t=this.tweetFg.value,e=(new Date).getTime()+"-id",s=new o(t.userName,t.tweet,(new Date).getTime(),e,null);this.ts.postTweet(s)}editTweet(t){this.tweetBeingEdited=t,this.editTweetFg=this.fb.group({userName:t.userName,tweet:t.content}),this.editing=!0}submitEdit(){const t=this.editTweetFg.value,e=Object.assign(Object.assign({},this.tweetBeingEdited),{content:t.tweet,userName:t.userName});this.ts.updateTweet(e),this.editing=!1}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(e){return new(e||t)(j.Nb(O.a),j.Nb(l.h),j.Nb(y.a),j.Nb(D),j.Nb(c.d))},t.\u0275cmp=j.Hb({type:t,selectors:[["app-core"]],decls:37,vars:13,consts:[[1,"container-fluid","min-100-vh"],[1,"row","mt-3"],[1,"col-sm-12"],["mat-flat-button","","color","primary",3,"click"],[1,"row"],[4,"ngIf","ngIfElse"],["noLoggedin",""],[1,"col-sm-3"],[3,"formGroup"],[1,"example-form-field"],["matInput","","type","text","formControlName","userName"],["matInput","","type","text","formControlName","tweet"],["mat-raised-button","","color","primary",3,"disabled","click"],["tweetLoaded",""],["class","col-sm-3",4,"ngIf"],["noError",""],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row","mb-2"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){if(1&t&&(j.Tb(0,"div",0),j.Tb(1,"div",1),j.Tb(2,"div",2),j.Bc(3),j.Tb(4,"button",3),j.ac("click",(function(){return e.refreshTweets()})),j.Bc(5,"Refresh tweets"),j.Sb(),j.Sb(),j.Sb(),j.Ob(6,"hr"),j.Tb(7,"div",4),j.Tb(8,"div",2),j.zc(9,q,2,1,"ng-container",5),j.fc(10,"async"),j.Sb(),j.Sb(),j.zc(11,F,3,0,"ng-template",null,6,j.Ac),j.Ob(13,"hr"),j.Tb(14,"div",4),j.Tb(15,"div",7),j.Bc(16),j.Tb(17,"div",8),j.Tb(18,"mat-form-field",9),j.Tb(19,"mat-label"),j.Bc(20,"Your name"),j.Sb(),j.Ob(21,"input",10),j.Sb(),j.Tb(22,"mat-form-field",9),j.Tb(23,"mat-label"),j.Bc(24,"Say something..."),j.Sb(),j.Ob(25,"input",11),j.Sb(),j.Tb(26,"div"),j.Tb(27,"button",12),j.ac("click",(function(){return e.postTweet()})),j.Bc(28,"Post"),j.Sb(),j.Sb(),j.Sb(),j.Sb(),j.Tb(29,"div",7),j.Tb(30,"div"),j.Bc(31," Sorted by name (using the default sort fn supplied) "),j.Sb(),j.zc(32,k,2,0,"ng-container",5),j.fc(33,"async"),j.zc(34,Q,4,4,"ng-template",null,13,j.Ac),j.Sb(),j.zc(36,R,14,2,"div",14),j.Sb(),j.Sb()),2&t){const t=j.oc(12),s=j.oc(35);j.Bb(3),j.Dc(" ",e.title," "),j.Bb(6),j.jc("ngIf",j.gc(10,9,e.loggedinUser$))("ngIfElse",t),j.Bb(7),j.Dc(" ",e.composeTitle," "),j.Bb(1),j.jc("formGroup",e.tweetFg),j.Bb(10),j.jc("disabled",!e.tweetFg.valid),j.Bb(5),j.jc("ngIf",j.gc(33,11,e.tweetsLoading$))("ngIfElse",s),j.Bb(4),j.jc("ngIf",e.editing)}},directives:[I.a,i.k,c.m,c.g,E.c,E.g,N.b,c.c,c.l,c.f,i.j],pipes:[i.b],styles:[".item[_ngcontent-%COMP%]{font-size:1rem}"]}),t})()}];let M=(()=>{class t{}return t.\u0275mod=j.Lb({type:t}),t.\u0275inj=j.Kb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(x)],n.i]}),t})();var G=s("UmVK");let K=(()=>{class t{}return t.\u0275mod=j.Lb({type:t}),t.\u0275inj=j.Kb({factory:function(e){return new(e||t)},providers:[],imports:[[i.c,c.o,c.h,G.a,M]]}),t})()}}]);