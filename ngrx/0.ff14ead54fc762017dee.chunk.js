webpackJsonp([0],{la3I:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=e("LMZF"),i=e("ADVA"),l=function(){var n={EntitiesOnly:0,Both:1,None:2};return n[n.EntitiesOnly]="EntitiesOnly",n[n.Both]="Both",n[n.None]="None",n}();function r(n){return function(t,e){var u={ids:e.ids.slice(),entities:Object.assign({},e.entities)},i=n(t,u);return i===l.Both?Object.assign({},e,u):i===l.EntitiesOnly?Object.assign({},e,{entities:u.entities}):e}}function o(n){function t(t,e){var u=n(t);return u in e.entities?l.None:(e.ids.push(u),e.entities[u]=t,l.Both)}function e(n,e){for(var u=!1,i=0,r=n;i<r.length;i++)u=t(r[i],e)!==l.None||u;return u?l.Both:l.None}function u(n,t){var e=n.filter(function(n){return n in t.entities}).map(function(n){return delete t.entities[n]}).length>0;return e&&(t.ids=t.ids.filter(function(n){return n in t.entities})),e?l.Both:l.None}function i(t,e){var u={};return(t=t.filter(function(n){return n.id in e.entities})).length>0?t.filter(function(t){return function(t,e,u){var i=Object.assign({},u.entities[e.id],e.changes),l=n(i),r=l!==e.id;return r&&(t[e.id]=l,delete u.entities[e.id]),u.entities[l]=i,r}(u,t,e)}).length>0?(e.ids=e.ids.map(function(n){return u[n]||n}),l.Both):l.EntitiesOnly:l.None}function o(n,t){for(var u=[],r=[],o=0,c=n;o<c.length;o++){var s=c[o];s.id in t.entities?r.push(s):u.push(Object.assign({},s.changes,{id:s.id}))}var a=i(r,t),d=e(u,t);switch(!0){case d===l.None&&a===l.None:return l.None;case d===l.Both||a===l.Both:return l.Both;default:return l.EntitiesOnly}}return{removeAll:function(n){return Object.assign({},n,{ids:[],entities:{}})},addOne:r(t),addMany:r(e),addAll:r(function(n,t){return t.ids=[],t.entities={},e(n,t),l.Both}),updateOne:r(function(n,t){return i([n],t)}),updateMany:r(i),upsertOne:r(function(n,t){return o([n],t)}),upsertMany:r(o),removeOne:r(function(n,t){return u([n],t)}),removeMany:r(u)}}var c=e("Y2RP"),s=function(n){void 0===n&&(n={});var t=Object.assign({sortComparer:!1,selectId:function(n){return n.id}},n),e=t.selectId,u=t.sortComparer,c={getInitialState:function(n){return void 0===n&&(n={}),Object.assign({ids:[],entities:{}},n)}},s={getSelectors:function(n){var t=function(n){return n.ids},e=function(n){return n.entities},u=Object(i.D)(t,e,function(n,t){return n.map(function(n){return t[n]})}),l=Object(i.D)(t,function(n){return n.length});return n?{selectIds:Object(i.D)(n,t),selectEntities:Object(i.D)(n,e),selectAll:Object(i.D)(n,u),selectTotal:Object(i.D)(n,l)}:{selectIds:t,selectEntities:e,selectAll:u,selectTotal:l}}},a=u?function(n,t){var e=o(n);function u(t,e){var u=t.filter(function(t){return!(n(t)in e.entities)});return 0===u.length?l.None:(s(u,e),l.Both)}function i(t,e){var u=[],i=t.filter(function(t){return function(t,e,u){if(!(e.id in u.entities))return!1;var i=Object.assign({},u.entities[e.id],e.changes),l=n(i);return delete u.entities[e.id],t.push(i),l!==e.id}(u,t,e)}).length>0;if(0===u.length)return l.None;var r=e.ids,o=[];return e.ids=e.ids.filter(function(n,t){return n in e.entities||(o.push(t),!1)}),s(u,e),!i&&o.every(function(n){return e.ids[n]===r[n]})?l.EntitiesOnly:l.Both}function c(n,t){for(var e=[],r=[],o=0,c=n;o<c.length;o++){var s=c[o];s.id in t.entities?r.push(s):e.push(Object.assign({},s.changes,{id:s.id}))}var a=i(r,t),d=u(e,t);switch(!0){case d===l.None&&a===l.None:return l.None;case d===l.Both||a===l.Both:return l.Both;default:return l.EntitiesOnly}}function s(e,u){e.sort(t);for(var i=[],l=0,r=0;l<e.length&&r<u.ids.length;){var o=e[l],c=n(o),s=u.ids[r];t(o,u.entities[s])<=0?(i.push(c),l++):(i.push(s),r++)}u.ids=i.concat(l<e.length?e.slice(l).map(n):u.ids.slice(r)),e.forEach(function(t,e){u.entities[n(t)]=t})}return{removeOne:e.removeOne,removeMany:e.removeMany,removeAll:e.removeAll,addOne:r(function(n,t){return u([n],t)}),updateOne:r(function(n,t){return i([n],t)}),upsertOne:r(function(n,t){return c([n],t)}),addAll:r(function(n,t){return t.entities={},t.ids=[],u(n,t),l.Both}),addMany:r(u),updateMany:r(i),upsertMany:r(c)}}(e,u):o(e);return Object.assign({selectId:e,sortComparer:u},c,s,a)}(),a=s.getInitialState({});function d(n,t){switch(void 0===n&&(n=a),t.type){case c.b.AddContact:return s.addOne(t.payload.contact,n);case c.b.UpsertContact:return s.upsertOne(t.payload.contact,n);case c.b.AddContacts:return s.addMany(t.payload.contacts,n);case c.b.UpsertContacts:return s.upsertMany(t.payload.contacts,n);case c.b.UpdateContact:return s.updateOne(t.payload.contact,n);case c.b.UpdateContacts:return s.updateMany(t.payload.contacts,n);case c.b.DeleteContact:return s.removeOne(t.payload.id,n);case c.b.DeleteContacts:return s.removeMany(t.payload.ids,n);case c.b.LoadContacts:return s.addAll(t.payload.contacts,n);case c.b.ClearContacts:return s.removeAll(n);default:return n}}var f=s.getSelectors().selectAll,p=function(){},h=e("Un6q"),v=e("GROE"),O=function(){function n(n){this.store=n}return n.prototype.ngOnInit=function(){this.contacts=this.store.pipe(Object(i.E)("contact"),Object(i.E)(f),Object(v.a)(function(n){return console.log(n),n}))},n}(),_=u.Y({encapsulation:0,styles:[[""]],data:{}});function g(n){return u._16(0,[(n()(),u._0(0,0,null,null,4,"ul",[],null,null,null,null,null)),(n()(),u._14(-1,null,["\n        "])),(n()(),u._0(2,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),u._14(3,null,["",""])),(n()(),u._14(-1,null,["\n    "]))],null,function(n,t){n(t,3,0,t.context.$implicit.username)})}function y(n){return u._16(0,[(n()(),u._0(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),u._14(-1,null,["\u5982\u679c\u4f60\u770b\u5230\u8fd9\u4e9b\u6587\u5b57\uff0c\u8bf7\u5237\u65b0\u672c\u9875\u9762"]))],null,null)}function b(n){return u._16(0,[(n()(),u._0(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u._14(-1,null,["Contact list"])),(n()(),u._14(-1,null,["\n"])),(n()(),u._0(3,0,null,null,9,"div",[],null,null,null,null,null)),(n()(),u._14(-1,null,["\n    "])),(n()(),u.V(16777216,null,null,2,null,g)),u.Z(6,802816,null,0,h.i,[u.K,u.H,u.p],{ngForOf:[0,"ngForOf"]},null),u._11(131072,h.b,[u.h]),(n()(),u._14(-1,null,["\n    "])),(n()(),u.V(16777216,null,null,2,null,y)),u.Z(10,16384,null,0,h.j,[u.K,u.H],{ngIf:[0,"ngIf"]},null),u._11(131072,h.b,[u.h]),(n()(),u._14(-1,null,["\n"])),(n()(),u._14(-1,null,["\n"]))],function(n,t){var e,i=t.component;n(t,6,0,u._15(t,6,0,u._9(t,7).transform(i.contacts))),n(t,10,0,!(null!=(e=u._15(t,10,0,u._9(t,11).transform(i.contacts)))&&e.length))},null)}var m=u.W("app-contact",O,function(n){return u._16(0,[(n()(),u._0(0,0,null,null,1,"app-contact",[],null,null,null,b,_)),u.Z(1,114688,null,0,O,[i.o],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),j=e("UHIZ"),B=function(){};e.d(t,"ContactModuleNgFactory",function(){return N});var N=u.X(p,[],function(n){return u._6([u._7(512,u.j,u.T,[[8,[m]],[3,u.j],u.u]),u._7(4608,h.l,h.k,[u.r,[2,h.p]]),u._7(512,h.c,h.c,[]),u._7(512,j.l,j.l,[[2,j.q],[2,j.k]]),u._7(512,B,B,[]),u._7(1024,i.k,function(){return[{key:"contact",reducerFactory:i.B,metaReducers:[],initialState:void 0}]},[]),u._7(1024,i.s,function(){return[d]},[]),u._7(1024,i.t,function(n){return[n]},[i.s]),u._7(1024,i.b,function(n,t,e){return[i.y(n,t,e)]},[u.o,i.s,i.t]),u._7(131584,i.p,i.p,[i.k,i.b,i.h,i.q]),u._7(512,p,p,[]),u._7(1024,j.i,function(){return[[{path:"",component:O}]]},[])])})}});