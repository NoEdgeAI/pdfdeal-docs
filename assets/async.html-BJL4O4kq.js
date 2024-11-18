import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as o,a as t,e as i,r as s}from"./app-CWwjPZ9C.js";const n={};function l(c,e){const a=s("Mermaid");return r(),o("div",null,[e[0]||(e[0]=t('<p>Use the following statement to import all asynchronous request functions:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal.Doc2X.Convert </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> *</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="request-flow" tabindex="-1"><a class="header-anchor" href="#request-flow"><span>Request flow</span></a></h2>',3)),i(a,{id:"mermaid-7",code:"eJyFkUFPwzAMhe/8Ct92oeqdAxJbt4kTkxinbkJe67bR2iQkjrb+e7ykTAyB6KGq48+vzy+tQ9vBtrgDeZ7K1gAbONHBYkuZJeeNxh6UbswesuwR5mVl7AiqJs2KR6GPpAE9OGoc+W46mKr3WO2j+DzOL8qWGLCqyPuJbZwZbgd+VIlOxU6DaiB4pVtA8FQ5kTuSGOmQwTM69nBS3MHMH7PZvaAEiqFWjirux4vVm79/F09GF9FoUb7J5J9o1AncXWKokJWRPRT19U5vipV89vQAm5fXLeRoVW575Ma4IUc/6iq3dQM7/TxIxv+hamiTqyK6Wpayb3AaQlB1aixjY1Wul78rSCYcfGJXkV1/iVh0MciEAOr6eiTxh16iVEL1KG+mM8NFVm7Ah4OnjyC7S6B0tsax5J92me7m6ia193ef5iPVjQ=="}),e[1]||(e[1]=t('<h2 id="refresh-key" tabindex="-1"><a class="header-anchor" href="#refresh-key"><span><code>refresh_key</code></span></a></h2><p>Get access token access_token by personal key.</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>str</code></td><td>Personal Key</td></tr></tbody></table><h3 id="exceptions" tabindex="-1"><a class="header-anchor" href="#exceptions"><span>Exceptions</span></a></h3><table><thead><tr><th>Exception</th><th>Description</th></tr></thead><tbody><tr><td><code>Exception</code></td><td>Failed to validate key</td></tr></tbody></table><h3 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value"><span>Return Value</span></a></h3><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>str</code></td><td>Access Token</td></tr></tbody></table><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h3><ul><li>This function uses the <code>@async_retry()</code> decorator, which automatically backs out and retries twice on failure.</li></ul><h2 id="upload-pdf" tabindex="-1"><a class="header-anchor" href="#upload-pdf"><span><code>upload_pdf</code></span></a></h2><p>Asynchronously uploads a PDF file to the server and returns the UUID of the file.</p><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>apikey</code></td><td><code>str</code></td><td>Required</td><td>API key</td></tr><tr><td><code>pdffile</code></td><td><code>str</code></td><td>Required</td><td>PDF file path</td></tr><tr><td><code>ocr</code></td><td><code>bool</code></td><td><code>True</code></td><td>Whether to do OCR processing</td></tr><tr><td><code>translate</code></td><td><code>bool</code></td><td><code>False</code></td><td>Whether or not to translate</td></tr><tr><td><code>language</code></td><td><code>str</code></td><td><code>“zh”</code></td><td>The language of the file, valid only if <code>translate</code> is <code>True</code></td></tr><tr><td><code>model</code></td><td><code>str</code></td><td><code>“deepseek”</code></td><td>Translation model, valid only when <code>translate</code> is <code>True</code></td></tr></tbody></table><h3 id="exceptions-1" tabindex="-1"><a class="header-anchor" href="#exceptions-1"><span>Exceptions</span></a></h3><table><thead><tr><th>Exception</th><th>Description</th></tr></thead><tbody><tr><td><code>FileError</code></td><td>Input file size too large</td></tr><tr><td><code>FileError</code></td><td>Open File Error</td></tr><tr><td><code>RateLimit</code></td><td>Request Rate Limit Exceeded</td></tr><tr><td><code>Exception</code></td><td>Upload file error</td></tr></tbody></table><h3 id="return-value-1" tabindex="-1"><a class="header-anchor" href="#return-value-1"><span>Return Value</span></a></h3><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>str</code></td><td>The UUID of the file</td></tr></tbody></table><h3 id="notes-1" tabindex="-1"><a class="header-anchor" href="#notes-1"><span>Notes</span></a></h3><ul><li>This function uses the <code>@async_retry()</code> decorator, which automatically backs out and retries twice on failure.</li><li>The <code>language</code> and <code>model</code> arguments are valid when <code>translate</code> is <code>True</code>.</li></ul><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>Please note that the above <code>translate</code> translation interface was implemented by a packet grabber to obtain the delivery method, it is not officially supported and its availability is not guaranteed.</p></div><h2 id="upload-img" tabindex="-1"><a class="header-anchor" href="#upload-img"><span><code>upload_img</code></span></a></h2><p>Asynchronously uploads an image file to the server and returns the UUID of the file.</p><h3 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>apikey</code></td><td><code>str</code></td><td>Required</td><td>API key</td></tr><tr><td><code>imgfile</code></td><td><code>str</code></td><td>Required</td><td>Image file path</td></tr><tr><td><code>formula</code></td><td><code>bool</code></td><td><code>False</code></td><td>Whether to be in formula-only mode</td></tr><tr><td><code>img_correction</code></td><td><code>bool</code></td><td><code>False</code></td><td>Whether or not to perform image correction</td></tr></tbody></table><h3 id="exceptions-2" tabindex="-1"><a class="header-anchor" href="#exceptions-2"><span>Exceptions</span></a></h3><table><thead><tr><th>Exceptions</th><th>Description</th></tr></thead><tbody><tr><td><code>FileError</code></td><td>Image file size too large</td></tr><tr><td><code>FileError</code></td><td>Open File Error</td></tr><tr><td><code>RateLimit</code></td><td>Request Rate Limit Exceeded</td></tr><tr><td><code>Exception</code></td><td>Upload file error</td></tr></tbody></table><h3 id="return-value-2" tabindex="-1"><a class="header-anchor" href="#return-value-2"><span>Return Value</span></a></h3><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>str</code></td><td>UUID of the file</td></tr></tbody></table><h3 id="notes-2" tabindex="-1"><a class="header-anchor" href="#notes-2"><span>Notes</span></a></h3><ul><li>This function uses the <code>@async_retry()</code> decorator, which automatically backs out and retries twice on failure.</li></ul><h2 id="uuid-status" tabindex="-1"><a class="header-anchor" href="#uuid-status"><span><code>uuid_status</code></span></a></h2><p>Asynchronous function to get the status of the document, both for PDF and image UUID.</p><h3 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>apikey</code></td><td><code>str</code></td><td>mandatory</td><td>API key</td></tr><tr><td><code>uuid</code></td><td><code>str</code></td><td>Required</td><td>UUID of the file</td></tr><tr><td><code>convert</code></td><td><code>bool</code></td><td><code>False</code></td><td>Whether or not to convert</td></tr><tr><td><code>translate</code></td><td><code>bool</code></td><td><code>False</code></td><td>Whether to use the translation interface</td></tr></tbody></table><h3 id="return-value-3" tabindex="-1"><a class="header-anchor" href="#return-value-3"><span>Return Value</span></a></h3><p>Returns a tuple <code>(progress, status, texts)</code> with three elements:</p><ol><li><code>progress</code> (<code>int</code>): progress percentage</li><li><code>status</code> (<code>str</code>): Description of the status.</li><li><code>texts</code> (<code>list</code>): list of texts, recognized plain text results</li></ol><h3 id="exceptions-3" tabindex="-1"><a class="header-anchor" href="#exceptions-3"><span>Exceptions</span></a></h3><ul><li><code>RuntimeError</code>: Page Limit Exceeded</li><li><code>RuntimeError</code>: unknown state</li><li><code>Exception</code>: Error getting state</li></ul><h3 id="notes-3" tabindex="-1"><a class="header-anchor" href="#notes-3"><span>Notes</span></a></h3><ul><li>This function uses the <code>@async_retry()</code> decorator, which automatically backs out and retries twice on failure.</li></ul><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>Please note that the above <code>translate</code> translation interface was implemented by a packet grabber to obtain the delivery method, it is not officially supported and its availability is not guaranteed.</p></div><h2 id="uuid2file" tabindex="-1"><a class="header-anchor" href="#uuid2file"><span><code>uuid2file</code></span></a></h2><p>Gets the file by UUID and saves it in the specified format.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Please poll for the file status first and call this function after the final processing is successful.</p></div><h3 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h3><table><thead><tr><th>Parameters</th><th>Type</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code>apikey</code></td><td><code>str</code></td><td>Mandatory</td><td>API key</td></tr><tr><td><code>uuid</code></td><td><code>str</code></td><td>Required</td><td>UUID of the file</td></tr><tr><td><code>output_format</code></td><td><code>Literal[“md”, “md_dollar”, “latex”, “docx”]</code></td><td>Required</td><td>Output format</td></tr><tr><td><code>output_path</code></td><td><code>str</code></td><td><code>&quot;. /Output&quot;</code></td><td>Output path</td></tr></tbody></table><table><thead><tr><th>Exceptions</th><th>Description</th></tr></thead><tbody><tr><td><code>Exception</code></td><td>Input path is not a directory</td></tr><tr><td><code>RateLimit</code></td><td>Rate limit exceeded</td></tr><tr><td><code>Exception</code></td><td>Download File Error</td></tr></tbody></table><h3 id="return-value-4" tabindex="-1"><a class="header-anchor" href="#return-value-4"><span>Return Value</span></a></h3><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>str</code></td><td>Path to file</td></tr></tbody></table><h3 id="notes-4" tabindex="-1"><a class="header-anchor" href="#notes-4"><span>Notes</span></a></h3><ul><li>This function uses the <code>@async_retry()</code> decorator, which automatically backs out and retries twice on failure.</li></ul><h2 id="get-limit" tabindex="-1"><a class="header-anchor" href="#get-limit"><span><code>get_limit</code></span></a></h2><p>Asynchronous function to get the remaining amount of the API key.</p><h3 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>apikey</code></td><td><code>str</code></td><td>API key</td></tr></tbody></table><h3 id="exceptions-4" tabindex="-1"><a class="header-anchor" href="#exceptions-4"><span>Exceptions</span></a></h3><table><thead><tr><th>Exceptions</th><th>Description</th></tr></thead><tbody><tr><td><code>RuntimeError</code></td><td>Thrown when key is invalid</td></tr></tbody></table><h3 id="return-value-5" tabindex="-1"><a class="header-anchor" href="#return-value-5"><span>Return Value</span></a></h3><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>int</code></td><td>Remaining amount of API key</td></tr></tbody></table><h3 id="notes-5" tabindex="-1"><a class="header-anchor" href="#notes-5"><span>Notes</span></a></h3><ul><li>This function uses the <code>@async_retry()</code> decorator, which automatically backs out and retries twice on failure.</li></ul>',63))])}const p=d(n,[["render",l],["__file","async.html.vue"]]),m=JSON.parse('{"path":"/guide/V1/Doc2X/async.html","title":"Asynchronous Requests","lang":"en-US","frontmatter":{"title":"Asynchronous Requests","icon":"rotate","description":"Use the following statement to import all asynchronous request functions: Request flow refresh_key Get access token access_token by personal key. Parameters Exceptions Return Va...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/V1/Doc2X/async.html"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/V1/Doc2X/async.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"Asynchronous Requests"}],["meta",{"property":"og:description","content":"Use the following statement to import all asynchronous request functions: Request flow refresh_key Get access token access_token by personal key. Parameters Exceptions Return Va..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T14:17:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T14:17:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Asynchronous Requests\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T14:17:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"Request flow","slug":"request-flow","link":"#request-flow","children":[]},{"level":2,"title":"refresh_key","slug":"refresh-key","link":"#refresh-key","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Exceptions","slug":"exceptions","link":"#exceptions","children":[]},{"level":3,"title":"Return Value","slug":"return-value","link":"#return-value","children":[]},{"level":3,"title":"Notes","slug":"notes","link":"#notes","children":[]}]},{"level":2,"title":"upload_pdf","slug":"upload-pdf","link":"#upload-pdf","children":[{"level":3,"title":"Parameters","slug":"parameters-1","link":"#parameters-1","children":[]},{"level":3,"title":"Exceptions","slug":"exceptions-1","link":"#exceptions-1","children":[]},{"level":3,"title":"Return Value","slug":"return-value-1","link":"#return-value-1","children":[]},{"level":3,"title":"Notes","slug":"notes-1","link":"#notes-1","children":[]}]},{"level":2,"title":"upload_img","slug":"upload-img","link":"#upload-img","children":[{"level":3,"title":"Parameters","slug":"parameters-2","link":"#parameters-2","children":[]},{"level":3,"title":"Exceptions","slug":"exceptions-2","link":"#exceptions-2","children":[]},{"level":3,"title":"Return Value","slug":"return-value-2","link":"#return-value-2","children":[]},{"level":3,"title":"Notes","slug":"notes-2","link":"#notes-2","children":[]}]},{"level":2,"title":"uuid_status","slug":"uuid-status","link":"#uuid-status","children":[{"level":3,"title":"Parameters","slug":"parameters-3","link":"#parameters-3","children":[]},{"level":3,"title":"Return Value","slug":"return-value-3","link":"#return-value-3","children":[]},{"level":3,"title":"Exceptions","slug":"exceptions-3","link":"#exceptions-3","children":[]},{"level":3,"title":"Notes","slug":"notes-3","link":"#notes-3","children":[]}]},{"level":2,"title":"uuid2file","slug":"uuid2file","link":"#uuid2file","children":[{"level":3,"title":"Parameters","slug":"parameters-4","link":"#parameters-4","children":[]},{"level":3,"title":"Return Value","slug":"return-value-4","link":"#return-value-4","children":[]},{"level":3,"title":"Notes","slug":"notes-4","link":"#notes-4","children":[]}]},{"level":2,"title":"get_limit","slug":"get-limit","link":"#get-limit","children":[{"level":3,"title":"Parameters","slug":"parameters-5","link":"#parameters-5","children":[]},{"level":3,"title":"Exceptions","slug":"exceptions-4","link":"#exceptions-4","children":[]},{"level":3,"title":"Return Value","slug":"return-value-5","link":"#return-value-5","children":[]},{"level":3,"title":"Notes","slug":"notes-5","link":"#notes-5","children":[]}]}],"git":{"createdTime":1724339936000,"updatedTime":1729261059000,"contributors":[{"name":"Menghuan1918","email":"Menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":2.4,"words":721},"filePathRelative":"guide/V1/Doc2X/async.md","localizedDate":"August 22, 2024","autoDesc":true}');export{p as comp,m as data};