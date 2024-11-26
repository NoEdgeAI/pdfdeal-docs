import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as l,a as t,b as s,e as h,r as p}from"./app-xKkG33rb.js";const d={},r={id:"html-table-to-md",tabindex:"-1"},o={class:"header-anchor",href:"#html-table-to-md"};function k(m,i){const a=p("Badge");return n(),l("div",null,[i[1]||(i[1]=t('<p>您可能需要安装一些额外依赖以使用：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;pdfdeal[tools]&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',2)),s("h2",r,[s("a",o,[s("span",null,[i[0]||(i[0]=s("code",null,"html_table_to_md",-1)),h(a,{text:"需要0.4.10+版本",type:"warning"})])])]),i[2]||(i[2]=t(`<p>此函数会查找并转换给定字符串中的HTML表格为Markdown表格。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，由于Markdown表格并<strong>不支持合并单元格</strong>，因此在有合并单元格(尤其是纵向的合并单元格)时可能会出现<strong>数据错位</strong>的现象。</p></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal.file_tools </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> html_table_to_md</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">with</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output/1706.03762v7.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;r&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> f:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    html </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> f.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    md </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> html_table_to_md</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(html)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    with</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output/new.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;w&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> f:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        f.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(md)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const A=e(d,[["render",k],["__file","Html2MD.html.vue"]]),u=JSON.parse('{"path":"/zh/guide/Tools/Html2MD.html","title":"转换HTML表格","lang":"zh-CN","frontmatter":{"title":"转换HTML表格","icon":"table","description":"您可能需要安装一些额外依赖以使用： html_table_to_md 此函数会查找并转换给定字符串中的HTML表格为Markdown表格。 注意 请注意，由于Markdown表格并不支持合并单元格，因此在有合并单元格(尤其是纵向的合并单元格)时可能会出现数据错位的现象。","head":[["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/Tools/Html2MD.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"转换HTML表格"}],["meta",{"property":"og:description","content":"您可能需要安装一些额外依赖以使用： html_table_to_md 此函数会查找并转换给定字符串中的HTML表格为Markdown表格。 注意 请注意，由于Markdown表格并不支持合并单元格，因此在有合并单元格(尤其是纵向的合并单元格)时可能会出现数据错位的现象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-26T07:23:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-26T07:23:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"转换HTML表格\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-26T07:23:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"html_table_to_md","slug":"html-table-to-md","link":"#html-table-to-md","children":[]}],"git":{"createdTime":1732605802000,"updatedTime":1732605802000,"contributors":[{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"zh/guide/Tools/Html2MD.md","localizedDate":"2024年11月26日","autoDesc":true}');export{A as comp,u as data};
