define("router",["views/index/IndexView","views/submit/SubmitView","views/realestate/RealestateView"],function(e,t,n){var r=Backbone.Router.extend({routes:{"":"index",places:"index","real-estate/:category/:name":"realestate",submit:"submit"},index:function(){var t=new e({collection:City._PlacesCollections})},submit:function(){var e=new t;e.render()},realestate:function(e,t){var r=new n({collection:City._PlacesCollections,category:e,name:t})}});return r});