/*! oui - v0.1 - 2013-09-06 3:15:44 PM
* Copyright (c) 2013 goto100; Licensed  */
KISSY.add("components/oui/0.1/index",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){}var o={options:f,accessors:g,data:h,events:i,promise:j,factory:k,time:l,keyboard:m},p=d.Class,q=new p(d.Type,{__new__:function(a,b,c,e){var f,g={};return e.uses?(f=[],e.uses.forEach(function(a){f.push(new a)}),e.handlers=f):f=c.handlers,e.meta=g,e.__constructed=!1,f.forEach(function(d){d.handleNew(a,b,c,e)}),d.Type.__new__(a,b,c,e)},initialize:function(a,b,c){var d=this;d.__constructed=!0,d.handlers&&Object.keys(c).forEach(function(a){var b=c[a];d.handlers.forEach(function(c){c.handleMember(d,a,b)})})},__setattr__:function(a,b){var c=this;d.Type.prototype.__setattr__.call(c,a,b),c.__constructed&&c.handlers&&c.handlers.forEach(function(d){d.handleMember(c,a,b)})}});n.prototype=b.Target;var r=new p({__metaclass__:q,__mixins__:[n],uses:[f.OptionsHandler,i.BindEventHandler,i.SubEventHandler,h.DataHandler,k.FactoryHandler],initialize:function(a){this.node=a,this.handlers.forEach(function(a){a.handleInitialize(this)},this)},render:j.promise(function(b,d,f){var g=a.one(this.__properties__[b].options["template-from"]),h=g.html(),i=e.to_html(h,d);g?c.insertBefore(a.one(i),g):this.node.append(i),f()})}),s={};return s.Component=r,s.option=f.option,s.define1=g.define1,s.define=g.define,s.data=h.data,s.schemas=o,s},{requires:["event","dom","gallery/oop/0.1/index","brix/gallery/mu/index","./schemas/options","./schemas/accessors","./schemas/data","./schemas/events","./schemas/promise","./schemas/factory","./schemas/time","./schemas/keyboard"]});
