import{l as e,f as t,aa as a}from"./framework.9cb6416d.js";const n='{"title":"Menu","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"routes (可选)","slug":"routes-可选"},{"level":3,"title":"其它配置","slug":"其它配置"},{"level":2,"title":"插槽","slug":"插槽"}],"relativePath":"components/Menu.md","lastUpdated":1609816784191}',s={},l=a('<h1 id="menu"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> Menu</h1><blockquote><p>封装默认 Menu 通过传入路由或者自动获取路由生成导航，与 <code>vue-router</code> 高度绑定</p></blockquote><h2 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pro-menu</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="routes-可选"><a class="header-anchor" href="#routes-可选" aria-hidden="true">#</a> routes (可选)</h3><p>自定义生成侧边菜单栏的路由</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果没有传值，将自动从 <code>vue-router</code> 中获取路由并排除 <code>meta: { hidden: true }</code> 的路由</p></div><p>类型: 同 Layout</p><h3 id="其它配置"><a class="header-anchor" href="#其它配置" aria-hidden="true">#</a> 其它配置</h3><p>同 <a href="https://element-plus.gitee.io/#/zh-CN/component/menu" target="_blank" rel="noopener noreferrer">ElMenu</a></p><h2 id="插槽"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">控制菜单显示，参数为 { meta, path, redirect } 等</td></tr></tbody></table>',13);s.render=function(a,n,s,r,o,p){return e(),t("div",null,[l])};export default s;export{n as __pageData};
