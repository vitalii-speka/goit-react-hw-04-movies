import queryString from "query-string";

function getQueryPatams(qs) {
  return queryString.parse(qs);
}
export default getQueryPatams;
