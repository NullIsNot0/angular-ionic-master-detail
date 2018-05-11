/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic,o=500,n="cubic-bezier(0.36,0.66,0.04,1)",t="opacity",r="transform",a="translateX",d="0%",l=.8;function c(e,c,i){const s="rtl"===document.dir,m=s?"-99.5%":"99.5%",f=s?"33%":"-33%",u=i.enteringEl,b=i.leavingEl,y=new e;if(y.addElement(u).duration(i.duration||o).easing(i.easing||n).beforeRemoveClass("hide-page"),b&&c){const o=new e;o.addElement(c).duringAddClass("show-decor"),y.add(o)}const p="back"===i.direction;if(u){const o=u.querySelector(":scope > ion-content"),n=u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),r=u.querySelector(":scope > ion-header > ion-toolbar"),c=new e;if(o||r||0!==n.length?(c.addElement(o),c.addElement(n)):c.addElement(u.querySelector(":scope > ion-page, :scope > ion-nav, :scope > ion-tabs")),y.add(c),p?c.beforeClearStyles([t]).fromTo(a,f,d,!0).fromTo(t,l,1,!0):c.beforeClearStyles([t]).fromTo(a,m,d,!0),r){const o=new e;o.addElement(r),y.add(o);const n=new e;n.addElement(r.querySelector("ion-title"));const l=new e;l.addElement(r.querySelectorAll("ion-buttons,[menuToggle]"));const c=new e;c.addElement(r.querySelector(".toolbar-background"));const i=new e;if(i.addElement(r.querySelector("ion-back-button")),o.add(n).add(l).add(c).add(i),n.fromTo(t,.01,1,!0),l.fromTo(t,.01,1,!0),p)n.fromTo(a,f,d,!0),i.fromTo(t,.01,1,!0);else{n.fromTo(a,m,d,!0),c.beforeClearStyles([t]).fromTo(t,.01,1,!0),i.fromTo(t,.01,1,!0);const l=new e;l.addElement(r.querySelector("ion-back-button .button-text")).fromTo(a,s?"-100px":"100px","0px"),o.add(l)}}}if(b){const o=new e;o.addElement(b.querySelector(":scope > ion-content")),o.addElement(b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),y.add(o),p?o.beforeClearStyles([t]).fromTo(a,d,s?"-100%":"100%"):o.fromTo(a,d,f,!0).fromTo(t,1,l,!0);const n=b.querySelector(":scope > ion-header > ion-toolbar");if(n){const o=new e;o.addElement(n);const l=new e;l.addElement(n.querySelector("ion-title"));const c=new e;c.addElement(n.querySelectorAll("ion-buttons,[menuToggle]"));const i=new e;i.addElement(n.querySelector(".toolbar-background"));const m=new e;if(m.addElement(n.querySelector("ion-back-button")),o.add(l).add(c).add(m).add(i),y.add(o),m.fromTo(t,.99,0,!0),l.fromTo(t,.99,0,!0),c.fromTo(t,.99,0,!0),p){l.fromTo(a,d,s?"-100%":"100%"),i.beforeClearStyles([t]).fromTo(t,1,.01,!0);const r=new e;r.addElement(n.querySelector("ion-back-button .button-text")),r.fromTo(a,d,(s?-124:124)+"px"),o.add(r)}else l.fromTo(a,d,f).afterClearStyles([r]),m.afterClearStyles([t]),l.afterClearStyles([t]),c.afterClearStyles([t])}}return Promise.resolve(y)}const i="translateY",s="40px",m="0px";function f(e,o,n){const t=n.enteringEl,r=n.leavingEl,a=u(t),d=new e;d.addElement(a).beforeRemoveClass("hide-page");const l="back"===n.direction;if(t){l?d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo(i,s,m,!0).fromTo("opacity",.01,1,!0);const o=a.querySelector("ion-toolbar");if(o){const n=new e;n.addElement(o),d.add(n)}}if(r&&l){d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const o=new e;o.addElement(u(r)).fromTo(i,m,s).fromTo("opacity",1,0),d.add(o)}return Promise.resolve(d)}function u(e){if(e.classList.contains("ion-page"))return e;return e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}export{c as a,f as b};