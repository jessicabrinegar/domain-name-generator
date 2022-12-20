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
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++)
        for (let m = 0; m < ext.length; m++) {
          result.push(pronoun[i] + adj[j] + noun[k] + ext[m]);
        }
    }
  }
  let domainNames = document.getElementById("domain-name");
  for (let i = 0; i < result.length; i++) {
    domainNames.innerHTML += `${result[i]}<br>`;
  }
};
