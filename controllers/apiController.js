function index(req, res) {
  res.json({
    message: "Welcome to BeerMe!",
    documentation_url: "",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/beers", description: "Lists all beers"},
      {method: "GET", path: "/api/beers/_id", description: "Lists one beer"},
    ]
  });
}

module.exports.index = index;
