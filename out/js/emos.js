(function(bl,t){var EMOS_VERSION="c52.7",bX="emos3",l=bl[bX],bp={};if(!l){bl[bX]=l={}}if(!l.defaults){l.defaults={}}var DFLTS={};var bM=k("JUNK_SIZE",1600),V=k("CLIENT_COOKIE_LIFETIME",30),aa=k("COOKIENAME_SESSION_ID","emos_jcsid"),br=k("COOKIENAME_VISITOR_ID","emos_jcvid"),aJ=k("COOKIENAME_CAMPAIGN","emos_jckamp"),v=k("COOKIENAME_POSTVIEWCAMPAIGN","emos_postview"),E=k("COOKIENAME_POSTVIEW",null),ab=k("COOKIE_DNT","emos_optout"),aw=k("COOKIE_DOMAIN",null),bQ=k("TRACK_FIRSTPARTY",true),aA=k("TRACK_POSTCONVERSION",true),bK=k("CLIENT_KEY",'000029d0-361bdcb1-94fa-36b5-a8ef-1a7ebd1a5dce'),h=k("TRACK_THIRD_PARTY",true),x=k("SAMPLING_RATE",1),af=k("BEST_PRODUCTS_COOKIE",false),bm=k("PRODUCT_ID_IN_EC_EVENT",1),D=k("COOKIENAME_BEST_PRODUCTS","emos_best_products"),aV=k("BEST_PRODUCTS_COOKIE_LIFETIME",2592000),bd=k("PMAP",{}),at=k("P_MAP",{}),ac=k("PARAM_TO_PROP",{'emosmarker':'marker','ecmUid':'newsuid'}),b1=k("MC_COOKIE",{kw:30,cp:30,nl:30}),n=k("ADD_COOKIE_PARAMS",{all:["empid","empcode","empcode2"]}),d=k("ADD_COOKIE_PROPS",{}),bN=k("TIMEOUT",6000),bj=k("DO_NOT_TRACK",false),bk=k("JSID",false),a5=k("SEO_BLACK",[]),bs=k("GCLID",true),a0=k("VCL",730),z=k("URL",'www.econda-monitor.de'),q=k("SM","c"),aX=k("PAGEID_FROM_URL",false),bf=k("SCROLL",-1),p="emos_clickmonitor",bx="https://monitor.econda-monitor.de/click",aS=0,ah=null,F=0,ba=0,bc=0,aW=0,aK,ad,bW=0,J,bo=[],L=false,a6=null,bv=[],be=[],B=false;try{if(bl.sessionStorage&&bl.sessionStorage.length>=0){B=true}}catch(bw){}var aD=false,bV,az,ap=null,o=false,H=-1,G=-1,bP=65536,bO=65536,bi=false;function P(i){var e=bA(i);if(e){ap=e.substring(0,254);i.pageId=ap}if(i.pageid){delete i.pageid}}function bA(e){if(l.pageId){return l.pageId}if(e.pageId){return e.pageId}if(e.pageid){return e.pageid}if(ap){return ap}if(aX){var i=bl.location;return i.protocol+"//"+i.host+i.pathname}return null}function ai(){if(l.pageId){return l.pageId}return ap}function aQ(e){return parseInt(e,10)}function k(e,b7){var b6=l[e];var i=a3(b6)?b7:b6;bp[e]=i;return i}var bn=bl.encodeURIComponent;function b2(i){try{return bl.decodeURIComponent(i.replace(/\+/g,"%20"))}catch(b6){try{return bl.unescape(i)}catch(b7){return i}}}function by(b7,b6,i){if(b7.addEventListener){b7.addEventListener(b6,i,true)}else{if(b7.attachEvent){b7.attachEvent("on"+b6,i)}else{var e=b7["on"+b6];if(!e){b7["on"+b6]=i}else{b7["on"+b6]=function(b8){i(b8);e(b8)}}}}}function aU(cd,cc,b7){var b6=cc.cookie;var e=null;var ce=null;if(b6){if(cc.emcl){e=aQ(cc.emcl)}if(!e){e=V}e=e*86400;ce=a9(b6)}a1(cd);var ca=c(bE(ag(r(cd))));var cb=Math.floor(ca.length/bM)+1;var b8=[];for(var b9=0;b9<cb;b9++){b8[b9]={};b8[b9].v="4";b8[b9].emrid=b7;if(bQ){b8[b9].emsid=F;b8[b9].emvid=bc}if(b9===0&&h&&aA){if(b6){b8[b9].emcl=e;b8[b9].emcc=ce}}b8[b9].emnc=cb;b8[b9].emtn=b9+1;b8[b9].emhost=location.hostname;if(h){b8[b9].tpct=1;if(!aA){b8[b9].tpcv=0}if(a0!==730){b8[b9].vclt=a0}}b8[b9].d=ca.substr(b9*bM,bM)}return b8}function aE(){if(l.doNotTrack){return true}if(bj){return true}if(ab){var e=bY(ab);if(e==="1"){return true}}return false}function ar(cb){if(!af){return}var b9=cb.ec_Event;if(!aG(b9)||b9.length===0){return}var b8=[];for(var ca=0;ca<b9.length&&b8.length<5;ca++){var cc=b9[ca];if(aR(cc)){var b7=(S(cc))?cc[bm]:cc.pid;if(b7){b8.push(bn(b7))}}}if(b8.length===0){return}if(b8.length<5){var e=R();if(e){for(var b6=0;b6<e.length&&b8.length<5;b6++){b8.push(e[b6])}}}b5(D,b8.join(":"),aV)}function R(){var e=bY(D);if(e&&e.length>0){return e.split(":")}return null}function a(e,i){var b6=e[i];return a3(b6)?l[i]:b6}function N(i){var b6=a(i,"customReferrer");if(!a3(b6)){return b6}try{return top.document.referrer}catch(b7){return t.referrer}}var I=null;try{I=top.location.search}catch(bw){I=location.search}function bG(b7){var cb=a(b7,"customParam");if(cb){return cb}var e=aC(I,true);for(var cc in bd){var b6=bd[cc];var ca=e[b6];if(ca){e[cc]=ca;delete e[b6]}else{delete e[cc]}}for(var b8 in at){var i=at[b8];if(i){var b9=e[b8];if(b9){e[i]=b9}}else{if(i===null){delete e[b8]}}}return e}function bH(b6){var b8=screen.width+"x"+screen.height;var e=bl.devicePixelRatio;if(av(e)&&e>1){b8=b8+"|"+Math.round(e*100)/100}var b7=bl.orientation;if(av(b7)&&b7!==0){b8=b8+"o"+b7}b6.swsh=b8;b6.tz=new Date().getTimezoneOffset()/60;var i=bl.performance;if(aR(i)){var b9=i.navigation;if(aR(b9)){if(av(b9.type)&&b9.type<255){b6.nt=b9.type}}}b6.emosV=EMOS_VERSION}function ao(b9,b6){try{if(b9===null||b9.length===0){return""}if(b6>=0){var i=b0(b9,"/",b6,0);if(i>=0){b9=b9.substring(0,i)}}var ca=b9.indexOf("?");if(ca>=0){b9=b9.substring(0,ca)}var b8=b9.indexOf("#");if(b8>=0){b9=b9.substring(0,b8)}}catch(b7){}return b9.substring(0,127)}function b0(b8,b7,b6,i){var e=b8.indexOf(b7,i);if(b6===1){return e}else{return b0(b8,b7,b6-1,e+b7.length)}}function s(ch){try{var cg=ai();if(!cg||!al()||!bK||!aD||!ah||aE()){return}if(!ch){ch=bl.event}var cd={};if((ch.which&&ch.which!=1)||(!ch.which&&ch.button!=1)){return}var cl=ch.pageX;var b7=ch.pageY;var cn=t.documentElement&&t.documentElement.clientHeight!==0?t.documentElement:t.body;if(isNaN(cl)||isNaN(b7)){cl=ch.clientX+((isNaN(bl.pageXOffset)?cn.scrollLeft:bl.pageXOffset));b7=ch.clientY+((isNaN(bl.pageYOffset)?cn.scrollTop:bl.pageYOffset))}if(isNaN(cl)||isNaN(b7)){return}var b6=ch.target?ch.target:ch.srcElement;while(b6!==null&&b6.nodeType===3){b6=b6.parentNode}if(b6.nodeType!==1){return}if(!b6.nodeName){return}var cm=b6.nodeName.toLowerCase();if(cm=="base"){return}if(cm=="map"){b6=bU(b6,cl,b7)}else{if(cm=="area"){b6=bU(b6.parentNode,cl,b7)}}if(cm=="option"){b6=b6.parentNode;if(b6.nodeName.toLowerCase()=="optgroup"){b6=b6.parentNode}}if(typeof b6.getBoundingClientRect=="function"){if(b6==t.body.parentNode){b6=t.body}}else{if(b6==t.body){b6=t.body.parentNode}}var cc=new Date().getTime();var b8=Math.floor((cc-az)/1000);var b9=Math.floor((cc-J)/1000);az=cc;if(t.body.parentNode==b6||t.body==b6){var ck,cj;if(bl.innerHeight){ck=bl.innerWidth-17;cj=bl.innerHeight-17}else{ck=cn.clientWidth;cj=cn.clientHeight}if(ck<ch.clientX||cj<ch.clientY){return}}var ca=K(b6);if(!ca){return}var i=cl-ca[0];var ce=b7-ca[1];var cb=bV++;var cf=O(b6).toLowerCase();cd.click=[[cl,b7,b9,i,ce,cb,b8,cf,x]];cd.plReqId=ah;if(cg!==ap){cd.pageId=cg}cd.emosV=EMOS_VERSION;aY(cd);Z(cd,{},aI())}catch(ci){}}function al(){if(!a3(l.trackClicks)){return l.trackClicks}return true}function aY(e){if(al()&&aD&&bf){C();if(bi){e.scroll=[bP,bO,H,G,x];bi=false;return true}}return false}function C(){if(!aD){return}var e,b8;if(bl.pageXOffset!==undefined){e=bl.pageXOffset;b8=bl.pageYOffset}else{var i=t.compatMode!="BackCompat"?t.documentElement:t.body;e=i.scrollLeft;b8=i.scrollTop}var b7=e+bl.innerWidth;var b6=b8+bl.innerHeight;if(b7>H){H=b7;bi=true}if(b6>G){G=b6;bi=true}if(b8<bO){bO=b8;bi=true}if(e<bP){bP=e;bi=true}}function b(e){var i={};if(aL(i)){if(e){i.noimg=true}bq(i,{})}}function aL(b6){var e=ai();if(!e){return false}var i=aY(b6);if(i){if(e!==ap){b6.pageId=e}return true}return false}function O(i){var b6=i.parentNode;if(!b6||b6==t){return"/"+i.nodeName}var e=O(b6);return e+"/"+i.nodeName+"["+j(b6,i)+"]"}function j(b8,b7){var e=b8.childNodes;var b9=0;for(var b6=0;b6<e.length;b6++){if(e[b6]==b7){return b9}else{if(e[b6].nodeName==b7.nodeName){b9++}}}return-1}function bU(b9,e,b6){var cb="#"+b9.getAttribute("name");var cc=t.getElementsByTagName("img");for(var b8=0;b8<cc.length;b8++){var b7=cc[b8];if(b7.getAttribute("usemap")==cb){var ca=K(b7);if(ca){if(e>=ca[0]&&b6>=ca[1]&&e<=ca[0]+b7.clientWidth&&b6<=ca[1]+b7.clientHeight){return b7}}}}return t.body.parentNode}function aF(b6,e){P(b6);var i=location.search.indexOf("clickmonitor=econda")>=0||location.hash.indexOf("clickmonitor_econda")>=0;if(i){a8(p,"true")}if(i||bY(p)=="true"){L=false;aD=false;aB();return}if(e.cookie){aj(d,b6,e.cookie.source,e.cookie)}J=new Date().getTime();ah=aI();az=J;bV=0;bF(b6,e);if(!L){return}bz();aL(b6);ar(b6);Z(b6,e,ah)}function bz(){if(!o&&al()&&aD){o=true;by(t,"mousedown",s);if(bf){bl.setInterval(C,1000);if(bf>0){bl.setInterval(function(){b(false)},bf*1000)}}}}function aB(){var e=bl.emosClickmonitor;if(e){e.pageId=ai()}else{e=bl.emosClickmonitor={};e.cookieName=p;e.cookieDomain=aw;e.urlClickmonitor=bx;e.ckey=bK;e.pageId=ai();am()}}function am(){var cd=t.documentElement;var b6=cd.namespaceURI;var ca=cd.prefix;var b8=ca?ca+":head":"head";var cb=cd.childNodes;var ce=null;for(var b9=0;b9<cb.length;b9++){var cc=cb[b9];if(cc.nodeType==1&&cc.nodeName.toLowerCase()==b8){ce=cc;break}}if(!ce){ce=b6?t.createElementNS(b6,b8):t.createElement(b8);cd.insertBefore(ce,cd.firstChild)}var e=ca?ca+":script":"script";var b7=b6?t.createElementNS(b6,e):t.createElement(e);b7.setAttribute("type","text/javascript");b7.setAttribute("src",bx+"/scripts/click.js");ce.appendChild(b7)}function Z(ca,e,cb){if(bl.console&&bl.console.log&&location.search.indexOf("emosdebug=yxcvbnm")>=0){bl.console.log(ca)}var b9=aU(ca,e,cb);for(var b8=0;b8<b9.length;b8++){aS=aS+1;bR(b9[b8],e,aS)}if(e.delay){var b6=aQ(e.delay);if(isFinite(b6)&&b6>0&&b6<1000){var b7=new Date().getTime()+b6;while(new Date().getTime()<b7){}}}}function K(b6){if(typeof b6.getBoundingClientRect=="function"){var i;var b8;if(av(bl.pageXOffset)){i=bl.pageXOffset;b8=bl.pageYOffset}else{var e=t.compatMode!="BackCompat"?t.documentElement:t.body;i=e.scrollLeft;b8=e.scrollTop}var b7=b6.getBoundingClientRect();if(b7===null){return null}if(b7.top===0&&b7.right===0&&b7.bottom===0&&b7.left===0){return null}return[i+aQ(b7.left),b8+aQ(b7.top)]}return bT(b6)}function bT(e){if(e.offsetParent!==null){var b6=bT(e.offsetParent);if(!b6){return null}b6[0]+=e.offsetLeft;b6[1]+=e.offsetTop;return b6}else{var i=e.nodeName.toLowerCase();if(i=="html"||i=="body"){return[0,0]}else{return null}}}function m(){var i=bK.indexOf("-");var e;var b6;if(i===8){e=bK.substring(0,8);b6=bK.substring(9)}else{e="00000000";b6=bK}return((location.protocol=="http:")?"http://":"https://")+z+"/l/"+e+"/t/"+b6+"?"}var b3="emosTransmit",b4="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function bR(ca,b8,b7){var i=a9(ca);var cc=b3+b7;if(B){try{var cd=bl.sessionStorage;cd.setItem(cc,i)}catch(b9){}}else{a8(cc,i)}if(!b8.noimg){var b6=new Image();var cb=bl.setTimeout(function(){b6.src=b4},bN);bo[b7]=b6;b6.onload=function(){bI(cc,b7,cb)};b6.src=m()+i}}function bI(b8,b7,i){try{if(B){bl.sessionStorage.removeItem(b8)}else{g(b8)}}catch(b6){}bo[b7]=null;bl.clearTimeout(i)}function a9(i){var b6="";for(var b7 in i){var e=typeof i[b7];if(e==="string"||e==="boolean"||e==="number"){if(b6!==""){b6+="&"}b6+=b7+"="+bn(i[b7])}}return b6}function ay(b7){var b8=b7.split("&");var i={};for(var e=0;e<b8.length;e++){var b6=b8[e].split("=");i[b6[0]]=b2(b6[1])}return i}function S(e){return Object.prototype.toString.apply(e)==="[object Array]"}function aG(e){return aR(e)&&S(e)}function aR(e){return e!==null&&typeof e==="object"}function a3(e){return typeof e==="undefined"}function av(e){return typeof e==="number"}function a1(e){for(var b6 in e){var i=e[b6];if(aG(i)&&i.length>1){w(i,b6,e)}}}function w(ca,cb,cd){var cc={};var ce=false;for(var b9=0;b9<ca.length;b9++){var cf=ca[b9];if(typeof cf==="object"&&Object.prototype.toString.apply(cf)!="[object Array]"){bS(cf,cc);ce=true}else{if(cf===null){}else{return}}}if(!ce){return}for(var b8=0;b8<ca.length;b8++){var e=ca[b8];if(e!==null){bL(e,cc)}}var b6=r(ca).length;var b7=r(cc).length;if(b7<b6){cd[cb]=cc}}function bS(e,i){for(var b6 in e){if(!i[b6]){i[b6]=[]}}}function bL(i,b6){for(var b8 in b6){var b7=i[b8];var e=b6[b8];if(b7===undefined){e.push(null)}else{e.push(b7)}}}function r(ca){switch(typeof ca){case"string":return ak(ca);case"number":return isFinite(ca)?String(ca):"null";case"boolean":case"null":return String(ca);case"object":if(!ca){return"null"}var b7=[];if(S(ca)){var b9=ca.length;for(var b8=0;b8<b9;b8++){b7[b8]=r(ca[b8])||"null"}return b7.length===0?"[]":"["+b7.join(",")+"]"}for(var b6 in ca){if(Object.prototype.hasOwnProperty.call(ca,b6)){var e=r(ca[b6]);if(e){b7.push(ak(b6)+":"+e)}}}return b7.length===0?"{}":"{"+b7.join(",")+"}"}return undefined}var bh=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,W={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function ak(e){if(bh.test(e)){return'"'+e.replace(bh,function(i){var b6=W[i];return typeof b6==="string"?b6:"\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4)})+'"'}else{return'"'+e+'"'}}function bu(){var ca=b3.length;var cj=[];if(B){try{var ci=bl.sessionStorage;for(var cc=0;cc<ci.length;cc++){var cg=ci.key(cc);if(cg.substr(0,ca)==b3){var b6=Number(cg.substr(ca));var b7=ci.getItem(cg);if(b7){if(b6>=aS){aS=b6+1}cj.push([b6,b7])}ci.removeItem(cg)}}}catch(ce){}}else{var ch=t.cookie.split(";");for(var cb=0;cb<ch.length;cb++){var b9=ch[cb];if(b9.charAt(0)==" "){b9=b9.substr(1)}if(b9.substr(0,ca)==b3){var cf=b9.indexOf("=");if(cf<0){continue}var cd=Number(b9.substring(ca,cf));var b8=b9.substring(cf+1);g(b3+cd);if(b8){if(cd>=aS){aS=cd+1}cj.push([cd,b8])}}}}bg(cj)}function bg(b7){if(b7.length>0){var b6=b7.pop();var e=b6[0];var i=new Image();var b8=bl.setTimeout(function(){i.onload=function(){};i.src=b4},bN);bo[e]=i;i.onload=function(){aZ(e,b7,b8)};i.src=m()+b6[1]}}function aZ(b6,e,i){bo[b6]=null;bl.clearTimeout(i);bg(e)}function bF(ca,b7){if(!bQ){L=true;aD=true;return}var cd=0;if(ca.billing&&ca.billing.length>0&&ca.billing[0].length>3){var ci=Number(ca.billing[0][3]);if(!isNaN(ci)){cd=Math.round(ci*100)}}var b9=true;var b8=bY(aa);if(b8&&b8.length>0){var ck=b8.split(":");if(ck.length==4){F=ck[0];ba=aQ(ck[1])+1;if(!isNaN(ba)){b9=false;a8(aa,F+":"+ba+":"+ah+":"+J)}}}if(b9){var e=aI();var ch=e+":1:"+ah+":"+J;a8(aa,ch);var cf=bY(aa);if(ch==cf){F=e;ba=1;b9=true}else{F="NULL";ba=-1;b9=false}}var ce;var i=bY(br);if(i&&i.length>0){var cj=i.split(":");if(cj.length==5||cj.length==7){bc=cj[0];aW=aQ(cj[1])+((b9)?1:0);var cg=cj[2];var cc=aQ(cj[3]);if(b9){aK=cg;ad=J-cc;cc=J}else{aK=null;ad=null}bW=cd;var b6=aQ(cj[4]);if(cj.length==7){ce=("true"==cj[5]);var cn=aQ(cj[6]);if(cn!=x){ce=Math.random()*x<=1}}else{ce=Math.random()*x<=1}aM(ce);if(!isNaN(b6)){bW+=b6}if(!isNaN(aW)&&bc&&bc!="undefined"){b5(br,bc+":"+aW+":"+F+":"+cc+":"+bW+":"+ce+":"+x,a0*86400);return}}}var cl;if(a6){cl=a6;ca.t=1}else{cl=F;if(bk&&!hasAsync){ca.t=2}}bW=cd;ce=Math.random()*x<=1;aM(ce);var cb=cl+":1:"+F+":"+J+":"+bW+":"+ce+":"+x;b5(br,cb,a0*86400);var cm=bY(br);if(cb==cm){bc=cl;aW=1}else{bc="NULL";aW=-1}}function aM(e){if(q!=="p"){L=true;aD=e}else{L=e;aD=e}}function bY(b9){if(!b9){return null}var b6=t.cookie.split(";");for(var b8=0;b8<b6.length;b8++){var b7=b6[b8];if(b7.charAt(0)==" "){b7=b7.substr(1)}var e=b9+"=";if(b7.substr(0,e.length)==e){return b7.substring(e.length)}}return null}function a8(e,i){b5(e,i,null)}function b5(i,b7,e){var b6=i+"="+b7+";path=/;";if(aw){b6=b6+"domain="+aw+";"}if(e){b6=b6+"max-age="+e+";expires="+new Date(new Date().getTime()+e*1000).toGMTString()+";"}t.cookie=b6}function g(e){var i=e+"=;path=/;max-age=0;";if(aw){i=i+"domain="+aw+";"}t.cookie=i}function aI(){var b7=new Date().getTime();var cd=b7&4294967295;var cc=(b7/4294967296)&4294967295;var cb=[];cb.push(cc>>>8&255);cb.push(cc&255);cb.push(cd>>>24);cb.push(cd>>>16&255);cb.push(cd>>>8&255);cb.push(cd&255);for(var b9=0;b9<9;b9++){var e=65536*Math.random();cb.push(e>>>8&255);cb.push(e&255)}var b6=navigator.userAgent;if(b6){for(var b8=0;b8<b6.length;b8++){var ca=6+(b8%18);cb[ca]=(cb[ca]^b6.charCodeAt(b8))&255}}return c(cb)}function bE(b8){var b7=0;var e=b8.length;for(var b6=0;b6<e;b6++){b7+=b8[b6]}b8.push((b7&65280)>>8);b8.push(b7&255);return b8}function ag(e){var i=[];for(var b7=0;b7<e.length;b7++){var b6=e.charCodeAt(b7);if(b6<128){if(b6>=32||b6==9){i.push(b6)}}else{if((b6>127)&&(b6<2048)){i.push((b6>>6)|192);i.push((b6&63)|128)}else{i.push((b6>>12)|224);i.push(((b6>>6)&63)|128);i.push((b6&63)|128)}}}return i}var ae="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*_";function c(ca){var b7=ae,b8=[],b6=0,e=ca.length;if((e%3)==1){ca.push(0);ca.push(0)}else{if((e%3)==2){ca.push(0)}}var b9=ca.length;while(b6<b9){b8.push(b7.charAt(ca[b6]>>2));b8.push(b7.charAt(((ca[b6]&3)<<4)|(ca[b6+1]>>4)));b8.push(b7.charAt(((ca[b6+1]&15)<<2)|(ca[b6+2]>>6)));b8.push(b7.charAt(ca[b6+2]&63));b6+=3}if((e%3)==1){b8[b8.length-1]=b8[b8.length-2]=""}if((e%3)==2){b8[b8.length-1]=""}return b8.join("")}function a4(ce,cc,b9){var cg=N(cc);var b7=ao(cg,3);var i=aC(cg,false);if(b7){ce.ref=b7}for(var ca in ac){if(b9[ca]){ce[ac[ca]]=b9[ca]}}if(cc.cookie||ce.source){return}if(!a(cc,"customMktDetect")){var ch=a(cc,"customCampaign");var cf=a(cc,"customSource");if(b9.refID){ch=b9.refID;if(b9.emsrc){cf=b9.emsrc}}if(ch){if(cf){if(cf=="kw"){b9.adword=ch}else{if(cf=="nl"){b9.newsletter=ch}else{b9.campaign=ch}}}else{cf="cp";b9.campaign=ch}}if(b9.campaign){var e=cf?cf:"cp";if(cf&&!b1[cf]){b1[cf]=b1.cp}var b6=aP(ce,cc,b9,e);b6.campaign=b9.campaign;if(b7){b6.ref=b7}aO(i,b6);return}if(b9.newsletter||b9.ecmId){var cd=aP(ce,cc,b9,"nl");if(b9.newsletter){cd.news=b9.newsletter}if(b9.ecmId){cd.newsmid=b9.ecmId}return}if(b9.adword||(bs&&b9.gclid)){var cb=aP(ce,cc,b9,"kw");var b8=b9.adword;if(b9.gclid){if(!b8){b8="google auto tagging"}cb.gclid=b9.gclid}if(b8){cb.adword=b8}if(b7){cb.ref=b7}aO(i,cb);a7(cb,null,true,b7,b9,i);return}}if(cg===null||cg.length===0){if(f(ce)){return}aP(ce,cc,b9,"direct");return}if(bD(b7)){if(f(ce)){return}ce.ref=ao(cg,-1);ce.source="intern";return}if(a7(ce,cc,false,b7,b9,i)){return}aP(ce,cc,b9,"ref").ref=b7}function aO(b6,i){var e=b6.url?b2(b6.url).substring(0,127):null;if(e){i.refUrl=e}}function aP(b6,e,b8,b7){if(b1[b7]){if(!e.cookie){e.cookie={}}var i=e.cookie;e.emcl=b1[b7];aj(n,b8,b7,i);i.source=b7;return i}else{b6.source=b7;return b6}}function aj(e,b6,b7,i){if(e.all){aT(e.all,b6,i)}if(e[b7]){aT(e[b7],b6,i)}}function aT(b9,b8,b7){for(var b6=0;b6<b9.length;b6++){var e=b8[b9[b6]];if(e){b7[b9[b6]]=e}}}function f(i){var e=bY(v);if(e&&e.length>0){i.source="cp";i.campaign=b2(e);return true}return false}function au(b6,i){if(i.cookie&&!(h&&aA)){Q(b6,i.cookie);b6.postconv="0"}if(bQ&&aA){if(i.cookie){var b8=null;if(i.emcl){b8=aQ(i.emcl)}if(!b8){b8=V}b8=b8*86400;b5(aJ,a9(i.cookie)+"&ccbt="+Math.floor(new Date().getTime()/1000),b8)}else{var b7=bY(aJ);if(b7&&b7.length>0){var e=ay(b7);b6.postconv="1";e.ccbtd=Math.floor(new Date().getTime()/1000)-aQ(e.ccbt);delete e.ccbt;Q(b6,e)}}}}function M(){var cb=bY(E);if(cb&&cb.length>0){var b9=new Date().getTime();cb=b2(cb);var b6=[];var e=cb.split("@");for(var b7=0;b7<e.length;b7++){if(e[b7]){var b8=ay(e[b7]);var ca=aQ(b8.t);if(isFinite(ca)){b8.td=b9-ca;delete b8.t}b6.push(a9(b8))}}return b6.join("@")}return null}function bD(e){return(e.split("/")[2]==location.host)}var aq=[["q",null,"ie","start",1],["p",null,null,"b",1],["su",null,null,"pageIndex",10],["query",null,null],["qry_str",null,null],["begriff",null,null],["words",null,null],["encquery",null,null],["qt",null,null],["terms",null,null],["text",/yandex\./g,null],["wd",/\.baidu\./g,null],["w",/\.soso\./g,null],["searchfor",/\.ask\./g,null],["searchfor",/\.ask-tb\./g,null],[null,/www\.google\./g,null],[null,/images\.google\./g,null],[null,/duckduckgo\./g,null],[null,/ixquick\./g,null],[null,/startpage\./g,null],[null,/search\.yahoo\.com/g,null],[null,/googlequicksearchbox/g,null]];function a7(ce,cc,cb,b7,ci,e){if(a5){for(var b9=0;b9<a5.length;b9++){if(b7.indexOf(a5[b9])>=0){return false}}}for(var ca=0;ca<aq.length;ca++){var b8=aq[ca];var b6=b8[1];if(b6===null||b7.search(b6)>=0){var cf=(b8[0])?e[b8[0]]:null;if(!cf&&b6!==null){cf="not provided"}if(cf){var cd=cb?ce:aP(ce,cc,ci,"suma");var ch=b8[2];if(ch&&e[ch]){cd.smqpe=e[ch];cd.smqp=cf}else{cd.smqp=b2(cf)}if(b8.length==5&&e[b8[3]]){var cg=aQ(e[b8[3]]);if(!isNaN(cg)){cd.smstart=cg*b8[4]}}if(!cb&&b7){cd.ref=b7}return true}}}return false}function U(b7,b9,e){var b6=aN(b9,e);if(b6){if(!b6[3]){var i=b7.ec_Event;if(aG(i)&&i.length>0){var b8=i[0];if(aR(b8)){b6[3]=(S(b8))?b8[bm]:b8.pid}}}b7.crossData=[b6]}}function aN(b7,e){var i=a(e,"crossData");if(aG(i)&&typeof i[0]=="string"){return i}var b6=a(e,"emcs0");if(b6){return[b6,a(e,"emcs1"),a(e,"emcs2"),a(e,"emcs3")]}if(b7.emcs0){return[b7.emcs0,b7.emcs1,b7.emcs2,b7.emcs3]}return null}var y=["uk","tr","br"];var aH={at:["co"],jp:["co","ac","go","ne","or"],au:["com","org","net","info"]};function bJ(i,b6){if(Y(y,i)){return 3}var e=aH[i];if(e&&Y(e,b6)){return 3}return 2}function Y(b7,b6){for(var e=0;e<b7.length;e++){if(b7[e]==b6){return true}}return false}function ax(){if(aw===null){aw=a2(bl.location.hostname)}}function a2(b8){var e=b8.split(".");var ca=e[e.length-1];var cb=e[e.length-2];var b7=bJ(ca,cb);if(isNaN(aQ(ca))&&e.length>=b7){var b9="";for(var b6=e.length-b7;b6<e.length;b6++){b9+=("."+e[b6])}return b9}else{return b8}}function Q(b6,i){for(var e in i){b6[e]=i[e]}}function bq(i,e){if(!ah){bv.push([i,e]);return}i.emosV=EMOS_VERSION;i.plReqId=ah;Z(i,e,aI())}function bB(){var e={};Q(e,DFLTS);if(l.defaults){Q(e,l.defaults)}return e}function bC(b6){if(!bK){return true}if(aE()){return true}var cb=b6.config;if(cb){delete b6.config}else{cb={}}if(aG(l.plugins)){var cf=l.plugins;for(var b9=0;b9<cf.length;b9++){try{cf[b9](b6,bp,cb)}catch(cd){}}}if((b6.type&&b6.type=="event")||(cb.type&&cb.type=="event")){if(b6.type){delete b6.type}aL(b6);bq(b6,cb);return true}var ce=bB();Q(ce,b6);var b7=bG(cb);a4(ce,cb,b7);au(ce,cb);var ca=M();if(ca){ce.pvdata=ca}U(ce,b7,cb);Q(ce,b6);if(!ce.content){ce.content="HTML-Title/"+t.title}bH(ce);aF(ce,cb);if(aG(cb.cb)){var cc=cb.cb;for(var b8=0;b8<cc.length;b8++){try{cc[b8](bc,F,ah)}catch(cd){}}}an();return true}function an(){for(var e=0;e<bv.length;e++){var i=bv[e];bq(i[0],i[1])}}var T=function(e){be.push(e)};l.send=function(e){return T(e)};if(aG(l.stored)){for(var bt=0;bt<l.stored.length;bt++){T(l.stored[bt])}delete l.stored}function u(){if(bk&&!a6){var e=t.getElementsByTagName("script");var b7=e[e.length-1];var b6=("async"in b7);if(b6&&!bY(br)){var i=t.createElement("script");i.type="text/javascript";i.async=true;l.initWithVid=function(b8){a6=b8;bb()};i.src="https://"+z+"/jsid/"+bX;b7.parentNode.insertBefore(i,b7)}else{bb()}}else{bb()}}function X(){return t.visibilityState}function bb(){if(X()==="prerender"){t.addEventListener("visibilitychange",function(){var e=X();if(e!=="prerender"&&e!=="unloaded"){A()}},false)}else{A()}}function A(){T=bC;for(var e=0;e<be.length;e++){T(be[e])}}function aC(cc,b7){var cb={};if(!cc){return cb}var ca=cc.indexOf("?");if(ca>=0){cc=cc.substr(ca+1)}var b8=cc.split("&");for(var b6=0;b6<b8.length;b6++){var b9=b8[b6].split("=");var e=b9[0];if(e){if(b9[1]){if(b7){cb[e]=b2(b9[1])}else{cb[e]=b9[1]}}else{cb[e]=""}}}return cb}function bZ(){ax();bu();u()}bZ()})(window,document);(function(){var PPF_VERSION="4",f=e("PPF_SR",20),d=e("PPF_CUTOFF",60);function e(n,m){var k=window.emos3;if(c(k)){return m}var l=k[n];return c(l)?m:l}function c(k){return typeof k==="undefined"}function i(){if(Math.random()*f>1){return null}if(!window.performance){return null}var v=window.performance.timing;if(!v){return null}if(typeof window.performance.getEntries!=="function"){return null}if(!v.domComplete){return null}if(!v.loadEventStart){return null}var q=v.responseEnd-v.responseStart;if(q==2147483647){return null}var C=v.loadEventStart-v.navigationStart;if(C>d*1000){return null}var n={};var l=n.perf=[];l.push(v.redirectEnd-v.redirectStart);l.push(v.domainLookupEnd-v.domainLookupStart);l.push(v.connectEnd-v.connectStart);l.push(v.responseStart-v.requestStart);l.push(q);l.push(v.responseEnd-v.navigationStart);l.push(v.domComplete-v.domLoading);l.push(C);var u=window.performance.getEntries();var s={};for(var y=0;y<u.length;y++){var m=u[y];var w=m.startTime;var z=m.responseEnd;var t=m.duration;if(!isNaN(w)&&!isNaN(z)&&!isNaN(t)){var o;var p=m.initiatorType;if(p=="img"){o=p}else{if(p=="script"){o=p}else{if(p=="subdocument"){o="iframe"}else{if(p=="iframe"){o=p}else{if(p=="xmlhttprequest"){o=p}else{o=j(m.name)}}}}}var k=s[o];if(!k){k={};k.duration=t;k.count=1;k.ptime=[[w,z]];s[o]=k}else{k.duration=k.duration+t;k.count=k.count+1;b(k.ptime,w,z)}}}var r=n.perfr=[];for(var A in s){var x=[];r.push(x);var B=s[A];x.push(A);x.push(B.count);x.push(Math.round(B.duration));x.push(Math.round(h(B.ptime)))}return n}function h(n){var m=0;for(var l=0;l<n.length;l++){var k=n[l];m=m+(k[1]-k[0])}return m}function b(r,o,l){for(var n=0;n<r.length;n++){var q=r[n];var k=q[0];var p=q[1];if(o<=p&&l>=k){q[0]=Math.min(o,k);q[1]=Math.max(l,p);var m=r.slice(n+1);r.length=n+1;a(r,m);return}}r.push([o,l])}function a(n,k){for(var l=0;l<k.length;l++){var m=k[l];b(n,m[0],m[1])}}function j(m){var k=m.lastIndexOf("?");if(k<0){k=m.lastIndexOf("#")}if(k>=0){m=m.substring(0,k)}var l=m.lastIndexOf(".");if(l>=0){var n=m.substr(l+1);if(n==="js"){return"script"}else{if(n==="css"){return"css"}else{if(["ico","jpg","jp2","jps","bmp","tiff","mng","png","gif","webp","jxr","hdp","wdp","svg"].indexOf(n)>0){return"img"}}}}return"unknown"}function g(){var k=i();if(k==null){return}k.type="event";k.perfv=PPF_VERSION;if(!window.emos3){window.emos3={stored:[],send:function(l){this.stored.push(l)}}}emos3.send(k)}if(window.addEventListener){if(document.readyState==="complete"){g()}else{window.addEventListener("load",g)}}})();