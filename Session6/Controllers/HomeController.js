
// (req, res) => {} -> handler function
function homeResponse (req, res) {
  res.status(200).send("Welcome to my fitness pagge Express JS ");
}

function aboutResponse (req, res) {
  res
    .status(200)
    .send("About Us: We are a company that does fitness CRM, DataRAG ~~~");
}

module.exports = { homeResponse, aboutResponse };