import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as d,f as i}from"./app-DK1tGifQ.js";const a={},l=i(`<p>请参照右侧的目录查看您要使用的工具。</p><h2 id="替换markdown文件中的图片链接为本地文件链接" tabindex="-1"><a class="header-anchor" href="#替换markdown文件中的图片链接为本地文件链接"><span>替换Markdown文件中的图片链接为本地文件链接</span></a></h2><p><code>from pdfdeal.file_tools import md_replace_imgs</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>是否必须</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>mdfile</code></td><td><code>str</code></td><td>是</td><td>-</td><td>Markdown 文件路径</td></tr><tr><td><code>replace</code></td><td><code>str</code></td><td>是</td><td>-</td><td>替换类型，目前仅支持 <code>&quot;local&quot;</code>，未来将添加 <code>&quot;R2&quot;</code>、<code>&quot;S3&quot;</code>、<code>&quot;OSS&quot;</code> 等选项</td></tr><tr><td><code>outputpath</code></td><td><code>str</code></td><td>是</td><td>-</td><td>保存图片的输出路径</td></tr><tr><td><code>relative</code></td><td><code>bool</code></td><td>否</td><td><code>False</code></td><td>是否使用相对路径保存图片，默认为 <code>False</code></td></tr></tbody></table><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><p>返回一个布尔值：</p><ul><li><code>True</code>: 所有图片下载成功并替换链接</li><li><code>False</code>: 部分或全部图片下载失败</li></ul><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li>如果 Markdown 文件中没有找到图片链接，函数将打印提示信息并返回 <code>True</code></li><li>如果部分图片下载失败，函数将打印错误信息并返回 <code>False</code></li><li>下载的图片将保存在指定的输出路径中，并根据 <code>relative</code> 参数决定是否使用相对路径</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> pdfdeal.file_tools </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> md_replace_imgs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">md_replace_imgs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    mdfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Output/sample.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    replace</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    outputpath</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./Output/test/md_replace_imgs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获得某个文件夹中的pdf-图片文件" tabindex="-1"><a class="header-anchor" href="#获得某个文件夹中的pdf-图片文件"><span>获得某个文件夹中的PDF/图片文件</span></a></h2><p><code>from pdfdeal.file_tools import get_files</code></p><p>生成文件夹中文件的列表，保持文件处理前后的结构不变。</p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>是否必须</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>path</code></td><td><code>str</code></td><td>是</td><td>-</td><td>要处理的文件夹路径</td></tr><tr><td><code>mode</code></td><td><code>str</code></td><td>是</td><td>-</td><td>要处理的文件类型，<code>&#39;pdf&#39;</code> 或 <code>&#39;img&#39;</code></td></tr><tr><td><code>out</code></td><td><code>str</code></td><td>是</td><td>-</td><td>要输出的文件类型，<code>&#39;md&#39;</code>, <code>&#39;md_dollar&#39;</code>, <code>&#39;latex&#39;</code>, <code>&#39;docx&#39;</code> 或 <code>&#39;pdf&#39;</code>（用于 RAG 时）</td></tr></tbody></table><h3 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1"><span>返回值</span></a></h3><p>返回一个包含两个列表的元组 <code>(full_paths, relative_paths)</code>：</p><ol><li><p><code>full_paths</code> (<code>list</code>): 文件的完整路径列表</p><ul><li>元素为文件的完整路径（字符串）</li></ul></li><li><p><code>relative_paths</code> (<code>list</code>): 文件的相对路径列表</p><ul><li>元素为文件的相对路径（字符串），用于输入和输出格式</li></ul></li></ol><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1"><span>注意事项</span></a></h3><ul><li><code>full_paths</code> 和 <code>relative_paths</code> 的长度相同</li><li>如果 <code>path</code> 是一个文件而不是文件夹，并且文件扩展名符合 <code>mode</code> 指定的类型，则直接返回该文件的完整路径和相对路径</li><li>如果 <code>out</code> 不是 <code>&#39;pdf&#39;</code>，则将其转换为相应的输出格式，并设置为 <code>&#39;zip&#39;</code> 除非是 <code>&#39;docx&#39;</code></li></ul><h2 id="获得某个文件夹中的指定文件" tabindex="-1"><a class="header-anchor" href="#获得某个文件夹中的指定文件"><span>获得某个文件夹中的指定文件</span></a></h2><p><code>from pdfdeal.file_tools import gen_folder_list</code></p><p>生成指定文件夹中所有指定类型的文件列表。</p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>是否必须</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>path</code></td><td><code>str</code></td><td>是</td><td>-</td><td>要处理的文件夹路径</td></tr><tr><td><code>mode</code></td><td><code>str</code></td><td>是</td><td>-</td><td>要查找的文件类型，可选值：<code>&quot;pdf&quot;</code>, <code>&quot;img&quot;</code>, <code>&quot;md&quot;</code></td></tr></tbody></table><h3 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h3><table><thead><tr><th>异常</th><th>描述</th></tr></thead><tbody><tr><td><code>ValueError</code></td><td>当 <code>mode</code> 不是 <code>&quot;pdf&quot;</code>, <code>&quot;img&quot;</code> 或 <code>&quot;md&quot;</code> 时抛出</td></tr></tbody></table><h3 id="返回值-2" tabindex="-1"><a class="header-anchor" href="#返回值-2"><span>返回值</span></a></h3><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>list</code></td><td>包含所有指定类型文件的完整路径的列表</td></tr></tbody></table><h3 id="注意事项-2" tabindex="-1"><a class="header-anchor" href="#注意事项-2"><span>注意事项</span></a></h3><ul><li>当 <code>mode</code> 为 <code>&quot;img&quot;</code> 时，查找的图像文件类型包括 <code>.png</code>, <code>.jpg</code>, 和 <code>.jpeg</code>。</li></ul>`,33),o=[l];function s(h,c){return d(),t("div",null,o)}const p=e(a,[["render",s],["__file","Tools.html.vue"]]),u=JSON.parse('{"path":"/zh/guide/Tools.html","title":"文件处理工具","lang":"zh-CN","frontmatter":{"title":"文件处理工具","icon":"file-import","description":"请参照右侧的目录查看您要使用的工具。 替换Markdown文件中的图片链接为本地文件链接 from pdfdeal.file_tools import md_replace_imgs 参数 返回值 返回一个布尔值： True: 所有图片下载成功并替换链接 False: 部分或全部图片下载失败 注意事项 如果 Markdown 文件中没有找到图片链接，函...","head":[["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/Tools.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"文件处理工具"}],["meta",{"property":"og:description","content":"请参照右侧的目录查看您要使用的工具。 替换Markdown文件中的图片链接为本地文件链接 from pdfdeal.file_tools import md_replace_imgs 参数 返回值 返回一个布尔值： True: 所有图片下载成功并替换链接 False: 部分或全部图片下载失败 注意事项 如果 Markdown 文件中没有找到图片链接，函..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-12T11:38:12.000Z"}],["meta",{"property":"article:author","content":"Menghuan1918"}],["meta",{"property":"article:modified_time","content":"2024-07-12T11:38:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件处理工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-12T11:38:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"替换Markdown文件中的图片链接为本地文件链接","slug":"替换markdown文件中的图片链接为本地文件链接","link":"#替换markdown文件中的图片链接为本地文件链接","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"获得某个文件夹中的PDF/图片文件","slug":"获得某个文件夹中的pdf-图片文件","link":"#获得某个文件夹中的pdf-图片文件","children":[{"level":3,"title":"参数","slug":"参数-1","link":"#参数-1","children":[]},{"level":3,"title":"返回值","slug":"返回值-1","link":"#返回值-1","children":[]},{"level":3,"title":"注意事项","slug":"注意事项-1","link":"#注意事项-1","children":[]}]},{"level":2,"title":"获得某个文件夹中的指定文件","slug":"获得某个文件夹中的指定文件","link":"#获得某个文件夹中的指定文件","children":[{"level":3,"title":"参数","slug":"参数-2","link":"#参数-2","children":[]},{"level":3,"title":"异常","slug":"异常","link":"#异常","children":[]},{"level":3,"title":"返回值","slug":"返回值-2","link":"#返回值-2","children":[]},{"level":3,"title":"注意事项","slug":"注意事项-2","link":"#注意事项-2","children":[]}]}],"git":{"createdTime":1720784292000,"updatedTime":1720784292000,"contributors":[{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"zh/guide/Tools.md","localizedDate":"2024年7月12日","autoDesc":true}');export{p as comp,u as data};
