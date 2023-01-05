/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(pronouns, adjectives, nouns, extensions) {
  pronouns = ["your", "my"];
  adjectives = ["tempestuous", "amusing", "provocative"];
  nouns = ["laughter", "emotion", "code"];
  extensions = [".com", ".net", ".io"];
  const result = [];
  for (const pronoun of pronouns) {
    for (const adj of adjectives) {
      for (const noun of nouns)
        for (const ext of extensions) {
          result.push(pronoun + adj + noun + ext);
        }
    }
  }
  let domainNames = document.getElementById("domain-name");
  for (const name of result) {
    domainNames.innerHTML += `${name}<br>`;
  }
};
