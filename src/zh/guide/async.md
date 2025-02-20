---
title: 使用异步请求
icon: rotate
order: 3
---

```python
from pdfdeal.Doc2X.ConvertV2 import upload_pdf, uid_status,convert_parse,get_convert_result
```

> [!warning]
> 如您想要快速处理PDF文件，请参见[封装的同步方法](./Init.md)

## 上传并解析文件
```mermaid
---
title: 上传并解析文件
---
flowchart LR
    A(开始) --> B[上传文件]
    B -->|上传| C[上传文件并获得文件UID]
    C -->|获得文档UID| D[请求接口<br>/api/v2/parse/status]
    D -->|status为success| E(结束)
    D -->|轮询| D
```

### 上传文件并获得文件UID

`upload_pdf` 是一个异步函数，用于将 PDF 文件上传到服务器，并返回文件的唯一标识符（UID）。

#### 参数

- `apikey` (`str`): 用于认证的 API 密钥。
- `pdffile` (`str`): 待上传的 PDF 文件路径。
- `oss_choose` (`str`)<Badge text="需要0.4.8b1+版本" type="warning" />: 通过API直接上传文件或通过API提供的OSS链接上传文件。可接受的值：`auto`、`always`、`never`（即`仅>=100MB的文件将上传到OSS`，`所有文件都将上传到OSS`，`所有文件都将直接上传`）。

#### 异常

- `FileError`: 当输入文件过大时抛出。
- `FileError`: 当打开文件出错时抛出。
- `RateLimit`: 当请求超过速率限制时抛出。
- `Exception`: 当上传文件出错时抛出。

#### 返回

- `str`: 上传文件的唯一标识符（UID）。

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.ConvertV2 import upload_pdf
import asyncio

uid = asyncio.run(upload_pdf(apikey="sk-xxx", pdffile="tests/pdf/sample.pdf"))
print(uid)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.ConvertV2 import upload_pdf

uid = await upload_pdf(apikey="sk-xxx", pdffile="tests/pdf/sample.pdf")
print(uid)
```
:::

#### 返回示例

```bash
0192a90a-0c17-7729-a436-18320b7e9bf0
```

### 获取文件状态

`uid_status` 是一个异步函数，用于获取文件的处理状态。

#### 参数

- `apikey` (`str`): 用于认证的 API 密钥。
- `uid` (`str`): 文件的唯一标识符。
- `convert` (`bool`, 可选): 是否将 "[" 和 "[[" 转换为 "$" 和 "$$"。默认为 `False`。

#### 异常

- `RequestError`: 当处理文件失败时抛出。
- `Exception`: 当获取状态出错时抛出。

#### 返回

- `Tuple[int, str, list, list]`: 返回一个元组，包含进度、状态、文本和位置。

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.ConvertV2 import uid_status
import asyncio

process, status, texts, locations = asyncio.run(
    uid_status(
        apikey="sk-xxx",
        uid="0192a90a-0c17-7729-a436-18320b7e9bf0",
    )
)

print(process, status, texts, locations)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.ConvertV2 import uid_status

process, status, texts, locations = await uid_status(
    apikey="sk-xxx",
    uid="0192a90a-0c17-7729-a436-18320b7e9bf0",
)
process, status, texts, locations
```
:::

#### 返回示范

```
(100,
 'Success',
 ['Test 测试', ''],
 [{'url': '', 'page_idx': 0, 'page_width': 2334, 'page_height': 1313},
  {'url': '', 'page_idx': 1, 'page_width': 2334, 'page_height': 1313}])
```

## 导出文件

```mermaid
---
title: 导出已经解析完成的文件
---
graph LR
    A((开始)) --> B[已经解析完成的文件]
    B --> C[使用文件UID调用接口<br>POST /api/v2/convert/parse]
    C --> D[请求接口<br>GET /api/v2/convert/parse/result]
    D --> |轮询查看导出状态| D
    D --> E((结束))
```


### 导出已解析的文件

#### 描述
`convert_parse` 函数用于将已解析的文件转换为指定格式。这是一个异步函数，需要在异步环境中调用。

#### 参数

| 参数名    | 类型  | 描述                                           | 是否可选 | 默认值 |
|-----------|-------|------------------------------------------------|----------|--------|
| `apikey`  | str   | API密钥                                        | 否       | N/A    |
| `uid`     | str   | 已解析文件的唯一标识符                         | 否       | N/A    |
| `to`      | str   | 导出格式，支持：md、tex、docx、md_dollar       | 否       | N/A    |
| `filename`| str   | md/tex格式的输出文件名（不包含扩展名）         | 是       | None   |

#### 返回值
返回一个元组，包含以下内容：
1. 转换状态的字符串描述。
2. 转换后文件的URL。

#### 异常

| 异常类型      | 描述                           |
|---------------|--------------------------------|
| `ValueError`  | 如果 'to' 不是有效的格式       |
| `RequestError`| 如果转换失败                   |
| `Exception`   | 处理过程中的任何其他错误       |

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.ConvertV2 import convert_parse
import asyncio

status, url = asyncio.run(
    convert_parse(
        apikey="sk-xxx",
        uid=uid,
        to="docx",
    )
)

print(status, url)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.ConvertV2 import convert_parse

status, url = await convert_parse(
    apikey="sk-xxx",
    uid=uid,
    to="docx",
)
status, url
```
:::

#### 返回示范

```
('Processing', '')
```


### 获取转换结果

`get_convert_result` 是一个异步函数，用于获取转换任务的结果。

#### 参数

- `apikey` (`str`): 用于认证的 API 密钥。
- `uid` (`str`): 转换任务的唯一标识符。

#### 返回

返回一个元组，包含以下内容：
1. 转换状态的字符串描述。
2. 转换后文件的URL。

#### 异常

- `RequestError`: 如果请求失败。
- `Exception`: 处理过程中的任何其他错误。

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.ConvertV2 import get_convert_result
import asyncio

status, url = asyncio.run(
    get_convert_result(
        apikey="sk-xxx",
        uid=uid,
        to="docx",
    )
)

print(status, url)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.ConvertV2 import get_convert_result

status, url = await get_convert_result(
    apikey="sk-xxx",
    uid=uid,
    to="docx",
)
status, url
```
:::


#### 返回示范

```
('Success',
 'https://doc2x-backend.s3.cn-north-1.amazonaws.com.cn/objects/0192e2a9-90e8-7984-8860-979267ce6d74/convert_docx_origin.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=xxxxxxxxxxx')
```

## 异步图片处理实现

> [!warning]
> 图片接口上线时间请以官网为准

### 图片OCR识别

#### 函数签名
```python
async def parse_image_ocr(apikey: str, image_path: str) -> tuple[list, str]
```

#### 描述
`parse_image_ocr` 是一个异步函数，用于对图片进行OCR识别。该函数直接与Doc2X API通信，实现了图片OCR的底层功能。

#### 参数
| 参数名       | 类型   | 描述                     | 是否可选 | 默认值 |
|-------------|--------|-------------------------|----------|---------|
| `apikey`    | `str`  | Doc2X API密钥           | 否       | N/A     |
| `image_path`| `str`  | 图片文件的路径           | 否       | N/A     |

#### 返回值
返回一个包含以下内容的元组：
1. OCR识别结果的文本行列表
2. 请求的唯一标识符(uid)

#### 异常
- `FileError`: 当文件大小超过限制或无法打开文件时抛出
- `RateLimit`: 当达到API速率限制时抛出
- `RequestError`: 当解析失败时抛出
- `Exception`: 其他错误时抛出

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.Image import parse_image_ocr
import asyncio

ocr_results, uid = asyncio.run(
    parse_image_ocr(
        apikey="sk-xxx",
        image_path="path/to/image.jpg"
    )
)

print(ocr_results, uid)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.Image import parse_image_ocr

ocr_results, uid = await parse_image_ocr(
    apikey="sk-xxx",
    image_path="path/to/image.jpg"
)
ocr_results, uid
```
:::

### 图片版面分析

#### 函数签名
```python
async def parse_image_layout(apikey: str, image_path: str, zip_path: str = None) -> tuple[list, str]
```

#### 描述
`parse_image_layout` 是一个异步函数，用于对图片进行版面识别。

#### 参数
| 参数名       | 类型   | 描述                                                      | 是否可选 | 默认值 |
|-------------|--------|----------------------------------------------------------|----------|---------|
| `apikey`    | `str`  | Doc2X API密钥                                            | 否       | N/A     |
| `image_path`| `str`  | 图片文件的路径                                            | 否       | N/A     |
| `zip_path`  | `str`  | 保存分析结果zip文件的路径。如果不指定，默认为图片名+picture.zip | 是       | `None`  |

#### 返回值
返回一个包含以下内容的元组：
1. 包含页面维度和md格式内容的页面字典列表
2. 请求的唯一标识符(uid)

#### 异常
- `FileError`: 当文件大小超过限制、无法打开文件或zip路径无效时抛出
- `RateLimit`: 当达到API速率限制时抛出
- `RequestError`: 当解析失败时抛出
- `Exception`: 其他错误时抛出

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.Image import parse_image_layout
import asyncio

layout_results, uid = asyncio.run(
    parse_image_layout(
        apikey="sk-xxx",
        image_path="path/to/image.jpg",
        zip_path="path/to/save.zip"
    )
)

print(layout_results, uid)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.Image import parse_image_layout

layout_results, uid = await parse_image_layout(
    apikey="sk-xxx",
    image_path="path/to/image.jpg",
    zip_path="path/to/save.zip"
)
layout_results, uid
```
:::