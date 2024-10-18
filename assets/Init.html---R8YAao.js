import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as t}from"./app-CcVIHVCk.js";const n={};function l(h,i){return t(),e("div",null,i[0]||(i[0]=[a(`<h2 id="配置-api-密匙" tabindex="-1"><a class="header-anchor" href="#配置-api-密匙"><span>配置 API 密匙</span></a></h2><p>对于个人使用，请登录<a href="https://doc2x.noedgeai.com/" target="_blank" rel="noopener noreferrer">https://doc2x.noedgeai.com</a>，点击<code>个人信息</code>，复制其中的身份令牌作为您的 API 密匙。</p><h2 id="使用环境变量-推荐" tabindex="-1"><a class="header-anchor" href="#使用环境变量-推荐"><span>使用环境变量(推荐)</span></a></h2><p>运行以下代码以导入您的 API 密匙：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Doc2X</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Client </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> Doc2X</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macos-linux" tabindex="-1"><a class="header-anchor" href="#macos-linux"><span>MacOS/Linux</span></a></h3><p>请使用以下命令为当前终端设置环境变量：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> DOC2X_APIKEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Your API Key&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您也可以将以上命令添加到<code>~/.zshrc</code>或<code>~/.bashrc</code>以持久化环境变量。</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><p>请使用以下命令为当前终端设置环境变量：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">set </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;DOC2X_APIKEY&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Your API Key&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您可以使用命令<code>setx &quot;DOC2X_APIKEY&quot; &quot;Your API Key&quot;</code>中以持久化保存变量(而不是当前终端会话)。</p><h2 id="为项目单独设置-api-密匙" tabindex="-1"><a class="header-anchor" href="#为项目单独设置-api-密匙"><span>为项目单独设置 API 密匙</span></a></h2><p>若您希望 API 密钥仅对单个项目可见，可创建一个包含您的 API 密钥的本地<code>.env</code>文件。以下是一个<code>.env</code>文件的示范：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DOC2X_APIKEY = &quot;Your API Key&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>导入的代码与使用环境变量的方法相同。</p><blockquote><p>注意这可能需要您使用集成开发环境，例如 VSCode</p></blockquote><h2 id="指定-api-密匙-不推荐" tabindex="-1"><a class="header-anchor" href="#指定-api-密匙-不推荐"><span>指定 API 密匙(不推荐)</span></a></h2><p>如果您想指定您的 API 密匙，您可以通过以下代码导入：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Doc2X</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Client </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> Doc2X</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">apikey</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Your API key&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义-同时请求限制" tabindex="-1"><a class="header-anchor" href="#自定义-同时请求限制"><span>自定义：同时请求限制</span></a></h2><div class="hint-container caution"><p class="hint-container-title">警告</p><p>除非您确信您需要修改请求频率，请不要修改同时请求限制，请使用默认的设置。</p></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Doc2X</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Client </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> Doc2X</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">thread</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const p=s(n,[["render",l],["__file","Init.html.vue"]]),o=JSON.parse('{"path":"/zh/guide/V1/Doc2X/Init.html","title":"初始化","lang":"zh-CN","frontmatter":{"title":"初始化","icon":"key","order":1,"description":"配置 API 密匙 对于个人使用，请登录https://doc2x.noedgeai.com，点击个人信息，复制其中的身份令牌作为您的 API 密匙。 使用环境变量(推荐) 运行以下代码以导入您的 API 密匙： MacOS/Linux 请使用以下命令为当前终端设置环境变量： 您也可以将以上命令添加到~/.zshrc或~/.bashrc以持久化环境变量...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/V1/Doc2X/Init.html"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/V1/Doc2X/Init.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"初始化"}],["meta",{"property":"og:description","content":"配置 API 密匙 对于个人使用，请登录https://doc2x.noedgeai.com，点击个人信息，复制其中的身份令牌作为您的 API 密匙。 使用环境变量(推荐) 运行以下代码以导入您的 API 密匙： MacOS/Linux 请使用以下命令为当前终端设置环境变量： 您也可以将以上命令添加到~/.zshrc或~/.bashrc以持久化环境变量..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-18T14:46:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T14:46:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"初始化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T14:46:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"配置 API 密匙","slug":"配置-api-密匙","link":"#配置-api-密匙","children":[]},{"level":2,"title":"使用环境变量(推荐)","slug":"使用环境变量-推荐","link":"#使用环境变量-推荐","children":[{"level":3,"title":"MacOS/Linux","slug":"macos-linux","link":"#macos-linux","children":[]},{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]}]},{"level":2,"title":"为项目单独设置 API 密匙","slug":"为项目单独设置-api-密匙","link":"#为项目单独设置-api-密匙","children":[]},{"level":2,"title":"指定 API 密匙(不推荐)","slug":"指定-api-密匙-不推荐","link":"#指定-api-密匙-不推荐","children":[]},{"level":2,"title":"自定义：同时请求限制","slug":"自定义-同时请求限制","link":"#自定义-同时请求限制","children":[]}],"git":{"createdTime":1720615458000,"updatedTime":1729262763000,"contributors":[{"name":"Menghuan1918","email":"Menghuan2003@outlook.com","commits":2}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"zh/guide/V1/Doc2X/Init.md","localizedDate":"2024年7月10日","autoDesc":true}');export{p as comp,o as data};
