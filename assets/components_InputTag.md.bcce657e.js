import{B as a,l as n,f as t,g as s,D as e,aa as o,s as l}from"./framework.9cb6416d.js";const p={data:()=>({inputTags:[]}),methods:{handleTagsChange(a){console.log(a)}}},c='{"title":"InputTag","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"配置 TODO: rebuild","slug":"配置-todo-rebuild"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"components/InputTag.md","lastUpdated":1609816784191}',u=o('<h1 id="inputtag"><a class="header-anchor" href="#inputtag" aria-hidden="true">#</a> InputTag</h1><blockquote><p>基于 <code>tag</code> <code>input</code> <code>autocomplete</code> 的输入多个标签的输入框</p></blockquote><h2 id="使用"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li>基于 <code>input</code> 使用</li></ol>',4),i=s("p",null,'input 默认 type="text"，支持 type="text" 的大部分配置',-1),d=s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("pro-input-tag")]),l("\n    "),s("span",{class:"token attr-name"},"v-model"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("inputTags"),s("span",{class:"token punctuation"},'"')]),l("\n    "),s("span",{class:"token attr-name"},"placeholder"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("请输入内容,点击空格按键"),s("span",{class:"token punctuation"},'"')]),l("\n    "),s("span",{class:"token attr-name"},"@change"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("handleTagsChange"),s("span",{class:"token punctuation"},'"')]),l("\n  "),s("span",{class:"token punctuation"},"/>")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("template")]),s("span",{class:"token punctuation"},">")]),l("\n\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token function"},"data"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n    "),s("span",{class:"token keyword"},"return"),l(),s("span",{class:"token punctuation"},"{"),l("\n      inputTags"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]"),l("\n    "),s("span",{class:"token punctuation"},"}"),l("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n  methods"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    "),s("span",{class:"token function"},"handleTagsChange"),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},"tags"),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n      console"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"log"),s("span",{class:"token punctuation"},"("),l("tags"),s("span",{class:"token punctuation"},")"),l("\n    "),s("span",{class:"token punctuation"},"}"),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("script")]),s("span",{class:"token punctuation"},">")]),l("\n")])],-1),r=o('<h2 id="配置-todo-rebuild"><a class="header-anchor" href="#配置-todo-rebuild" aria-hidden="true">#</a> 配置 TODO: rebuild</h2><p><strong>input 默认 type=&quot;text&quot;，支持 type=&quot;text&quot; 的大部分配置</strong></p><p><strong>支持 autocomplete 的大部分配置</strong></p><p>v-model 或者 value</p><ul><li>type: <code>Array</code></li><li>default: <code>[]</code></li></ul><p>绑定的标签数组</p><p>autocomplete</p><ul><li>type: <code>Boolean</code></li><li>default: <code>false</code></li></ul><p>是否启用自动补全</p><p>tagType</p><ul><li>type: <code>String</code></li><li>default: <code>null</code></li></ul><p>tag 类型</p><p>tagSize</p><ul><li>type: <code>String</code></li><li>default: <code>null</code></li></ul><p>tag 尺寸</p><p>tagHit</p><ul><li>type: <code>Boolean</code></li><li>default: <code>false</code></li></ul><p>tag 是否有边框描边</p><p>tagEffect</p><ul><li>type: <code>String</code></li><li>default: <code>light</code></li></ul><p>tag 主题</p><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>change</p><p>标签数组变化时返回 <code>tags</code></p>',24);p.render=function(o,l,p,c,k,g){const h=a("pro-input-tag"),T=a("pro-code");return n(),t("div",null,[u,s(T,null,{description:e((()=>[i])),code:e((()=>[d])),default:e((()=>[s("template",null,[s(h,{modelValue:k.inputTags,"onUpdate:modelValue":l[1]||(l[1]=a=>k.inputTags=a),placeholder:"请输入内容,点击空格按键",onChange:g.handleTagsChange},null,8,["modelValue","onChange"])])])),_:1}),r])};export default p;export{c as __pageData};
