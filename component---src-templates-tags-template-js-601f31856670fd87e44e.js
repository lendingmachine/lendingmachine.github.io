"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[458],{4558:function(e,t,a){var o=a(7294),r=a(3494),i=a(1082),n=a(5390);t.Z=e=>{let{posts:t}=e;const a=t.map((e=>{let{frontmatter:t,fields:a,excerpt:r}=e;const{title:i,tags:n,date:s,description:d}=t,{slug:c}=a;return o.createElement(l,{key:c,tags:n,title:i,date:s,slug:c,description:d,excerpt:r})}));return o.createElement(s,null,a)};const l=e=>{let{title:t,date:a,tags:r,excerpt:l,description:s,slug:g}=e;return o.createElement(d,null,o.createElement(n.Z,{tags:r}),o.createElement(c,null,o.createElement(i.Link,{to:g},t)),o.createElement(m,{dangerouslySetInnerHTML:{__html:s||l}}),o.createElement(p,null,o.createElement("span",null,a)))},s=r.default.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"sc-rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),d=r.default.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"sc-rmizj4-1"})(["display:flex;padding:1.5rem;border-radius:8px;position:relative;flex-direction:column;transition:all 0.3s ease-out;body.light-mode &{backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);}body.light-mode &:hover{background-color:rgba(255,255,255,0.5);}body.dark-mode &{background-color:#3b3b3c;border:1px solid #515151;}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),c=r.default.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"sc-rmizj4-2"})(['line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;}']),m=r.default.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"sc-rmizj4-3"})(["margin-top:auto;font-size:var(--size-400);"]),p=r.default.div.withConfig({displayName:"post-list__PostListMeta",componentId:"sc-rmizj4-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},9299:function(e,t,a){var o=a(1082);const r=(0,a(3494).default)(o.Link).withConfig({displayName:"styled-link__StyledLink",componentId:"sc-1e3ktw4-0"})(["padding:0.5rem;padding-left:1.5rem;padding-right:1.5rem;color:inherit;background-color:rgba(255,255,255,0.4);text-decoration:none;border-radius:0px;border:1px solid rgba(255,255,255,0.8);text-transform:uppercase;border-radius:4px;"]);t.Z=r},5390:function(e,t,a){var o=a(7294),r=a(3494),i=a(1082);t.Z=e=>{let{tags:t}=e;return o.createElement("div",null,t&&t.map((e=>{return o.createElement(n,{key:e},o.createElement(i.Link,{to:`/tags/${t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((e=>e.toLowerCase())).join("-")}`},e));var t})))};const n=r.default.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}body.light-mode & a{backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.7);}body.light-mode & a:hover{background-color:rgba(255,255,255,1);}body.dark-mode & a{background-color:#212122;border:1px solid #1a1a1b;opacity:0.8;}"])},5450:function(e,t,a){a.r(t);var o=a(7294),r=a(1082),i=a(9450),n=a(4558),l=a(9299),s=a(3494);t.default=e=>{let{pageContext:t,data:a}=e;const{tag:r}=t,{totalCount:l}=a.allMarkdownRemark,s=a.allMarkdownRemark.nodes,g=`Posts tagged ${r}`;return o.createElement(i.Z,{title:g},o.createElement(d,null,o.createElement(c,null,l,' posts tagged "',r,'"'),o.createElement(m,{to:"/tags"},"view all tags"),o.createElement(n.Z,{posts:s}),o.createElement(p,{to:"/tags"},"View All tags")))};const d=s.default.div.withConfig({displayName:"tags-template__TagsTemplateWrapper",componentId:"sc-1wm19nq-0"})(["padding-top:var(--size-900);"]),c=s.default.h1.withConfig({displayName:"tags-template__Title",componentId:"sc-1wm19nq-1"})(["font-size:var(--size-700);"]);var m=(0,s.default)(r.Link).withConfig({displayName:"tags-template___StyledLink",componentId:"sc-1wm19nq-2"})(["margin-top:var(--size-400);display:inline-block;color:inherit;text-transform:uppercase;"]),p=(0,s.default)(l.Z).withConfig({displayName:"tags-template___StyledStyledLink",componentId:"sc-1wm19nq-3"})(["margin-top:var(--size-400);display:inline-block;"])}}]);
//# sourceMappingURL=component---src-templates-tags-template-js-601f31856670fd87e44e.js.map