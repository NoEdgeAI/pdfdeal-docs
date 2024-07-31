import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,c as r,b as e,d as t,e as n,w as i,a as o,o as d}from"./app-DgzUMslh.js";const c={},h=o('<h2 id="v0-2-3" tabindex="-1"><a class="header-anchor" href="#v0-2-3"><span>V0.2.3</span></a></h2><h3 id="🔧-bug-fixes" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes"><span>🔧 BUG Fixes</span></a></h3><ul><li>Fixed issue that did not work in Jupyter Notebook</li><li>Fixed rate limiter not working in <code>pdfdeal</code> function.</li></ul><h2 id="v0-2-2" tabindex="-1"><a class="header-anchor" href="#v0-2-2"><span>V0.2.2</span></a></h2><h3 id="✨-feature-changes" tabindex="-1"><a class="header-anchor" href="#✨-feature-changes"><span>✨ Feature Changes</span></a></h3><ul><li>CLI command line program <code>doc2x</code> supports automatic decompression of downloaded zip files</li></ul><h3 id="🔧-bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-1"><span>🔧 BUG Fixes</span></a></h3><ul><li>The CLI command line program <code>doc2x</code> does not save the key locally in some cases.</li><li>The <code>Replace image links in Markdown files with links to local files</code> function saves images in the wrong format (saves jpg images as png).</li></ul><h2 id="v0-2-1" tabindex="-1"><a class="header-anchor" href="#v0-2-1"><span>V0.2.1</span></a></h2><h3 id="✨-feature-changes-1" tabindex="-1"><a class="header-anchor" href="#✨-feature-changes-1"><span>✨ Feature Changes</span></a></h3><ul><li>Updated to adapt new doc2x rate limiting rules from requests per minute RPM -&gt; simultaneous task requests.</li></ul><h3 id="🔧-bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-2"><span>🔧 BUG Fixes</span></a></h3><ul><li>CLI command line program <code>doc2x</code> does not save error logs, only prints them in the terminal.</li></ul><h2 id="v0-2-0" tabindex="-1"><a class="header-anchor" href="#v0-2-0"><span>V0.2.0</span></a></h2>',14),u={class:"hint-container caution"},p=e("p",{class:"hint-container-title"},"Caution",-1),g=e("p",null,"This version has major interface updates (impact range: all)",-1),m=e("h3",{id:"✨-feature-changes-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#✨-feature-changes-2"},[e("span",null,"✨ Feature Changes")])],-1),f=e("code",null,"doc2x",-1),x=e("li",null,"Enhanced exception handling",-1),_=e("li",null,"Function return parameters have changed, will return more detailed content",-1),v=e("li",null,"Decoupled various parts of the processing process",-1),b=o('<h3 id="🔧-bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-3"><span>🔧 BUG Fixes</span></a></h3><ul><li>[Doc2X] When using personal API, if the input file has multiple corrupted files, it may cause an infinite loop</li><li>[FileTool] The <code>get_files</code> function cannot accept <code>pdf</code> output format</li></ul><h3 id="🚀-others" tabindex="-1"><a class="header-anchor" href="#🚀-others"><span>🚀 Others</span></a></h3><ul><li>Documentation updated to a separate repository <a href="https://github.com/Menghuan1918/pdfdeal-docs" target="_blank" rel="noopener noreferrer">pdfdeal-docs</a></li><li>Updated unit tests</li></ul>',4);function k(F,y){const a=s("RouteLink");return d(),r("div",null,[h,e("div",u,[p,g,e("ul",null,[e("li",null,[t("Function return parameters have changed, please check "),n(a,{to:"/changes/0.2.0.html"},{default:i(()=>[t("update details")]),_:1}),t(" to see how to migrate")])])]),m,e("ul",null,[e("li",null,[t("Added CLI command line program "),f,t(", for quickly using doc2x to batch process PDF or image files, please refer to "),n(a,{to:"/guide/CLI/"},{default:i(()=>[t("here")]),_:1}),t(" for usage")]),e("li",null,[t("Adaptation of CLI commands to graphrag has been added, please refer to "),n(a,{to:"/guide/CLI/"},{default:i(()=>[t("here")]),_:1}),t(" for usage")]),e("li",null,[t("Updated Doc2X document translation functions to use "),n(a,{to:"/demo/graphrag.html"},{default:i(()=>[t("see here")]),_:1})]),x,_,v]),b])}const w=l(c,[["render",k],["__file","index.html.vue"]]),V=JSON.parse('{"path":"/changes/","title":"Update Log","lang":"en-US","frontmatter":{"title":"Update Log","icon":"wrench","description":"V0.2.3 🔧 BUG Fixes Fixed issue that did not work in Jupyter Notebook Fixed rate limiter not working in pdfdeal function. V0.2.2 ✨ Feature Changes CLI command line program doc2x...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/changes/"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/changes/"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"Update Log"}],["meta",{"property":"og:description","content":"V0.2.3 🔧 BUG Fixes Fixed issue that did not work in Jupyter Notebook Fixed rate limiter not working in pdfdeal function. V0.2.2 ✨ Feature Changes CLI command line program doc2x..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-31T08:59:20.000Z"}],["meta",{"property":"article:author","content":"Menghuan1918"}],["meta",{"property":"article:modified_time","content":"2024-07-31T08:59:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Update Log\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-31T08:59:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"V0.2.3","slug":"v0-2-3","link":"#v0-2-3","children":[{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes","link":"#🔧-bug-fixes","children":[]}]},{"level":2,"title":"V0.2.2","slug":"v0-2-2","link":"#v0-2-2","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes","link":"#✨-feature-changes","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-1","link":"#🔧-bug-fixes-1","children":[]}]},{"level":2,"title":"V0.2.1","slug":"v0-2-1","link":"#v0-2-1","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes-1","link":"#✨-feature-changes-1","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-2","link":"#🔧-bug-fixes-2","children":[]}]},{"level":2,"title":"V0.2.0","slug":"v0-2-0","link":"#v0-2-0","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes-2","link":"#✨-feature-changes-2","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-3","link":"#🔧-bug-fixes-3","children":[]},{"level":3,"title":"🚀 Others","slug":"🚀-others","link":"#🚀-others","children":[]}]}],"git":{"createdTime":1720786317000,"updatedTime":1722416360000,"contributors":[{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":4},{"name":"Menghuan","email":"Menghuan2003@outlook.com","commits":2}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"changes/README.md","localizedDate":"July 12, 2024","autoDesc":true}');export{w as comp,V as data};
