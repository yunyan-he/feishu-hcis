---
title: Learning Goal
slug: X5HAwhUxHixmzTkqv9BcS22Cn6c/BBEOwHkYViRIM1kzyxHc8iKgnMc
sidebar_position: 0
---


# Learning Goal

# Chapter 1

## Explanation

Here is the review of Chapter 1. As requested, I have kept your text exactly as is, followed by an <b>English expansion and explanation</b> to help you prepare for the exam.

---

### Distinguish between hierarchical structure and network structure in representing information

> <b>User Text:</b>
> Hierarchical structures organize information in a top-down manner, with each node representing a concept or category, and subcategories or instances branching off from parent nodes. Example: schema.org.
> Network structures describes a directed graph, i.e. a set of nodes that are linked by directed edges (“arrows”). Both nodes and edges are labeled with identifiers to distinguish them. Example: RDF.

<b>🎓 Explanation & Exam Notes:</b>

- <b>Hierarchical Structure (Tree):</b>
- Think of this as a "Tree structure."
- <b>Key Constraint:</b> A child node usually has only <em>one</em> parent. It is strict and rigid.
- <b>Context:</b> While the user text mentions `schema.org` as an example, `schema.org` is technically a vocabulary that <em>can</em> be used in a hierarchy, but it is often used within the network structure of the Semantic Web. A classic example of hierarchy is your computer's <b>File System</b> (Folders within Folders).
        
- <b>Network Structure (Graph):</b>
- Think of this as a "Spider web" or a "Graph."
- <b>Key Feature:</b> Any node can connect to any other node. There is no strict "top" or "bottom."
- <b>RDF (Resource Description Framework):</b> This is the data model of the Semantic Web. It uses <b>Triples</b> (Subject  Predicate  Object) to form these directed graphs.
            
---

### Outline basic internet and web technologies and describe the relation between them

> <b>User Text:</b>
> (User text was brief here, so I will provide the necessary expansion directly below).

<b>🎓 Explanation & Exam Notes:</b>

You must distinguish between the <b>Infrastructure</b> and the <b>Application</b>:

1. <b>The Internet (Infrastructure):</b>

- The physical network of interconnected computer networks.
- <b>Technologies:</b> TCP/IP (Transmission Control Protocol/Internet Protocol), Routers, Cables, DNS (Domain Name System).
- <i>Analogy:</i> The "Roads" and "Highways."
        
1. <b>The Web (Application):</b>

- An information space <em>built on top</em> of the Internet.
- <b>Technologies:</b>
- <b>HTML:</b> The format (Language) for documents.
- <b>HTTP:</b> The protocol (Rules) for transferring documents.
- <b>URI:</b> The identifier (Address) for resources.
        
- <i>Analogy:</i> The "Cars" and "Cargo" traveling on the roads.
            
---

### Assess the characteristics of decentralisation in information system architectures

> <b>User Text:</b>
> • Robustness: No single point of failure, improving system resilience and reliability.
> • Enhanced scalability: Easily accommodate growth by adding more nodes to the network.
> • Reduced latency: Data processing occurs closer to users, ensuring faster response times.

<b>🎓 Explanation & Exam Notes:</b>

- <b>Robustness:</b>
- <i>Exam Keyword:</i> <b>Fault Tolerance.</b>
- In a centralized system (like a bank database), if the main server crashes, the whole system stops. In a decentralized Web, if one server crashes, the rest of the web continues to function.
        
- <b>Enhanced Scalability:</b>
- You do not need permission from a central authority (like Google or a Government) to add a new page or server to the Web. You just connect it. This allows the network to grow organically.
        
- <b>Reduced Latency:</b>
- <i>Context:</i> This often refers to Content Delivery Networks (CDNs) or Edge Computing, where data is stored physically closer to the user to reduce the travel time of the signal.
            
---

### Explain the network effect as expressed in Metcalfe’s Law

> <b>User Text:</b>
> According to Metcalfe, the cost of a network is directly proportional to the number of cards installed (users), but the value of the network is proportional to the square of the number of users. Cost = N, but Value = N2.

<b>🎓 Explanation & Exam Notes:</b>

- <b>The Concept:</b> A single fax machine is useless (Value = 0). Two fax machines allow 1 connection. Millions of fax machines create billions of possible connections.
- <b>The Formula:</b>
- <b>Cost ():</b> Scales <b>Linearly</b>. Adding one user adds a fixed amount of hardware cost.
- <b>Value ():</b> Scales <b>Quadratically</b> (Exponentially). The utility of the network increases much faster than the cost.
        
- <b>Why it matters for Semantic Web:</b> This explains why linking data is so powerful. The more data you link (Linked Open Data), the exponentially more valuable the global knowledge base becomes.
    
---

### Identify and name resources; tell information resources apart from other resources based on a textual description

> <b>User Text:</b>
> A resource is an abstract notion for things of discourse, be they abstract or concrete, physical or virtual.
> An Uniform Resource Identifier (URI) is a character sequence that identifies a resource.
> URI syntax specification:
> URI = scheme ":" hierarchical part [ "?" query ] [ "#" fragment]
> • Query and fragment are optional
> • Hierarchical part is divided in:
> authority "/" [path]
> Definition of each member:
> • scheme: specifies type of URI. For example: http, ftp, smtp...
> • authority: hostname and optional port number
> • path: reference to content on the host server, can be interpreted in a hierarchical fashion
> • query: contains data that does not match tree structure
> • fragment: addresses local part of a document
> [http]":"[//example.com:8042]"/"[over/there]"?"[name=ferret]"#"[nose]

<b>🎓 Explanation & Exam Notes:</b>

<b>1. Distinguishing Resources (Important for Exam):</b>

- <b>Information Resource:</b> Anything that can be transmitted electronically (as a stream of bytes) via the network.
- <i>Examples:</i> An HTML webpage, a PDF file, a JPG image.
        
- <b>Non-Information (Other) Resource:</b> Real-world objects or concepts that <em>cannot</em> be transmitted electronically.
- <i>Examples:</i> A person (Alice), a physical book, the concept of "Freedom," the Eiffel Tower.
- <i>Note:</i> You cannot "download" the Eiffel Tower; you can only download a <em>description</em> or <em>photo</em> (Information Resource) that <em>represents</em> the Eiffel Tower (Non-information Resource).
            
<b>2. URI Syntax Analysis:</b>

Let's analyze your specific example: `http://example.com:8042/over/there?name=ferret#nose`

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>Component</p></td><td><p>Value in Example</p></td><td><p>Explanation</p></td></tr>
<tr><td><p><b>Scheme</b></p></td><td><p><code>http</code></p></td><td><p>Tells the browser <b>how</b> to access the resource (Protocol).</p></td></tr>
<tr><td><p><b>Authority</b></p></td><td><p><code>//example.com:8042</code></p></td><td><p>Tells the browser <b>where</b> the resource is. Includes the <b>Host</b> (<code>example.com</code>) and the <b>Port</b> (<code>8042</code>).</p></td></tr>
<tr><td><p><b>Path</b></p></td><td><p><code>/over/there</code></p></td><td><p>The specific file location or directory structure on that server.</p></td></tr>
<tr><td><p><b>Query</b></p></td><td><p><code>?name=ferret</code></p></td><td><p>Non-hierarchical data used for parameters (e.g., search terms). Always starts with <code>?</code>.</p></td></tr>
<tr><td><p><b>Fragment</b></p></td><td><p><code>#nose</code></p></td><td><p>Points to a specific section <b>within</b> the returned resource (e.g., scrolling down to the paragraph about the ferret&#39;s nose). The fragment is <b>not</b> sent to the server; it is handled by your browser.</p></td></tr>
</tbody>
</table>

## Related with ppt

Here is the review of Chapter 1 based on your learning goals and the provided lecture slides.

As requested, I have kept your text exactly as is, followed by an <b>English Expansion & Explanation</b> derived directly from the lecture material to help you prepare for the exam.

---

### Distinguish between hierarchical structure and network structure in representing information

> <b>User Text:</b>
> Hierarchical structures organize information in a top-down manner, with each node representing a concept or category, and subcategories or instances branching off from parent nodes. Example: schema.org.
> Network structures describes a directed graph, i.e. a set of nodes that are linked by directed edges (“arrows”). Both nodes and edges are labeled with identifiers to distinguish them. Example: RDF.

<b>🎓 Lecture Expansion & Explanation:</b>

- <b>Hierarchical Structure:</b> The lecture illustrates this using the <b>Mundaneum</b> (Paul Otlet, early 20th century) as a historical example.
    - It used a decimal classification system (e.g., `493.211`) to categorize knowledge.
    - <i>Concept:</i> Information is strictly nested (folders within folders).

- <b>Network Structure:</b> The lecture contrasts hierarchy with the concept of "intertwingled" data (Ted Nelson's Xanadu)  and the Semantic Web's graph structure.
    - <i>Key Difference:</i> In a network, nodes are not restricted to a single parent. It is a "Web of Data" where things are interconnected universally.
    - This structure allows for the "linking" of documents and data across different servers.
    
---

### Outline basic internet and web technologies and describe the relation between them

> <b>User Text:</b>
> (No text provided by user, adding explanation based on slides).

<b>🎓 Lecture Expansion & Explanation:</b>

You must distinguish between the <b>Infrastructure</b> and the <b>Application</b>:

1. <b>The Internet (Infrastructure):</b>

- <b>Governance:</b> Standards are managed by the <b>IETF</b> (Internet Engineering Task Force) via <b>RFCs</b> (Request for Comments).
- <b>Key Protocols:</b>
    - <b>IP (Internet Protocol):</b> Responsible for sending packets to devices (Addressing).
    - <b>TCP (Transmission Control Protocol):</b> Breaks data into packets and ensures delivery.

- <b>Addressing:</b> <b>IANA</b> (Internet Assigned Numbers Authority) manages IP addresses and DNS (Domain Name System).

1. <b>The Web (Application):</b>

- <b>Governance:</b> Standards are managed by the <b>W3C</b> (World Wide Web Consortium), directed by Tim Berners-Lee.
- <b>Key Technologies:</b>
    - <b>HTTP:</b> The protocol for transferring documents/data.
    - <b>HTML:</b> The language for encoding documents and structure.
    - <b>URI:</b> The standard for identifying resources.

1. <b>The Relation:</b> The Web is an application that runs <em>on top of</em> the Internet infrastructure. The Internet moves the data (packets), while the Web provides the interface (documents/links) for humans and machines to interact with it.

---

### Assess the characteristics of decentralisation in information system architectures

> <b>User Text:</b>
> • Robustness: No single point of failure, improving system resilience and reliability.
> • Enhanced scalability: Easily accommodate growth by adding more nodes to the network.
> • Reduced latency: Data processing occurs closer to users, ensuring faster response times.

<b>🎓 Lecture Expansion & Explanation:</b>

- <b>Robustness (Postel's Principle):</b> The lecture highlights <b>Jon Postel's Robustness Principle</b> (RFC 793) as a core concept of decentralized reliability: *"Be conservative in what you do, be liberal in what you accept"*.
    - <i>Meaning:</i> Systems should be strict in what they emit (send), but flexible in what they accept from others to prevent the network from crashing due to minor errors.

- <b>Scalability (Permissionless Innovation):</b> The lecture emphasizes that the Web allows for <b>"No growth scalability problem"</b>.
    - Because there is no central authority required to create a link or add a server (no lengthy permission process), the network can grow indefinitely.
    
---

### Explain the network effect as expressed in Metcalfe’s Law

> <b>User Text:</b>
> According to Metcalfe, the cost of a network is directly proportional to the number of cards installed (users), but the value of the network is proportional to the square of the number of users. Cost = N, but Value = N2.

<b>🎓 Lecture Expansion & Explanation:</b>

- <b>The Logic:</b>
- <b>Cost (N):</b> Linearly proportional to the number of devices/users.
- <b>Value (N^2):</b> Proportional to the square of users because every new user can potentially connect to every existing user.
- <b>Critical Mass Crossover:</b> There is a specific point where the Value curve surpasses the Cost curve. Once this point is reached, the network becomes self-sustaining and highly profitable/valuable.
- <b>Feedback Loop:</b> This creates a "Positive feedback loop" where the increasing value attracts even more users, further increasing the value.

---

### Identify and name resources; tell information resources apart from other resources based on a textual description

> <b>User Text:</b>
> A resource is an abstract notion for things of discourse, be they abstract or concrete, physical or virtual.
> An Uniform Resource Identifier (URI) is a character sequence that identifies a resource.
> URI syntax specification:
> URI = scheme ":" hierarchical part [ "?" query ] [ "#" fragment]
> • Query and fragment are optional
> • Hierarchical part is divided in:
> authority "/" [path]
> Definition of each member:
> • scheme: specifies type of URI. For example: http, ftp, smtp...
> • authority: hostname and optional port number
> • path: reference to content on the host server, can be interpreted in a hierarchical fashion
> • query: contains data that does not match tree structure
> • fragment: addresses local part of a document
> [http]":"[//example.com:8042]"/"[over/there]"?"[name=ferret]"#"[nose]

<b>🎓 Lecture Expansion & Explanation:</b>

1. <b>Distinguishing Resources:</b>

The lecture makes a crucial distinction (often referred to as the "HTTP Range 14" issue in Semantic Web history):

- <b>Information Resources:</b> Things that are digital "files" and can be transmitted over the network.
    - <i>Lecture Examples:</i> Electronic documents, images, "files".

- <b>Non-Information (Other) Resources:</b> Abstract concepts or real-world objects that <em>cannot</em> be transmitted as bytes.
    - <i>Lecture Examples:</i> Chemical elements, rooms, people, abstract concepts.

- <i>Distinction:</i> You must distinguish between the <b>URI</b> (the name) and the <b>Resource</b> (the thing itself).

1. <b>Detailed URI Syntax Analysis:</b>

Based on the specific slide in your lecture, here is the breakdown of the example:

`http://example.com:8042/over/there?name=ferret#nose`

- <b>Scheme:</b> `http` Specifies the protocol/type. (Other examples in slides: `ftp`, `mailto`, `tel`) .
- <b>Authority:</b> `//example.com:8042`Consists of the <b>Hostname</b> (`example.com`) and optional <b>Port</b> (`8042`).
- <b>Path:</b> `/over/there`A reference to content on the server, interpreted hierarchically (like a file directory).
- <b>Query:</b> `?name=ferret`Contains data (variables) that does <em>not</em> match the tree structure. Always separated by a `?`.
- <b>Fragment:</b> `#nose` Addresses a specific local part <em>inside</em> the document. Separated by `#`.

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

