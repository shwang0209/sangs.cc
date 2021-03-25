/* Copy Email Address */ 
function copyText() {
  const copyThis = "sangs.contact@gmail.com";
  copyThis.select();
  copyThis.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  document.getElementById("prefer").innerHTML = "Copied!";
}

function journeyOnset() {
  document.getElementById("journey-text").innerHTML = "My venture into the world of graphic design actually started when my high school French teacher made an offhand comment about a website called Piktochart. Later that week I made an account and started messing around with the tools that they give you. Before I knew it, I spent 2 years making over 50 posters and infographics on my free time.<br><br>Upon entering college, I decided to take my interest in graphic design to the next level and started self-learning Photoshop and Illustrator. I’m sure all of us have been here before; there were moments where I would feel incredibly frustrated by my own lack of knowledge, yet filled with excitement knowing what I’ll be able to do in the future. I just needed to put in a little more effort.";
}
function journeyVisions() {
  document.getElementById("journey-text").innerHTML = "My time living in New York City taught me so many things about design. Every day I was surrounded by millions of design choices made over the decades. A lot of them were good decisions that I could take inspiration from. However, a lot of them also left me asking:<br><br>Why would you make it like that?<br><br>Why keep it that way?<br><br>Are others okay with this?<br><br>That is why when I make something now, I aspire to create something I personally want to see out in the real world. Hopefully when I make something that I can be truly proud of, others will see it in the same positive manner.";
}
function journeyHobbies() {
  document.getElementById("journey-text").innerHTML = "Ever since the 2002 World Cup in my home country South Korea, soccer has been a central part of my life. As of 2021 I have been playing for nearly 17 years, and every time I step on the pitch is as enjoyable as it was all those years ago. As for my favorite team, I support Chelsea FC through thick and thin (even when they finished 10th in the Prem a few years ago). Actually, my love for Chelsea was probably obvious from my projects!<br><br>Apart from that, I like to play all sorts of video games. I mainly used to play Nintendo games, but over the past year I got into PC gaming and now it's my preferred platform of play! I'm in dire need of new games to try out, feel free to send me some recommendations!";
}