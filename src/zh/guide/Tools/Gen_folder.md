---
title: 文件目录获得工具
icon: folder-tree
---
您可能需要安装一些额外依赖以使用：

```bash
pip install --upgrade "pdfdeal[tools]"
```

目录：
- [仅生成指定目录中特定格式文件列表](#gen-folder-list)
- [与其他函数结合，生成指定目录中特定格式文件列表，并使输出文件保持原有文件结构](#get-files)

## `gen_folder_list`

生成文件夹中所有指定类型文件的列表。

### 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|----------|--------|
| `path` | `str` | 必填 | 要处理的文件夹路径 |
| `mode` | `str` | 必填 | 要查找的文件类型，可选值：`'pdf'`, `'img'`, `'md'` |
| `recursive` | `bool` | `False` | 是否递归搜索子目录 |

### 异常

| 异常 | 描述 |
|------|--------|
| `ValueError` | 如果 `mode` 不是 `'pdf'`, `'img'` 或 `'md'` |

### 返回值

| 类型 | 描述 |
|------|--------|
| `list` | 文件的完整路径列表 |

### 示例

```python
files = gen_folder_list("/path/to/folder", "pdf", True)
print(files)
```

### 注意事项

- 该函数会根据 `mode` 参数过滤指定类型的文件。
- 如果 `recursive` 为 `True`，则会递归搜索子目录中的文件。


## `get_files`

生成文件夹中文件的列表，保持文件处理前后的结构不变。

### 参数

> [!warning]
> 请注意，`out`参数**必须**与转换函数(例如[Doc2X PDF转换函数](../Doc2X/2.md)/[Doc2X 图片转换函数](../Doc2X/1.md))中的`output_format`**一致**！

| 参数 | 类型 | 默认值 | 描述 |
|------|------|----------|--------|
| `path` | `str` | 必填 | 要处理的文件夹路径 |
| `mode` | `str` | 必填 | 要处理的文件类型，`'pdf'` 或 `'img'` |
| `out` | `str` | 必填 | 要输出的文件类型，`'md'`, `'md_dollar'`, `'latex'`, `'docx'` 或 `'pdf'`（用于 RAG 时） |

### 返回值

返回一个包含两个列表的元组 `(list1, list2)`：

1. `list1` (`list`): 完整路径列表
   - 元素为文件的完整路径（字符串）

2. `list2` (`list`): 相对路径列表
   - 元素为文件的相对路径（字符串）

### 注意事项

- `list1` 和 `list2` 的长度相同
- 用于 `input` 和 `output_format` 时，可以使用这些路径列表