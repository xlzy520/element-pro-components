import{u as n}from"./index.77274b06.js";import{k as s,aa as a,ap as t,ab as o,u as c}from"./modules-vue.778a5c0f.js";import"./modules-element-plus.5bff9ce4.js";const p={class:"markdown-body"},e=[t('<h1 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98" tabindex="-1">自定义主题 <a class="header-anchor" href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>与 <code>Element Plus</code> 不同，组件内部样式通过 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">css-variables</a> 实现</p><p>相比 scss 这样更方便配置和实现主题切换、浅色模式与深色模式</p><p>如果你需要动态改变主题你应该注意目标浏览器的<a href="https://caniuse.com/css-variables">兼容情况</a></p></div>',2),o("div",{class:"warning custom-block"},[o("p",{class:"custom-block-title"},"警告"),o("p",null,[c("TODO: 由于 "),o("code",null,"Element Plus"),c(" 内部开始使用 css-variables，所以这部分内容将在接下来重构")]),o("p",null,[c("这样配置目前只适用于组件内部，不能够修改 "),o("code",null,"Element Plus"),c(" 内部的样式。如果需要同时控制两者可以")]),o("div",{class:"language-scss"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token property"},[o("span",{class:"token variable"},"$--color-white")]),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("--c-background"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n"),o("span",{class:"token property"},[o("span",{class:"token variable"},"$--background-color-base")]),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("--c-page-background"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n"),o("span",{class:"token comment"},"/* ... */"),c("\n")])])])],-1),o("h2",{id:"%E7%AE%80%E5%8D%95%E9%85%8D%E7%BD%AE",tabindex:"-1"},[c("简单配置 "),o("a",{class:"header-anchor",href:"#%E7%AE%80%E5%8D%95%E9%85%8D%E7%BD%AE","aria-hidden":"true"},"#")],-1),o("div",{class:"language-css"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token selector"},":root"),c(),o("span",{class:"token punctuation"},"{"),c("\n  "),o("span",{class:"token property"},"--c-background"),o("span",{class:"token punctuation"},":"),c(" #ffffff"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-page-background"),o("span",{class:"token punctuation"},":"),c(" #f0f2f5"),o("span",{class:"token punctuation"},";"),c("\n"),o("span",{class:"token punctuation"},"}"),c("\n")])])],-1),o("h2",{id:"%E6%B5%85%E8%89%B2%2F%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F",tabindex:"-1"},[c("浅色/深色模式 "),o("a",{class:"header-anchor",href:"#%E6%B5%85%E8%89%B2%2F%E6%B7%B1%E8%89%B2%E6%A8%A1%E5%BC%8F","aria-hidden":"true"},"#")],-1),o("div",{class:"language-css"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token atrule"},[o("span",{class:"token rule"},"@media"),c(),o("span",{class:"token punctuation"},"("),o("span",{class:"token property"},"prefers-color-scheme"),o("span",{class:"token punctuation"},":"),c(" light"),o("span",{class:"token punctuation"},")")]),c(),o("span",{class:"token punctuation"},"{"),c("\n  "),o("span",{class:"token selector"},":root"),c(),o("span",{class:"token punctuation"},"{"),c("\n    "),o("span",{class:"token property"},"--c-background"),o("span",{class:"token punctuation"},":"),c(" #ffffff"),o("span",{class:"token punctuation"},";"),c("\n    "),o("span",{class:"token property"},"--c-page-background"),o("span",{class:"token punctuation"},":"),c(" #f0f2f5"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token punctuation"},"}"),c("\n"),o("span",{class:"token punctuation"},"}"),c("\n"),o("span",{class:"token atrule"},[o("span",{class:"token rule"},"@media"),c(),o("span",{class:"token punctuation"},"("),o("span",{class:"token property"},"prefers-color-scheme"),o("span",{class:"token punctuation"},":"),c(" dark"),o("span",{class:"token punctuation"},")")]),c(),o("span",{class:"token punctuation"},"{"),c("\n  "),o("span",{class:"token selector"},":root"),c(),o("span",{class:"token punctuation"},"{"),c("\n    "),o("span",{class:"token property"},"--c-background"),o("span",{class:"token punctuation"},":"),c(" #25272a"),o("span",{class:"token punctuation"},";"),c("\n    "),o("span",{class:"token property"},"--c-page-background"),o("span",{class:"token punctuation"},":"),c(" #2b2b2b"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token punctuation"},"}"),c("\n"),o("span",{class:"token punctuation"},"}"),c("\n")])])],-1),o("h2",{id:"%E5%A4%9A%E4%B8%BB%E9%A2%98",tabindex:"-1"},[c("多主题 "),o("a",{class:"header-anchor",href:"#%E5%A4%9A%E4%B8%BB%E9%A2%98","aria-hidden":"true"},"#")],-1),o("div",{class:"language-css"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token selector"},":root"),c(),o("span",{class:"token punctuation"},"{"),c("\n  "),o("span",{class:"token property"},"--c-background"),o("span",{class:"token punctuation"},":"),c(" #ffffff"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-page-background"),o("span",{class:"token punctuation"},":"),c(" #f0f2f5"),o("span",{class:"token punctuation"},";"),c("\n"),o("span",{class:"token punctuation"},"}"),c("\n"),o("span",{class:"token selector"},"html[theme='dark']"),c(),o("span",{class:"token punctuation"},"{"),c("\n  "),o("span",{class:"token property"},"--c-background"),o("span",{class:"token punctuation"},":"),c(" #25272a"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-page-background"),o("span",{class:"token punctuation"},":"),c(" #2b2b2b"),o("span",{class:"token punctuation"},";"),c("\n"),o("span",{class:"token punctuation"},"}"),c("\n"),o("span",{class:"token selector"},"html[theme='other']"),c(),o("span",{class:"token punctuation"},"{"),c("\n  "),o("span",{class:"token comment"},"/* ... */"),c("\n"),o("span",{class:"token punctuation"},"}"),c("\n")])])],-1),o("div",{class:"language-html"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),c("html")]),c(),o("span",{class:"token attr-name"},"theme"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),c("other"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),c("html")]),o("span",{class:"token punctuation"},">")]),c("\n")])])],-1),o("div",{class:"tip custom-block"},[o("p",{class:"custom-block-title"},"提示"),o("p",null,"然后可以通过 js 动态改变 theme 的值实现")],-1),o("h2",{id:"%E7%84%B6%E5%90%8E",tabindex:"-1"},[c("然后 "),o("a",{class:"header-anchor",href:"#%E7%84%B6%E5%90%8E","aria-hidden":"true"},"#")],-1),o("p",null,"在入口文件中引入你的样式配置文件",-1),o("div",{class:"language-js"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token keyword"},"import"),c(),o("span",{class:"token string"},"'element-pro-components/lib/styles/index.css'"),c("\n"),o("span",{class:"token keyword"},"import"),c(),o("span",{class:"token string"},"'your/css/file'"),c("\n")])])],-1),t('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>可以使用 postcss 插件 <a href="https://github.com/postcss/postcss-custom-properties">postcss-custom-properties</a> 或者同类的插件转换 <code>css-variables</code> 获得更好的兼容性，以便在不支持 <code>css-variables</code> 时能够显示默认值样式</p></div><h2 id="%E6%8F%90%E4%BE%9B%E9%85%8D%E7%BD%AE%E7%9A%84%E5%8F%82%E6%95%B0" tabindex="-1">提供配置的参数 <a class="header-anchor" href="#%E6%8F%90%E4%BE%9B%E9%85%8D%E7%BD%AE%E7%9A%84%E5%8F%82%E6%95%B0" aria-hidden="true">#</a></h2>',2),o("div",{class:"language-css"},[o("pre",null,[o("code",{"v-pre":""},[o("span",{class:"token atrule"},[o("span",{class:"token rule"},"@import"),c(),o("span",{class:"token string"},"'./public.css'"),o("span",{class:"token punctuation"},";")]),c("\n"),o("span",{class:"token atrule"},[o("span",{class:"token rule"},"@custom-media"),c(" --xs-medium "),o("span",{class:"token punctuation"},"("),c("width < 768px"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";")]),c("\n\n"),o("span",{class:"token selector"},":root"),c(),o("span",{class:"token punctuation"},"{"),c("\n  "),o("span",{class:"token comment"},"/* color */"),c("\n  "),o("span",{class:"token property"},"--pro-color-primary"),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("--el-color-primary"),o("span",{class:"token punctuation"},","),c(" #409eff"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--pro-text-color-primary"),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("--el-text-color-primary"),o("span",{class:"token punctuation"},","),c(" #303133"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-background"),o("span",{class:"token punctuation"},":"),c(" #ffffff"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-header-background"),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("--c-background"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-aside-background"),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("--c-background"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-tabs-background"),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("--c-background"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-page-background"),o("span",{class:"token punctuation"},":"),c(" #f0f2f5"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-mask-background"),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"rgba"),o("span",{class:"token punctuation"},"("),c("0"),o("span",{class:"token punctuation"},","),c(" 0"),o("span",{class:"token punctuation"},","),c(" 0"),o("span",{class:"token punctuation"},","),c(" 0.4"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--c-border"),o("span",{class:"token punctuation"},":"),c(" #dcdfe6"),o("span",{class:"token punctuation"},";"),c("\n\n  "),o("span",{class:"token comment"},"/* size */"),c("\n  "),o("span",{class:"token property"},"--aside-width"),o("span",{class:"token punctuation"},":"),c(" 240px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--aside-collapse-width"),o("span",{class:"token punctuation"},":"),c(" 60px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--layout-height"),o("span",{class:"token punctuation"},":"),c(" 100vh"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--header-height"),o("span",{class:"token punctuation"},":"),c(" 54px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--footer-height"),o("span",{class:"token punctuation"},":"),c(" 50px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--border-radius"),o("span",{class:"token punctuation"},":"),c(" 4px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--main-margin"),o("span",{class:"token punctuation"},":"),c(" 10px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--main-padding"),o("span",{class:"token punctuation"},":"),c(" 20px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--xs-main-margin"),o("span",{class:"token punctuation"},":"),c(" 4px"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--xs-main-padding"),o("span",{class:"token punctuation"},":"),c(" 10px"),o("span",{class:"token punctuation"},";"),c("\n\n  "),o("span",{class:"token comment"},"/* z-index */"),c("\n  "),o("span",{class:"token property"},"--z-index-sidebar"),o("span",{class:"token punctuation"},":"),c(" 100"),o("span",{class:"token punctuation"},";"),c("\n\n  "),o("span",{class:"token comment"},"/* transition */"),c("\n  "),o("span",{class:"token property"},"--pro-color-transition-base"),o("span",{class:"token punctuation"},":"),c(),o("span",{class:"token function"},"var"),o("span",{class:"token punctuation"},"("),c("\n    --el-color-transition-base"),o("span",{class:"token punctuation"},","),c("\n    color 0.3s ease-in-out\n  "),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--t-duration"),o("span",{class:"token punctuation"},":"),c(" 0.3s"),o("span",{class:"token punctuation"},";"),c("\n  "),o("span",{class:"token property"},"--t-timing-function"),o("span",{class:"token punctuation"},":"),c(" ease-out"),o("span",{class:"token punctuation"},";"),c("\n"),o("span",{class:"token punctuation"},"}"),c("\n")])])],-1)],u={setup(t,{expose:o}){o({frontmatter:{title:"自定义主题",meta:[{name:"description",content:"如何自定义 element-pro-components 组件库的主题"},{property:"og:title",content:"自定义主题"}]}});return n({title:"自定义主题",meta:[{name:"description",content:"如何自定义 element-pro-components 组件库的主题"},{property:"og:title",content:"自定义主题"}]}),(n,t)=>(s(),a("div",p,e))}};export{u as default};
