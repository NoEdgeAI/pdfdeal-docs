import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as r,a as s,b as t,d as i,e as l,f as o,r as h}from"./app-COEhZbSb.js";const c={},p={class:"hint-container note"},k={class:"hint-container note"};function u(m,e){const a=h("RouteLink");return n(),r("div",null,[e[6]||(e[6]=s('<p>This tool requires you to use version <mark>0.2.4</mark> or higher.</p><p>This tool searches for image links (local/online) in MD documents, and first tries to download all the online links to local, and then passes them to the subsequent processing functions for processing (save to local/upload to AliCloud OSS/custom function processing).</p><p>If you want to upload to a remote storage service, you need to work with the [Image Upload Tool](. /Upload.md).</p><p>If you only need to download online images to local, you just need to pass the string <code>local</code> to the entry <code>replace</code>.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>This tool will replace the contents of the source file, please take care to backup your file data.</p></div><p>Catalog:</p><ul><li><a href="#md-replace-imgs">Processing a single MD document</a></li><li><a href="#mds-replace-imgs">Process MD documents in a directory</a></li></ul><h2 id="md-replace-imgs" tabindex="-1"><a class="header-anchor" href="#md-replace-imgs"><span><code>md_replace_imgs</code></span></a></h2><p>Replace image links in a single Markdown file (CDN Links -&gt; Local Files/AliOSS/Custom).</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>mdfile</code></td><td><code>str</code></td><td>Required</td><td>Markdown file path</td></tr><tr><td><code>replace</code></td><td><code>str</code> or <code>function</code></td><td><code>“local”</code></td><td>Strings or <strong>functions</strong> used to replace image links. Only accepts <code>“local”</code></td></tr><tr><td>``skip`</td><td><code>str</code></td><td><code>None</code></td><td>URLs that start with this string will be skipped. For example, <code>“https://noedgeai.github.io/pdfdeal-docs”</code></td></tr><tr><td>``outputpath`</td><td><code>str</code></td><td><code>“”</code></td><td>saves the output path of the image. If not set, a folder with the same name as the Markdown file will be created with <code>_img</code> added. **Only works if <code>replace</code> is <code>“local”</code></td></tr><tr><td><code>relative</code></td><td><code>bool</code></td><td><code>False</code></td><td>Saves images using relative paths. **Valid only if <code>replace</code> is <code>“local”</code></td></tr><tr><td><code>threads</code></td><td><code>int</code></td><td><code>5</code></td><td>Number of threads to download the image</td></tr></tbody></table><h3 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value"><span>Return Value</span></a></h3><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>bool</code></td><td>Returns <code>True</code> if all images were downloaded successfully, otherwise returns <code>False</code></td></tr></tbody></table><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h3><ul><li>The <code>outputpath</code> and <code>relative</code> parameters are valid when <code>replace</code> is <code>“local”</code>.</li><li>If <code>outputpath</code> is not set, a folder with the same name as the Markdown file and the addition of <code>_img</code> is automatically created to hold the images.</li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>',16)),t("div",p,[e[2]||(e[2]=t("p",{class:"hint-container-title"},"Note",-1)),t("p",null,[e[1]||(e[1]=i("If you want to see examples of uploads to different remote storage services, see ")),l(a,{to:"/guide/Tools/Upload.html"},{default:o(()=>e[0]||(e[0]=[i("here")])),_:1})])]),e[7]||(e[7]=s('<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal.file_tools </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> md_replace_imgs</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">md_replace_imgs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    mdfile</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output/1706.03762-2024-08-11 17-06-35.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    outputpath</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./ABC&quot;</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    replace</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    threads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mds-replace-imgs" tabindex="-1"><a class="header-anchor" href="#mds-replace-imgs"><span><code>mds_replace_imgs</code></span></a></h2><p>Replace image links in all Markdown files in the specified path (CDN Links -&gt; Local Files/AliOSS/Custom).</p><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>path</code></td><td><code>str</code></td><td>Required</td><td>Markdown file path</td></tr><tr><td><code>replace</code></td><td><code>str</code> or <code>function</code></td><td><code>“local”</code></td><td>Strings or <strong>functions</strong> used to replace image links. Only accepts <code>“local”</code></td></tr><tr><td>``outputpath`</td><td><code>str</code></td><td><code>“”</code></td><td>Save the output path of the image. If not set, a folder with the same name as the Markdown file will be created with <code>_img</code> added. <strong>Only works if <code>replace</code> is <code>“local”</code></strong></td></tr><tr><td><code>relative</code></td><td><code>bool</code></td><td><code>False</code></td><td>Whether to save the image as a relative path. <strong>Only valid if <code>replace</code> is <code>&quot;loca&quot;</code></strong></td></tr><tr><td>``skip`</td><td><code>str</code></td><td><code>None</code></td><td>URLs starting with this string will be skipped. For example, <code>“https://noedgeai.github.io/pdfdeal-docs”</code></td></tr><tr><td><code>threads</code></td><td><code>int</code></td><td><code>2</code></td><td>Number of MD documents processed simultaneously</td></tr><tr><td><code>down_load_threads</code></td><td><code>int</code></td><td><code>3</code></td><td>Number of threads downloading images in a Markdown file</td></tr></tbody></table><h3 id="return-value-1" tabindex="-1"><a class="header-anchor" href="#return-value-1"><span>Return value</span></a></h3><p>Returns a tuple <code>(list1, list2, bool)</code> with three elements:</p><ol><li><p><code>list1</code> (<code>list</code>): A list of successfully processed Markdown file paths.</p><ul><li>element is the path to the processed file (string)</li><li>The element is the path of the processed file (a string).</li></ul></li><li><p><code>list2</code> (<code>list</code>): A list of files that failed to be processed.</p><ul><li>The element is a dictionary with two keys: <ul><li><code>&#39;error&#39;</code>: error message (string)</li><li><code>&#39;path&#39;</code>: path to the file that failed processing (string)</li></ul></li><li>The value of both keys is the empty string if processing was successful.</li></ul></li><li><p><code>bool</code> (<code>bool</code>): Processing state</p><ul><li><code>True</code>: All files were processed successfully.</li><li><code>False</code>: At least one file was not processed.</li></ul></li></ol><h3 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h3><ul><li><code>list1</code> and <code>list2</code> are the same length.</li><li>The <code>outputpath</code> and <code>relative</code> parameters are only valid if <code>replace</code> is <code>“local”</code>.</li></ul><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>',11)),t("div",k,[e[5]||(e[5]=t("p",{class:"hint-container-title"},"Note",-1)),t("p",null,[e[4]||(e[4]=i("If you want to see examples of uploads to different remote storage services, see ")),l(a,{to:"/Upload.html"},{default:o(()=>e[3]||(e[3]=[i("here")])),_:1})])]),e[8]||(e[8]=s(`<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">mds_replace_imgs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    path</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    replace</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    skip</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://noedgeai.github.io/pdfdeal-docs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    threads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const y=d(c,[["render",u],["__file","MD_imgs.html.vue"]]),v=JSON.parse('{"path":"/guide/Tools/MD_imgs.html","title":"MD Document Image Processing","lang":"en-US","frontmatter":{"title":"MD Document Image Processing","icon":"photo-film","description":"This tool requires you to use version 0.2.4 or higher. This tool searches for image links (local/online) in MD documents, and first tries to download all the online links to loc...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://noedgeai.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/Tools/MD_imgs.html"}],["meta",{"property":"og:url","content":"https://noedgeai.github.io/pdfdeal-docs/pdfdeal-docs/guide/Tools/MD_imgs.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"MD Document Image Processing"}],["meta",{"property":"og:description","content":"This tool requires you to use version 0.2.4 or higher. This tool searches for image links (local/online) in MD documents, and first tries to download all the online links to loc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T11:43:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T11:43:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MD Document Image Processing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-22T11:43:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"NoEdgeAI\\",\\"url\\":\\"https://noedgeai.com/\\"}]}"]]},"headers":[{"level":2,"title":"md_replace_imgs","slug":"md-replace-imgs","link":"#md-replace-imgs","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Return Value","slug":"return-value","link":"#return-value","children":[]},{"level":3,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"mds_replace_imgs","slug":"mds-replace-imgs","link":"#mds-replace-imgs","children":[{"level":3,"title":"Parameters","slug":"parameters-1","link":"#parameters-1","children":[]},{"level":3,"title":"Return value","slug":"return-value-1","link":"#return-value-1","children":[]},{"level":3,"title":"Note","slug":"note","link":"#note","children":[]},{"level":3,"title":"Example","slug":"example-1","link":"#example-1","children":[]}]}],"git":{"createdTime":1724339936000,"updatedTime":1734867821000,"contributors":[{"name":"Menghuan","email":"Menghuan2003@outlook.com","commits":1},{"name":"Menghuan1918","email":"Menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":2.2,"words":660},"filePathRelative":"guide/Tools/MD_imgs.md","localizedDate":"August 22, 2024","autoDesc":true}');export{y as comp,v as data};
