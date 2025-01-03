---
title: 更新日志
icon: wrench
---
## V1.0.2
### 🔧 BUG修复
- 修复图片替换工具`md_replace_imgs`某些情况下导出值异常的问题 by @Menghuan1918 in https://github.com/NoEdgeAI/pdfdeal/pull/65
- 使用uuid重命名文件名功能变量名错误的问题 by @Chen571428 in https://github.com/NoEdgeAI/pdfdeal/pull/64

## V1.0.1
### ✨ 新功能

- 上传图片到图床现在支持自动使用uuid重命名文件名 [🔍查看使用示例](../guide/Tools/MD_imgs.md) [#60](https://github.com/NoEdgeAI/pdfdeal/issues/60) by [@Chen571428](https://github.com/Chen571428)

- MD分割工具支持更多分割选项：`auto`（依次尝试H3、H2、H1）、`H1`（按一级标题分割）、`H2`（按二级标题分割）、`H3`（按三级标题分割） [🔍查看使用示例](../guide/Tools/Auto_split.md)

## V1.0.0
### 🚀 其他
- 将默认处理超时时长延长至5分钟，以在默认状态下即可处理超大文件

## V0.4.10
### ✨ 新功能
- 新增内置上传工具：[PicGo](https://github.com/Molunerfinn/PicGo)。现在支持将 Markdown 文档中的本地或在线图片，通过PicGo上传到图床。[🔍查看使用示例](../guide/Tools/Upload.md#picgo)
- 上传MD图片到图床现在支持使用路径格式(以`/{PDF名字}/{图片的md5}.{拓展名}`形式上传)，[🔍查看使用示例](../guide/Tools/MD_imgs.md) [#53](https://github.com/NoEdgeAI/pdfdeal/issues/53)
- 新增HTML表格转换为Markdown格式的文件处理工具。 [🔍查看使用示例](../guide/Tools/Html2MD.md)

### 🚀 其他
- 改进需要安装的依赖
- 改进文档中对版本需求的提示

## V0.4.9
### ✨ 新功能
- 新增内置上传工具：MinIO。您可以轻松地将Markdown文档中的图片（无论是在线链接还是本地链接）上传到MinIO，并使用MinIO生成的图片链接进行替换。[🔍查看使用示例](../guide/Tools/Upload.md#minio) by [@Huxb12138](https://github.com/Huxb12138) in [#51](https://github.com/NoEdgeAI/pdfdeal/pull/51)

### 🚀 其他
- 新增一些[示范代码](https://github.com/NoEdgeAI/pdfdeal/tree/main/examples)

## V0.4.8
### ✨ 新功能
- PDF转换函数新增`oss_choose`选项，支持Doc2X通过OSS上传文件的新接口，显著提升上传速度，同时支持上传的文件体积增大到1G。默认值为`always`（所有文件均通过OSS上传）。[🔍查看同步接口文档](../guide/pdf.md#参数)，[📦查看异步接口文档](../guide/async.md#上传文件并获得文件uid)
- 新增同时输出多种格式的功能(不会消耗额外额度)。注意由于导出接口速率限制，启用后会延长少许转换时间，[🔍查看详细](../guide/pdf.md#输出多种格式)

### 🚀 其他
- 更为详细的网络错误检测
- 由于上游API不再提供`ocr`开关选项(其现在强制开启)，弃用`ocr`选项
- 适配新的错误码

## V0.4.8b3
> [!warning]
> 这是一个beta版本，可能存在不稳定性和潜在问题。建议在生产环境中谨慎使用。
>
> 要安装此版本，请使用以下命令：`pip install pdfdeal==0.4.8b3`

### ✨ 新功能
- 新增同时输出多种格式的功能(不会消耗额外额度)。注意由于导出接口速率限制，启用后会显著延长转换时间，[🔍查看详细](../guide/pdf.md#输出多种格式)

### 🚀 其他
- 更为详细的网络错误检测

## V0.4.8b2
> [!warning]
> 这是一个beta版本，可能存在不稳定性和潜在问题。建议在生产环境中谨慎使用。
>
> 要安装此版本，请使用以下命令：`pip install pdfdeal==0.4.8b2`

### 🚀 其他
- 由于上游API不再提供`ocr`开关选项(其现在强制开启)，弃用`ocr`选项
- 适配新的错误码

## V0.4.8b1
> [!warning]
> 这是一个beta版本，可能存在不稳定性和潜在问题。建议在生产环境中谨慎使用。
>
> 要安装此版本，请使用以下命令：`pip install pdfdeal==0.4.8b1`

### ✨ 新功能
- PDF转换函数新增`oss_choose`选项，支持Doc2X通过OSS上传文件的新接口，显著提升上传速度。默认值为`always`（所有文件均通过OSS上传）。[🔍查看同步接口文档](../guide/pdf.md#参数)，[📦查看异步接口文档](../guide/async.md#上传文件并获得文件uid)

## V0.4.7
### ✨ 新功能
- 为所有请求启用HTTP/2支持，其理论上能提升传输文件性能

### 🔧 BUG修复
- 修复图片替换工具`mds_replace_imgs`无法使用的bug
- 修复`full_speed`启用时可能会导致死锁的问题

### 🚀 其他
- 重新在 GitHub Action 中引入 Ruff 进行代码检查以及代码格式化检查
- 新增对API密匙认证失败的提示
- 修复文档中对于CLI参数的错误声明

## V0.4.6
### ✨ 新功能
- 初始化新增`full_speed`**beta功能**，其会其会自动嗅探当前可用的最高并发上限,[🔍查看详细](../guide/Init.md#beta功能说明)。

### 🔧 BUG修复
- 函数注释拼写错误纠正

### 🚀 其他
- 更为详细的报错说明，现在报错会尽可能地附带`trace-id`以方便定位问题
- 由于未达到预期效果，取消`retry`实验性选项

## V0.4.5
### 🔧 BUG修复
- 修复无法处理页数超限报错的问题

## V0.4.4

### 🔧 BUG修复
- 修复请求间隔过小的问题

## V0.4.3
> [!note]
> Doc2X的V1接口即将被弃用！请尽快迁移至V2接口。查看[接口迁移指南](./v1tov2.md)以确定是否需要更改代码。
>
> **大多数情况下，您无需更改代码**，`0.4.X`版本尽量保持对`0.3.1`版本的向上兼容。

### 🔧 BUG修复
- 修复了潜在的死锁问题
- 大幅改进了并发性能

### 🚀 其他
- 同步Doc2X新报错码
- 改进包依赖关系

## V0.4.2
> [!note]
> Doc2X的V1接口即将被弃用！请尽快迁移至V2接口。查看[接口迁移指南](./v1tov2.md)以确定是否需要更改代码。
>
> **大多数情况下，您无需更改代码**，`0.4.X`版本尽量保持对`0.3.1`版本的向上兼容。

### 🔧 BUG修复

- 修复了在网络环境较差时，请求可能会无限卡死的问题
- 修复了CLI程序中参数错误的问题

## V0.4.1
> [!note]
> Doc2X的V1接口即将被弃用！请尽快迁移至V2接口。查看[接口迁移指南](./v1tov2.md)以确定是否需要更改代码。
>
> **大多数情况下，您无需更改代码**，`0.4.X`版本尽量保持对`0.3.1`版本的向上兼容。

### ✨ 新功能

- `pdf2file`函数新增**实验性选项**`retry`，用于决定是否重试失败的转换，默认关闭。此功能将在未来版本中进一步完善，[🔍查看](../guide/pdf.md)
- 当传入单个文件路径时，`pdf2file`将自动保留原文件名，[🔍查看](../guide/pdf.md)
- 更新CLI程序以支持新的V2接口

### 🔧 BUG修复

- 修复了传入单个文件路径时，自定义导出文件名不生效的问题
- 修复了在网络环境较差时，下载转换后文件可能卡死的问题

### 🚀 其他

- 支持Python3.13，并在Github Action中添加相关测试
- **实验性**支持Python3.13t(nogil)

## V0.4.0

> [!note]
> Doc2X的V1接口将会在近期被弃用！请尽快迁移至V2接口。请查看[接口迁移指南](./v1tov2.md)，以查看您的场景是否有需要代码更改。
>
> **在大部分情况下，您不需要更改任何代码**，`0.4.X`版本会尽可能地向上兼容`0.3.1`版本。

### ✨ 功能变动

- 支持Doc2X V2接口
- `pdf2file`接口将会自动识别输入是`文件夹路径`/`文件路径`/`列表形式的文件路径`并进行处理，[查看](../guide/pdf.md)
- `pdf2file`将会自动保持原有文件结构，不再需要手动介入，[查看](../guide/pdf.md)
- 完善报错提示，现在其会尝试为报错提供解决方案

### 🚀 其他

- 优化包依赖，现在只需`httpx`和`pypdf`这两个小型包
- 提供了更为简便的debug日志开关

## V0.3.1

> [!warning]
> ==0.3.1版本==后更新输出为`logging`，默认情况下仅会输出Warning及以上等级的信息。如您希望查看处理过程，请设置`logging`等级为INFO：
> ```python
> import logging
> httpx_logger = logging.getLogger("httpx")
> httpx_logger.setLevel(logging.WARNING)
> logging.basicConfig(level=logging.INFO)
> ```

### 🚀 其他

- 更改包信息输出方式为`logging`模块，不会再输出一堆东西了

## V0.3.0

### ✨ 功能变动

- [文档拆分](../guide/Tools/Auto_split.md)支持按照段落输出多个文件
- 新增[文档解压功能](../guide/Tools/Unzip.md)

### 🔧 BUG 修复

- 修正了转换状态提示的用语
- 修复了无法打印报错堆栈的问题

### 🚀 其他

- 文档网页改进了Linux用户的体验(字体指定更加友好)
- 新增与RAG应用(例如Fastgpt，Dify等)结合使用的示范

## V0.2.5

### ✨ 功能变动

- 新增内置上传工具：S3

### 🔧 BUG 修复

- MD 文档图片上传工具无法处理相对路径图片的问题

### 🚀 其他

- 在 GitHub Action 中引入 Ruff 进行代码检查以及代码格式化检查

## V0.2.4

### ✨ 功能变动

- 新增 MD 文档自动拆分工具
- 新增 MD 文档图片上传工具
- 新增内置上传工具：阿里云 OSS
- CLI 工具会保留文件的源名字(而不是以 UUID 命名)

### 🔧 BUG 修复

- 修复了请求 status 失败时不会显示错误信息的问题

## V0.2.3

### 🔧 BUG 修复

- 修复了无法在 Jupyter Notebook 中使用的问题
- 修复了`pdfdeal`函数中速率限制器没生效的问题

## V0.2.2

### ✨ 功能变动

- CLI 命令行程序`doc2x`支持自动解压下载的压缩包

### 🔧 BUG 修复

- 某些情况下，CLI 命令行程序`doc2x`不能保存密匙到本地
- `替换Markdown文件中的图片链接为本地文件链接`功能保存图片格式错误(将 jpg 图片保存为 png 格式)

## V0.2.1

### ✨ 功能变动

- 更新适配新的 doc2x 速率限制规则，由每分钟请求数（RPM） -> 同时任务请求数。

### 🔧 BUG 修复

- CLI 命令行程序`doc2x`不能保存报错日志，仅能打印在终端中

## V0.2.0

> [!caution]
> 本次版本有重大接口更新(影响范围：全部）
>
> - 函数返回参数变动，请查看[更新详细](0.2.0.md)以查看如何迁移

### ✨ 功能变动

- 新增 CLI 命令行程序`doc2x`，用于快速使用 doc2x 批量处理 PDF 或图片文件，使用请参见[此处](../guide/CLI/README.md)
- 新增 CLI 命令对 graphrag 的适配，使用请参见[graphrag 集成教程](../demo/graphrag.md)
- 更新 Doc2X 文件翻译功能，支持指定输出语言以及使用的模型，使用[参见此处](../guide/Doc2X/5.md)
- 增强了异常处理
- 函数返回参数变动，会返回更多更详细的内容
- 解耦处理过程中的各个部分

### 🔧 BUG 修复

- [Doc2X] 使用个人 API 时，如输入的文件有多个文件损坏，可能会导致无限循环
- [FileTool] `get_files`函数不能接受`pdf`输出格式

### 🚀 其他

- 文档更新至单独的储存库[pdfdeal-docs](https://github.com/NoEdgeAI/pdfdeal-docs)
- 更新了单元测试
