---
title: 处理PDF
icon: images
order: 3
---

> [!info]
> 如您想要完全自己掌控处理PDF文件的过程(例如集成在您的GUI软件中)，您可以参见[异步实现](./async.md)

> [!warning]
> 图片接口上线时间请以官网为准

## 转换图片

### 参数

| 参数名            | 类型                | 描述                                                                 | 是否可选 | 默认值       |
|------------------|---------------------|----------------------------------------------------------------------|----------|--------------|
| `pic_file`       | `str`或`List[str]`  | 单个图片文件的路径、图片文件路径的列表或图片文件夹的路径。支持的格式包括jpg/jpeg/png。 | 否       | N/A          |
| `concurrent_limit`| `int`              | 最大并发任务数。                                                      | 是       | `None`       |

### 返回值
返回一个包含以下内容的元组：
1. 成功识别的OCR结果列表。每个结果为一个字符串列表，包含识别出的文本行。
2. 包含失败识别错误信息的字典列表。每个字典包含`error`和`path`字段。
3. 一个布尔值，指示识别过程中是否发生任何错误。

### 注意
- 图片大小限制为3MB。
- 接口有速率限制：每30秒最多120个请求。
- 当`pic_file`为文件夹路径时，会自动处理文件夹中的所有图片文件。


### 使用示例

```python
from pdfdeal import Doc2X

client = Doc2X()

# 处理单个图片文件
results, errors, has_error = client.picocr("tests/image/sample.png")

# 处理多个图片文件
file_list = ["tests/image/sample1.png", "tests/image/sample2.png"]
results, errors, has_error = client.picocr(file_list)

# 处理图片文件夹
results, errors, has_error = client.picocr("tests/image")
```

## 图片版面分析

### 描述
`piclayout` 方法用于对图片进行版面分析。该方法提供了一个同步接口。

### 参数

| 参数名            | 类型                | 描述                                                                 | 是否可选 | 默认值       |
|------------------|---------------------|----------------------------------------------------------------------|----------|--------------|
| `pic_file`       | `str`              | 单个图片文件的路径。支持的格式包括jpg/jpeg/png。                      | 否       | N/A          |
| `zip_path`       | `str`              | 保存分析结果zip文件的路径。                                           | 是       | `None`       |
| `concurrent_limit`| `int`              | 最大并发任务数。                                                      | 是       | `5`          |

### 返回值
返回一个包含以下内容的元组：
1. 版面分析结果列表。每个结果包含页面维度和md格式的内容。
2. 包含失败分析错误信息的字典列表。每个字典包含`error`和`path`字段。
3. 一个布尔值，指示分析过程中是否发生任何错误。

### 注意
- 图片大小限制为3MB。
- 接口有速率限制：每30秒最多120个请求。
- 如果提供了`zip_path`，分析结果会保存为zip文件。
- 仅支持处理单个图片文件，不支持批量处理。

### 使用示例

```python
from pdfdeal import Doc2X

client = Doc2X()

# 基本版面分析
results, errors, has_error = client.piclayout("tests/image/sample.png")

# 保存分析结果到zip文件
results, errors, has_error = client.piclayout(
    pic_file="tests/image/sample.png",
    zip_path="output/analysis.zip"
)
``` 