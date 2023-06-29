function HomePage() {
    return (
      <div>
        <h1>Welcome to Our Decentralized SPARQL Endpoint!</h1>
        <p>This is a SPARQL endpoint built on top of the Interplanetary File System (IPFS) as part of a Semantic Web project.</p>
        <p>You can send SPARQL queries to this endpoint by making a POST request to <code>/api/sparql</code> with your query in the body of the request.</p>
      </div>
    );
  }
  
  export default HomePage;