---
title: Semantic Web
slug: X5HAwhUxHixmzTkqv9BcS22Cn6c
sidebar_position: 2
---


# Semantic Web

Where the Semantic web is:

<img src="/assets/OxaJbLWokoasxYxH3V5cXgiSnYk.png" src-width="906" src-height="614" align="center"/>

Why we need GOFAI when we have GPT: GPT can make mistakes, we still need solid data and knowledge representation

# Welcome：Vision & Internet&WWW

## The Vision 

### Paul Otlet  

Paul Otlet was often called a founding father of the World Wide Web.

> He envisioned organizing all human knowledge and making it accessible through a global network.

He created <b>The Mundaneum: Hierarchical Modelling </b>to index the world's knowledge

### Vannevar Bush  

Vannevar Bush published the article "As we may think" and, and proposed <b>the Memex</b>

Memex's core idea: <b>associative linking</b>

——When viewing one item, another item related could instantly be recalled

### Douglas Engelbart  

Douglas Engelbart published "Augmenting human intellect: A Conceptual Framework" in 1962

He created oNLine System- NLS 

Breakthrough:

- The mouse: allow intuitive interaction with digital content.
- Word processing: Enabled users to edit and manage text documents interactively.
- Data sharing: Allowed multiple users to access and collaborate on information simultaneously.
- Hypertext: Introduced the idea of linking pieces of information for non-linear navigation.

### Ted Nelson

He coined the term “hypertext” in the early 1960s to describe non-linear, linked writing.

Project Xanadu was the first hypertext system ever proposed.

“Everything is deeply intertwingled” — <em>Ted Nelson</em>

## The Internet  

### Internet Architecture  and Standards  

<em>development and progress on the internet is achieved in a  </em><em>decentralised</em><em> way, there is a need for governance and standardisation</em>

1. IETF internet engineering task force hosted by Internet Society

- provides a forum for interested parties to work on 

specifications for internet technology specifications

- published RFCs that serve as foundation of the World Wide Web, eg: Uniform Resource Identifiers (URIs) and Hypertext Transfer Protocol (HTTP)

1. RFCs Request for Comments —— specifications mentioned above

It is an example of managing standardization in fast developing surroundings

1. Postel’s Robustness Principle

be conservative in what you do, 

be liberal in what you accept from others

1. ICANN Internet Corporation for Assigned Names and Numbers

- IP address space allocation
- Protocol identifier assignment
- generic and country code top-level Domain Name System management
- root server system management functions.

1. IANA Internet Assigned Number Authority

- coordinates the allocation of IP addresses 
- administers the Domain Name System (DNS）

> The DNS is hierarchically organised and provides means to map from hostnames to IP addresses

### The Network Effect

Metcalfe‘s Law: 

1. the cost of the network  was directly proportional to the number of cards  installed
2. the value of the network was  proportional to the square of the number of users.

<img src="/assets/WtYJbu9TCoAApJxZuzlcyNwAnJh.png" src-width="488" src-height="262" align="center"/>

## 语义网概览 (What is the Semantic Web?)

语义网并不是一个独立的领域，它处于以下三个领域的交汇点： 

1. <b>Databases and Data Management</b>（数据库与数据管理）
2. <b>Internet and Web</b>（互联网与万维网）
3. <b>Knowledge Representation and AI</b> (GOFAI - Good Old Fashioned AI)（知识表示与传统人工智能）

> 🌟 考试重点 (Exam Note): 为什么要学这个？在 ChatGPT 时代，大模型容易产生“幻觉”，而 Ground Truth（事实标准）的建立需要扎实的数据和知识表示。语义网提供了机器可理解的知识基础。 (5)(5)(5)(5)

---

## 发展愿景与先驱 (The Vision and Visionaries)

这部分通常在考试中作为背景选择题或简答题出现，重点理解各个阶段对“连接”的演进。

- <b>Paul Otlet (1934)</b>: 提出了 <b>Mundaneum</b>，利用层级分类法（Universal Decimal Classification）管理世界知识。他被认为是文献学之父。
- <b>Vannevar Bush (1945)</b>: 提出 <b>Memex</b> 设备。
    - <b>核心理念</b>：<b>Tying two items together</b>（将两个条目关联）。 
    - <b>重要性</b>：它是超文本（Hypertext）概念的雏形。 

- <b>Doug Engelbart (1968)</b>: 演示了 <b>oNLine System (NLS)</b>。 
    - 发明了鼠标、超文本和数据共享。
    - 目标是 <b>Augmenting Human Intellect</b>（增强人类智能）。

- <b>Ted Nelson</b>: 提出了 <b>Xanadu</b> 项目。
    - 名言：<b>Everything is deeply intertwingled</b>（万物皆深度交织）。 

- <b>Tim Berners-Lee (1989)</b>: 万维网（WWW）之父。 
    - 他认为 Web 的第二部分梦想是让计算机帮助我们分析数据并协同工作（"<b>Computers to help us analyse it</b>"）。 

---

## 互联网架构与标准 (Internet Architecture & Standards)

这是理解语义网物理载体的基础。

### 核心组织

- <b>IETF (Internet Engineering Task Force)</b>: 负责发布 <b>RFC (Request for Comments)</b>。这些文档描述了互联网的协议和工具。 
- <b>ICANN</b>: 管理 IP 地址空间分配和 <b>DNS (Domain Name System)</b>。 
- <b>IANA</b>: ICANN 的一个部门，具体负责域名和 IP 地址的协调。

### 关键原则与定律

1. <b>Postel's Robustness Principle</b> (RFC 793):

> 1. "Be conservative in what you do, be liberal in what you accept from others." 
> 2. <b>理解</b>：发送数据要严格符合标准，接收数据要尽可能宽容。 

1. <b>Metcalfe's Law (Network Effect)</b>:
    - 网络的 <b>Cost</b>（成本）与用户数 $N$成正比 proportional。
    - 网络的 <b>Value</b>（价值）与用户数的平方 $N^2$ 成正比 proportional。
    - Critical Mass Crossover: 价值曲线超过成本曲线的临界点。
    - <b>🌟 重点</b>：这解释了为什么参与语义网的数据越多，整个系统的价值就呈指数级增长。 

---

## ！Web 架构核心 (Web Architecture)

<b>这是本章最重要的考试考点。</b>

### 4.1 资源 (Resources)

资源是 Web 上讨论的任何事物（抽象的或具体的）。

- <b>Information Resources</b>: 比如电子文档、图片、文件。 
- <b>Non-information Resources</b>: 比如人、房间、抽象概念。 

### 4.2 URI (Uniform Resource Identifier)

URI 是资源的名称/标识符。 

<b>Name</b> vs. <b>Thing</b>:

- <b>URI</b> 是 <b>Name</b>（标识符）。 
- <b>Resource</b> 是 <b>Thing</b> 本身。

URI 的通用语法结构 (Generic Syntax): 

$$Scheme : // Authority / Path ? Query \# Fragment$$

- <b>Scheme</b>: 指定协议类型（如 http, ftp, mailto）。 
- <b>Authority</b>: 通常是主机名（Hostname）和可选端口。 
- <b>Path</b>: 资源的层级路径。 
- <b>Query</b>: 变量数据。
- <b>Fragment</b>: 定位文档内的特定部分。

如果题目要求你拆解 `http://example.com:8042/over/there?name=ferret#nose`，你必须用以下英文术语标注：
- `http`: <b>Scheme</b> ()
- `example.com:8042`: <b>Authority</b> ()
- `/over/there`: <b>Path</b> ()
- `name=ferret`: <b>Query</b> ()
- `nose`: <b>Fragment</b> ()

---

## ！HTTP 协议 (Hypertext Transfer Protocol)

HTTP 是语义网交互的核心协议。

- <b>Stateless Protocol</b>（无状态协议）：每个请求都是独立的，服务器不会保留之前的交互信息。 <b>Every transaction is treated independently.</b>
- <b>Content Negotiation</b>: 用户代理（User Agent）通过 Accept header 表达偏好，服务器通过 Content-Type 响应。
- <b>Request/Response Structure</b>: 
    1. <b>Start Line</b>: 包含方法（Method, 如 GET）、URI、版本。 
    2. <b>Header Fields</b>: 键值对格式（Key/Value），提供额外信息。
    3. <b>Message Body</b>: 传输的内容（可选）。 

<b>🌟 考试必背：常见的状态码 (Status Codes) </b>

- <b>200 OK</b>: 请求成功。
- <b>301 Moved Permanently</b>: 资源永久移动（常用于语义网中的重定向）。
- <b>303 See Other</b>: 查看其他 URI（对语义网区分“物”和“描述文档”至关重要）。
- <b>404 Not Found</b>: 资源未找到。
- <b>500 Internal Server Error</b>: 服务器内部错误。

<b>🌟 考试必背：Header 字段与内容协商 (Content Negotiation)</b>

- <b>Accept</b>: 用户代理告诉服务器它想要的媒体类型（Media Type，如 `text/turtle`）。 
- <b>Content-Type</b>: 响应体中实际的数据格式。 
- <b>Location</b>: 用于重定向的目标地址。 

> <b>Exam Question:</b>  
<em>Describe a complete HTTP interaction in which a client requests a non-information resource (e.g., a person) using content negotiation. Explain how the server responds and why specific status codes are used.</em>
> Below is a complete HTTP interaction between a client (user agent) and a server when the client requests a <b>non-information resource</b>. The interaction demonstrates <b>content negotiation</b>, <b>status codes</b>, and the distinction between a <em>thing</em> and its <em>description</em>, which is essential in the Semantic Web.
> 1. <b>Client sends the initial request</b>
> The client wants RDF data about a person identified by a URI.
Because the resource is a <em>non-information resource</em>, the server cannot directly return a representation of the person.
> <b>Request:</b>
> 代码
> ```text
GET /Alice HTTP/1.1
Host: example.org
Accept: text/turtle
```
> - <b>GET</b> is the HTTP method.
> - The client expresses a preference for <b>text/turtle</b> using the `Accept` header.
> - `/Alice` identifies a <b>non-information resource</b> (a real-world person).
> 1. <b>Server responds with a 303 redirect</b>
> Because `/Alice` is not an information resource, the server cannot return a representation of Alice herself.
Instead, it returns a <b>303 See Other</b> redirect to a document <em>describing</em> Alice.
> <b>Response:</b>
> 代码
> ```text
HTTP/1.1 303 See Other
Location: http://example.org/AliceDoc
```
> - <b>303 See Other</b> is used to separate the <em>thing</em> from its <em>description</em>.
> - The `Location` header points to the document that contains information about Alice.
> 1. <b>Client follows the redirect and requests the description document</b>
> The client now requests the URI provided in the `Location` header.
> <b>Request:</b>
> 代码
> ```text
GET /AliceDoc HTTP/1.1
Host: example.org
Accept: text/turtle
```
> 1. <b>Server returns the description document</b>
> The server can now return an <b>information resource</b> (a document), so it responds with <b>200 OK</b> and the requested media type.
> <b>Response:</b>
> 代码
> ```text
HTTP/1.1 200 OK
Content-Type: text/turtle

@prefix ex: <http://example.org/> .
ex:Alice a ex:Person ;
        ex:knows ex:Bob .
```
> - <b>200 OK</b> indicates success.
> - `Content-Type` matches the client’s `Accept` header.
> - The body contains RDF data describing Alice.

---

## 标记语言与 W3C (Markup Languages & W3C)

- <b>HTML</b>: 核心价值在于 <b>Linking</b>（链接到其他文档）。 
- <b>XML</b>: 人机皆可读，语法比 HTML 更严格，有助于机器处理。 
- <b>W3C (World Wide Web Consortium)</b>: 制定 Web 标准的国际社区。 
- <b>推荐流程 (Maturity Levels)</b>: WD (Working Draft) $\rightarrow$ CR (Candidate Recommendation) $\rightarrow$PR (Proposed Recommendation) $\rightarrow$ <b>REC (W3C Recommendation, 正式标准)</b>。

---

## 总结：你的复习路线图

# RDF 

## Introduction

1. Definition of RDF: a framework for expressing information about resources.用于表示资源的信息的框架
2. Purpose of RDF: 
    - Designed for situations where <b>web information needs to be processed by applications</b>, not just displayed to humans.让应用可读信息
    - Enables <b>semantic interoperability</b>: different applications can exchange data <b>without losing meaning</b>.语义互操作性，不同应用交换信息

3. Linked Data Use Case
    - RDF allows <b>publishing and interlinking</b> data across the Web.
    - Example: Accessing `http://www.example.org/bob#me` might reveal that Bob knows Alice (via her IRI).
    - Following Alice’s IRI can lead to more data—friends, interests, etc.
    - This creates a <b>web of interconnected data</b>, known as <b>Linked Data</b>.

## Why use RDF

RDF is widely used across different communities for enabling <b>semantic interoperability</b>, <b>data enrichment</b>, and <b>cross-platform integration</b>.

> RDF 被广泛应用于不同领域，用于实现<b>语义互操作性</b>、<b>数据增强</b>和<b>跨平台集成</b>。

- <b>演变过程</b>：
    - <b>Web 1.0</b>: 只读（Read-Only），静态 HTML 。
    - <b>Web 2.0</b>: 可读写（Read-Write-Participate），用户生成内容，但数据存在于“孤岛（Silos）”中，机器难以理解语义 。
    - <b>Web 3.0 (Semantic Web)</b>: <b>Web of Data</b>。目标是让机器不仅能处理数据，还能“理解”数据含义并进行逻辑推理 。

- <b>核心理念</b>：将“文档的链接（Web of Documents）”提升为“数据的链接（Web of Data）”。

## ！RDF Data Model

### Triples

- RDF expresses statements of resources as <b>triples</b>:

`<subject> <predicate> <object>`

- <b>每个triple描述a relationship between two resources（subject and object）：</b> subject and object是资源，predicate表示它们之间的<b>directional</b>关系方向，称为 <b>属性（property）</b>。
- Triples form a <b>graph structure</b>: subjects and objects 是 <b>节点</b>; predicates 是连接它们的 边（arcs）
- Example: `<Bob> <is a friend of> <Alice>`   `<Mona Lisa> <was created by> <Leonardo da Vinci>`
- The same resource can be subject and object makes it possible to find connections between triples.
- RDF graphs can be queried using <b>SPARQL</b>.

1. <b>Subject (主语)</b>: 描述的对象（必须是 <b>IRI</b> 或 <b>Blank Node</b>）。
2. <b>Predicate (谓语)</b>: 描述的属性或关系（必须是 <b>IRI</b>）
3. <b>Object (宾语)</b>: 属性的值或另一个对象（可以是 <b>IRI</b>、<b>Literal</b> 或 <b>Blank Node</b>）。

> 注意： 谓语只能是 IRI，不能是 Literal 或 Blank Node ()。

### IRIs (International Resource Identifiers)

- IRIs are <b>global identifiers</b> for resources (documents, people, concepts).
- URI vs. IRI：<b>URI 仅限 ASCII 字符</b>；<b>IRI 支持 Unicode</b>（如中文、德语字符），更具国际化。(URIs are one form of IRI)
- IRIs can appear in <b>any position</b> of a triple.
- Example IRIs:
    - `http://dbpedia.org/resource/Leonardo_da_Vinci`
    - `http://xmlns.com/foaf/0.1/knows`

- 解引用 (Dereferenceability)：这是 Linked Data 的核心。使用 HTTP IRIs，使得人们或机器可以通过浏览器查找这些 ID 并获取更多 RDF 数据 。<b>IRI 不只是名字，它还能点开。</b>   你点开它，就能看到关于这个资源的描述数据。

### Literals

- <b>Literals</b>是基本值（如数字、字符串、日期等）。
- Typed using <b>XML Schema datatypes</b> (e.g. string, boolean, date).使用 `^^` 连接 XSD 数据类型，例如 `"247380"^^xsd:integer` 
- 重要细节：如果没有标签和类型，默认是 `xsd:string` 。
- They 只能出现在<b> object position</b> of a triple.
- 字符串 Literal 可以带<b>language tags</b> (e.g. `"李奥纳多·达·文西"@zh`)

### Blank Nodes

- Represent <b>unnamed resources</b> without global identifiers. 代表“存在某个东西”，但这个东西没有全球唯一的 IRI  <b>Existential Quantification</b>
- 可以出现在 <b>subject or object</b> positions.
- <b>适合描述“存在某个东西，但我们不想或不能给它一个具体 IRI”的情况，</b>例如“蒙娜丽莎背景中的一棵树”。
- Act like <b>anonymous variables</b> in a graph.<b>匿名变量</b>，表示“有这么一个东西，但不命名它”。
- 其身份仅在当前图中有效（Local Identity），重新发布时 ID（如 `_:bn0`）可能会变 ()。

### 链接数据原则 (Linked Data Principles) 

Tim Berners-Lee 提出的四项原则：

1. Use URIs to name things
2. 使用 <b>HTTP URIs</b>（以便查找） Use HTTP URIs so people (and machines) can look them up.。
3. 查找时提供有用信息（使用 <b>RDF</b> 或 <b>SPARQL</b> 协议）When a URI is looked up, provide useful information using standards like RDF and SPARQL.
4. 包含<b>指向其他 URI 的链接</b>（以发现更多内容）Include links to other URIs to enable discovery of related things.

This is the foundation of what we now call the Knowledge Graph.

### Multiple Graphs

- RDF supports grouping triples into <b>named or unnamed graphs</b>.
- Each graph can be associated with an IRI (called the <b>graph name</b>).
- Enables <b>modular datasets</b> and <b>source attribution</b>.
- Example:
    - Graph 1: Social data about Bob → `http://example.org/bob`
    - Graph 2: Wikidata info about Leonardo → `https://www.wikidata.org/...`

- RDF doesn’t enforce semantics of graph names—interpretation relies on <b>community conventions</b>.

### RDF vs. Relational vs. NoSQL

# Turtle

## 🚀 Quick Recall: Turtle Summary

Turtle is a readable syntax for writing RDF (Resource Description Framework) data. All RDF data is just a set of <b>triples</b>: <b>Subject</b>, <b>Predicate</b>, <b>Object</b>, ending with a <b>period (</b><b>.</b><b>)</b>.

- <b>IRIs</b> (resources) are written in angle brackets: `<http://...>`.
- <b>Literals</b> (values) are in quotes:
    - `"Aachen"@de` (string with a language tag).
    - `123` (auto-detected as `xsd:integer`).
    - `4.7` (auto-detected as `xsd:decimal`).
    - `true` / `false` (auto-detected as `xsd:boolean`).
    - `"1985-07-22"^^xsd:date` (an explicit datatype).

### <b>Shortcuts are essential:</b>

- `@prefix` defines shortcuts for long IRIs (e.g., `rdfs:label`).
- `@base` sets a default IRI "folder" for relative IRIs (e.g., `<Aachen>`).
- <b>Semicolon (</b><b>;</b><b>)</b> repeats the <b>Subject</b> for a new Predicate-Object pair.
- <b>Comma (</b><b>,</b><b>)</b> repeats the <b>Subject</b> AND <b>Predicate</b> for a new Object.
- `a` is a shortcut for the predicate `rdf:type` (used to assign a class).

### <b>Complex Data:</b>

- <b>Blank Nodes</b>: Resources without an IRI. Written as `_:name` or anonymously with `[ ... ]`.
- <b>Collections (Lists)</b>: Ordered lists, written with parentheses `( ... )`. This is a shortcut for the underlying `rdf:first`/`rdf:rest`/`rdf:nil` structure.

---

## 📚 Detailed Notes for Relearning

Here are structured notes based on your notebook, designed for in-depth relearning.

### Introduction to RDF and Serializations

- <b>RDF (Resource Description Framework)</b>: A framework for modeling information as <b>triples</b> (Subject, Predicate, Object). These triples form a graph.
- <b>Serializations</b>: Concrete syntaxes for storing and exchanging RDF graphs. The notebook compares three:
    - <b>RDF/XML</b>: The oldest, XML-based, and very verbose.
    - <b>JSON-LD</b>: A JSON-based format, popular for web APIs.
    - <b>Turtle (Terse RDF Triple Language)</b>: A text-based, compact, and highly human-readable syntax. It is the focus of this notebook.

### Turtle Syntax Basics

#### The Triple

The fundamental unit is the <b>triple</b>, which consists of a <b>Subject</b>, <b>Predicate</b>, and <b>Object</b>, followed by a <b>period (</b><b>.</b><b>)</b>.

- <b>Subject</b>: The resource being described (an IRI or blank node).
- <b>Predicate</b>: A property of the subject (always an IRI).
- <b>Object</b>: The value of the property (an IRI, literal, or blank node).
- <b>IRIs</b> (Internationalized Resource Identifiers) are always enclosed in angle brackets (`<>`).

<b>Example:</b>

代码段

```text
<http://dbpedia.org/resource/Aachen> <http://www.w3.org/2000/01/rdf-schema#label> "Aachen"@de .
```

- <b>Subject</b>: `<http://dbpedia.org/resource/Aachen>`
- <b>Predicate</b>: `<http://www.w3.org/2000/01/rdf-schema#label>`
- <b>Object</b>: `"Aachen"@de`

#### Literals (The Object)

Literals represent concrete data values like strings, numbers, or dates.

- <b>Simple Literals (Strings)</b>: Enclosed in double quotes (`"..."`). Without a tag, they default to `xsd:string`.
- <b>Language Tags</b>: Added to strings with `@` (e.g., `"Aachen"@de`, `"Oche"@ksh`). These become the datatype `rdf:langString`.
- <b>Explicit Datatypes</b>: Added with `^^` followed by the datatype's IRI (e.g., `"29.99"^^<http://www.w3.org/2001/XMLSchema#decimal>`).
- <b>Datatype Abbreviations (Shortcuts)</b>: Turtle automatically recognizes common types without `^^`:
    - `123` is interpreted as `xsd:integer`.
    - `-5` is interpreted as `xsd:integer`.
    - `4.7` is interpreted as `xsd:decimal`.
    - `1.6E2` is interpreted as `xsd:double`.
    - `true` and `false` are interpreted as `xsd:boolean`.

#### Whitespace

Spaces, tabs, and line breaks are largely ignored outside of IRIs and literals. This allows you to format your code for readability.

---

### Abbreviations and Shortcuts (Making Turtle Terse)

#### ` @prefix`

- <b>Motivation</b>: To avoid repeating long namespace IRIs (like `http://www.w3.org/2000/01/rdf-schema#`).
- <b>Function</b>: The `@prefix` directive binds a short prefix label (e.g., `rdfs:`) to a full namespace IRI.
- <b>Example</b>:
    - `@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .`
    - Now, `rdfs:label` is a valid shortcut for `<http://www.w3.org/2000/01/rdf-schema#label>`.

#### Semicolon (`;`)

- <b>Motivation</b>: To avoid repeating the <b>Subject</b> when describing multiple properties of the same resource.
- <b>Function</b>: The semicolon signals that the next predicate-object pair refers to the <b>same subject</b>. The block ends with a period (`.`).
- <b>Example</b>:
- 代码段

```text
dbr:Aachen
    rdfs:label "Aachen"@de ;
    dbo:populationTotal 261472 .
```

- This defines two triples, both with `dbr:Aachen` as the subject.

#### Comma (`,`)

- <b>Motivation</b>: To avoid repeating the <b>Subject and Predicate</b> when a property has multiple values.
- <b>Function</b>: The comma signals that the next <b>Object</b> refers to the <b>same subject and predicate</b>.
- <b>Example</b>:
- 代码段

```text
dbr:Aachen
    rdfs:label "Aachen"@de, "Oche"@ksh ;
    dbo:populationTotal 261472 .
```

- This defines three triples. The comma creates two `rdfs:label` triples for `dbr:Aachen`.

#### ` @base`

- <b>Function</b>: Defines a base IRI for the document. This allows you to use <b>relative IRIs</b> (e.g., `<Aachen>`) which are automatically expanded by prepending the `@base` value.
- <b>Note</b>: This only affects IRIs in angle brackets (`<>`), not prefixed names (like `dbr:Aachen`).

#### `a` Keyword

- <b>Function</b>: `a` is a shortcut for the predicate `rdf:type`.
- <b>Usage</b>: It's used to assign a class (a type) to a resource.
- <b>Example</b>: `ex:maxMustermann a foaf:Person .` is identical to `ex:maxMustermann rdf:type foaf:Person .`.

#### Comments

- Comments start with `#` and continue to the end of the line. They are ignored by the parser.

---

### Advanced Data Structures

#### Blank Nodes

- <b>Concept</b>: Resources that do not have, or should not have, a global IRI. They are "unnamed nodes".
- <b>Syntax 1: Named Blank Nodes (</b><b>_:</b><b>):</b>
    - A label starting with `_:` (e.g., `_:myAddress`) can be used as a subject or object to reference the blank node <em>within the same document</em>.
    - Example:
    - 代码段
    ```text
<Aachen> schema:address _:address1 .
_:address1 a schema:PostalAddress ;
           schema:streetAddress "Markt 39" .
```

- <b>Syntax 2: Anonymous Blank Nodes (</b><b>[ ]</b><b>):</b>
    - A more compact syntax using square brackets `[ ]`. This is often used when a blank node is the <em>object</em> of a triple.
    - All properties of the blank node are written directly inside the brackets.
    - Example (equivalent to the one above):
    - 代码段
    ```text
<Aachen> schema:address [
     a schema:PostalAddress ;
     schema:streetAddress "Markt 39"
 ] .
```

- <b>Nested Blank Nodes</b>: You can nest `[ ]` structures inside each other to represent complex hierarchical data (e.g., a person, who works at a place, which has an address).

#### Collections (Lists)

- <b>Concept</b>: Used to represent <b>ordered</b> lists of elements.
- <b>The Turtle Shortcut </b><b>( )</b>:
    - An ordered list is written by enclosing elements in parentheses, separated by spaces.
    - Example: `dbo:neighboringMunicipality ( <Herzogenrath> <Würselen> <Stolberg> ) .`
    - An empty list is `( )`, which is equivalent to `rdf:nil`.

- <b>The Underlying Structure</b>:
    - This `( )` syntax is just a shortcut. The parser translates it into a chain of nodes (usually blank nodes) connected by `rdf:first` (points to the list item) and `rdf:rest` (points to the next node in the chain).
    - The last node in the chain points to `rdf:nil` to signify the end of the list.

- <b>List Properties</b>:
    - <b>Ordered</b>: The order is preserved.
    - <b>Mixed Types</b>: Lists can contain IRIs, literals, and blank nodes.
    - <b>Nestable</b>: A list can contain another list as an element.

# SPARQL

## SPARQL `FILTER` 子句 详细用法总结

`FILTER` 是 SPARQL 中用于<b>对</b> <b>WHERE</b> <b>子句匹配的结果进行二次筛选</b>的核心子句，它基于指定条件保留符合要求的查询解，过滤掉不符合的解。其核心特点是：<b>不参与图模式的匹配，只对匹配后的变量值或图模式存在性做判断</b>。

### 基本语法与位置

1. <b>语法结构</b>

```text
FILTER(条件表达式)
```

1. <b>放置位置</b>
    - 直接写在 `WHERE` 子句的图模式之后
    - 可在 `OPTIONAL` `UNION` 等子句内使用，作用于对应子句的匹配结果

2. <b>核心规则</b>
    - 条件表达式返回 `true` 时，保留当前查询解；返回 `false` 或 `error` 时，过滤当前解
    - 多个 `FILTER` 子句并列时，<b>默认是 </b><b>AND</b><b> 关系</b>，需同时满足所有条件

### 核心筛选类型及用法

#### 数值比较筛选

针对 `xsd:integer` `xsd:double` 等数值类型的变量，使用常见比较运算符。

<b>示例</b>：筛选年级小于等于 4 的学生

```text
PREFIX : <http://example.org/university/>
SELECT ?studentName ?semester
WHERE {
    ?student a :Student ;
            :hasName ?studentName ;
            :hasSemester ?semester .
     FILTER(?semester <= 4)
}
```

#### 字符串筛选

针对 `xsd:string` 类型的变量，支持<b>字符串比较、前缀 / 后缀匹配、正则匹配</b>等操作，默认<b>区分大小写</b>。

1. 基础字符串比较

使用 `=` `!=` 或 `STR()` 函数（确保比较的是字符串值）：

```text
# 筛选姓名等于 "Alice" 的学生（区分大小写）
FILTER(?studentName = "Alice")
# 筛选姓名不等于 "Bob" 的学生
FILTER(?studentName != "Bob")
```

1. 专用字符串函数

1. 正则表达式匹配

使用 `REGEX(?var, "正则表达式", "标志位")` 函数，功能更灵活：

- 标志位 `i`：不区分大小写；默认区分大小写

```text
# 筛选姓名包含 "ali" 的学生（不区分大小写）
FILTER(REGEX(?studentName, "ali", "i"))
```

#### 语言标签筛选

针对带语言标签的字面量（如 `"cat"@en` `"猫"@zh`），使用 `LANG()` 或 `LANGMATCHES()` 函数，筛选指定语言的内容。

<b>示例</b>：筛选英文的课程名称

```text
PREFIX : <http://example.org/university/>
SELECT ?courseLabel
WHERE {
    ?course a :Course ;
        :hasLabel ?courseLabel .
    FILTER(LANG(?courseLabel) = "en")
}
```

#### 数据类型筛选

使用 `DATATYPE()` 函数，判断变量的 RDF 数据类型，确保数据格式符合要求。

- 语法：`FILTER(DATATYPE(?var) = xsd:数据类型)`
- 常见数据类型：`xsd:string` `xsd:integer` `xsd:date`

<b>示例</b>：筛选年龄是整数类型的学生

```text
PREFIX : <http://example.org/university/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
SELECT ?studentName ?age
WHERE {
    ?student a :Student ;
        :hasName ?studentName ;
        :hasAge ?age .
    FILTER(DATATYPE(?age) = xsd:integer)
}
```

#### 变量绑定状态筛选

使用 `BOUND()` 函数，判断变量是否被成功绑定（即是否有匹配的值），常与 `OPTIONAL` 配合使用。

- `BOUND(?var)`：变量 `?var` 绑定则返回 `true`
- `!BOUND(?var)`：变量 `?var` 未绑定则返回 `true`

<b>示例</b>：筛选有选修课程的学生（`?course` 被绑定）

```text
PREFIX : <http://example.org/university/>
SELECT ?studentName
WHERE {
    ?student a :Student ;
    :hasName ?studentName .
    OPTIONAL { ?student :attends ?course }
    FILTER(BOUND(?course))
}
```

#### 图模式存在性筛选

结合 `EXISTS` / `NOT EXISTS` 关键字，判断<b>指定图模式是否存在匹配</b>，这是基于整个图模式的筛选，而非单个变量值。

1. 核心语法

```text
# 存在匹配的图模式则保留
FILTER(EXISTS { 子图模式 })
# 不存在匹配的图模式则保留
FILTER(NOT EXISTS { 子图模式 })
```

1. 关键规则

- 子图模式中可以使用外部绑定的变量（如外部的 `?student`），实现关联筛选
- 子图模式内绑定的新变量（如 `?lecture`），仅在内部有效，外部不可访问
- 只判断 “存在与否”，不关心子图模式匹配的具体值

<b>示例 1</b>：筛选至少选修一门课的学生（存在性）

```text
PREFIX : <http://example.org/university/>SELECT ?studentNameWHERE {?student a :Student ;:hasName ?studentName .FILTER(EXISTS { ?student :attends ?course })}
```

<b>示例 2</b>：筛选不选修逻辑课的学生（不存在性）

```text
PREFIX : <http://example.org/university/>SELECT ?studentNameWHERE {?student a :Student ;:hasName ?studentName .FILTER(NOT EXISTS {?student :attends ?course .?course :hasName "Logic" .})}
```

## 三、 逻辑组合多条件

当需要同时满足多个筛选条件时，可使用<b>逻辑运算符</b>组合，替代多个并列的 `FILTER` 子句。

<b>示例</b>：筛选年级≤4 <b>且</b> 姓名不以 F 开头的学生

```text
PREFIX : <http://example.org/university/>SELECT ?studentName ?semesterWHERE {?student a :Student ;:hasName ?studentName ;:hasSemester ?semester .FILTER(?semester <= 4 && !STRSTARTS(?studentName, "F"))}
```

## 四、 核心注意事项

1. `FILTER` 不参与图模式匹配：它是在 `WHERE` 子句匹配出所有可能的解之后，再进行筛选，不会影响图模式的匹配过程。
2. 空值处理：如果筛选的变量未绑定（无值），`FILTER` 会直接过滤该解。
3. 性能优化：对于大规模数据集，尽量先通过图模式缩小匹配范围，再用 `FILTER` 筛选，避免对大量无效解做判断。

---

# SPARQL 进阶子句详细总结（`OPTIONAL`/`UNION`/`MINUS`/`FILTER NOT EXISTS`）

本文梳理 SPARQL 中处理<b>可选数据、结果合并、结果剔除</b>的核心进阶子句，对比它们的语法、逻辑和适用场景，帮你精准掌握用法。

## 一、 `OPTIONAL`：匹配可选属性，保留基础结果

### 核心作用

针对 RDF 数据中<b>并非所有资源都具备的属性</b>（如部分学生有学籍号，部分没有），尝试匹配该属性；匹配失败时，不丢弃基础结果，仅让可选变量保持<b>未绑定状态</b>。

### 语法结构

```text
SELECT ?基础变量 ?可选变量
WHERE {# 主模式：必须匹配的基础图模式（返回核心结果集）
  ?主体 a :类型 ;:属性1 ?基础变量 .# 可选模式：尝试匹配的属性，失败不影响基础结果OPTIONAL {
    ?主体 :可选属性 ?可选变量 .}}
```

### 关键规则

- 主模式的结果是基础，`OPTIONAL` 仅为基础结果<b>补充可选变量的值</b>。
- 可选变量未匹配时，在结果中显示为 `null` 或空值。
- 常与 `BOUND()` 配合，筛选 “有 / 无可选属性” 的资源：
- sparql

```text
# 筛选 没有 学籍号的学生FILTER(!BOUND(?matricNo))
```

- sparql

```text
# 新增列标记“是否有学籍号”BIND(BOUND(?matricNo) AS ?hasMatric)
```

### 典型示例

查询所有学生姓名，<b>可选匹配</b>学籍号：

```text
PREFIX : <http://example.org/university/>SELECT ?studentName ?matricNoWHERE {?student a :Student ;:hasName ?studentName .OPTIONAL {?student :hasMatriculationNumber ?matricNo .}}
```

## 二、 `UNION`：合并多个图模式的结果（逻辑 OR）

### 核心作用

将<b>多个独立图模式</b>的匹配结果合并成一个结果集，实现 “满足任意一个模式即可” 的逻辑，是 SPARQL 实现 `OR` 的核心方式。

### 语法结构

```text
SELECT ?共享变量
WHERE {# 模式1：匹配第一类资源{ ?主体1 a :类型1 ; :属性 ?共享变量 . }UNION# 模式2：匹配第二类资源{ ?主体2 a :类型2 ; :属性 ?共享变量 . }}
```

### 关键规则

1. <b>独立评估</b>：每个 `{}` 包裹的子模式独立计算，子模式间的变量绑定互不影响。
2. <b>共享变量对齐结果</b>：若子模式有同名变量（如 `?title`），结果会按该变量列合并；若无共享变量，结果为所有子模式的变量列全集。
3. <b>默认保留重复项</b>：若多个子模式产生完全相同的变量绑定组合，会重复显示；需去重则用 `SELECT DISTINCT`。
4. <b>可嵌套 / 多模式合并</b>：支持 `{模式1} UNION {模式2} UNION {模式3}` 的写法。

### 典型示例

查询<b>课程的标题</b>和<b>助教的研究方向</b>，统一放在 `?title` 列输出：

```text
PREFIX : <http://example.org/university/>SELECT ?entity ?titleWHERE {{ ?entity a :Lecture ; :hasTitle ?title . }UNION{ ?entity a :Assistant ; :hasSpecialization ?title . }}
```

## 三、 `MINUS`：剔除匹配特定模式的结果（集合差运算）

### 核心作用

先计算主模式的结果集 `A`，再计算剔除模式的结果集 `P`，最终返回 <b>A - P</b>（属于 `A` 但不属于 `P` 的结果），实现 “排除符合某模式的解” 的需求。

### 语法结构

```text
SELECT ?主模式变量
WHERE {# 主模式：结果集 A
  ?主体 a :类型 ; :属性 ?主模式变量 .# 剔除模式：结果集 PMINUS {
    ?主体 :不想要的属性 ?任意变量 .}}
```

### 关键规则（核心坑点）

1. <b>基于共享变量匹配</b>：只有与主模式<b>同名的变量</b>（如 `?student`）才会参与 “是否属于 P” 的判断。
2. <b>非共享变量的 “任意绑定” 陷阱</b>：
    - 若剔除模式 `P` 包含<b>主模式没有的变量</b>（如 `?grade`），SPARQL 会<b>任意找一个值绑定给该变量</b>来判断匹配。
    - 这会导致<b>意外剔除</b>：哪怕主模式的解和 P 无关，只要能找到任意值绑定非共享变量，就会被判定为 “属于 P” 并剔除。

3. <b>与 </b><b>UNION</b><b> 的语法对比</b>：
    - `UNION` 是<b>多个模式都用 </b><b>{}</b><b> 包裹</b>，地位平等；
    - `MINUS` 是<b>主模式可直接写，仅剔除模式用 </b><b>{}</b><b> 包裹</b>。

### 典型示例

查询<b>不参加逻辑课</b>的学生姓名：

```text
PREFIX : <http://example.org/university/>SELECT ?studentNameWHERE {?student a :Student ; :hasName ?studentName .MINUS {?student :attends :LogicLecture .}}
```

### 踩坑案例（非共享变量导致意外剔除）

```text
# 主模式：所有学生（只有 ?student / ?studentName）?student a :Student ; :hasName ?studentName .# 剔除模式：多了非共享变量 ?gradeMINUS {?student :attends :LogicLecture ; :hasGrade ?grade .}
```

- 若数据库中<b>存在任意学生的成绩数据</b>（哪怕不是当前学生的），`?grade` 会被绑定该值 → 判定当前学生属于 P → 意外剔除。

## 四、 `FILTER NOT EXISTS`：逐解救的存在性过滤（精准排除）

### 核心作用

对主模式的<b>每一个解</b>，独立检查 “指定子模式是否存在匹配”；若不存在，则保留该解；若存在，则过滤该解。

### 语法结构

```text
SELECT ?主模式变量
WHERE {# 主模式：生成待检查的解
  ?主体 a :类型 ; :属性 ?主模式变量 .# 过滤条件：检查子模式是否不存在FILTER NOT EXISTS {
    ?主体 :子模式属性 ?内部变量 .}}
```

### 关键规则

1. <b>逐解救独立判断</b>：不会像 `MINUS` 那样做集合运算，而是针对每个解单独验证。
2. <b>内部变量隔离</b>：子模式中的变量（如 `?lecture`）仅在块内有效，<b>不会影响外部变量的绑定</b>，也不会出现 “任意绑定” 的问题。
3. <b>效率更高</b>：对简单的 “不存在某属性” 判断，比 `MINUS` 更直观、更高效。

### 典型示例

查询<b>不参加逻辑课</b>的学生姓名（精准无坑）：

```text
PREFIX : <http://example.org/university/>SELECT ?studentNameWHERE {?student a :Student ; :hasName ?studentName .FILTER NOT EXISTS {?student :attends ?lecture .?lecture :hasTitle "Logic" .}}
```

## 五、 `MINUS` vs `FILTER NOT EXISTS` 核心差异对照表

# SPARQL 进阶查询语法全梳理

本次学习的内容分为两大模块：<b>结果集修饰符</b>（排序、截取、去重）和<b>聚合函数</b>（统计、分组、分组过滤），它们均作用于 `WHERE` 子句匹配出的原始结果集，和 SQL 语法逻辑高度一致，以下是详细拆解。

## 一、 结果集修饰符（Solution Modifiers）

这类子句的核心作用是<b>调整结果的展示形式</b>（排序、分页）或<b>精简结果内容</b>（去重），执行顺序在 `WHERE` 子句之后。

### 1. `DISTINCT`：去除重复结果行

- <b>作用</b>：删除结果集中<b>所有列值完全相同</b>的重复行，仅保留唯一行。
- <b>语法位置</b>：紧跟 `SELECT` 关键字，格式为 `SELECT DISTINCT ?var1 ?var2`。
- <b>适用场景</b>：`UNION` 合并结果、多对多关联查询时，避免重复数据。

<b>示例</b>：查询学生选修的所有课程名称，去重

```text
PREFIX : <http://example.org/university/>SELECT DISTINCT ?courseNameWHERE {?student a :Student ;:attends ?course .?course :hasTitle ?courseName .}
```

### 2. `ORDER BY`：对结果集排序

- <b>核心规则</b>
    1. <b>位置</b>：`WHERE` 子句之后，`LIMIT`/`OFFSET` 之前。
    2. <b>默认排序</b>：升序（`ASC`），可显式指定升序 / 降序（`ASC(?var)` / `DESC(?var)`）。
    3. <b>多字段排序</b>：先按第一个变量排序，同值的行再按第二个变量排序，以此类推。

- <b>语法</b>：`ORDER BY [ASC|DESC](?var1) [ASC|DESC](?var2)`

<b>示例</b>：按学生姓名升序、成绩降序排序

```text
PREFIX : <http://example.org/university/>SELECT ?studentName ?scoreWHERE {?student a :Student ;:hasName ?studentName ;:hasScore ?score .}ORDER BY ASC(?studentName) DESC(?score)
```

### 3. `LIMIT` & `OFFSET`：结果分页截取

两者需搭配使用，常用于<b>分页查询</b>，依赖 `ORDER BY` 保证结果顺序固定（无排序时，分页结果无意义）。

<b>示例</b>：分页查询第 2 页的学生（每页 10 条）

```text
PREFIX : <http://example.org/university/>SELECT ?studentNameWHERE {?student a :Student ;:hasName ?studentName .}ORDER BY ?studentName  # 必须排序，否则分页结果不固定LIMIT 10 OFFSET 10
```

### 结果集修饰符执行顺序

`SELECT DISTINCT` → `WHERE` 匹配 → `ORDER BY` 排序 → `OFFSET` 跳过 → `LIMIT` 截取

## 二、 聚合函数（Aggregate Functions）

核心作用是对结果集进行<b>统计汇总</b>（如计数、求和、平均值），可分为「全局聚合」和「分组聚合」两类，常搭配 `GROUP BY` 和 `HAVING` 使用。

### 常用聚合函数及功能

<b>关键注意</b>：`SUM`/`AVG` 仅支持 `xsd:integer`/`xsd:double` 等数值类型，非数值类型需先做类型转换。

### 全局聚合（无 `GROUP BY`）

- <b>核心逻辑</b>：聚合函数对 <b>整个结果集</b> 统一计算，最终仅返回 <b>1 行汇总数据</b>。
- <b>强制规则</b>：`SELECT` 子句中<b>不能出现非聚合变量</b>（只能写聚合函数或其别名）。
- <b>语法</b>：`SELECT 聚合函数 AS ?别名`

<b>示例 1</b>：统计数据集中的学生总数

```text
PREFIX : <http://example.org/university/>SELECT COUNT(?student) AS ?totalStudentsWHERE {?student a :Student .}
```

<b>示例 2</b>：计算所有学生的平均成绩

```text
PREFIX : <http://example.org/university/>PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>SELECT AVG(?score) AS ?averageScoreWHERE {?student a :Student ;:hasScore ?score .FILTER (xsd:integer(?score))  # 确保成绩是数值类型}
```

### 分组聚合（带 `GROUP BY`）

- <b>核心作用</b>：按指定变量 / 表达式的值，将结果集划分为多个<b>分组</b>，聚合函数针对每个分组独立计算。
- <b>核心规则</b>
    1. `GROUP BY` 后的变量是<b>分组依据</b>，同一分组内该变量的值完全相同。
    2. `SELECT` 子句中<b>只能出现两类内容</b>：`GROUP BY` 里的变量、被聚合函数包裹的变量。
    3. 执行顺序在 `WHERE` 之后，`HAVING` 之前。

<b>示例</b>：按教授分组，统计每位教授的授课数量

```text
PREFIX : <http://example.org/university/>SELECT ?profName COUNT(?lecture) AS ?lectureCountWHERE {?prof a :Professor ;:hasName ?profName ;:teaches ?lecture .?lecture a :Lecture .}GROUP BY ?profName  # 按教授姓名分组
```

### 4. `HAVING`：过滤聚合后的分组

- <b>核心作用</b>：针对 `GROUP BY` 生成的分组结果进行筛选，<b>仅保留满足条件的分组</b>。
- <b>与 </b><b>FILTER</b><b> 的核心区别</b>

- <b>强制规则</b>：`HAVING` <b>必须和 </b><b>GROUP BY</b><b> 搭配使用</b>，不能单独出现。

<b>示例</b>：筛选授课数 ≥ 3 的教授及其授课数

```text
PREFIX : <http://example.org/university/>SELECT ?profName COUNT(?lecture) AS ?lectureCountWHERE {?prof a :Professor ;:hasName ?profName ;:teaches ?lecture .?lecture a :Lecture .}GROUP BY ?profNameHAVING (COUNT(?lecture) >= 3)  # 过滤聚合后的分组
```

### 聚合相关子句执行顺序

`WHERE` 匹配 → `GROUP BY` 分组 → 聚合函数计算 → `HAVING` 过滤分组 → `ORDER BY` 排序 → `LIMIT`/`OFFSET` 截取

## 三、 综合查询示例（含所有语法）

需求：查询平均成绩 ≥ 80 的班级，展示班级 ID、平均成绩、最高成绩，按平均成绩降序排序，取前 5 个班级。

```text
PREFIX : <http://example.org/university/>PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>SELECT ?classId AVG(?score) AS ?avgScore MAX(?score) AS ?maxScoreWHERE {?student a :Student ;:belongsToClass ?classId ;:hasScore ?score .FILTER (xsd:integer(?score))  # 确保成绩是数值}GROUP BY ?classIdHAVING (AVG(?score) >= 80)  # 过滤平均成绩达标班级ORDER BY DESC(?avgScore)LIMIT 5
```

需要我帮你出一份<b>包含这些语法的练习题</b>，让你巩固实战吗？

# Schema

# Exercise

## Exercise 1

1. The general format of an IRI 

> `\texttt{[scheme] ":" [hierarchical part] ["?" [query]] ["#" [fragment]]}`
> - <b>scheme</b>：协议或方法，如 `http`, `ftp`, `mailto`
> - <b>hierarchical part</b>：主机名 + 路径，如 `www.example.org/page`
> - <b>query</b>：查询参数，如 `?id=123`
> - <b>fragment</b>：片段标识，如 `#section2`

1. The definition of RFD and the function of IRIs and Turtle

> <b>"RDF is a model used to [express] information about a resource."</b>   → 正确：RDF 是一种用于<b>表达</b>资源信息的模型。
> <b>"RDF 1.1 IRIs are used to [identify] resources."</b>   → 正确：IRI 用于<b>标识</b>资源。
> <b>"Turtle is used to [serialize] RDF graphs."</b>   → 正确答案是：<b>serialize</b>

1. When access a resource, the task of URI/HTML/HTTP

> ✅ URI → Identification（标识资源）
> ✅ HTML → Representation（表示资源）
> ✅ HTTP → Transport HTTP is hypertext transfer protocol

1. IETF's task:
    - The IETF provides a forum for interested parties to work on  specifications for internet technology specifications 
    - The IETF also published RFCs that serve as foundation of the World Wide Web:  Uniform Resource Identifiers (URIs) and Hypertext Transfer Protocol (HTTP)

2. Relationship between IRI and Uri：
    - IRIs are a generalization of URIs.
    - IRIs are backwards-compatible to URIs.

3. Metcalfe’s Law: the value of the network was  proportional to the square of the number of users. 
4. About RDF

> 需要掌握关于 RDF (Resource Description Framework) 的几个核心知识点：
> 1. <b>RDF 的全称和定义：</b>
    - 你需要知道 RDF 代表“资源<b>描述</b>框架”(Resource <b>Description</b> Framework)。这个名字本身就排除了很多错误选项。
    - 你要明白它是一个<b>数据模型</b>（一种组织数据的抽象方式），而不是一种编程语言、查询语言或文件系统。
> 2. <b>RDF 的基本结构 (数据模型)：</b>
    - RDF 的基本单位是<b>三元组 (Triple)</b>，即“主语-谓语-宾语”(Subject-Predicate-Object)。
    - 你需要知道这个三元组结构在数学上等同于一个<b>有向图 (Directed Graph)</b>。主语是一个节点，宾语是另一个节点，谓语是连接它们的带标签的箭头。
> 3. <b>RDF 的核心组件 (标识符)：</b>
    - 你需要知道 RDF 使用 <b>IRIs</b> (Internationalized Resource Identifiers，国际化资源标识符) 来唯一地<b>标识</b>主语、谓语，以及（当宾语是另一个资源时）宾语。
    - IRI 是 URI (Uniform Resource Identifier，如网址) 的泛化，支持国际字符。
> 4. <b>RDF 的目的和用途：</b>
    - <b>描述/表达信息：</b> 它的根本目的是用来<b>描述资源</b>或<b>表达关于资源的信息</b>。
    - <b>机器可读性：</b> 这种描述是结构化的，主要是为了让<b>机器</b>（如搜索引擎、应用程序）能够理解，而不仅仅是让人类阅读。
    - <b>链接数据 (Linked Data)：</b> 因为 RDF 使用全局唯一的 IRIs 作为标识符，所以它天生就支持将来自<b>不同领域</b>和<b>不同服务器</b>的数据集<b>互联 (interlink)</b> 在一起。
> 5. <b>你需要区分 RDF 和相关技术：</b>
    - <b>RDF vs. SPARQL:</b> 你需要知道 RDF 是<em>数据模型</em>，而 <b>SPARQL</b> 是用来<em>查询</em> RDF 数据的语言。
    - <b>RDF vs. 文件系统:</b> 你需要知道 RDF 是一种<em>数据</em>抽象，与管理电脑上的<em>文件</em>（如创建、删除文件）毫无关系。
    - <b>RDF vs. 资源本身:</b> 你需要知道 RDF 只是<em>描述</em>资源，它不负责<em>创建</em>或<em>管理</em>资源本身（例如，RDF 不会创建网页，它只描述网页）。
> > - RDF is an <b>abstract data model</b> based on <b>triples</b>:
> &lt;subject&gt; &lt;predicate&gt; &lt;object&gt;\texttt{&lt;subject&gt; &lt;predicate&gt; &lt;object&gt;}
> - These triples form a <b>directed graph</b>, representing relationships between resources.
> <b>The Syntax – RDF Serialization Formats</b>
> Used to write and store RDF data in files:
> 4. <b>The Query – SPARQL</b>
> - SPARQL is the <b>query language</b> for RDF.
> - It allows users to ask questions like:
> - “Which people are interested in paintings by Leonardo da Vinci?”
> 5. <b>The Meaning – RDFS / OWL</b>
> - <b>RDFS (RDF Schema)</b> and <b>OWL (Web Ontology Language)</b> define <b>semantics</b>:
    - Class hierarchies: “A is a type of B”
    - Property relations: “X is part of Y”
> - They enrich RDF data with <b>logical meaning</b> and <b>inference capabilities</b>.
> 6. <b>The Rules – SHACL / ShEx</b>
> - Used to <b>validate RDF data</b> against constraints:
    - Example: “A person must have exactly one birthdate.”
> - SHACL and ShEx define <b>shapes</b> or <b>schemas</b> for RDF graphs.

1. What is resource:
    - <b>物理实体：</b>
        - <b>c. Lars Ulrich...</b> (一个人)
        - <b>e. The lecture hall building...</b> (一个建筑)
    - <b>数字/信息实体：</b>
        - <b>b. A bachelor thesis.</b> (一个文档)
        - <b>d. This quiz.</b> (一个网页或应用)
    - <b>抽象概念：</b>
        - <b>a. The statement...</b> (一个声明或一个想法)

2. About Turtle

<b>It is used to serialize RDF graphs in a human readable fashion.</b>  

1. About Url(Uniform Resource Identifier)
    - <b>Definition</b>: A URI is a <em>Uniform Resource Identifier</em>, used to name or identify resources.
    - <b>Purpose</b>: Serves as a unique name for any resource—documents, people, concepts, etc.
    - <b>Governance</b>: Defined and standardized by the <b>IETF</b> through <b>RFCs</b> (Request for Comments).

2. URI URL

1. DNS：The DNS is hierarchically organised and provides means to map from hostnames to IP addresses.

DNS 的核心功能

- <b>分层结构</b>：DNS 是一个树状结构，从顶级域（如 `.com`、`.org`）到子域（如 `example.com`）再到主机名（如 `www.example.com`）。
- <b>名称解析</b>：它的主要任务是将人类可读的主机名（如 `www.google.com`）转换为机器可读的 IP 地址（如 `142.250.74.196`）。
- <b>分布式系统</b>：DNS 是全球分布式的，查询过程可能涉及多个服务器，从根域名服务器到权威服务器。

1. RDF vocabularies

RDF vocabularies can be used to define sets of terms with agreed upon meaning to allow semantic interpretation of RDF data.

RDF 词汇表（vocabularies）可以用来定义一组术语，这些术语具有一致认可的含义，从而使 RDF 数据具备语义解释能力。

1. Verification of RDF

