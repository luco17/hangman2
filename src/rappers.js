const rappers = [
  "Travis Scott",
  "Biggie",
  "Tupac",
  "Eminem",
  "Lil Pump",
  "Lil Flip",
  "Lil Wayne",
  "Drake",
  "Kanye West",
  "Jay Z",
  "ASAP ROCKY",
  "Rakim",
  "Ice Cube",
  "Eazy E",
  "Snoop Dogg",
  "XXX Tentacion",
  "Wifis Funeral",
  "Mac Miller",
  "Post Malone",
  "J Cole",
  "Kendrick Lamar",
]

export function getRapper(){
  return rappers[Math.floor(Math.random()*rappers.length)];
}