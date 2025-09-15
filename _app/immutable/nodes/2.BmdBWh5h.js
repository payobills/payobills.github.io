import"../chunks/DsnmJJEf.js";import{i as w}from"../chunks/DKDof4hQ.js";import{q as S,t as m,D as b,x as y,y as k,B as o,z as n,l as d,F as p,G as g,A as i}from"../chunks/CRrPDbJJ.js";import"../chunks/C4cM1YxL.js";import{I as v,f as B,a as C,b as $}from"../chunks/B30EZuHy.js";var x=m("<button>Turn on reminders</button>");function T(l,s){S(s,!1);const a=async()=>{await Notification.requestPermission()==="granted"&&setInterval(()=>{new Notification("You have a new bill payment to make today!",{body:"bill [xyz] is due today"})},1e4)};w();var t=x();b("click",t,()=>a()),y(l,t),k()}var q=m(`<section class="svelte-gz3h8l"><h2 class="svelte-gz3h8l">Bills be gone.</h2> <p class="one-liner svelte-gz3h8l"><span class="svelte-gz3h8l">payobills lite</span> is your go to app to be on top of your about
    billing and transaction needs all without sharing your data with third
    parties.</p> <div class="card svelte-gz3h8l"><!> <h3 class="svelte-gz3h8l">Bill Management</h3> <p class="svelte-gz3h8l">Track all your bills together in a single place. No need to do it across different apps.</p></div> <div class="card svelte-gz3h8l"><!> <h3 class="svelte-gz3h8l">Reminders</h3> <p class="svelte-gz3h8l">Get notified about when to pay your bills, so you never miss a due date.</p></div> <div class="card svelte-gz3h8l"><!> <h3 class="svelte-gz3h8l">Detailed Transaction History</h3> <p class="svelte-gz3h8l">See where your money goes with a clear, categorized view of your monthly
      spending.</p></div> <button class="svelte-gz3h8l">Coming Soon</button> <p class="one-liner svelte-gz3h8l">* Payobills is an open source project maintained by <span class="svelte-gz3h8l">Sahu, S</span> in his personal time. ❤️ is appreciated</p> <!></section>`);function j(l){const s=(e=[])=>`
    background: linear-gradient(to right, ${e.join(", ")});
    border: none;
    color: white;
    padding: 1.6rem;
    margin-bottom: 1rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: background 0.3s ease;
  `;var a=q(),t=o(n(a),4),h=n(t);{let e=p(()=>s(["#C850A3","#8341D7"]));v(h,{get icon(){return B},scale:.75,get style(){return d(e)}})}g(4),i(t);var r=o(t,2),f=n(r);{let e=p(()=>s(["#61C1C7","#518EE5"]));v(f,{get icon(){return C},scale:.75,get style(){return d(e)}})}g(4),i(r);var c=o(r,2),z=n(c);{let e=p(()=>s(["#F0B347","#E98739"]));v(z,{get icon(){return $},scale:.75,get style(){return d(e)}})}g(4),i(c);var u=o(c,2),_=o(u,4);T(_,{}),i(a),b("click",u,()=>{}),y(l,a)}export{j as component};
