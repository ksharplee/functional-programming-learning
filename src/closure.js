
function makeAdjectifier(adjective) {
  return function(noun) {
    return adjective + ' ' + noun;
  }
}

let holify = makeAdjectifier("Holy");

console.log(holify('Js'));
console.log(holify('Cow'));