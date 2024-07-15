import{_ as t}from"./cli1-CLfE05Bl.js";import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,o as a,a as o}from"./app-BFlBROxr.js";const i={},r=o('<h2 id="doc2x-命令使用说明" tabindex="-1"><a class="header-anchor" href="#doc2x-命令使用说明"><span><code>doc2x</code> 命令使用说明</span></a></h2><p><code>doc2x</code> 命令用于批量处理 PDF 或图片文件，将其转换为多种输出格式。</p><h3 id="位置参数" tabindex="-1"><a class="header-anchor" href="#位置参数"><span>位置参数</span></a></h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>filename</code></td><td>待处理的 PDF 或图片文件/文件夹</td></tr></tbody></table><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数"><span>可选参数</span></a></h3><table><thead><tr><th>短标志</th><th>长标志</th><th>描述</th></tr></thead><tbody><tr><td><code>-h</code></td><td><code>--help</code></td><td>显示帮助信息并退出</td></tr><tr><td><code>-y</code></td><td></td><td>跳过任何需要用户二次输入的场景</td></tr><tr><td><code>-k</code></td><td><code>--api_key</code></td><td>Doc2X 的 API 密钥，如果未设置，将使用全局设置</td></tr><tr><td><code>-r</code></td><td><code>--rpm</code></td><td>Doc2X 的速率限制，如果不清楚请不要设置</td></tr><tr><td><code>-o</code></td><td><code>--output</code></td><td>结果的输出文件夹，如果未设置，将默认输出到 &#39;./Output&#39;</td></tr><tr><td><code>-f</code></td><td><code>--format</code></td><td>结果的输出格式，支持 <code>md</code>、<code>md_dollar</code>、<code>latex</code>、<code>docx</code>，默认是 <code>md_dollar</code></td></tr><tr><td><code>-i</code></td><td><code>--image</code></td><td>如果输入是图片，设置此标志为 True，否则会询问用户</td></tr><tr><td><code>-p</code></td><td><code>--pdf</code></td><td>如果输入是 PDF，设置此标志为 True，否则会询问用户</td></tr><tr><td><code>--equation</code></td><td></td><td>是否使用纯公式模式，仅对图片有效，默认是 False</td></tr><tr><td><code>-c</code></td><td><code>--clear</code></td><td>清除所有关于 Doc2X 的全局设置</td></tr><tr><td></td><td><code>--graphrag</code></td><td>将 md 文档转换为 txt 格式，用于将输出转换为 graphRAG 可接受的 txt 格式。此时输出格式需要指定为 md 或 md_dollar</td></tr></tbody></table><p>您可以直接输入<code>pythom -m doc2x</code>来运行程序，其会引导您输入剩余所需的参数。注意此时输出路径会是默认的&#39;./Output&#39;，格式为默认的<code>md_dollar</code></p><figure><img src="'+t+'" alt="一些示范" tabindex="0" loading="lazy"><figcaption>一些示范</figcaption></figure><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="将-pdf文件夹中所有pdf转换为graphrag接受的txt格式" tabindex="-1"><a class="header-anchor" href="#将-pdf文件夹中所有pdf转换为graphrag接受的txt格式"><span>将./pdf文件夹中所有pdf转换为graphRAG接受的txt格式</span></a></h3><div class="language-zsh line-numbers-mode" data-highlighter="shiki" data-ext="zsh" data-title="zsh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">doc2x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;YOUR_KEY_HERE&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./ragtest/input</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --graphrag</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./pdf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',11),c=[r];function n(s,h){return a(),d("div",null,c)}const m=e(i,[["render",n],["__file","index.html.vue"]]),u=JSON.parse(`{"path":"/zh/guide/CLI/","title":"命令行工具","lang":"zh-CN","frontmatter":{"title":"命令行工具","icon":"code","description":"doc2x 命令使用说明 doc2x 命令用于批量处理 PDF 或图片文件，将其转换为多种输出格式。 位置参数 可选参数 您可以直接输入pythom -m doc2x来运行程序，其会引导您输入剩余所需的参数。注意此时输出路径会是默认的'./Output'，格式为默认的md_dollar 一些示范一些示范 示例 将./pdf文件夹中所有pdf转换为gra...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/CLI/"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/CLI/"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"命令行工具"}],["meta",{"property":"og:description","content":"doc2x 命令使用说明 doc2x 命令用于批量处理 PDF 或图片文件，将其转换为多种输出格式。 位置参数 可选参数 您可以直接输入pythom -m doc2x来运行程序，其会引导您输入剩余所需的参数。注意此时输出路径会是默认的'./Output'，格式为默认的md_dollar 一些示范一些示范 示例 将./pdf文件夹中所有pdf转换为gra..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-14T04:18:03.000Z"}],["meta",{"property":"article:author","content":"Menghuan1918"}],["meta",{"property":"article:modified_time","content":"2024-07-14T04:18:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令行工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-14T04:18:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"doc2x 命令使用说明","slug":"doc2x-命令使用说明","link":"#doc2x-命令使用说明","children":[{"level":3,"title":"位置参数","slug":"位置参数","link":"#位置参数","children":[]},{"level":3,"title":"可选参数","slug":"可选参数","link":"#可选参数","children":[]}]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"将./pdf文件夹中所有pdf转换为graphRAG接受的txt格式","slug":"将-pdf文件夹中所有pdf转换为graphrag接受的txt格式","link":"#将-pdf文件夹中所有pdf转换为graphrag接受的txt格式","children":[]}]}],"git":{"createdTime":1720782386000,"updatedTime":1720930683000,"contributors":[{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":2}]},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"zh/guide/CLI/README.md","localizedDate":"2024年7月12日","autoDesc":true}`);export{m as comp,u as data};