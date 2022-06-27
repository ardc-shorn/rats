RAID to ARDC handle server

Registering a handle infrastructure:
Handle server registers with "Global Handle Infrastructure" manually.

* handle server is assigned a prefix by global infra
* global infra stores a mapping between the prefix and the handler
server's API where it can lookup the contentPath for a suffix 

Minting a handle:
```mermaid
sequenceDiagram
autonumber
actor user as User
participant app as RAID App<br/>(SPA served<br/>from CloudFront) 
participant api as RAID API<br/>(on AWS)
participant handle as Handle Server<br/>(ardc.edu.au)
participant global as Global Handle Infra<br/>(handle.net)

user->>app: create raid with contentPath
app->>api: request handle with contentPath
api->>handle: create handle with contentPath<br/>possibly multiple calls
note right of handle: store suffix and contentPath in DB
handle->>api: return new handle
note right of api: store handle and contentPath in DB
api->>app: return new handle
app->>user: show new handle to user:<br/>https://hdl.handle.net/prefix/suffix 
```


Resolving a handle:
```mermaid
sequenceDiagram
autonumber
actor user as User
participant handle as Handle Server<br/>(ardc.edu.au)
participant global as Global Handle Infra<br/>(handle.net)
participant app as RAID App<br/>(SPA served<br/>from CloudFront) 
participant api as RAID API<br/>(on AWS)

user->>global: user navigates to <br/>https://hdl.handle.net/prefix/suffix
global->>handle: look up suffix<br/>(based on prefix)
note right of handle: look in DB<br/>return contentPath
global-->>user: 302 redirect to<br/>contentPath
```