---
title: Querying RDF with SPARQL  | 使用SPARQL查询RDF
slug: >-
  X5HAwhUxHixmzTkqv9BcS22Cn6c/BBEOwHkYViRIM1kzyxHc8iKgnMc/Hiz8wVaj7ibrGrk6Bnzck8lfnfb
sidebar_position: 2
---


# Querying RDF with SPARQL  | 使用SPARQL查询RDF

## Basics  | 基础

Based on the provided lecture content, here is a detailed explanation of the <b>Basics of SPARQL</b> (Learning Goal 3.1).

根据提供的讲座内容，以下是对<b>SPARQL基础</b>（学习目标3.1）的详细解释。

<b>SPARQL</b> (SPARQL Protocol and RDF Query Language) is the standard W3C <b>query language</b> for retrieving and manipulating data stored in RDF graphs,. It functions for RDF graphs similarly to how SQL functions for relational databases.

<b>SPARQL</b>（SPARQL协议和RDF查询语言）是W3C标准的<b>查询语言</b>，用于检索和操作存储在RDF图中的数据。它对RDF图的作用类似于SQL对关系数据库的作用。

### General Structure of a SPARQL Query | SPARQL查询的一般结构

A standard SPARQL query comprises four main components processed in a specific order:

标准的SPARQL查询包含按特定顺序处理的四个主要组件：

1. <b>Prefix Declarations:</b> These define abbreviations (CURIEs) for long IRIs to improve readability. Unlike Turtle syntax, SPARQL prefix declarations do <b>not</b> start with an `@` symbol and do <b>not</b> end with a period,.
2. <b>前缀声明：</b>这些声明为长IRI定义缩写（CURIE），以提高可读性。与Turtle语法不同，SPARQL前缀声明不<b>以</b>@`符号开头，也`不<b>以句点结尾</b>。
    - <i>Example:</i> 
    - <i>示例：</i> 
        - SPARQL:`PREFIX ex: <http://example.com/resources/>`
        - Turtle：`@prefix ex: <http://example.com/resources> .`
        - Turtle：`@prefix ex: <http://example.com/resources>.`

1. <b>Query Form and Projection:</b> This specifies the type of query (e.g., `SELECT`) and the variables to be returned.
2. <b>查询表单和投影：</b>这指定了查询的类型（例如，`SELECT`）以及要返回的变量。
3. <b>Dataset Selection:</b> The `FROM` or `FROM NAMED` clauses specify which RDF graphs are being queried.
4. <b>数据集选择：</b>`FROM`或`FROM NAMED`子句指定了正在查询的RDF图。
5. <b>Where Clause (Query Patterns):</b> This contains the <b>Graph Patterns</b> that match against the RDF data.
6. <b>WHERE子句（查询模式）：</b>包含与RDF数据匹配的<b>图模式</b>。
7. <b>Query Modifiers:</b> Clauses like `ORDER BY` or `LIMIT` that rearrange or slice the final results,.
8. <b>查询修饰符：</b>像`ORDER BY`或`LIMIT`这样的子句，用于重新排列或截取最终结果。
    
---

### Variable Projections | 可变投影

Variables in SPARQL act as placeholders that bind to RDF terms (URIs, literals, or blank nodes) in the data.

SPARQL中的变量用作占位符，绑定到数据中的RDF术语（URI、文字或空白节点）。

- <b>Syntax:</b> Variables are prefixed with either a question mark (<b>?</b>) or a dollar sign (<b>$</b>). Both are valid, though `?` is more commonly used.
- <b>语法：</b>变量前缀可以是问号（<b>?</b>）或美元符号（<b>$</b>）。两者都是有效的，不过`?`更为常用。
- <b>Select All:</b> The wildcard <b>*</b> (e.g., `SELECT *`) is used to return all variables bound in the `WHERE` clause.
- <b>全选：</b>使用通配符<b>*</b>（例如`SELECT*`）返回绑定在`WHERE子句`中的所有变量。
    
---

### Query Forms | 查询表单

SPARQL supports four specific query forms, each returning different types of results:

SPARQL支持四种特定的查询形式，每种形式返回不同类型的结果：

- <b>SELECT:</b>
- <b>选择：</b>
    - <b>Output:</b> Returns a <b>table</b> (solution sequence) where each row represents a solution and columns represent variables.
    - <b>输出：</b>返回一个<b>表格</b>（解序列），其中每一行代表一个解，各列代表变量。
    - <i>Usage:</i> This is the most common form, used to extract specific values.
    - <i>用法：</i>这是最常见的形式，用于提取特定值。

- <b>ASK:</b>
- <b>询问：</b>
    - <b>Output:</b> Returns a <b>boolean</b> value (`true` or `false`).
    - <b>输出：</b> 返回一个<b>布尔</b>值（`真`或`假`）。
    - <i>Usage:</i> Checks <em>whether</em> a specific graph pattern exists in the dataset without returning the actual data. It is useful for validation or yes/no questions.
    - <i>用法：</i>检查<em>特定的图模式是否</em>存在于数据集中，而不返回实际数据。它对于验证或是非问题很有用。

- <b>CONSTRUCT:</b>
- <b>构建：</b>
    - <b>Output:</b> Returns a <b>new RDF Graph</b>.
    - <b>输出：</b>返回一个<b>新的RDF图</b>。
    - <i>Usage:</i> It uses a <b>graph template</b>. The variables in the template are filled with the solutions found in the `WHERE` clause to generate new triples. This is often used to transform data from one vocabulary to another,.
    - <i>用法：</i>它使用一个<b>图模板</b>。模板中的变量会用在`WHERE`子句中找到的解来填充，以生成新的三元组。这通常用于将数据从一种词汇表转换为另一种词汇表。

- <b>DESCRIBE:</b>
- <b>描述：</b>
    - <b>Output:</b> Returns an <b>RDF Graph</b> describing one or more resources.
    - <b>输出：</b>返回一个<b> RDF图</b>，描述一个或多个资源。
    - <i>Usage:</i> The exact structure of the description (e.g., whether to include incoming or outgoing edges) is determined by the SPARQL processor implementation, making it useful for exploratory analysis without knowing the exact data structure,.
    - <i>用法：</i>描述的确切结构（例如，是否包含入边或出边）由SPARQL处理器实现决定，这使其在不了解确切数据结构的情况下对探索性分析很有用。
        
---

### Dataset Selection (The FROM Clause) | 数据集选择（FROM子句）

The dataset definition determines the scope of the query.

数据集定义决定了查询的范围。

- <b>FROM </b><b>&lt;IRI&gt;</b><b>:</b> Specifies the graph to be used as the <b>default graph</b> for the query. If multiple `FROM` clauses are used, their data is merged,.
- <b>FROM</b><b>&lt;IRI&gt;</b><b>: </b>指定用作查询的<b>默认图</b>的图。如果使用多个`FROM`子句，则会合并它们的数据。
- <b>FROM NAMED </b><b>&lt;IRI&gt;</b><b>:</b> Used to include graphs that can be referenced explicitly using the `GRAPH` keyword within the query patterns.
- <b>FROM NAMED</b><b>&lt;IRI&gt;</b><b>: </b>用于包含可在查询模式中使用`GRAPH`关键字显式引用的图。
- If omitted, the query executes against the endpoint's pre-configured default graph.
- 如果省略，则查询将针对端点预先配置的默认图执行。
    
---

### Query Patterns (The WHERE Clause) | 查询模式（WHERE子句）

The core logic resides in the `WHERE` block, which contains a <b>Basic Graph Pattern (BGP)</b>.

核心逻辑位于`WHERE`块中，该块包含一个<b>基本图模式（BGP）</b>。

- <b>Triple Patterns</b><b>:</b> These look like RDF triples but may contain variables in the subject, predicate, or object positions.
- <b>三元组模式</b><b>：</b>它们看起来像RDF三元组，但可能在主语、谓语或宾语位置包含变量。
- <b>Implicit AND:</b> A list of triple patterns must all match for a solution to be valid (logical conjunction).
- <b>隐式AND：</b>三元组模式列表中的所有模式都必须匹配，解决方案才有效（逻辑合取）。
- <b>Implicit JOIN:</b> If the same variable name (e.g., `?x`) appears in multiple patterns, the SPARQL engine ensures that the variable binds to the <b>same RDF term</b> in all occurrences, effectively joining the data.
- <b>隐式连接：</b>如果相同的变量名（例如`?x`）出现在多个模式中，SPARQL引擎会确保该变量在所有出现的地方都绑定到<b>同一个RDF术语</b>，从而有效地连接数据。
- <b>Abbreviations:</b> SPARQL supports Turtle-style abbreviations inside the `WHERE` clause:
- <b>缩写：</b> SPARQL支持在` WHERE `子句中使用Turtle风格的缩写：
    - <b>a</b>: Shorthand for `rdf:type`.
    - <b>a</b>：`rdf:type`的简写。
    - <b>;</b>: Repeats the subject for the next predicate-object pair.
    - <b>;</b>：重复下一个谓语-宾语对的主语。
    - <b>,</b>: Repeats the subject and predicate for the next object.
    - <b>,</b>：重复下一个对象的主语和谓语。
        
---

### Sequence Modifiers | 序列修饰符

Modifiers are applied after the pattern matching to organize the result set.

修饰符在模式匹配后应用，以组织结果集。

- <b>ORDER BY:</b> Sorts the results based on variable values.
- <b>ORDER BY:</b>根据变量值对结果进行排序。
    - <i>Syntax:</i> `ORDER BY ?var` (default ascending), `ORDER BY ASC(?var)`, or `ORDER BY DESC(?var)`.
    - <i>语法：</i> `ORDER BY?var`（默认升序），`ORDER BY ASC(?var)`，或`ORDER BY DESC(?var)`。

- <b>LIMIT:</b> Restricts the output to a maximum number of rows. This is essential for performance when querying large datasets (e.g., DBpedia).
- <b>限制：</b>将输出限制为最大行数。在查询大型数据集（例如DBpedia）时，这对性能至关重要。
- <b>OFFSET:</b> Skips the first <em>x</em> solutions.
- <b>偏移量：</b>跳过前<em>x</em>个解。
    - <i>Usage:</i> Combined with `LIMIT`, this enables <b>pagination</b> (e.g., "show results 11–20").
    - <i>用法：</i>与`LIMIT`结合使用，可实现<b>分页</b>（例如，“显示结果11 - 20”）。

- <b>DISTINCT:</b> Removes duplicate rows from the result set.
- <b>DISTINCT：</b>从结果集中删除重复行。
    - <i>Usage:</i> `SELECT DISTINCT ?x` ensures that even if `?x` is matched via multiple paths, it appears only once in the table.
    - <i>用法：</i> `SELECT DISTINCT?x`确保即使`?x`通过多条路径匹配，它在表中也仅出现一次。

## Write BGP queries in SPARQL with different forms (SELECT, CONSTRUCT, ASK, DESCRIBE)   | 用不同形式（SELECT、CONSTRUCT、ASK、DESCRIBE）在SPARQL中编写BGP查询

Based on the provided sources, here is a detailed explanation of Basic Graph Patterns (BGPs), the theoretical concepts of solution mappings, and how to utilize them across the four primary SPARQL query forms (SELECT, CONSTRUCT, ASK, DESCRIBE).

根据提供的资料，以下是对基本图模式（BGP）、解决方案映射的理论概念，以及如何在四种主要的SPARQL查询形式（SELECT、CONSTRUCT、ASK、DESCRIBE）中使用它们的详细解释。

### Basic Graph Patterns (BGP) and Solution Mappings | 基本图模式（BGP）和解决方案映射

The core of a SPARQL query is the <b>Basic Graph Pattern (BGP)</b> found within the `WHERE` clause.

SPARQL查询的核心是<b>基本图模式（BGP）</b>，它位于`WHERE`子句中。

- <b>Definition:</b> A BGP is a set of <b>triple patterns</b>. A triple pattern is similar to an RDF triple but allows variables (prefixed with `?` or `$`) in the subject, predicate, or object positions.
- <b>定义：</b> 一个BGP是一组<b>三元组模式</b>。三元组模式类似于RDF三元组，但允许在主语、谓语或宾语位置使用变量（前缀为`?`或`$`）。
- <b>Logical Conjunction:</b> BGPs represent a logical <b>AND</b>. All triple patterns within a BGP must match the data for a solution to be valid.
- <b>逻辑合取：</b> BGP 表示逻辑<b>与</b>。 BGP 中的所有三元组模式都必须与数据匹配，解决方案才有效。
- <b>Implicit Joins:</b> If the same variable name appears in multiple triple patterns within a BGP, the SPARQL engine enforces a join. The variable must bind to the <b>same RDF term</b> in all its occurrences.
- <b>隐式连接：</b>如果同一变量名出现在多个 BGP内的三元组模式中，SPARQL引擎会强制执行连接。该变量必须绑定到<b>所有出现位置的同一RDF术语</b>。
- <b>Syntax:</b> BGPs can use Turtle-style abbreviations, such as `;` (semicolon) to repeat a subject, `,` (comma) to repeat a predicate, and `a` for `rdf:type`.
- <b>语法：</b> BGP 可以使用 Turtle 风格的缩写，例如`;`（分号）用于重复主语，`,`（逗号）用于重复谓语，以及`a`用于`rdf:type`。
    
#### Theoretical Foundation: Solution Mappings ($\mu$) and Sequences ($\Omega$) | 理论基础：解决方案映射（$\mu$）和序列（$\Omega$）

To evaluate a BGP, the SPARQL engine performs pattern matching to find a subgraph in the data that matches the pattern.

为了评估BGP，SPARQL引擎执行模式匹配，以在数据中找到与该模式匹配的子图。

- <b>Solution Mapping (</b>$\mu$<b>):</b> This is a partial function that maps variables ($V$) to RDF terms (URIs, Blank Nodes, or Literals). It represents a single "row" of results.
- <b>解决方案映射（</b>$\mu$<b>）：</b>这是一个部分函数，它将变量（$V$）映射到RDF术语（URI、空白节点或文字）。它表示结果的单个“行”。
    - <i>User Example:</i> $\mu_1(?borough) = :Pankow, \mu_1(?berlin) = :Berlin$. This indicates that in one specific match found in the data, the variable `?borough` corresponds to the entity `:Pankow` and `?berlin` to `:Berlin`.
    - <i>用户示例：</i> $\mu_1(?borough) = :Pankow, \mu_1(?berlin) = :Berlin$这表明在数据中找到的一个特定匹配中，变量`?borough`对应实体`:Pankow`，`?berlin`对应`:Berlin`。

- <b>Solution Sequence (</b>$\Omega$<b>):</b> This is a collection (ordered list or multiset) of all solution mappings generated by evaluating the graph pattern against the dataset.
- <b>解决方案序列（</b>$\Omega$<b>）：</b>这是通过将图模式与数据集进行评估而生成的所有解决方案映射的集合（有序列表或多重集）。
    - <i>User Example:</i> $\Omega = \{ \mu_1, \mu_2 \}$ represents the full set of answers found.
    - <i>用户示例：</i> $\Omega = \{ \mu_1, \mu_2 \}$表示找到的完整答案集。
        
---

### SPARQL Query Forms | SPARQL查询形式

While the BGP (the `WHERE` clause) determines <em>what</em> data is matched, the <b>Query Form</b> determines <em>how</em> that data is returned.

虽然BGP（`WHERE`子句）决定了<em>匹配</em>哪些数据，但<b>查询表单</b>决定了<em>如何</em>返回这些数据。

#### A. SELECT | A. 选择

The <b>SELECT</b> query returns a table (a solution sequence) of variable bindings. It projects specific variables from the solution mappings found in the pattern matching phase.

<b>SELECT</b>查询返回一个变量绑定表（解序列）。它从模式匹配阶段找到的解映射中投影特定变量。

- <b>Function:</b> It is an algebra expression of the form $SELECT_S(P)$, where $P$ is the graph pattern and $S$ is the set of variables to project.
- <b>功能：</b>它是形式为$SELECT_S(P)$的代数表达式，其中$P$是图模式，$S$是要投影的变量集。
- <b>Output:</b> A table where rows are solutions and columns are variables.
- <b>输出：</b>一个表格，其中行代表解，列代表变量。
- <b>Algebraic Process:</b> It evaluates the graph pattern to get $\Omega$ and then projects out the selected variables.
- <b>代数处理过程：</b>它对图模式进行求值以得到$\Omega$，然后投影出所选变量。
- <b>Example:</b>
- <b>示例：</b>
    ```text
SELECT ?y WHERE {
   _:x :name ?y .
}
```
    If the graph contains `_:x :name "Berlin"`, the result is a sequence containing the mapping `{?y -> "Berlin"}`.
    如果图包含`_:x :name "柏林"`，则结果是一个包含映射`{?y -> "柏林"}`的序列。
    
#### B. ASK | B. 询问

The <b>ASK</b> query returns a <b>boolean</b> (True/False). It checks whether a solution exists without returning the actual data.

ASK<b>查询返回一个</b>布尔值<b>（True/False）</b>。它检查是否存在解决方案，而不返回实际数据。

- <b>Function:</b> It is an expression of the form $ASK(P)$.
- <b>函数：</b>它是形式为$ASK(P)$的表达式。
- <b>Logic:</b> It returns `TRUE` if the set of solution mappings $\Omega$ is <b>not empty</b> ($\Omega \neq \emptyset$), and `FALSE` otherwise.
- <b>逻辑：</b>如果解映射集`非空`（$\Omega$），则返回<b>TRUE</b>，$\Omega \neq \emptyset$否则返回`FALSE`。
- <b>Use Case:</b> Useful for validating if a specific pattern or condition exists in the dataset (e.g., "Are there any students in semester 6?").
- <b>用例：</b>用于验证数据集中是否存在特定模式或条件（例如，“是否有第六学期的学生？”）。
- <b>Example:</b>
- <b>示例：</b>
    ```text
ASK WHERE {
   ?student :semesterCount ?s .
   FILTER(?s > 10)
}
```
    
#### C. CONSTRUCT | C. 构建

The <b>CONSTRUCT</b> query returns a <b>new RDF Graph</b>. It uses a graph template to generate triples based on the query results.

<b>CONSTRUCT</b>查询返回一个<b>新的RDF图</b>。它使用图模板根据查询结果生成三元组。

- <b>Function:</b> It takes a graph pattern ($P$) to find solutions and a template set of triple patterns ($Q$) to generate new data: $CONSTRUCT(P, Q)$.
- <b>功能：</b>它接受一个图模式（$P$）来查找解决方案，以及一个三元组模式的模板集（$Q$）来生成新数据：$CONSTRUCT(P, Q)$。
- <b>Process:</b>
- <b>流程：</b>
    1. Evaluate the `WHERE` clause ($P$) to get the solution sequence $\Omega$.
    2. 计算`WHERE`子句（$P$）以获得解序列$\Omega$。
    3. For every mapping $\mu$ in $\Omega$, apply the variable values to the template ($Q$).
    4. 对于每个映射$\mu$在$\Omega$中，将变量值应用到模板（$Q$）。
    5. The union of all these generated triples forms the resulting graph.
    6. 所有这些生成的三元组的并集构成了结果图。

- <b>Handling Blank Nodes:</b> If the template ($Q$) contains a blank node, the system generates a <b>fresh blank node</b> for every solution mapping. This ensures distinct resources are created for each result.
- <b>处理空白节点：</b>如果模板（$Q$）包含空白节点，系统会为每个解决方案映射生成一个<b>新的空白节点</b>。这确保为每个结果创建不同的资源。
- <b>Example:</b>
- <b>示例：</b>
    ```text
CONSTRUCT { ?student ex:name ?name }
WHERE { ?student :name ?name }
```
    This transforms the data into a new graph using the `ex:name` property.
    这将使用`ex:name`属性将数据转换为新的图。
    
#### D. DESCRIBE | D. 描述

The <b>DESCRIBE</b> query returns an <b>RDF Graph</b> that describes specific resources.

该<b>DESCRIBE</b>查询返回描述特定资源的<b>RDF图</b>。

- <b>Function:</b> It returns an RDF description of the resources identified by IRIs or variables provided in the query.
- <b>功能：</b>它返回由查询中提供的IRI或变量标识的资源的RDF描述。
- <b>Flexibility:</b> The exact definition of "description" is <b>implementation-dependent</b>. It is not strictly defined by the SPARQL standard. Typically, it returns all triples where the resource is the subject, and sometimes triples where it is the object (inverse relationships) or related blank nodes.
- <b>灵活性：</b>“描述”的确切定义<b>取决于具体实现</b>。它并非由SPARQL标准严格定义。通常情况下，它会返回资源作为主语的所有三元组，有时也会返回资源作为宾语的三元组（逆关系）或相关的空白节点。
- <b>Use Case:</b> Useful for exploratory data analysis when you do not know the exact structure of the data surrounding a resource.
- <b>用例：</b>当您不知道围绕某个资源的数据的确切结构时，适用于探索性数据分析。
- <b>Example:</b>
- <b>示例：</b>
    ```text
DESCRIBE :student28106
```
    This would return all available information (triples) regarding that specific student.
    这将返回有关该特定学生的所有可用信息（三元组）。

## Correctly apply UNION in queries   | 在查询中正确应用 UNION

Based on the provided sources, here is a detailed explanation of <b>Learning Goal 3.3: Correctly apply UNION in queries</b>.

根据提供的资料，以下是对<b>学习目标3.3：在查询中正确应用UNION</b>的详细解释。

### 1. The Concept of UNION | 1. 并集的概念

The `UNION` clause in SPARQL is used to combine results from two or more alternative graph patterns. It allows you to search for data that matches <b>either</b> one pattern <b>or</b> another, effectively functioning as a logical <b>OR</b>.

SPARQL中的`UNION`子句用于合并来自两个或多个可选图模式的结果。它允许你搜索<b>符合</b>一个模式<b>或</b>另一个模式的数据，实际上起到了逻辑<b>或</b>的作用。

- <b>Mechanism:</b> The SPARQL processor evaluates each graph pattern separated by `UNION` <b>independently</b>. The results (solution mappings) from these independent evaluations are then merged into a single result set.
- <b>机制：</b> SPARQL处理器独立评估由` UNION `分隔的每个图形模式<b>。</b>然后将这些独立评估的结果（解决方案映射）合并到一个结果集中。
- <b>Algebraic Definition:</b> Formally, the Union operator takes two sets of solution mappings ($\Omega_l$ and $\Omega_r$) and creates a new set containing all mappings found in either: $Union(\Omega_l, \Omega_r) := \{ \mu \mid \mu \in \Omega_l \text{ or } \mu \in \Omega_r \}$.
- <b>代数定义：</b>形式上，联合运算符接受两组解映射（$\Omega_l$和$\Omega_r$），并创建一个新集合，其中包含在任一集合中找到的所有映射：$Union(\Omega_l, \Omega_r) := \{ \mu \mid \mu \in \Omega_l \text{ or } \mu \in \Omega_r \}$。
    
### 2. Analyzing Your Examples | 2. 分析你的示例

Your query provides two ways to write a request for city names where the name property might vary (either `:name` or `rdfs:label`).

您的查询提供了两种编写城市名称请求的方式，其中名称属性可能会有所不同（即`:name`或`rdfs:label`）。

#### Approach A: Repeating the Common Pattern (Verbose) | 方法A：重复常见模式（冗长）

```text
SELECT ?name WHERE {
  { ?city :name ?name . ?city a :City }
  UNION
  { ?city rdfs:label ?name . ?city a :City }
}
```

- <b>Logic:</b> Here, the condition `?city a :City` is repeated inside every branch of the `UNION`.
- <b>逻辑：</b>这里，条件`?city a :City`在`UNION`的每个分支中重复出现。
- <b>Execution:</b> The processor searches for cities with a `:name`, then independently searches for cities with an `rdfs:label`. Finally, it merges the two lists.
- <b>执行过程：</b>处理器先搜索具有`:name`的城市，然后独立搜索具有`rdfs:label`的城市。最后，将这两个列表合并。
- <b>Redundancy:</b> While valid, this approach forces you to repeat shared constraints (like being a `:City`) in every alternative block.
- <b>冗余性：</b>虽然这种方法有效，但它会迫使你在每个替代块中重复共享约束（如作为`:City`）。
    
#### Approach B: Factoring Out the Common Pattern (Optimized) | 方法B：提取公因式（优化版）

```text
SELECT ?name WHERE {
  ?city a :City .
  { ?city :name ?name }
  UNION
  { ?city rdfs:label ?name }
}
```

- <b>Logic:</b> You state the common requirement (`?city a :City`) once, outside the `UNION` block.
- <b>逻辑：</b>你在`UNION`块外部声明一次公共要求（`?city a :City`）。
- <b>Execution:</b> This acts as a logical conjunction (AND). The query engine finds resources that are of type `:City` <b>AND</b> (have a `:name` <b>OR</b> have an `rdfs:label`).
- <b>执行：</b>此操作充当逻辑合取（AND）。查询引擎查找类型为`:City` <b>并且</b>（具有`:name` <b>或者</b>具有`rdfs:label`）的资源。
- <b>Benefit:</b> This is generally preferred for readability and maintenance. As noted in your query, "If a query is repeated, it can be used once" by placing it outside the `UNION` block, applying it to the combined results of the union.
- <b>优点：</b>一般来说，这样做更有利于可读性和维护性。正如您的查询中所提到的，“如果一个查询被重复使用，那么可以将其放在`UNION`块之外，应用于联合的组合结果”，从而只使用一次。
    
### 3. Key Rules for Applying UNION | 3. 使用 UNION 的关键规则

<b>1. Independent Evaluation</b>

<b>1. 独立评估</b>

Patterns inside `UNION` blocks are evaluated independently. A variable bound in the first block does not constrain the second block during the initial pattern matching of that specific block. However, if a variable (like `?city` in your examples) is bound outside the `UNION`, that binding is carried into the union evaluation.

独立计算`UNION`块内的模式。在该特定块的初始模式匹配期间，第一个块中绑定的变量不会约束第二个块。但是，如果变量（例如示例中的`？ city`）绑定在`UNION`之外，则该绑定将携带到联合计算中。

<b>2. Variable Binding</b>

<b>2. 变量绑定</b>

- <b>Shared Variables:</b> If the same variable (e.g., `?name`) is used in both branches, it will be bound in the final result regardless of which branch produced the solution.
- <b>共享变量：</b>如果同一变量（例如，`?name`）在两个分支中都被使用，那么无论哪个分支产生了解决方案，它都会在最终结果中被绑定。
- <b>Unshared Variables:</b> If a variable appears in only one branch (e.g., `?name` in branch 1 and `?label` in branch 2), it will remain <b>unbound</b> for solutions generated by the other branch.
- <b>非共享变量：</b>如果一个变量仅出现在一个分支中（例如，`?name`在分支1中，`?label`在分支2中），那么它将保持<b>未绑定</b>状态，对于由另一个分支生成的解。
    
<b>3. Handling Duplicates (Set vs. Bag Semantics)</b>

<b>3. 处理重复项（集合语义与包语义）</b>

- <b>Standard Behavior:</b> Unlike the mathematical set union, the SPARQL `UNION` clause retains duplicates by default (similar to SQL's `UNION ALL`). If a city has <em>both</em> a `:name` "Berlin" and an `rdfs:label` "Berlin", and both match the query, "Berlin" will appear twice in the results.
- <b>标准行为：</b>与数学集合的并集不同，SPARQL的`UNION`子句默认保留重复项（类似于SQL的`UNION ALL`）。如果一个城市<em>同时</em>有`:name` "柏林"和`rdfs:label` "柏林"，且两者都与查询匹配，那么"柏林"将在结果中出现两次。
- <b>Correction:</b> To ensure unique results, you must explicitly use the `SELECT DISTINCT` modifier.
- <b>修正：</b>为确保结果唯一，您必须显式使用`SELECT DISTINCT`修饰符。
    
### 4. Application Example | 4. 应用示例

From the lecture data, imagine we want to list all people, whether they are Students or Professors. We can use `UNION` to combine these two disjoint types:

从讲座数据来看，假设我们要列出所有人员，无论他们是学生还是教授。我们可以使用`UNION`来合并这两种不相交的类型：

```text
SELECT ?person ?name WHERE {
  {
    ?person a :Student ;       # First block: find students
            :name ?name .
  }
  UNION
  {
    ?person a :Professor ;     # Second block: find professors
            :name ?name .
  }
}
```

This merges the set of students with the set of professors into a single "people" list.

此操作将学生集合与教授集合合并为一个单一的“人员”列表。

## Correctly apply OPTIONAL in queries  | 在查询中正确应用OPTIONAL

Based on the provided lecture content, here is a detailed explanation of <b>Learning Goal 3.4: Correctly apply OPTIONAL in queries</b>, specifically analyzing your example query.

根据提供的讲座内容，以下是对<b>学习目标3.4：在查询中正确应用OPTIONAL</b>的详细解释，具体分析您提供的示例查询。

### 1. The Purpose of OPTIONAL | 1. OPTIONAL的目的

In real-world RDF datasets, data is often "ragged" or heterogeneous, meaning not all resources share the same set of properties. For example, while every city might have a name, not every city in a dataset might have a recorded zip code.

在现实世界的RDF数据集中，数据往往是“参差不齐”或异构的，这意味着并非所有资源都共享相同的属性集。例如，虽然每个城市可能都有名称，但数据集中并非每个城市都有记录的邮政编码。

- <b>Standard Behavior (BGP):</b> A standard Basic Graph Pattern acts as a logical <b>AND</b>. If you wrote the query without `OPTIONAL` (e.g., `?city :name ?name . ?city :zip ?zip .`), the SPARQL processor would discard any city that did not have <em>both</em> a name and a zip code,.
- <b>标准行为（BGP）：</b>标准的基本图模式充当逻辑<b>与</b>。如果您在查询中不使用`OPTIONAL`（例如，`?city :name?name.?city :zip?zip.`），SPARQL处理器将丢弃任何<em>既</em>没有名称又没有邮政编码的城市。
- <b>OPTIONAL Behavior:</b> The `OPTIONAL` clause prevents this data loss. It allows the query to return information found in the main pattern even if the pattern inside the `OPTIONAL` block fails to match.
- <b>可选行为：</b> `可选`子句可防止这种数据丢失。它允许查询返回在主模式中找到的信息，即使`可选`块内的模式未能匹配。
    
### 2. Analyzing Your Query | 2. 分析您的查询

Your specific query is structured to retrieve a list of city names and, if available, their zip codes.

您的特定查询旨在检索城市名称列表，若有可用信息，还会检索其邮政编码。

```text
SELECT ?name ?zip WHERE {
   ?city :name ?name .        # Mandatory Pattern
   OPTIONAL {
      ?city :zip ?zip         # Optional Pattern
   }
}
```

#### Mechanism of Evaluation | 评估机制

1. <b>Mandatory Matching:</b> The processor first evaluates the pattern outside the `OPTIONAL` block (`?city :name ?name`). It finds all resources that have a `:name` and binds the variables `?city` and `?name`. If a resource does not have a name, it is excluded entirely.
2. <b>强制匹配：</b>处理器首先计算`OPTIONAL`块外部的模式（`?city :name?name`）。它会找到所有具有`:name`的资源，并绑定变量`?city`和`?name`。如果某个资源没有名称，则会被完全排除。
3. <b>Optional Matching:</b> For every solution found in step 1, the processor attempts to match the pattern inside the curly braces of the `OPTIONAL` clause (`?city :zip ?zip`).
4. <b>可选匹配：</b>对于步骤1中找到的每个解决方案，处理器尝试匹配 `OPTIONAL`子句的花括号内的模式（`?city :zip?zip`）。
5. <b>Result Generation:</b>
6. <b>结果生成：</b>
    - <b>Case A (Match Found):</b> If the city has a zip code, the variable `?zip` is <b>bound</b> to that value. The result row will contain both the name and the zip code.
    - <b>情况A（找到匹配项）：</b>如果城市有邮政编码，则变量`?zip`被<b>绑定</b>到该值。结果行将同时包含名称和邮政编码。
    - <b>Case B (No Match Found):</b> If the city does <em>not</em> have a zip code, the solution is <b>retained</b>. However, the variable `?zip` remains <b>unbound</b> (empty or null) for that specific row,.
    - <b>情况B（未找到匹配项）：</b>如果城市<em>没有</em>邮政编码，则解决方案<b>保留</b>。但是，对于该特定行，变量`?zip`仍<b>未绑定</b>（为空或空值）。
        
### 3. Algebraic Definition (LeftJoin) | 3. 代数定义（左连接）

From a formal theoretical perspective (Source 6), the `OPTIONAL` clause corresponds to the <b>LeftJoin</b> operator in relational algebra.

从形式理论的角度来看（源6），`OPTIONAL`子句对应于关系代数中的<b>LeftJoin</b>运算符。

- The algebra expression for `P1 OPTIONAL P2` is defined as `LeftJoin(eval(P1), eval(P2))`.
- 对于`P1 OPTIONAL P2`的代数表达式定义为`LeftJoin(eval(P1), eval(P2))`。
- The `LeftJoin` is defined as the union of two sets:
- 左连接`LeftJoin`定义为两个集合的并集：
    1. The <b>Join</b> of $P1$ and $P2$ (where the data exists in both).
    2. <b>连接</b>的$P1$和$P2$（其中数据在两者中都存在）。
    3. The <b>Minus</b> of $P1$ and $P2$ (rows from $P1$ that are incompatible with $P2$, keeping the $P1$ variables bound and $P2$ variables unbound).
    4. 减去<b> </b>中的$P1$和$P2$（来自$P1$的行与$P2$不兼容，保持$P1$变量绑定，$P2$变量未绑定）。
        
### 4. Advanced Application: Checking for Missing Data | 4. 高级应用：检查缺失数据

You can combine `OPTIONAL` with the `FILTER` and `BOUND()` functions to specifically find items where data is <em>missing</em> (Negation as Failure).

您可以将`OPTIONAL`与`FILTER`和`BOUND()`函数结合使用，以专门查找数据<em>缺失</em>的项目（失败即否定）。

For example, to find cities that have a name but <b>no</b> zip code, you would check if the `?zip` variable was left unbound:

例如，要查找有名称但<b>没有</b>邮政编码的城市，您可以检查`?zip`变量是否未被绑定：

```text
SELECT ?name WHERE {
   ?city :name ?name .
   OPTIONAL { ?city :zip ?zip }
   FILTER (!BOUND(?zip))
}
```

This pattern keeps only the solutions where the optional matching failed.

此模式仅保留可选匹配失败的解决方案。

## Use BIND ... AS and FILTER in conjuction with expression involving functions (filters, functions and modifiers)   | 将BIND... AS和FILTER与涉及函数（过滤器、函数和修饰符）的表达式结合使用

Based on the provided lecture materials, here is a detailed explanation of using <b>BIND</b> and <b>FILTER</b> in conjunction with functions, corresponding to Learning Goal 3.5.

根据提供的讲座材料，以下是关于结合函数使用<b>BIND</b>和<b>FILTER</b>的详细解释，对应学习目标3.5。

### 1. restricting Results with FILTER | 1. 使用FILTER限制结果

The <b>FILTER</b> clause is used to restrict the solutions generated by a graph pattern. It evaluates a boolean condition for every potential solution; if the condition evaluates to `true`, the solution is kept; if `false` or an error occurs, the solution is discarded.

<b>FILTER</b>子句用于限制由图模式生成的解。它会对每个潜在解计算一个布尔条件；如果条件计算结果为`真`，则保留该解；如果为`假`或发生错误，则丢弃该解。

#### A. Comparison and Arithmetic Operators | A. 比较和算术运算符

Filters operate on graph patterns and restrict values using standard operators.

过滤器对图模式进行操作，并使用标准运算符限制值。

- <b>Numeric Comparisons:</b> You can compare numeric types (integers, decimals, floats) using operators such as `=`, `!=`, `<`, `>`, `<=`, and `>=`.
- <b>数值比较：</b>你可以使用诸如`=`、`!=`、`<`、`>`、`<=`和`>=`等运算符来比较数值类型（整数、小数、浮点数）。
    - <i>Example:</i> `FILTER (?population > 350000)` ensures only entities with a population greater than 350,000 are returned.
    - <i>示例：</i> `FILTER (?population > 350000)`确保仅返回人口超过350000的实体。

- <b>String Comparisons:</b> These operators also apply to strings based on lexicographic order. By default, string comparisons are case-sensitive.
- <b>字符串比较：</b>这些运算符也适用于基于字典序的字符串。默认情况下，字符串比较区分大小写。
    - 具体可以使用上面的比较符号 字典顺序比较 有时需要切换大小写 `FILTER (LCASE(?name) < LCASE("M"))` 这是小写 lowercase 或者`FILTER (UCASE(?name) = UCASE("alice"))` uppercase

- <b>Datatypes:</b> Comparison logic respects XML Schema Datatypes (XSD). For example, `xsd:integer`, `xsd:dateTime`, and `xsd:boolean`.
- <b>数据类型：</b>比较逻辑遵循 XML 架构数据类型 (XSD)。例如，`xsd:integer`、`xsd:dateTime`和`xsd:boolean`。
    
#### B. Logical Connectives | B. 逻辑连接词

You can combine multiple conditions into a single complex expression using logical operators:

您可以使用逻辑运算符将多个条件组合成一个复杂的表达式：

- <b>AND (</b><b>&&</b><b>):</b> Both conditions must be true.
- <b>AND ( </b><b>&&</b><b>): </b>两个条件都必须为真。
- <b>OR (</b><b>||</b><b>):</b> At least one condition must be true.
- <b>或 (</b><b>||</b><b>):</b>至少有一个条件必须为真。
- <b>NOT (</b><b>!</b><b>):</b> Inverts the boolean result.
- <b>NOT (</b><b>!</b><b>):</b>反转布尔结果。
    
<i>User Example Context:</i>

<i>用户示例上下文：</i>

The query `FILTER (str(?n)="Aachen" && ?p>500000)` combines a string equality check with a numeric comparison. Both must be satisfied for the result to appear.

查询`FILTER (str(?n)="Aachen" &&?p>500000)`将字符串相等性检查与数值比较结合起来。结果要出现，两者都必须满足。

#### C. Functions in Filters | C. 过滤器中的函数

SPARQL allows the use of functions within `FILTER` clauses to perform complex checks:

SPARQL允许在`FILTER`子句中使用函数来执行复杂的检查：

- <b>String Functions:</b>
- <b>字符串函数：</b>
    - `REGEX(?var, "pattern", "flags")`: Checks if a string matches a regular expression (e.g., using flag "i" for case-insensitivity).
    - `REGEX(?var, "pattern", "flags")`: 检查字符串是否与正则表达式匹配（例如，使用标志 "i" 实现不区分大小写）。
        - `FILTER REGEX(?name, "abc")`
        - `过滤正则表达式(?name, "abc")`
    - `STRSTARTS` / `STRENDS`: Checks if a string starts or ends with a specific sequence.
    - `STRSTARTS` / `STRENDS`：检查字符串是否以特定序列开头或结尾。
        - `FILTER STRSTARTS(?name, "Dr.")`
        - `过滤器 STRSTARTS(?name, "Dr.")`
    - `CONTAINS`: Checks if a string contains a substring.
    - `包含`：检查字符串是否包含子字符串。
        - `FILTER CONTAINS(?email, "rwth")`
        - `过滤器包含(?email, "rwth")`
    - `LCASE` / `UCASE`: Converts strings to lower or upper case to facilitate case-insensitive comparisons.
    - `LCASE` / `UCASE`：将字符串转换为小写或大写，以便进行不区分大小写的比较。
        - `FILTER (LCASE(?name) = "alice")`

- <b>Language Functions:</b> `LANGMATCHES(LANG(?v), "en")` checks if a literal is tagged with a specific language.
- <b>语言函数：</b> `LANGMATCHES(LANG(?v), "en")`检查一个文字是否标记有特定语言。
    - `FILTER LANGMATCHES(LANG(?label), "en")`

- <b>Datatype Functions:</b> `DATATYPE(?v)` retrieves the datatype IRI of a literal.
- <b>数据类型函数：</b> `DATATYPE(?v)`检索字面量的数据类型IRI。
    - `FILTER (DATATYPE(?value) = xsd:integer)`

---

### 2. Handling Negation: OPTIONAL and !BOUND | 2. 处理否定：OPTIONAL和!BOUND

One of the most common patterns for checking that something <em>does not</em> exist (Negation as Failure) involves combining `OPTIONAL` with `FILTER` and the `BOUND()` function.

检查某事物<em>不存在</em>（失败即否定）的最常见模式之一是将`OPTIONAL`与`FILTER`以及`BOUND()`函数结合使用。

- <b>BOUND(?x)</b>: Returns `true` if variable `?x` is bound to a value in the current solution, and `false` otherwise.
- <b>BOUND(?x)</b>：如果变量`?x`在当前解中已绑定到某个值，则返回`true`；否则返回`false`。
- <b>The Pattern:</b>
- <b>模式：</b>
    1. Match the main pattern (e.g., find a city).
    2. 匹配主要模式（例如，查找城市）。
    3. Use `OPTIONAL` to attempt matching extra data (e.g., find the city's state).
    4. 使用`OPTIONAL`尝试匹配额外数据（例如，查找城市所在的州）。
    5. Use `FILTER (!BOUND(?state))` to keep only the solutions where the optional match <b>failed</b>.
    6. 使用`FILTER (!BOUND(?state))`仅保留可选匹配<b>失败</b>的解。
        
<i>User Example Context:</i>

<i>用户示例上下文：</i>

```text
SELECT ?city WHERE {
  ?city :name ?name .
  OPTIONAL { ?city :state ?state }
  FILTER (!bound(?state))
}
```

This query returns cities that do <b>not</b> have a recorded state property. If the optional block finds a state, `?state` becomes bound, `!bound(?state)` becomes false, and the city is filtered out.

此查询返回<b>没有</b>记录状态属性的城市。如果可选块找到一个状态，`?state`将被绑定，`!bound(?state)`将变为假，并且该城市将被过滤掉。

---

### 3. Assigning Values with BIND ... AS | 3. 使用BIND... AS赋值

While `FILTER` removes solutions, <b>BIND</b> is used to compute new values or modify existing ones and assign them to a variable.

虽然`FILTER`用于移除解决方案，<b>BIND</b>则用于计算新值或修改现有值，并将其赋值给变量。

- <b>Syntax:</b> `BIND (expression AS ?newVariable)`.
- <b>语法：</b> `BIND (表达式 AS?新变量)`。
- <b>Scope:</b> The new variable is available in the subsequent graph patterns, filters, and the `SELECT` clause.
- <b>作用域：</b>新变量在后续的图模式、过滤器和`SELECT`子句中可用。
    
#### A. Arithmetic Calculations | A. 算术运算

You can perform mathematical operations (`+`, `-`, `*`, `/`) on numeric variables.

可以对数值变量执行数学运算（`+`、`-`、`*`、`/`）。

- <i>Source Example:</i> `BIND ((6 - ?currentSemester) AS ?remainingSemesters)` calculates the difference between a standard duration and the current semester count.
- <i>源示例：</i> `BIND ((6 -?currentSemester) AS?remainingSemesters)`计算标准时长与当前学期数之间的差值。
- <i>User Example:</i> `BIND ( abs(?pPop - ?nPop) AS ?diffPop )` computes the absolute difference between two population variables.
- <i>用户示例：</i> `BIND ( abs(?pPop -?nPop) AS?diffPop )`计算两个人口变量之间的绝对差值。
    
#### B. String and Logical Manipulation | B. 字符串和逻辑操作

`BIND` is also used for string concatenation or conditional logic.

`BIND`也用于字符串连接或条件逻辑。

- <b>Concatenation:</b> `BIND (CONCAT("Prof. ", ?name) AS ?formalName)` combines strings.
- <b>连接操作：</b> `BIND (CONCAT("Prof. ",?name) AS?formalName)`用于组合字符串。
- <b>Conditional Assignment:</b> `BIND (IF(condition, value_true, value_false) AS ?var)` allows conditional value assignment.
- <b>条件赋值：</b> `BIND (IF(条件, 值为真时的结果, 值为假时的结果) AS?var)`允许进行条件值赋值。
    
---

### 4. Theoretical Context: Value Space | 4. 理论背景：价值空间

It is important to note from the query evaluation perspective that `FILTER` operations often work on the <b>Value Space</b> of literals rather than the lexical string.

从查询评估的角度来看，重要的是要注意`FILTER`操作通常作用于<b>字面量的值空间</b>，而不是词法字符串。

- For example, `"01"^^xsd:integer` and `"1"^^xsd:integer` are distinct strings, but in the value space, they are identical. A filter `FILTER (?x = 1)` would evaluate to `true` for both.
- 例如，`"01"^^xsd:integer`和`"1"^^xsd:integer`是不同的字符串，但在值空间中，它们是相同的。过滤器`FILTER (?x = 1)`对两者的计算结果都为`true`。

## Addionally  | 此外

Based on the provided lecture materials, here is a detailed explanation of additional filter functions and aggregation measures in SPARQL (Learning Goal 3.6).

根据提供的讲座材料，以下是对SPARQL中附加过滤函数和聚合度量的详细解释（学习目标3.6）。

### 1. Advanced FILTER Functions | 1. 高级筛选函数

Beyond basic comparison operators, SPARQL provides specific functions to inspect and filter literals based on their string content, language tags, or data types.

除了基本的比较运算符外，SPARQL还提供了特定的函数，用于根据字面量的字符串内容、语言标签或数据类型来检查和过滤字面量。

#### String Manipulation and Matching | 字符串操作与匹配

String filters determine if a text literal matches a specific pattern.

字符串过滤器用于确定文本字面量是否与特定模式匹配。

- <b>REGEX(?variable, "pattern", "flags")</b>: This function uses regular expressions to match string values. It allows for complex pattern matching. You can add flags, such as `"i"`, to make the search <b>case-insensitive</b>.
- <b>REGEX(?variable, "pattern", "flags")</b>: 此函数使用正则表达式来匹配字符串值。它允许进行复杂的模式匹配。您可以添加标志，例如`"i"`，以使搜索<b>不区分大小写</b>。
    - <i>Example:</i> `FILTER (REGEX(?name, "^S", "i"))` matches names starting with "S" or "s".
    - <i>示例：</i> `FILTER (REGEX(?name, "^S", "i"))`匹配以 "S" 或 "s" 开头的名称。
    > - 匹配开头：用 ^ `FILTER REGEX(?name, "^Dr")`
> - 匹配结尾：用 $ `FILTER REGEX(?file, "\\.pdf$")` `.` 在正则里是特殊字符，所以要写成 `\\.`。
> - 匹配数字 `FILTER REGEX(?code, "^[0-9]+$")` +表示“前面的模式重复 1 次或多次”   （one or more）*是0次或者多次
> - 匹配任意字符 `FILTER REGEX(?text, "a.b")`

- <b>CONTAINS(string, substring)</b>: Checks if a string contains a specific substring. This is often used with `LCASE()` (lowercase conversion) to ensure case-insensitive matching, as `CONTAINS` is case-sensitive by default,.
- <b>CONTAINS(字符串, 子字符串)</b>：检查字符串是否包含特定子字符串。此函数通常与`LCASE()`（小写转换）一起使用，以确保不区分大小写的匹配，因为`CONTAINS`默认情况下区分大小写。
    - <i>User Query Context:</i> `FILTER (CONTAINS(?name, "erlin"))` would match "Berlin" or "Merlin".
    - <i>用户查询上下文：</i> `FILTER (CONTAINS(?name, "erlin"))`将匹配 "Berlin" 或 "Merlin"。

- <b>STR(?variable)</b>: Converts a resource (IRI or Literal) into its simple string form.
- <b>STR(?变量)</b>：将资源（IRI或文字）转换为其简单字符串形式。
    - <i>Correction:</i> Your example `FILTER (STR(?n ="Aachen")` suggests checking if the string value equals "Aachen". The correct syntax typically separates the extraction and the comparison: `FILTER (STR(?n) = "Aachen")`.
    - <i>修正：</i>你的示例`FILTER (STR(?n ="Aachen")`表明是在检查字符串值是否等于 "Aachen"。正确的语法通常会将提取和比较分开：`FILTER (STR(?n) = "Aachen")`。

- <b>STRSTARTS</b><b> / </b><b>STRENDS</b>: These functions check if a string starts or ends with a specific sequence.
- <b>STRSTARTS</b><b> / </b><b>STRENDS</b>：这些函数用于检查字符串是否以特定序列开头或结尾。
    
#### Language Tags | 语言标签

RDF literals may contain language tags (e.g., `"München"@de`). SPARQL provides functions to filter based on these tags.

RDF文字可能包含语言标签（例如，`"München"@de`）。SPARQL提供了基于这些标签进行过滤的函数。

- <b>LANG(?variable)</b>: Extracts the language tag of a literal (e.g., returns "en" or "de").
- <b>LANG(?variable)</b>: 提取文字的语言标签（例如，返回 "en" 或 "de"）。
- <b>LANGMATCHES(tag, range)</b>: Checks if a language tag matches a specific language range.
- <b>LANGMATCHES(tag, range)</b>：检查语言标签是否与特定语言范围匹配。
    - <i>User Query Context:</i> To check for English labels, the pattern is: `FILTER (LANGMATCHES(LANG(?name), "en"))`.
    - <i>用户查询上下文：</i>要检查英语标签，模式为：`FILTER (LANGMATCHES(LANG(?name), "en"))`。
        
#### Datatypes | 数据类型

You can ensure a variable matches a specific XML Schema Datatype (XSD).

您可以确保变量与特定的 XML 模式数据类型 (XSD) 匹配。

- <b>DATATYPE(?variable)</b>: Returns the IRI of the literal's datatype.
- <b>DATATYPE(?variable)</b>: 返回文字数据类型的IRI。
    - <i>User Query Context:</i> `FILTER (DATATYPE(?shoeSize) = xsd:integer)` ensures that the variable `?shoeSize` is treated strictly as an integer, which is important because real-world data can be heterogeneous,.
    - <i>用户查询上下文：</i> `FILTER (DATATYPE(?shoeSize) = xsd:integer)`确保变量`?shoeSize`被严格视为整数，这一点很重要，因为现实世界的数据可能是异构的。
        
---

### 2. Aggregations in the SELECT Clause | 2. SELECT子句中的聚合

SPARQL allows you to compute summarized values (aggregates) directly in the `SELECT` line. This is distinct from using `BIND`, which calculates values for individual solutions.

SPARQL允许您直接在`SELECT`行中计算汇总值（聚合）。这与使用`BIND`不同，后者是为单个解决方案计算值。

#### Common Aggregate Functions | 常用聚合函数

These functions compute a single value from a set (or group) of solutions.

这些函数从一组（或一群）解中计算出单个值。

- <b>COUNT(?var)</b>: Counts the number of times a variable is bound. You can use `COUNT(DISTINCT ?var)` to count only unique values, or `COUNT(*)` to count total solution rows,.
- <b>COUNT(?var)</b>：统计变量被绑定的次数。你可以使用`COUNT(DISTINCT?var)`仅统计唯一值，或使用`COUNT(*)`统计总解决方案行数，。
- <b>AVG(?var)</b>: Calculates the arithmetic mean of numeric values.
- <b>AVG(?var)</b>：计算数值的算术平均值。
- <b>MIN(?var)</b><b> / </b><b>MAX(?var)</b>: Finds the smallest or largest value (numeric or lexicographic).
- <b>MIN(?var)</b><b> / </b><b>MAX(?var)</b>: 查找最小或最大的值（数值或字典序）。
- <b>SUM(?var)</b>: Adds up numeric values.
- <b>SUM(?var)</b>: 对数值进行求和。
    
#### Grouping Results (`GROUP BY`) | 分组结果 (`按组`)

When you mix a specific variable (like `?state`) with an aggregate function (like `MIN(?population)`) in the `SELECT` line, you <b>must</b> group the results.

当你在`SELECT`行中将特定变量（如`?state`）与聚合函数（如`MIN(?population)`）混合使用时，你<b>必须</b>对结果进行分组。

- <b>GROUP BY ?variable</b>: This groups the solution sets by the specified variable. Aggregates are then calculated <em>per group</em> rather than over the entire dataset,.
- <b>按?变量分组</b>：此操作按指定变量对解决方案集进行分组。然后<em>按组</em>计算聚合，而不是对整个数据集进行计算。
- <b>Example Logic:</b>
- <b>示例逻辑：</b>
    - To get the average population of <em>all</em> cities:
    - 要获取<em>所有</em>城市的平均人口：
    `SELECT (AVG(?population) AS ?avgPop) WHERE ...`.
    `SELECT (AVG(?population) AS?avgPop) WHERE...`.
    - To get the minimum population <em>per state</em> (as in your query):
    - 要获取每个州的最小人口数<em>（如您的查询所示）</em>：
        ```text
SELECT ?state (MIN(?population) AS ?minPop)
WHERE { ... }
GROUP BY ?state
```
        This ensures the `MIN` function calculates the minimum population separately for every unique `?state` found.
        这确保了`MIN`函数会为找到的每个唯一的`?state`分别计算最小人口数。
        
#### Filtering Groups (`HAVING`) | 过滤组（`HAVING`）

If you want to filter results <em>after</em> aggregation (e.g., "show only states with more than 5 cities"), you cannot use `FILTER`. You must use the <b>HAVING</b> clause.

如果您想在聚合后<em>过滤结果</em>（例如，“仅显示拥有超过5个城市的州”），则不能使用`FILTER`。您必须使用<b>HAVING</b>子句。

- <i>Example:</i> `HAVING (COUNT(?city) > 5)`.
- <i>示例：</i> ` HAVING (COUNT(?city) > 5)`。

