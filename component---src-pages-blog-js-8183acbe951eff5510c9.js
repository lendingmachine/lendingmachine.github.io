"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[7],{4558:function(e,t,a){var o=a(7294),r=a(3494),i=a(1082),n=a(5390);t.Z=e=>{let{posts:t}=e;const a=t.map((e=>{let{frontmatter:t,fields:a,excerpt:r}=e;const{title:i,tags:n,date:s,description:d}=t,{slug:c}=a;return o.createElement(l,{key:c,tags:n,title:i,date:s,slug:c,description:d,excerpt:r})}));return o.createElement(s,null,a)};const l=e=>{let{title:t,date:a,tags:r,excerpt:l,description:s,slug:g}=e;return o.createElement(d,null,o.createElement(n.Z,{tags:r}),o.createElement(c,null,o.createElement(i.Link,{to:g},t)),o.createElement(m,{dangerouslySetInnerHTML:{__html:s||l}}),o.createElement(p,null,o.createElement("span",null,a)))},s=r.default.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"sc-rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),d=r.default.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"sc-rmizj4-1"})(["display:flex;padding:1.5rem;border-radius:8px;position:relative;flex-direction:column;transition:all 0.3s ease-out;body.light-mode &{backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);}body.light-mode &:hover{background-color:rgba(255,255,255,0.5);}body.dark-mode &{background-color:#3b3b3c;border:1px solid #515151;}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),c=r.default.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"sc-rmizj4-2"})(['line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;}']),m=r.default.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"sc-rmizj4-3"})(["margin-top:auto;font-size:var(--size-400);"]),p=r.default.div.withConfig({displayName:"post-list__PostListMeta",componentId:"sc-rmizj4-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},5390:function(e,t,a){var o=a(7294),r=a(3494),i=a(1082);t.Z=e=>{let{tags:t}=e;return o.createElement("div",null,t&&t.map((e=>{return o.createElement(n,{key:e},o.createElement(i.Link,{to:`/tags/${t=e,null==t||null===(a=t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===a||null===(r=a.map((e=>e.toLowerCase())))||void 0===r?void 0:r.join("-")}`},e));var t,a,r})))};const n=r.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}body.light-mode & a{backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.7);}body.light-mode & a:hover{background-color:rgba(255,255,255,1);}body.dark-mode & a{background-color:#212122;border:1px solid #1a1a1b;opacity:0.8;}"])},5502:function(e,t,a){a.r(t);var o=a(7294),r=a(1082),i=a(4678),n=a(4558),l=a(3494);t.default=e=>{let{data:t}=e;const a=t.allMarkdownRemark.nodes;return o.createElement(i.Z,{title:"Blog"},o.createElement(s,null,o.createElement("h1",null,"Blog"),o.createElement(d,{to:"/tags"},"view all tags")),o.createElement(n.Z,{posts:a}))};const s=l.default.div.withConfig({displayName:"blog__HeaderWrapper",componentId:"sc-1ak27tl-0"})(["display:flex;flex-direction:column;margin-top:var(--size-900);margin-bottom:var(--size-700);h1{max-width:none;}"]);var d=(0,l.default)(r.Link).withConfig({displayName:"blog___StyledLink",componentId:"sc-1ak27tl-1"})(["margin-top:var(--size-400);color:inherit;text-transform:uppercase;"])}}]);
//# sourceMappingURL=component---src-pages-blog-js-8183acbe951eff5510c9.js.map