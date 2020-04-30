const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init()
{
  // your code here
  document.body.addEventListener("keydown", (event) => {
    for(let i = 0; i < codes.length; i += 1)
    {
      if(event.key != codes[i])
      {
        console.log(`Nope!`)
        return `Nope!`
      }
    }
    alert(`W0W!!! U R L33T H4K3R!!! 1MPR3551V3!!!`)
}
