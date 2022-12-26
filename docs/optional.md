#### Optionally: Update metadata

- update frontend/package.json metadata: name, author, etc

#### Optionally: customize host, port

- copy example.env to .env
- edit .env to set host and port variables

If you changed the host, make sure:

- the host resolves correctly to your machine's ip (resolving to 127.0.0.1 would always work)
- the certificate is issued to the host
