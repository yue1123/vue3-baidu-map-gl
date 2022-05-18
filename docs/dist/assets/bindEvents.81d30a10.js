function c(t,o,s){for(const e of Object.keys(t))if(/^on/.test(e)&&t[e]){let n=e.replace(/^on/,"").toLocaleLowerCase();s.addEventListener(n,a=>o(n,a))}}export{c as b};
