(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{pKmL:function(t,e,i){"use strict";i.r(e),i.d(e,"CoreModule",(function(){return F}));var s=i("SVse"),c=i("s7LF"),n=i("iInd");class o{constructor(t,e,i=0,s=null,c){this.userName=t,this.content=e,this.date=i,this.id=s,this.status=c}}var r=i("rL0q"),b=i("XNiG"),a=i("1G5W"),l=i("ZRCe"),u=i("Pk+l"),d=i("8Y7J"),f=i("mbak"),g=i("tqRt"),m=i("IYfF"),p=i("1WO+");let h=(()=>{class t{constructor(t){this.store=t}getAllTweets(){this.store.dispatch(p.c())}postTweet(t){this.store.dispatch(p.e({tweetToPost:t}))}updateTweet(t){this.store.dispatch(p.a({update:{id:t.id,changes:t}}))}}return t.\u0275fac=function(e){return new(e||t)(d.Xb(g.h))},t.\u0275prov=d.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=i("Dxy4"),T=i("Q2Ze"),v=i("e6WT");function S(t,e){if(1&t&&(d.Rb(0),d.Cc(1),d.Qb()),2&t){const t=e.ngIf;d.Bb(1),d.Ec(" Current logged-in user: ",null==t?null:t.email," ")}}function C(t,e){1&t&&(d.Tb(0,"div",4),d.Tb(1,"div",2),d.Cc(2," You have not logged in. "),d.Sb(),d.Sb())}function y(t,e){1&t&&(d.Rb(0),d.Cc(1," Loading your tweets... "),d.Qb())}function k(t,e){if(1&t&&(d.Rb(0),d.Cc(1),d.fc(2,"async"),d.Qb()),2&t){const t=d.ec(2);d.Bb(1),d.Ec(" Error occured: ",d.gc(2,1,t.tweetErrorMsg$)," ")}}function $(t,e){if(1&t){const t=d.Ub();d.Rb(0),d.Tb(1,"div",18),d.Tb(2,"div",2),d.Cc(3),d.Tb(4,"button",19),d.ac("click",(function(){d.rc(t);const i=e.$implicit;return d.ec(4).editTweet(i)})),d.Cc(5,"Edit"),d.Sb(),d.Sb(),d.Sb(),d.Qb()}if(2&t){const t=e.$implicit;d.Bb(3),d.Fc(" ",t.userName," said: ",t.content," ")}}function E(t,e){if(1&t&&(d.Rb(0),d.Ac(1,$,6,2,"ng-container",17),d.Qb()),2&t){const t=e.ngIf;d.Bb(1),d.kc("ngForOf",t)}}function I(t,e){if(1&t&&(d.Ac(0,E,2,1,"ng-container",16),d.fc(1,"async")),2&t){const t=d.ec(2);d.kc("ngIf",d.gc(1,1,t.allTweets$))}}function O(t,e){if(1&t&&(d.Ac(0,k,3,3,"ng-container",5),d.fc(1,"async"),d.Ac(2,I,2,3,"ng-template",null,15,d.Bc)),2&t){const t=d.pc(3),e=d.ec();d.kc("ngIf",d.gc(1,2,e.tweetError$))("ngIfElse",t)}}function B(t,e){if(1&t){const t=d.Ub();d.Tb(0,"div",7),d.Cc(1," Edit tweet "),d.Tb(2,"div",8),d.Tb(3,"mat-form-field",9),d.Tb(4,"mat-label"),d.Cc(5,"Your name"),d.Sb(),d.Ob(6,"input",10),d.Sb(),d.Tb(7,"mat-form-field",9),d.Tb(8,"mat-label"),d.Cc(9,"Say something..."),d.Sb(),d.Ob(10,"input",11),d.Sb(),d.Tb(11,"div"),d.Tb(12,"button",12),d.ac("click",(function(){return d.rc(t),d.ec().submitEdit()})),d.Cc(13,"Post"),d.Sb(),d.Sb(),d.Sb(),d.Sb()}if(2&t){const t=d.ec();d.Bb(2),d.kc("formGroup",t.editTweetFg),d.Bb(10),d.kc("disabled",!t.editTweetFg.valid)}}const N=[{path:"",component:(()=>{class t{constructor(t,e,i,s,n){this.rs=t,this.store=e,this.as=i,this.ts=s,this.fb=n,this.title="Loading, saving, and updating using NgRx Entity",this.compDest$=new b.a,this.loggedinUser$=this.store.select(r.b),this.tweetsLoading$=this.store.select(l.g),this.allTweets$=this.store.select(l.c),this.tweetError$=this.store.select(l.f),this.tweetErrorMsg$=this.store.select(l.e),this.aSingleTweet$=this.store.select(l.j("-M52fZohiACwgDDfwuqQ")),this.composeTitle="Tweet Something...",this.editing=!1,this.tweetFg=this.fb.group({userName:u.b("Kevin",!1,[c.p.required]),tweet:u.b(null,!1,[c.p.required])})}ngOnInit(){this.getAllTweets(),this.store.select(l.c).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(l.a).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(l.b).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(l.d).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(l.i,{nameToFilter:"gg"}).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{}),this.store.select(l.j("-M52fZohiACwgDDfwuqQ")).pipe(Object(a.a)(this.compDest$)).subscribe(t=>{})}refreshTweets(){this.getAllTweets()}getAllTweets(){this.ts.getAllTweets()}postTweet(){const t=this.tweetFg.value,e=(new Date).getTime()+"-id",i=new o(t.userName,t.tweet,(new Date).getTime(),e,null);this.ts.postTweet(i)}editTweet(t){this.tweetBeingEdited=t,this.editTweetFg=this.fb.group({userName:t.userName,tweet:t.content}),this.editing=!0}submitEdit(){const t=this.editTweetFg.value,e=Object.assign(Object.assign({},this.tweetBeingEdited),{content:t.tweet,userName:t.userName});this.ts.updateTweet(e),this.editing=!1}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(e){return new(e||t)(d.Nb(f.a),d.Nb(g.h),d.Nb(m.a),d.Nb(h),d.Nb(c.d))},t.\u0275cmp=d.Hb({type:t,selectors:[["app-core"]],decls:37,vars:13,consts:[[1,"container-fluid","min-100-vh"],[1,"row","mt-3"],[1,"col-sm-12"],["mat-flat-button","","color","primary",3,"click"],[1,"row"],[4,"ngIf","ngIfElse"],["noLoggedin",""],[1,"col-sm-3"],[3,"formGroup"],[1,"example-form-field"],["matInput","","type","text","formControlName","userName"],["matInput","","type","text","formControlName","tweet"],["mat-raised-button","","color","primary",3,"disabled","click"],["tweetLoaded",""],["class","col-sm-3",4,"ngIf"],["noError",""],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"row","mb-2"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){if(1&t&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Cc(3),d.Tb(4,"button",3),d.ac("click",(function(){return e.refreshTweets()})),d.Cc(5,"Refresh tweets"),d.Sb(),d.Sb(),d.Sb(),d.Ob(6,"hr"),d.Tb(7,"div",4),d.Tb(8,"div",2),d.Ac(9,S,2,1,"ng-container",5),d.fc(10,"async"),d.Sb(),d.Sb(),d.Ac(11,C,3,0,"ng-template",null,6,d.Bc),d.Ob(13,"hr"),d.Tb(14,"div",4),d.Tb(15,"div",7),d.Cc(16),d.Tb(17,"div",8),d.Tb(18,"mat-form-field",9),d.Tb(19,"mat-label"),d.Cc(20,"Your name"),d.Sb(),d.Ob(21,"input",10),d.Sb(),d.Tb(22,"mat-form-field",9),d.Tb(23,"mat-label"),d.Cc(24,"Say something..."),d.Sb(),d.Ob(25,"input",11),d.Sb(),d.Tb(26,"div"),d.Tb(27,"button",12),d.ac("click",(function(){return e.postTweet()})),d.Cc(28,"Post"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(29,"div",7),d.Tb(30,"div"),d.Cc(31," Sorted by name (using the default sort fn supplied) "),d.Sb(),d.Ac(32,y,2,0,"ng-container",5),d.fc(33,"async"),d.Ac(34,O,4,4,"ng-template",null,13,d.Bc),d.Sb(),d.Ac(36,B,14,2,"div",14),d.Sb(),d.Sb()),2&t){const t=d.pc(12),i=d.pc(35);d.Bb(3),d.Ec(" ",e.title," "),d.Bb(6),d.kc("ngIf",d.gc(10,9,e.loggedinUser$))("ngIfElse",t),d.Bb(7),d.Ec(" ",e.composeTitle," "),d.Bb(1),d.kc("formGroup",e.tweetFg),d.Bb(10),d.kc("disabled",!e.tweetFg.valid),d.Bb(5),d.kc("ngIf",d.gc(33,11,e.tweetsLoading$))("ngIfElse",i),d.Bb(4),d.kc("ngIf",e.editing)}},directives:[w.a,s.k,c.m,c.g,T.c,T.g,v.b,c.c,c.l,c.f,s.j],pipes:[s.b],styles:[".item[_ngcontent-%COMP%]{font-size:1rem}"]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(N)],n.i]}),t})();var A=i("UmVK");let F=(()=>{class t{}return t.\u0275mod=d.Lb({type:t}),t.\u0275inj=d.Kb({factory:function(e){return new(e||t)},providers:[],imports:[[s.c,c.o,c.h,A.a,D]]}),t})()}}]);