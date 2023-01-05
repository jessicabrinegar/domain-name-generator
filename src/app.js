/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(pronoun, adj, noun, ext) {
  pronoun = ["your", "my"];
  adj = ["tempestuous", "amusing", "provocative"];
  noun = ["laughter", "emotion", "code"];
  ext = [".com", ".net", ".io"];
  const result = [];
  for (const pro of pronoun) {
    for (const ad of adj) {
      for (const no of noun)
        for (const ex of ext) {
          result.push(pro + ad + no + ex);
        }
    }
  }
  let domainNames = document.getElementById("domain-name");
  for (const name of result) {
    domainNames.innerHTML += `${name}<br>`;
  }
};
