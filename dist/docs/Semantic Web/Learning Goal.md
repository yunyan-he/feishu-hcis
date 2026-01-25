---
title: Learning Goal
slug: X5HAwhUxHixmzTkqv9BcS22Cn6c/BBEOwHkYViRIM1kzyxHc8iKgnMc
sidebar_position: 0
---


# Learning Goal

# Hypertext, the Internet and the Web

## Hierarchical structure vs network structure 

To understand the passage you provided regarding <b>Learning Goal 1.1</b>, we need to look at how the lecture contrasts traditional methods of organizing knowledge (Hierarchy) with the fundamental architecture of the Web and Semantic Web (Network).

Based on the provided sources, here is a detailed breakdown of how to interpret that distinction:

### Hierarchical Structure (The "Tree" Model)

The passage describes this as "top-down," where concepts branch off from parent nodes.

- <b>How to understand it:</b> Imagine a physical library or a filing cabinet. You start with a broad subject and narrow it down step-by-step. A specific item usually has only one "correct" place in the system.
- <b>Lecture Example (The Mundaneum):</b> The sources illustrate this using <b>Paul Otlet's Mundaneum</b>.
    - Otlet tried to organize all human knowledge using a strict Universal Decimal Classification system.
    - As seen in the lecture slides, this flows from "The Universe" $\rightarrow$ "Science" $\rightarrow$ "Books" $\rightarrow$ "Bibliography".
    - This represents a rigid view of the world where knowledge is categorized into distinct "buckets."

- <b>Technical Example (DNS):</b> The lecture also uses the <b>Domain Name System (DNS)</b> as an example of a hierarchy. A domain like `www.example.org` maps hierarchically to an IP address, managed by the Internet Assigned Numbers Authority (IANA).
    
### Network Structure (The "Graph" Model)

The passage describes this as a "directed graph" with nodes and arrows (edges).

- <b>How to understand it:</b> Imagine a brain or a spiderweb. Any idea can be connected to any other idea directly, without passing through a central category. There is no "top" or "bottom."
- <b>Historical Context:</b>
    - <b>Vannevar Bush (Memex):</b> Bush criticized traditional indexing (hierarchies) and proposed "associative indexing," where items are tied together so that one instantly recalls the other.
    - <b>Ted Nelson:</b> Coined the term "Hypertext" and emphasized that "Everything is deeply intertwingled". In a network, connections are more important than categories.

- <b>Metcalfe’s Law:</b> The value of a network structure (like the Web) increases exponentially ($N^2$) as more nodes (devices/people) are added, because the number of possible connections grows rapidly.
- <b>Technical Example (RDF):</b> The passage mentions RDF (Resource Description Framework). The sources confirm that the "Web of Data" relies on accessing <b>Linked Data</b> and constructing <b>RDF datasets</b>. In RDF, information is not stored in a tree, but as "triples" (Subject $\rightarrow$ Predicate $\rightarrow$ Object), forming a vast, interconnected graph.
    
### Summary of the Distinction

To "understand this paragraph" means recognizing the shift in how we manage information:

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>Feature</p></td><td><p>Hierarchical Structure</p></td><td><p>Network Structure</p></td></tr>
<tr><td><p><b>Shape</b></p></td><td><p>Tree / Pyramid</p></td><td><p>Web / Mesh</p></td></tr>
<tr><td><p><b>Movement</b></p></td><td><p>Top-down (General to Specific)</p></td><td><p>Associative (Node to Node)</p></td></tr>
<tr><td><p><b>Key Figure</b></p></td><td><p>Paul Otlet (Mundaneum)</p></td><td><p>Vannevar Bush (Memex), Tim Berners-Lee,</p></td></tr>
<tr><td><p><b>Example</b></p></td><td><p>File directories, DNS</p></td><td><p>Hypertext, RDF Graphs</p></td></tr>
</tbody>
</table>

<b>Key Insight:</b> The lecture tracks the history of information from rigid <b>Hierarchies</b> (like the Mundaneum) to the flexible <b>Network</b> of the World Wide Web, and finally to the <b>Semantic Web</b>, which applies that network structure to data itself (using RDF),.

## Basic internet and web technologies and their relation 

Based on the provided lecture slides, here is a detailed outline of basic Internet and Web technologies and the relationship between them.

### The Internet: The Infrastructure

The Internet serves as the underlying global networking infrastructure for data exchange. Its development is decentralized, governed by specific organizations and standards to ensure interoperability.

- <b>Governance and Standardization:</b>
    - <b>IETF (Internet Engineering Task Force):</b> This organization manages technical specifications called <b>RFCs (Request for Comments)</b>. These documents describe the essential protocols and concepts for operating systems on the Internet.
    - <b>ICANN (Internet Corporation for Assigned Names and Numbers):</b> A non-profit corporation responsible for governing the Internet's logic, including IP address allocation and the Domain Name System (DNS) management.
    - <b>IANA (Internet Assigned Numbers Authority):</b> A department of ICANN that coordinates IP allocation and administers the DNS.
        
- <b>Key Internet Technologies (Protocols):</b>
    - <b>IP (Internet Protocol):</b> Defined in RFC 791, it is responsible for addressing and sending packets to devices in a network.
    - <b>TCP (Transmission Control Protocol):</b> Defined in RFC 793, it breaks data into packets to fit IP requirements.
    - <b>DNS (Domain Name System):</b> A hierarchically organized system that maps human-readable hostnames (e.g., `www.example.org`) to machine-readable IP addresses (e.g., `198.51.100.38`).
        
- <b>Key Principles:</b>
    - <b>Robustness Principle:</b> "Be conservative in what you do, be liberal in what you accept from others".
    - <b>Metcalfe’s Law (The Network Effect):</b> The value of the network is proportional to the square of the number of connected users ($N^2$), meaning the network becomes exponentially more valuable as more devices/users join.
        
---

### The World Wide Web: The Application Layer

The World Wide Web (WWW) is a distributed, collaborative information system that runs <b>on top</b> of the Internet infrastructure. It was envisioned by Tim Berners-Lee to help analyse information and collaborate,.

- <b>Governance:</b>
    - <b>W3C (World Wide Web Consortium):</b> Directed by Tim Berners-Lee, this international community develops Web standards (Recommendations) to ensure the long-term growth of the Web.
        
- <b>Core Web Technologies (The "Trinity"):</b>

The Web relies on three pillars defined by W3C and IETF standards:
1. <b>URI (Uniform Resource Identifier):</b>
    - <b>Definition:</b> A character sequence that identifies a <b>Resource</b>. A "Resource" can be anything: electronic documents, images, physical objects, or abstract concepts,.
    - <b>Structure:</b> Defined in RFC 3986, a URI typically consists of a scheme (e.g., `http`), authority (server), path, query, and fragment,.
    - <b>Distinction:</b> It is crucial to distinguish between the <em>name</em> of a thing (the URI) and the <em>thing</em> itself (the Resource).
        2. <b>HTTP (Hypertext Transfer Protocol):</b>
    - <b>Definition:</b> A <b>stateless</b> application-level protocol for information exchange. "Stateless" means every interaction is treated independently by the server unless specific session management (like cookies) is used.
    - <b>Interaction:</b> It functions on a Request/Response model. A <b>User Agent</b> (e.g., a browser) sends a request, and a <b>Server</b> replies with a response.
    - <b>Components:</b> Messages include a start line (method or status code), header fields (metadata), and an optional message body (content).
    - <b>Content Negotiation:</b> Mechanisms like the `Accept` header allow the User Agent to request specific formats (e.g., HTML, JSON, RDF), and the server attempts to provide the best match,.
        3. <b>HTML (Hypertext Markup Language):</b>
    - <b>Function:</b> A language used to represent document structure (headings, paragraphs) and, most importantly, to <b>link</b> to other documents via hyperlinks,.
    - <b>Evolution:</b> It evolved from IETF RFCs (HTML 2.0) to W3C Recommendations (HTML 3.2, 4.0) and is now maintained as a "living standard" by WHATWG.
        
---

### The Relationship Between Internet and Web

The relationship can be described as <b>infrastructure vs. application</b>.

1. <b>Dependency:</b> The Internet is the networking foundation. The Web is an application that utilizes this foundation to function.
    - The Web uses <b>Internet Protocols</b> to move data: HTTP (Web protocol) relies on TCP (Internet protocol) to break data into packets, which relies on IP (Internet protocol) to address those packets,.
    - The Web uses <b>DNS</b> (Internet service) to locate the servers hosting Web resources.
        
2. <b>Architecture:</b>
    - <b>Internet Model:</b> Focuses on connecting computers and devices (nodes) via cables and signals.
    - <b>Web Model:</b> Focuses on connecting <b>documents and resources</b> via hyperlinks. While the Internet connects machines, the Web connects information.
        
3. <b>Governance:</b>
    - The Internet is standardized largely by the <b>IETF</b> (focusing on the "pipes" like TCP/IP).
    - The Web is standardized largely by the <b>W3C</b> (focusing on the content and presentation like HTML, XML, and Architecture),.
        
<b>Summary:</b> You can view the Internet as the "tracks" (infrastructure) and the Web as the "trains" (service) running upon them. The Web leverages the Internet's connectivity to create a global, linked information space.

## Assess the characteristics of decentralisation in information system architectures

Based on the lecture content provided, specifically <b>Learning Goal 1.3</b> ("Assess the characteristics of decentralisation in information system architectures"), here is a detailed explanation of the three characteristics you listed (Robustness, Scalability, and Reduced Latency) using the historical and technical context from the sources.

### Robustness: Resilience through Decentralization

The user definition emphasizes "No single point of failure." The lecture supports this by contrasting the decentralized Web with centralized historical models and introducing technical principles for reliability.

- <b>Avoidance of Central Bottlenecks:</b> The lecture contrasts the Web with <b>Paul Otlet’s Mundaneum</b> (1910s), which attempted to centralize all knowledge in a single physical location ("The World City") using a strict hierarchical classification. A decentralized architecture eliminates such central points of failure. The Web allows for <b>"permissionless innovation,"</b> meaning no central authority is required to review or approve changes, preventing a bureaucratic bottleneck from stalling the system.
- <b>Postel’s Robustness Principle:</b> To ensure reliability in a decentralized environment where many different systems interact, the Internet relies on <b>Jon Postel’s Robustness Principle</b> (RFC 793): *"Be conservative in what you do, be liberal in what you accept from others"*. This ensures that even if one node (e.g., a server) sends imperfect data, the receiving node (e.g., a browser) tries to process it rather than crashing the connection, thereby maintaining the overall resilience of the network.

### Enhanced Scalability: Accommodating Growth

The user definition mentions accommodating growth by adding nodes. The sources explicitly identify technical and economic factors that allow the Web to scale indefinitely.

- <b>Technical Scalability (No Back Links):</b> A key architectural decision that enabled the Web's scalability was the implementation of <b>one-way linking</b>. The lecture notes that there is "No growth scalability problem (e.g., no back links from HTML pages)". In previous hypertext systems (like Ted Nelson's <b>Xanadu</b>), links were often bi-directional, requiring a central database to track connections. By removing this requirement, the Web allowed nodes to be added independently without updating a central registry.
- <b>Economic Scalability (Metcalfe’s Law):</b> The lecture cites <b>Metcalfe’s Law</b>, which states that while the cost of a network grows linearly with the number of devices ($N$), the <b>value</b> of the network grows exponentially ($N^2$). This "positive feedback loop" incentivizes the continuous addition of new nodes, driving the decentralized expansion of the network.
    
### Reduced Latency: Data Processing Closer to Users

The user definition refers to processing occurring closer to users. While the lecture does not explicitly discuss "edge computing," it describes the architectural mechanisms in HTTP that facilitate this.

- <b>HTTP Caching:</b> The lecture highlights <b>RFC 9111 (HTTP Caching)</b> as a core component of the Web architecture. Caching allows <b>User Agents</b> (browsers) or intermediate nodes to store copies of resources locally. This means subsequent requests for the same data can be served from a local cache rather than traversing the entire network to reach the origin server, significantly reducing response times.
- <b>Stateless Interaction:</b> HTTP is defined as a <b>stateless</b> protocol. Because the server does not need to maintain a continuous, resource-heavy connection state for every user, it can handle requests more quickly and efficiently. This design supports the distributed nature of the Web, where resources are fetched as needed rather than via a permanent line.
    
### Summary

In the context of the course, <b>decentralization</b> is not just about hardware location; it is enabled by specific <b>standards</b> (like HTTP and URIs) that allow diverse systems to cooperate without a central controller. This combination of <b>robust protocols</b> (Postel’s Principle), <b>scalable design choices</b> (no back-links), and <b>performance optimizations</b> (Caching) creates the architecture described in your query.

## Explain the network effect as expressed in Metcalfe’s Law

Based on the provided lecture materials, here is an explanation of <b>Metcalfe’s Law</b> and the <b>Network Effect</b> as described in <b>Learning Goal 1.4</b>.

### The Core Concept: Linear Cost vs. Exponential Value

The passage you quoted contrasts the <b>Cost</b> of building a network with the <b>Value</b> derived from it.

- <b>Cost (</b>$N$<b>): Linear Growth</b>

According to the lecture, Metcalfe's rationale was originally based on the sale of <b>networking cards</b> (hardware). If you add one new user to the network, you need to buy one new network interface card. Therefore, the cost increases linearly with the number of users ($N$). If you have 100 users, the cost is roughly 100 times the cost of one user.

- <b>Value (</b>$N^2$<b>): Exponential Growth</b>

The value of the network does not grow linearly; it grows exponentially. This is because "Value" is defined by the <b>potential connections</b> between users.
- In a network of 2 people, only 1 connection is possible.
- In a network of 5 people, 10 connections are possible.
- As $N$ increases, the number of possible communication pairs grows roughly by the square of the users ($N^2$). Therefore, a network becomes significantly more valuable to <em>everyone</em> involved as soon as a new user joins.
    
### The Critical Mass Crossover

The lecture slides include a graph illustrating this relationship.

- At the beginning (with very few users), the <b>Cost</b> (linear line) is higher than the <b>Value</b> (curved line).
- However, because $N^2$ grows much faster than $N$, the lines eventually cross. This intersection is marked as the <b>"Critical Mass Crossover"</b>,.
- Once a network reaches this "Critical Mass," the utility/value of the network exceeds the cost of joining it. This point is crucial for the success of technologies like the Internet.
    
### Application to the Web (Positive Feedback Loop)

The lecture connects Metcalfe’s Law to the success of the World Wide Web.

- <b>Positive Feedback Loop:</b> Because the value grows with the number of participants, early adoption sparked a cycle where high value attracted more users, which in turn created even more value.
- <b>Scalability:</b> This economic principle worked in tandem with the Web's technical scalability (such as the lack of a central bottleneck or "permissionless innovation") to allow the Web to become the global system it is today.
    
<b>Summary:</b> To understand the paragraph, recognize that while the <em>price</em> of expansion is straightforward (one more device = one more unit of cost), the <em>benefit</em> is multiplicative because every new user creates new connection possibilities for every existing user.

## Identify and name resources; tell information resources apart from other resources based on a textual description

Based on the lecture slides provided, here is a detailed explanation of <b>Learning Goal 1.5</b>, which covers the identification of resources, the distinction between information and non-information resources, and the syntax of URIs.

### What is a Resource?

In the context of Web Architecture, a <b>Resource</b> is defined broadly as an "abstract notion for things of discourse". This means a resource can be almost anything we want to talk about or reference.

- <b>Abstract vs. Concrete:</b> Resources can be virtual (like a website) or physical (like a building).
- <b>The Crucial Distinction:</b> The lecture explicitly distinguishes between two types of resources based on their nature:
    1. <b>Information Resources:</b> These are resources that can be transmitted digitally as a stream of bytes.
        - <i>Examples:</i> Electronic documents, images, files, and web pages. Paul Otlet referred to these as "books".
    2. <b>Other (Non-information) Resources:</b> These are things that cannot be transmitted electronically.
        - <i>Examples:</i> Real-world objects (e.g., "rooms," "people"), abstract concepts (e.g., "chemical elements," "numeric values"), or Otlet's "frames of thought".
            
<b>Key Insight:</b> You must distinguish between the <b>name</b> of a thing (the URI) and the <b>thing itself</b> (the Resource). For example, a physical room at a university is a *non-information resource*, but the URI for that room might redirect you to a webpage (an *information resource*) that contains the room's schedule.

### What is a URI?

A <b>Uniform Resource Identifier (URI)</b> is a character sequence used to uniquely identify a resource. It acts as the "name" for the resource.

- <b>Standard:</b> The syntax is defined in <b>RFC 3986</b> (Internet Standard).
- <b>Function:</b> URIs allow us to reference both information resources (which we can download) and non-information resources (which we can only describe) within the same global system.
    
### Detailed URI Syntax Breakdown

The lecture provides a specific formula for constructing a URI. Here is the detailed explanation of the components found in the example `http://example.com:8042/over/there?name=ferret#nose`:

#### The Scheme

- <b>Definition:</b> Specifies the type of URI and usually the associated protocol used to access it.
- <b>Example:</b> `http` (Hypertext Transfer Protocol), `ftp`, `mailto`, `tel` (telephone).
- <b>In your string:</b> `http`
    
#### The Hierarchical Part

This section typically begins with `//` and is divided into the <b>Authority</b> and the <b>Path</b>.

1. <b>Authority:</b>
    - <b>Definition:</b> Identifies the governing entity for the namespace, usually a <b>hostname</b> (domain) and an optional <b>port number</b>.
    - <b>In your string:</b> `example.com:8042` (Host: `example.com`, Port: `8042`).

2. <b>Path:</b>
    - <b>Definition:</b> A reference to specific content on the host server. It is interpreted in a hierarchical fashion, similar to a file directory tree on a computer (e.g., folder inside a folder).
    - <b>In your string:</b> `/over/there`
        
#### The Query (Optional)

- <b>Definition:</b> Contains data that does <em>not</em> fit the hierarchical tree structure. It is often composed of variable/value pairs used to pass parameters to a database or application.
- <b>Syntax:</b> It is preceded by a question mark `?`.
- <b>In your string:</b> `?name=ferret` (Variable `name` equals `ferret`).
    
#### The Fragment (Optional)

- <b>Definition:</b> Addresses a specific, local part of the retrieved document (such as a section header or an anchor point on a page).
- <b>Syntax:</b> It is preceded by a hash symbol `#`.
- <b>In your string:</b> `#nose` (Refers to the section labeled "nose" within the document found at `/over/there`).
    
### Summary

To "Identify and name resources" means assigning a <b>URI</b> to a concept. To "tell them apart" is to recognize that while a URI like `http://example.org/my-photo.jpg` identifies a file (Information Resource), a URI like `http://example.org/person/Einstein` identifies a human being (Non-information Resource), even though both look like web addresses.

# Linked Data Basics

1. <b>RDF 基础 (01-RDF-Intro)</b>

- <b>背景与动机</b>：介绍了从 Web 1.0（只读）到 Web 2.0（读写）再到 Web 3.0（语义网/数据网）的演变，强调了机器可理解数据的重要性。
- <b>数据模型对比</b>：对比了关系型数据库（结构化）、XML（半结构化树状）和 RDF（半结构化图状）的区别，指出 RDF 适合通过 URI 进行全球数据集成。
- <b>RDF 核心组件</b>：
    - <b>三元组 (Triple)</b>：主语 (Subject) - 谓语 (Predicate) - 宾语 (Object)。
    - <b>IRI</b>：用于全球唯一标识资源，取代了本地 ID。
    - <b>字面量 (Literals)</b>：包含数据类型（如 `xsd:integer`）和语言标签（如 `@de`）。
    - <b>空白节点 (Blank Nodes)</b>：用于表示存在但无需全球标识的资源（如地址或复杂的嵌套结构）。
        
1. <b>Turtle 语法详解 (02-RDF-Turtle)</b>

- <b>基本语法</b>：Turtle (Terse RDF Triple Language) 是一种紧凑的文本格式。
- <b>简写机制</b>：
    - <b>前缀 (Prefixes)</b>：如 `@prefix dbr: <...>` 用于缩短 IRI。
    - <b>谓语简写</b>：关键字 `a` 代表 `rdf:type`。
    - <b>结构简写</b>：分号 `;` 用于同一主语的不同属性，逗号 `,` 用于同一属性的不同值。

- <b>复杂结构</b>：
    - <b>空白节点</b>：可以使用 `_:` 命名，也可以使用方括号 `[]` 表示匿名嵌套结构。
    - <b>集合 (Collections/Lists)</b>：使用圆括号 `( ... )` 表示有序列表，底层通过 `rdf:first`/`rdf:rest`/`rdf:nil` 实现。
        
1. <b>JSON-LD 介绍 (02a-RDF-JSON)</b>

- <b>设计目标</b>：在不破坏现有 JSON 格式的前提下增加语义（Linked Data），解决不同系统间数据定义不一致的“巴别塔”问题。
- <b>核心关键字</b>：
    - <b>@context</b>：将 JSON 的键（key）映射到通过 IRI 定义的词汇表（如 schema.org）。
    - <b>@id</b>：赋予资源唯一的全球标识符。
    - <b>@type</b>：定义资源的类型。

- <b>使用方式</b>：上下文可以内嵌在文档中，也可以通过外部文件引用，甚至可以通过 HTTP Link Header 提供。

## Data models

Based on the lecture slides provided, here is a detailed explanation of <b>Data Models</b> (Learning Goal 2.1).

### What is a Data Model?

A data model is a <b>formalism</b> used to describe the objects within a database and the relationships between them. Essentially, the data model defines the <b>database schema</b> (the blueprint of how data is organized). Data models are essential at both the conceptual and external levels of database systems.

Every data model comprises three core aspects:

- <b>Structures:</b> This defines the types of objects and how they relate to one another (e.g., tables and foreign keys, or nodes and edges).
- <b>Operations:</b> These are the mechanisms used for the <b>extraction and linking</b> of data. They are intrinsically linked to query languages. For instance, <b>SQL</b> is used for relational models, while <b>SPARQL</b> is the standard for RDF graphs.
- <b>Constraints:</b> These are rules to ensure data integrity. They can be <b>model-inherent</b> (such as primary keys or type safety) or <b>user-defined</b> (such as restricting a value to a specific range, e.g., "percentage must be between 0 and 100").
    
---

### Types of Data Models

The lecture categorizes data models into three distinct types based on their structure and flexibility.

#### Structured Data Models

These models rely on a rigid, predefined schema (often called <b>Schema-on-Write</b>, meaning the structure must be defined before data is entered).

- <b>Relational Model:</b>
    - <b>Basis:</b> It is based on <b>sets (relations)</b>, which are visualized as <b>tables</b>.
    - <b>Components:</b> Tables consist of <b>rows (tuples)</b> representing individual records and <b>columns (attributes)</b> representing properties.
    - <b>Linking:</b> Relationships between entities are expressed through <b>shared attribute values</b> (keys). For example, an <em>Employee</em> table and a <em>Department</em> table might be linked because they both contain a `DepartmentID` column.
    - <b>History:</b> Proposed by Edgar F. Codd in 1970 and implemented in systems like IBM System R.

- <b>Object-Oriented Model:</b>
    - This extends the relational model by adding concepts from programming languages, such as <b>objects</b>, <b>attributes</b>, <b>methods</b>, encapsulation, and inheritance.
        
#### Semi-structured Data Models

These models allow for <b>flexible composition</b>. They do not require a rigid schema upfront (often called <b>Schema-optional</b> or <b>Schema-later</b>). They mix structural elements (tags/labels) with unstructured content.

- <b>RDF (Resource Description Framework):</b>
    - <b>Structure:</b> Unlike the table structure of SQL, RDF uses a <b>graph structure</b> consisting of <b>labeled nodes and edges</b>.
    - <b>Linking:</b> Labels are <b>URIs</b> (Uniform Resource Identifiers). This allows RDF to link data not just within one database, but across different organizations and domains, forming the <b>Web of Data</b>.
    - <b>Flexibility:</b> New relationships can be added easily without "breaking" the existing structure, making it ideal for integrating data from heterogeneous sources.

- <b>XML:</b>
    - Uses <b>tags</b> to create a hierarchical <b>tree structure</b>.
    - It allows unstructured content (text) to exist between the tags.
        
#### Unstructured Data Models

These models handle data where the internal structure is not visible to or interpreted by the database system itself.

- <b>BLOBs (Binary Large Objects):</b> Examples include images (JPEG), videos, or PDF files.
    - The database treats the file as a single "chunk" of data. The internal structure (e.g., how the pixels of a JPEG are compressed) is defined only by the <b>application</b> that processes it, not the database management system.

- <b>NoSQL / Key-Value Stores:</b> These allow for flexible, arbitrarily composed data elements, often prioritizing scalability over strict structure.
    
### Summary Comparison

The evolution from <b>Structured</b> to <b>Semi-structured</b> represents a shift in connectivity and flexibility:

- <b>Relational models (Structured)</b> connect data <em>within</em> one database using shared keys.
- <b>RDF (Semi-structured)</b> connects data <em>across</em> the Web using global URIs.

## Decide whether a given RDF document adheres to the four Linked Data principles and explain why or why not

Based on the provided lecture materials, specifically <b>Learning Goal 2.2</b>, here is a detailed explanation of how to decide if an RDF document adheres to Tim Berners-Lee’s four Linked Data principles.

To assess an RDF document, you must evaluate its contents against the four principles described in the slides,.

### Principle: Use URIs as names for things

<b>The Rule:</b> Every entity (person, place, concept, etc.) should have a unique identifier.

<b>How to Decide:</b>

- <b>Check:</b> Does the document use unique identifiers for subjects and predicates, rather than just names or strings?
- <b>Adherence:</b> The document adheres if it distinguishes between the <em>thing</em> and the *name of the thing*.
    - <i>Example of Adherence:</i> Using `<http://dbpedia.org/resource/Aachen>` to refer to the city.
    - <i>Failure:</i> Using the string "Aachen" as the subject of a triple. While "Aachen" is a label, it is not a global identifier that distinguishes the city from a university or a district.

- <b>Why:</b> This supports a resource-centered view of data modeling, ensuring global uniqueness.
    
### Principle: Use HTTP URIs so people can look up those names

<b>The Rule:</b> URIs should be dereferenceable via the Web. They must unite the logical address (the name) and the physical address (location),.

<b>How to Decide:</b>

- <b>Check:</b> Look at the protocol scheme of the URIs used in the document.
- <b>Adherence:</b> The document adheres if the identifiers start with `http://` or `https://`.
    - <i>Example of Adherence:</i> `<http://dbpedia.org/resource/Aachen>`. This can be looked up in a browser.
    - <i>Failure:</i> Using URNs like `urn:isbn:0451450523`. While this is a valid URI (Principle 1), it cannot be directly "looked up" or dereferenced by a browser to retrieve data.

- <b>Why:</b> HTTP URIs allow both humans and machines to retrieve information about the resource using standard web infrastructure.
    
### Principle: Provide useful information using standards (RDF, SPARQL)

<b>The Rule:</b> When a URI is looked up, the server should return data using standard formats like RDF, Turtle, or JSON-LD.

<b>How to Decide:</b>

- <b>Check:</b> Is the document itself written in a standardized RDF serialization format?
- <b>Adherence:</b> The document adheres if it is serialized in a W3C standard format such as <b>Turtle</b> (`.ttl`), <b>RDF/XML</b>, or <b>JSON-LD</b>,.
    - <i>Example of Adherence:</i> A file containing `@prefix dbr: <http://dbpedia.org/resource/> .` followed by valid triples.
    - <i>Failure:</i> Providing data in a proprietary binary format or a non-standard CSV that lacks semantic definitions.

- <b>Why:</b> Standards ensure that machines can parse and interpret the data without needing custom software for every new dataset,.
    
### Principle: Include links to other URIs

<b>The Rule:</b> Associating things from one source to things from another source creates a "mesh" of data.

<b>How to Decide:</b>

- <b>Check:</b> Does the document only reference resources defined within itself (local data), or does it reuse external URIs?
- <b>Adherence:</b> The document adheres if it connects its subject to objects or predicates from established external datasets (like DBpedia or schema.org).
    - <i>Example of Adherence:</i> A dataset about Aachen that links to the existing resource `<http://dbpedia.org/resource/Germany>` rather than creating a new, isolated node for Germany.
    - <i>Failure:</i> A document where every single URI belongs to `http://localhost/` or the document's own namespace, creating a data silo.

- <b>Why:</b> Linking enables <b>Data Integration</b> and discovery. It allows machines to merge knowledge graphs (e.g., combining population data from DBpedia with local government data) because they share common "anchor" URIs,.
    
### Summary Checklist for Evaluation

To decide if a given document follows these principles, ask:

1. <b>Identity:</b> Are things named with URIs? (Yes/No)
2. <b>Access:</b> Are those URIs `http://` or `https://`? (Yes/No)
3. <b>Standardization:</b> Is the data in a valid RDF format (Turtle/JSON-LD)? (Yes/No)
4. <b>Connectivity:</b> Does it contain links to external datasets? (Yes/No)
    
If the answer to all four is <b>Yes</b>, the document adheres to Linked Data principles.

## RDF 

Based on the provided lecture content, here is a detailed explanation of the <b>RDF (Resource Description Framework)</b> data model, its graph structure, and its fundamental components.

### The Core Concept: A Graph-Based Data Model

RDF is the standard data model for the <b>Semantic Web</b>. Unlike relational databases (which use tables) or XML (which uses trees), RDF uses a <b>directed graph</b> structure.

- <b>Nodes and Arcs:</b> Information is represented as a network where <b>nodes</b> represent entities (resources) or values, and <b>arcs</b> (directed edges) represent the relationships between them.
- <b>Interlinking:</b> The strength of this model is <b>Global Data Integration</b>. By using global identifiers (URIs), RDF allows data from different sources (e.g., DBpedia and a local government database) to be merged automatically. If two graphs use the same URI for "Aachen," they connect instantly, forming a "Web of Data".
    
### The RDF Triple: Subject-Predicate-Object

The fundamental unit of information in RDF is the <b>Triple</b>. Every piece of knowledge is broken down into a simple statement with three parts:

1. <b>Subject:</b> The "thing" being described (e.g., The city of Aachen).
2. <b>Predicate:</b> The specific property or relationship (e.g., `hasPopulation` or `isLocatedIn`).
3. <b>Object:</b> The value of the property or another resource the subject is related to (e.g., the number 247,380 or the country Germany).
    
<b>Visual Representation:</b>

In a diagram, the Subject and Object are nodes (ellipses or rectangles), and the Predicate is a directed arrow pointing from the Subject to the Object.

### RDF Terms: The Building Blocks

To construct these triples, RDF uses three specific types of terms: <b>URIs</b>, <b>Literals</b>, and <b>Blank Nodes</b>.

#### URIs (Uniform Resource Identifiers) / IRIs

- <b>Definition:</b> These are global identifiers used to name resources uniquely on the Web.
- <b>Role:</b>
    - They act as the "names" for things.
    - They ensure <b>Global Uniqueness</b>. `<http://dbpedia.org/resource/Aachen>` refers specifically to the city, distinguishing it from any other entity named "Aachen".
    - They allow <b>dereferencing</b> (looking up), meaning a machine can look up the URI via HTTP to retrieve more data.
    - <i>Note:</i> The lecture notes often refer to <b>IRIs</b> (Internationalized Resource Identifiers), which are an extension of URIs allowing Unicode characters (like umlauts), but the concept remains the same.
        
#### Literals (L)

- <b>Definition:</b> These represent concrete data values such as strings, numbers, or dates.
- <b>Role:</b> They provide the actual "content" or values for properties.
- <b>XML Schema (XSD):</b> To ensure machines understand these values, RDF uses <b>Typed Literals</b>.
    - Syntax: `"value"^^<datatypeURI>`.
    - The datatypes are usually adopted from <b>XML Schema</b> (e.g., `xsd:integer` for whole numbers, `xsd:date` for dates).
    - <i>Example:</i> `"247380"^^xsd:integer` allows the machine to treat the population as a number (allowing math) rather than just a string of text.

- <b>Language Tags:</b> String literals can also have language tags (e.g., `"Aachen"@de` vs `"Aix-la-Chapelle"@fr`).
    
#### Blank Nodes (B)

- <b>Definition:</b> Also known as anonymous nodes, these represent resources that <b>do not have a global URI</b>.
- <b>Role:</b>
    - <b>Existential Quantification:</b> They express that "something exists" with certain properties, without needing to name it globally.
    - <b>Local Scope:</b> A Blank Node is only identifiable within the specific file or graph it exists in. It cannot be referenced from the outside web.

- <b>Example:</b> If you want to say "Aachen has an address," and that address consists of a street and zip code, you might not create a global URI for that specific address entry. Instead, you use a Blank Node to group the street and zip code together attached to Aachen.
    
### Formal Definition of an RDF Triple

The lecture provides a set-theoretic definition of a triple based on the allowed positions for each term type.

Given:

- $U$ = Set of URIs (IRIs)
- $B$ = Set of Blank Nodes
- $L$ = Set of Literals
    
An RDF triple $\langle s, p, o \rangle$ is defined as:

$$(U \cup B) \times U \times (U \cup B \cup L)$$

This formula enforces the following <b>rules</b>:

1. <b>Subject (</b>$s$<b>):</b> Can be a <b>URI</b> or a <b>Blank Node</b> ($U \cup B$). It <em>cannot</em> be a Literal.
2. <b>Predicate (</b>$p$<b>):</b> Must be a <b>URI</b> ($U$).
    - Relationships must be globally defined concepts (like `schema:name`). Blank nodes and Literals cannot serve as predicates.

3. <b>Object (</b>$o$<b>):</b> Can be a <b>URI</b>, a <b>Blank Node</b>, or a <b>Literal</b> ($U \cup B \cup L$).
    
### Summary

The RDF data model creates a "mesh" of information. It moves away from rigid tables to a flexible graph where <b>URIs</b> act as global anchors connecting data, <b>Literals</b> holding the raw values (typed via <b>XML Schema</b>), and <b>Blank Nodes</b> handling local, complex structures without global names.

## Turtle

Based on the provided lecture materials, here is a detailed explanation of <b>Turtle (Terse RDF Triple Language)</b>.

### Definition and Purpose

<b>Turtle</b> is a text-based syntax for RDF that is designed to be <b>compact</b> and <b>human-readable</b>.

- It serves as a middle ground between the verbose <b>RDF/XML</b> format and the very simple but repetitive <b>N-Triples</b> format.
- It enables RDF data to be written intuitively without losing the expressiveness of the underlying graph model.
    
### Basic Syntax Elements

A Turtle document is composed of a sequence of <b>triples</b>. Each triple consists of a <b>Subject</b>, a <b>Predicate</b>, and an <b>Object</b>, and must always conclude with a <b>period</b> (`.`).

- <b>IRIs (Internationalized Resource Identifiers):</b>
    - These are used to uniquely identify resources.
    - Full IRIs are enclosed in angle brackets: `<http://dbpedia.org/resource/Aachen>`.

- <b>Literals:</b>
    - <b>Strings:</b> Enclosed in double quotes, e.g., `"Aachen"`.
    - <b>Language Tags:</b> Appended with an `@` symbol, e.g., `"Aachen"@de` or `"Oche"@ksh`.
    - <b>Datatypes:</b> Explicitly defined using `^^`, e.g., `"261472"^^xsd:integer`.
    - <b>Automatic Interpretation:</b> Turtle automatically recognizes certain values without quotes as specific types:
        - <b>Integers:</b> `123` (interpreted as `xsd:integer`).
        - <b>Decimals:</b> `4.5` (interpreted as `xsd:decimal`).
        - <b>Booleans:</b> `true` or `false` (interpreted as `xsd:boolean`).
            
### Abbreviations for Compactness

Turtle provides several mechanisms to reduce repetition and make the data "terse."

#### Prefixes and Base

- <b>@prefix:</b> Allows you to define short labels for long namespaces. For example, defining `@prefix dbr: <http://dbpedia.org/resource/> .` allows you to write `dbr:Aachen` instead of the full IRI.
- <b>@base:</b> Defines a default URI for the document. Relative IRIs inside angle brackets (e.g., `<Aachen>`) are automatically resolved against this base.
    
#### Grouping Triples

- <b>Semicolon (</b><b>;</b><b>):</b> Used when you want to state multiple properties for the <b>same subject</b>.
    - <i>Structure:</i> `Subject Predicate1 Object1 ; Predicate2 Object2 .`
    - This avoids repeating the subject for every line.

- <b>Comma (</b><b>,</b><b>):</b> Used when you want to list multiple objects for the <b>same subject and same predicate</b>.
    - <i>Structure:</i> `Subject Predicate Object1 , Object2 .`.
        
#### The 'a' Keyword

- Turtle provides the special keyword <b>a</b> as a shorthand for the property <b>rdf:type</b>.
- <i>Example:</i> `<Aachen> a dbo:City` is equivalent to `<Aachen> rdf:type dbo:City`.
    
### Complex Structures

Turtle allows for the representation of complex data structures without explicitly naming every node.

#### Blank Nodes (Anonymous Resources)

- <b>Named Blank Nodes:</b> You can use identifiers starting with `_:` (e.g., `_:address1`) to define a node that has no global IRI and exists only within the local file scope.
- <b>Square Brackets </b><b>[ ]</b><b>:</b> This is the syntax for <b>anonymous blank nodes</b>. It allows you to define a resource "inline" with its properties.
    - <i>Usage:</i> This is highly effective for nested structures, such as an address embedded within a person entity, without needing to invent an ID for the address.
        
#### Collections (Lists)

- <b>Parentheses </b><b>( )</b><b>:</b> RDF lists are technically chains of blank nodes linked by `rdf:first` and `rdf:rest` predicates. Turtle abstracts this complexity using parentheses.
- <i>Example:</i> `( <A> <B> <C> )` represents an ordered list.
- The parser automatically converts this into the underlying RDF list structure ending in `rdf:nil`.
    
### Comments

Comments in Turtle start with a hash symbol (<b>#</b>) and continue to the end of the line. They are ignored by the parser.

## Transform graphical representations of RDF graphs to Turtle documents including abbreviations

Based on the lecture content provided, here is a detailed explanation of <b>Learning Goal 2.5</b>, which focuses on transforming graphical RDF models into the textual <b>Turtle</b> syntax, utilizing specific abbreviations and conventions to ensure the data is compact and readable.

### From Graph to Text: The Basic Serialization

<b>Turtle (Terse RDF Triple Language)</b> is a text-based syntax designed to be a compact, human-readable format for RDF graphs,.

To transform a graphical node-and-edge model into Turtle, you break the graph down into <b>triples</b>:

- <b>Structure:</b> `<Subject> <Predicate> <Object> .`
- <b>The Dot:</b> The period `.` is mandatory. It signals the end of a "statement" (triple), much like a period at the end of a sentence.
    
### Identifiers and Abbreviations (CURIEs)

In a visual graph, nodes are often labeled with short names, but in RDF, they must be global <b>IRIs</b>. Turtle uses <b>Prefixes</b> to keep these IRIs short in the text.

- <b>CURIEs (Compact URIs):</b> Instead of writing a full IRI like `<http://dbpedia.org/resource/Berlin>`, you define a prefix and use a colon separator. The format is `prefix:reference`.
- <b>Prefix Definition:</b> You must declare the prefix at the top of the document.
    - <i>Syntax:</i> `@prefix dbr: <http://dbpedia.org/resource/> .`
    - <i>Usage:</i> `dbr:Berlin` is now equivalent to the full IRI.

- <b>The Empty Prefix:</b> You can define a prefix with no label (just a colon).
    - <i>Syntax:</i> `@prefix : <http://example.org/doc.ttl#> .`
    - <i>Usage:</i> `:Berlin` resolves to `http://example.org/doc.ttl#Berlin`.
        
### Relative URIs and the @base Directive

When transforming a graph where many resources share the same root URL, you can use the <b>@base</b> directive to define a default IRI for the document.

- <b>Resolution:</b> Relative IRIs enclosed in angle brackets (e.g., `<academics>`) are appended to the defined base URI.
- <b>File System Notation:</b> As noted in your query, this supports hierarchical navigation similar to file systems:
    - `@base <http://example.edu/research/> .`
    - `<./academics>` resolves to `<http://example.edu/research/academics>`.
    - `<../academics>` moves up one level, resolving to `<http://example.edu/academics>` (deduced from standard URI resolution rules mentioned in the context of).
        
### Handling Literals (Values)

In a graph, rectangular nodes representing values (strings, numbers) are transformed into <b>Literals</b> in Turtle.

- <b>Untyped Literals:</b> Strings are enclosed in quotes: `"data value"`.
- <b>Language Tags:</b> To specify language, append `@` and the language code: `"Germany"@en`.
- <b>Typed Literals (XSD):</b> To strictly define a value type (like an integer or date), you append the type URI using `^^`.
    - <i>Example:</i> `"123"^^<http://www.w3.org/2001/XMLSchema#int>`.
    - <i>Predefined Types:</i> As mentioned in your text, `rdf:HTML` and `rdf:XMLLiteral` are the only datatypes defined by RDF itself; others usually come from XML Schema (XSD).

- <b>Syntactic Sugar (Automatic Typing):</b> Turtle automatically recognizes certain values without quotes:
    - `123` becomes an integer.
    - `4.5` becomes a decimal.
    - `true` becomes a boolean.
        
### Structural Abbreviations (Grouping)

When a single node in your graph has multiple outgoing edges, you do not need to repeat the subject every time. Turtle provides punctuation to abbreviate this.

- <b>The Semicolon (</b><b>;</b><b>):</b> Used when the <b>Subject</b> is the same, but the <b>Predicate</b> changes.
    - <i>Logic:</i> `Subject Predicate1 Object1 ; Predicate2 Object2 .`
    - <i>Example:</i> `:Berlin :capital :DE ; :locatedOnBank :Spree .`.

- <b>The Comma (</b><b>,</b><b>):</b> Used when the <b>Subject</b> and <b>Predicate</b> are the same, but the <b>Object</b> changes.
    - <i>Logic:</i> `Subject Predicate Object1 , Object2 .`
    - <i>Example:</i> `:DE :label "Germany"@en, "Deutschland"@de .`.

- <b>The 'a' Keyword:</b> The specific predicate `rdf:type` is used so frequently that Turtle replaces it with the simple keyword `a`.
    - <i>Example:</i> `:Berlin a :City` is the same as `:Berlin rdf:type :City`.
        
### Blank Nodes (Anonymous Nodes)

In a graphical model, you may see nodes without labels (often used for grouping data, like an address).

- <b>Named Blank Nodes:</b> If the node is referenced in multiple places, give it a local ID using an underscore: `_:bn eg:knows eg:bob`.
- <b>Nested Blank Nodes </b><b>[]</b><b>:</b> If the node is used only once (e.g., to group properties inline), use square brackets. This is common for complex nesting.
    - <i>Example:</i> `[] eg:knows [ eg:name "Bob" ]`. This creates a structure where an anonymous resource knows another anonymous resource, which has the name "Bob".
        
### Summary of Transformation Logic

When reading a graph to write Turtle:

1. Define your <b>prefixes</b> at the top.
2. Pick a <b>Subject</b> node.
3. Write the Subject.
4. Write a <b>Predicate</b>.
5. Write the <b>Object</b>.
    - If the Subject has more properties, use a <b>semicolon (;)</b>.
    - If the Predicate has multiple values, use a <b>comma (,)</b>.
    - If you are done with that Subject, use a <b>period (.)</b>.

## Transform Turtle documents including abbreviation to simple triple form N-Triples and viceversa

Based on the provided lecture materials, specifically <b>Learning Goal 2.6</b>, here is a detailed explanation of how to transform Turtle documents—with their various abbreviations—into the simple, explicit <b>N-Triples</b> format, and vice-versa.

The transition from Turtle to N-Triples involves "unpacking" abbreviations (like prefixes and nesting) into explicit, standalone triples.

### N-ary Relations and Blank Nodes

In RDF, a binary relationship connects one subject to one object. However, complex real-world data often requires <b>n-ary relations</b> (relations between more than two things) or attributes attached to a relationship (e.g., a population count valid only for a specific year).

To model this, we use a <b>Blank Node</b> to represent the relationship instance itself, to which multiple properties are attached.

#### Turtle (Abbreviated Form)

Turtle allows you to represent this compactly using <b>Square Brackets </b><b>[ ... ]</b>. This creates an "anonymous" blank node inline.

- <b>User Example:</b>
    ```text
:Berlin :inhabitants [ :population 3433695 ; :year 1990 ] .
```
    Here, `:Berlin` is connected via `:inhabitants` to an anonymous node. That anonymous node has two properties: `:population` and `:year`,.
    
#### Transformation to N-Triples (Explicit Form)

To convert this to N-Triples, you must:

1. <b>Assign an explicit ID</b> to the blank node (e.g., `_:b1`).
2. <b>Expand Prefixes:</b> Replace short prefixes (like `:`) with full IRIs (e.g., `<http://example.org/>`).
3. <b>Break into Triples:</b> Create a separate line for every relationship.
    
- <b>N-Triples Result:</b>
    ```text
<http://example.org/Berlin> <http://example.org/inhabitants> _:b1 .
_:b1 <http://example.org/population> "3433695"^^<http://www.w3.org/2001/XMLSchema#integer> .
_:b1 <http://example.org/year> "1990"^^<http://www.w3.org/2001/XMLSchema#integer> .
```
    <i>Note:</i> In N-Triples, the subject `:Berlin` is not repeated; the blank node `_:b1` acts as the object in the first line and the subject in the subsequent lines,.
    
---

### RDF Lists (Collections)

Your query mentions `rdf:Seq`, `rdf:Bag`, and `rdf:Alt`. While these are valid RDF Container types, the specific Turtle syntax `( ... )` represents an <b>RDF Collection</b> (a linked list), which is structurally different and uses `rdf:first`, `rdf:rest`, and `rdf:nil`,.

#### Turtle (Abbreviated Form)

Turtle uses parentheses to create ordered lists.

- <b>Example:</b>
    ```text
:Aachen :neighbors ( :Herzogenrath :Stolberg ) .
```
    
#### Transformation to N-Triples (Explicit Form)

The `( ... )` syntax is "syntactic sugar." Internally, the parser translates this into a chain of blank nodes (a linked list).

1. <b>Head Node:</b> The list starts with a blank node (e.g., `_:b1`).
2. <b>rdf:first:</b> Points to the value (element).
3. <b>rdf:rest:</b> Points to the next blank node in the chain.
4. <b>rdf:nil:</b> Marks the end of the list,.
    
- <b>N-Triples Result:</b>
    ```text
# The subject points to the head of the list
<http://example.org/Aachen> <http://example.org/neighbors> _:b1 .

# First element
_:b1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> <http://example.org/Herzogenrath> .
_:b1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:b2 .

# Second element
_:b2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> <http://example.org/Stolberg> .
_:b2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .
```
    This demonstrates that `( ... )` is purely a shortcut for this explicit, verbose structure.
    
---

### Other Transformations (Abbreviations vs. Explicit)

When moving between formats, you must also handle standard abbreviations:

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>Feature</p></td><td><p>Turtle (Abbreviated)</p></td><td><p>N-Triples (Explicit)</p></td></tr>
<tr><td><p><b>Prefixes</b></p></td><td><p><code>@prefix ex: &lt;http://example.org/&gt; .</code> then <code>ex:City</code></p></td><td><p>Must write full absolute IRI: <code>&lt;http://example.org/City&gt;</code>.</p></td></tr>
<tr><td><p><b>Type</b></p></td><td><p><code>a</code></p></td><td><p>Must write full IRI: <code>&lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#type&gt;</code>.</p></td></tr>
<tr><td><p><b>Grouping</b></p></td><td><p><code>;</code> (Same Subject) and <code>,</code> (Same Predicate)</p></td><td><p>Must repeat Subject and Predicate on every single line.</p></td></tr>
<tr><td><p><b>Literals</b></p></td><td><p><code>123</code> (Implicit integer)</p></td><td><p>Must be explicit: <code>&quot;123&quot;^^&lt;http://www.w3.org/2001/XMLSchema#integer&gt;</code>.</p></td></tr>
</tbody>
</table>

<b>Summary:</b>

Transforming <b>Turtle to N-Triples</b> is a process of <b>expansion</b>: resolving prefixes to full IRIs, assigning IDs to anonymous blank nodes (`[]`), unrolling lists (`()`) into linked chains, and ensuring every single fact is a standalone `Subject Predicate Object .` statement. Transforming <b>N-Triples to Turtle</b> involves <b>compression</b>: finding common prefixes, grouping common subjects with `;`, and using syntactic sugar like `[]` and `()` to hide complex blank node structures.

 

## Explain the Linked Data principles from the perspective of data publisher (server) and data consumer (user agent) 

Based on the provided lecture content, here is a detailed explanation of the <b>Linked Data principles</b> (Learning Goal 2.7) from the dual perspectives of the <b>Data Publisher (Server)</b> and the <b>Data Consumer (User Agent)</b>.

These principles, proposed by Tim Berners-Lee, extend the Web from a "Web of Documents" to a "Web of Data",.

---

### Perspective 1: The Data Publisher (Server)

The server's role is to make data available, identifiable, and connected using standard web protocols.

<b>1. Coin URIs to name things</b>

- <b>Action:</b> The publisher must assign a unique <b>Uniform Resource Identifier (URI)</b>—specifically an Internationalized Resource Identifier (IRI)—to every entity they wish to describe,.
- <b>Detail:</b> This applies not just to documents, but to <em>any</em> resource: people, physical places (like the city of Aachen), abstract concepts, or properties.
- <b>Goal:</b> This ensures <b>Global Uniqueness</b>. Unlike a local database ID (which is only unique inside one computer), a URI like `<http://dbpedia.org/resource/Aachen>` acts as a global "anchor," ensuring that when different systems use this name, they are referring to the exact same entity,.
    
<b>2. Use HTTP URIs so people can look up those names</b>

- <b>Action:</b> The publisher should use the `http://` or `https://` scheme for their URIs, rather than abstract schemes like `urn:`,.
- <b>Detail:</b> This unites the <b>logical address</b> (the name of the thing) with the <b>physical address</b> (where to find information about it).
- <b>Goal:</b> To ensure <b>Dereferenceability</b>. This allows both humans and machines to use standard web infrastructure (DNS, Web Servers) to access the resource.
    
<b>3. Upon receiving a request, return useful information in RDF and RDF Schema</b>

- <b>Action:</b> When a user agent performs a lookup (dereferences the URI), the server must return data using standard formats.
- <b>Detail:</b> The standard format for the Semantic Web is <b>RDF</b> (Resource Description Framework).
    - The server provides the data as a graph of <b>Triples</b> (Subject-Predicate-Object).
    - It uses <b>RDFS (RDF Schema)</b> and Ontologies to provide the "vocabulary" or meaning for the data (e.g., defining that "City" is a class and "hasPopulation" is a property),.
    - This data can be serialized in formats like <b>Turtle</b>, <b>JSON-LD</b>, or <b>RDF/XML</b>.
        
<b>4. Include links to other URIs along the information</b>

- <b>Action:</b> The publisher must connect their data to data held by others.
- <b>Detail:</b> Instead of keeping data in a silo, the server uses external URIs within its own triples. For example, a local dataset about Aachen might link to the DBpedia resource for "Germany" (`<http://dbpedia.org/resource/Germany>`) rather than creating a new local node for the country,.
- <b>Goal:</b> This creates the <b>Web of Data</b> (a mesh), enabling discovery. It allows a user to browse from one data source to another seamlessly,.
    
---

### Perspective 2: The Data Consumer (User Agent)

The user agent (a machine, bot, or browser) navigates this web to discover and process information.

<b>1. Assume URIs as names for things</b>

- <b>Action:</b> The agent treats URIs as globally unique identifiers for resources.
- <b>Detail:</b> The agent understands that a URI refers to a specific "thing of discourse" (resource-centered view). It distinguishes between the identifier and the literal string; for instance, it knows that `<http://dbpedia.org/resource/Aachen>` is the city itself, distinct from the string label "Aachen",.
    
<b>2. Look up HTTP URIs</b>

- <b>Action:</b> The agent uses the HTTP protocol to "dereference" the URI.
- <b>Detail:</b> Because the publisher used standard HTTP URIs (Principle 2), the agent can send a standard request (like a web browser does) to retrieve the description of the resource.
    
<b>3. Find RDF/RDFS document with useful information and process SPARQL queries</b>

- <b>Action:</b> Upon retrieving the document, the agent parses the <b>RDF</b> content to understand the graph structure.
- <b>Detail:</b>
    - <b>Processing:</b> It interprets the <b>semantics</b> defined by <b>RDFS</b> (e.g., understanding class hierarchies or data types like `xsd:integer`),.
    - <b>Querying:</b> It can use <b>SPARQL</b>, the standard query language for RDF, to ask complex questions of the data (e.g., "Select all cities with a population over 200,000"),.
        
<b>4. Discover more things via access to other URIs</b>

- <b>Action:</b> The agent follows the links provided by the server (Principle 4) to "crawl" the Knowledge Graph.
- <b>Detail:</b> By following links (e.g., clicking from "Aachen" to "Germany" to "Berlin"), the agent discovers related data across different servers and organizations. This allows the agent to aggregate information from heterogeneous sources into a single result,.

# Chapter 2

Here is the review for <b>Chapter 2: Linked Data Basics</b>. As before, I have kept your text exactly as provided, followed by an <b>English Expansion & Explanation</b> derived from standard Semantic Web and Linked Data principles (which align with your lecture notes).

### Data models

> <b>User Text:</b>
> Data models are formalism for describing all objects contained in the database and their relationships to one another or schema. Data models cover:
> • Structures: object types and relationship betwwen objects
> • Operations: extraction and linking of data. Related to query languages as SPARQL
> • Constrains: model properties and user-defined properties like restricted value ranges
> There are three types of data models:
> • Structured Data Models. Are relational models such a rigid table structure with rows (tuples) and columns (attributes). Also object-oriented models like objects with attributes and methods
> • Semi-structured Data Models. They have structural elements in some free composition including unstructured content between the tags. RDF is an example, with labelled nodes and edges
> • Unstructured Data Models. Binary large models with internal structure like JPEG.

<b>🎓 Explanation & Exam Notes:</b>

- <b>Semi-structured Data (RDF):</b> This is the most important type for this course. Unlike a Relational Database (SQL) where every row must have the same columns (Structured), RDF allows flexibility. You can add a new property to one node without breaking the others.
- <b>The Three Components:</b> Remember <b>SOC </b>these three components of a data model:
    1. <b>S</b>tructures: The "shape" of the data (e.g., Tables vs. Graphs).
    2. <b>O</b>perations: The actions: How we interact with it (e.g., SQL for tables, SPARQL for graphs).
    3. <b>C</b>onstraints: The rules：Datatypes, Cardinality (e.g., "Age must be an integer").

 

- <b>Deep Dive: Structured vs. Semi-structured (Crucial for Semantic Web):</b>
- <b>Structured (Relational):</b> The lecture often refers to this as "Schema-First." You must define the table columns <em>before</em> you can insert any data. It is rigid but efficient.
- <b>Semi-structured (RDF):</b> This is "Schema-Last" or flexible. You can create a node and add any property (edge) you want without asking for permission. This flexibility is what allows the Web to grow without a central authority controlling the schema.
- <b>Why RDF is Semi-structured:</b> Even though RDF has a strict syntax (Subject-Predicate-Object), it is considered semi-structured because the <em>schema</em> (which properties belong to which classes) is not enforced by the storage engine itself in the same rigid way a SQL database enforces columns.

---

### Decide whether a given RDF document adheres to the four Linked Data principles and explain why or why not

> <b>User Text:</b>
> There are four data principles:
> 1. Use URIs as names for things.
> 2. Linked Data follows a resource-centered view of data modelling. Resources are the basic concept of web arquitecture.
> 3. Use HTTP URIs so people can look up those names Given a URI use HTTP as a mechanism to retrieve more information. They provide a mechanism for lookup and unites logical and physical address.
> 4. Provide useful information using standards (RDF, SPARQL) when someone looks up a URI RDF is the data format for Semantic Web and Linked Data. They are serializations of RDF: RDF/XML, Turtle, Notation 3, JSON LD.
> 5. Include links to other URIs Associating things from one source to things from another source creates a mesh to perform algorithms on. Links connect separate datahraphs together, re-using URIs.
        
<b>🎓 Explanation & Exam Notes:</b>

- <b>Tim Berners-Lee's Design Issues:</b> These are the famous "Linked Data Principles."
- <b>Principle 2 (HTTP URIs):</b> This is crucial. If I name a resource `urn:isbn:12345`, it is a valid URI, but I cannot type it into a browser and "look it up." If I name it `http://example.org/book/12345`, I can look it up.
- <b>Principle 3 (Useful Information):</b> When the server responds, it shouldn't just send a raw byte stream; it should send <b>RDF</b> (Structured Data) so a machine can understand it.
- <b>Principle 4 (Links):</b> This creates the "Web." Without links to outside datasets (e.g., linking your city resource to DBPedia), you just have a data silo, not Linked Data.
    
---

### RDF

> <b>User Text:</b>
> Resource Description Framework is a graph based data model with nodes and arcs that identifies objects (URIs) and interlinks information. Describes information as a subject-predicate-object structure.
> A RDF Term consists of URIs (U), blank nodes (B) and literals (L). A RDF triple has form
> ⟨s, p, o⟩(U ∪ B) × (U) × (U ∪ B ∪ L)
> Blank nodes refer to resources that can only be identifies within a file and are not globally addressable. Literals refer to concrete data values as strings, integers... we use XML Schema.

<b>🎓 Explanation & Exam Notes:</b>

- <b>The Triple:</b> The atom of data in RDF.
- <b>Subject ():</b> Can be a URI or a Blank Node.
- <b>Predicate ():</b> Must be a <b>URI</b>. (A blank node or literal cannot be a predicate property).
- <b>Object ():</b> Can be a URI, Blank Node, or Literal.
        
- <b>Set Notation:</b> Note the definition `(U ∪ B) × (U) × (U ∪ B ∪ L)`. This math notation is a common exam question format to define valid triples.
- <b>Blank Nodes:</b> Think of them as "Existential Variables." "There exists a person who knows Bob," but we don't give that person a specific URI. They are local scope identifiers.
    
---

### Turtle & 2.5 Transform graphical representations...

> <b>User Text:</b>
> Turtle stands for terse RDF Triple Language. Is a textual syntax for RDF. Is a subsection of Notation3 syntax which is more expressive.
> ...
> ⟨subject⟩⟨predicate⟩⟨object⟩.
> The dot is important.
> CURIEs stands for Compact URIs, a syntax for abbreviated URIs. It uses the format pref ix : reference.
> @prefix : .
> ...
> To avoid repeating subject or subject and predicate we use ”;”. with only one ”.” at the end:
> :Berlin :capital :DE ; :locatedOnBank :Spree .
> ...
> To nest blank nodes (from three to five)
> - [ ] eg:knows [ eg:name "Bob" ]

<b>🎓 Explanation & Exam Notes:</b>

- <b>Syntax Shortcuts (Crucial for transforming graphs to text):</b>
- <b>. (Dot):</b> Ends a complete triple.
- <b>; (Semicolon):</b> Repeats the <b>Subject</b>. (Predicate-Object list).
    - Example: `:Berlin :capital :DE ; :population 3500000 .` (Berlin is capital of DE <b>AND</b> Berlin has population...).

- <b>, (Comma):</b> Repeats the <b>Subject and Predicate</b>. (Object list).
    - Example: `:Berlin :hasType :City, :Capital .` (Berlin is a City <b>AND</b> Berlin is a Capital).
        
- <b>[] (Square Brackets):</b> Represents a <b>Blank Node</b>.
    
- <b>Datatypes:</b>
    - `"123"^^xsd:integer` (Typed literal).
    - `"Germany"@en` (Language tag string).
                        
---

### 2.6 Transform... to simple triple form N-Triples and viceversa

> <b>User Text:</b>
> ...
> :Berlin :inhabitants [:population 3433695 ; :year 1990 ]
> RDF also contains different types of list:
> • rdf:Seq, ordered list or sequence
> • rdf:Bag unordered set or not order relevant set
> • rdf:Alt set of alternatives
> They are expressed with ”()” which is rdf:nil .

<b>🎓 Explanation & Exam Notes:</b>

- <b>N-Triples:</b> The simplest, most verbose format. No abbreviations, no prefixes. Every URI must be written out fully in `<...>`.
- <b>N-Ary Relations:</b> RDF only handles binary relations (Subject -&gt; Object). If you need to say "The population was X <b>in year Y</b>", you have 3 items (Berlin, Population, Year).
- <i>Solution:</i> Use a Blank Node (as shown in your text) to group the population value and the year together, then link that Blank Node to Berlin.
        
- <b>Lists (Collections):</b> The syntax `( :A :B )` in Turtle is syntactic sugar for a linked list structure using `rdf:first`, `rdf:rest`, and `rdf:nil`.
    
---

### 2.7 Explain Linked Data principles from server/user perspective

> <b>User Text:</b>
> Server:
> 1. Coin URIs to name things
> 2. Use HTTP server to provide access to documents
> 3. Upon receiving a request, return useful information in RDF and RDF Schema
> 4. Include links to other URIs along the information
> 5. ...
> 6. > 7. 
<b>🎓 Explanation & Exam Notes:</b>

- This mirrors the 4 Principles but splits them by role.
- <b>Publisher (Server):</b> Responsible for <em>minting</em> (creating) URIs and serving the RDF.
- <b>Consumer (User Agent):</b> Responsible for <em>dereferencing</em> (looking up) the URIs and following the links to discover more data (Crawling).
    
---

### 2.8 Read and interpret HTTP request/response pairs...

> <b>User Text:</b>
> ...
> resp = http(req)
> ...
> A HTTP request has a start line S consisting of a tuple ⟨M, u, V ⟩ where M is the HTTP method, u is the request URI and V is the version. ... GET /about.html HTTP/1.1
> A HTTP response has a start line S consisting of a tuple ⟨SC, V ⟩ where SC is the status code and V is the version. ... HTTP/1.1 200 OK
> ...
> The content received can be negotiated. Typically, the preference of the request data is indicated in the header of the HTTP request.

<b>🎓 Explanation & Exam Notes:</b>

- <b>Content Negotiation (Conneg):</b> This is vital for Linked Data. The same URI (e.g., `http://example.org/Berlin`) can identify a real city.
- If a <b>Browser</b> requests it (`Accept: text/html`), the server returns an HTML page.
- If a <b>Data Crawler</b> requests it (`Accept: text/turtle`), the server returns RDF data.
        
- <b>Status Codes:</b>
- <b>200 OK:</b> Here is the content.
- <b>303 See Other:</b> The thing you asked for (e.g., the city Berlin) is not a file, but I can redirect you to a file describing it.
- <b>404 Not Found:</b> Resource doesn't exist.
            
---

### 2.9 Hash URIs vs Slash URIs & 2.10 Connection between resources

> <b>User Text:</b>
> 2.9 ...
> Hash URI strips off the hash of a hash URI to access the main resource.
> Slash URI retrieves the document’s URI by an HTTP redirect (303). It allows for content negotiation...
> 2.10 ...
> Information resource: the referent of a URI belongs to a set of information if the URI does not contain a ”” an A HTTP GET on the URI results in a 200 OK.
> If it contains a ”” and leads to a 303 (redirection) is considered an other resource...

<b>🎓 Explanation & Exam Notes:</b>

This addresses the "HTTP Range 14" problem: <b>How do we distinguish a real-world object (Berlin) from a document about it?</b>

1. <b>Hash URIs (</b><b>http://example.org/about#Berlin</b><b>):</b>

- <b>Mechanism:</b> The fragment `#Berlin` is handled by the client (browser), stripped off before sending the request to the server.
- <b>Server sees:</b> `GET /about`.
- <b>Server returns:</b> `200 OK` (The whole document).
- <b>Advantage:</b> Simple, reduces server load (fewer requests).
- <b>Disadvantage:</b> You must download the <em>entire</em> file even if you only want one small thing inside it.
        
1. <b>Slash URIs (</b><b>http://example.org/Berlin</b><b>):</b>

- <b>Mechanism:</b> The server receives `GET /Berlin`.
- <b>Issue:</b> Berlin is a city, not a file. You can't send a "city" over the wire.
- <b>Solution (303 Redirect):</b> The server replies `303 See Other`, redirecting you to `http://example.org/Berlin.rdf` (the data) or `http://example.org/Berlin.html` (the page).
- <b>Advantage:</b> Clean, allows unique configuration for every resource.
- <b>Disadvantage:</b> Requires 2 HTTP round-trips (Request -&gt; 303 -&gt; Request -&gt; 200).
            
---

<b>Next Step:</b>

We have covered Chapter 2. <b>Would you like to do a quick practice exercise on transforming an English sentence into Turtle syntax (Triples), or are you ready for Chapter 3?</b>

# 
