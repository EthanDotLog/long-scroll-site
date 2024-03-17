// Create a function to generate random fun text
  const encouragements = [
    "Ah, there you are, still scrolling! Didn't think you'd give up this easily, did I? You're tenacious, I'll give you that. ",

    "Hey, you've almost reached the bottom... almost. But hey, at least you're getting a killer workout for your thumb! ",
    
    "Is this the part where I tell you there's a secret message at the very bottom? Nah, just kidding (or am I...?). ",
    
    "Wow, you're really committed, aren't you? Scrolling like that takes some serious dedication. Maybe you should channel that energy into winning the lottery! ",
    
    "Admit it, you're just here for the witty narrator, aren't you? Well, flatter yourself. But seriously, there's probably not much further to go... ",
    
    "They say curiosity killed the cat, but boredom definitely kills the scroll. Stay curious, my friend, and maybe you'll find something interesting after all. ",
    
    "Let's be honest, we both know there's nothing magical at the bottom of the page. But hey, the journey is the destination, right? At least that's what I keep telling myself.  ",
    
    "Hold on a sec, gotta adjust my crown... because scrolling like this definitely makes you royalty of the internet. Now keep going, your internet kingdom awaits!  ",
    
    "Is it just me, or is this scroll getting longer? Maybe it's a fitness challenge in disguise! You sly web developer, you... ",
    
    "Alright, alright, you win. You've scrolled to the bottom (or at least as far as I can program). You're officially a champion scroller. Now go forth and conquer the rest of the internet!  ",

    "Don't worry, I won't judge. We've all fallen down the rabbit hole of endless scrolling at some point. Besides, you have impeccable taste in witty narrators, clearly. ",
"Hey, gotta appreciate the dedication!  This scroll-a-thon could be your ticket to the prestigious 'Professional Scroller' Olympics. Gold medal awaits! ",
"Plot twist! The real treasure wasn't at the bottom of the page, but the friends we made along the way (which, let's be honest, is still just me).  ",
"Feeling a bit like Alice down the rabbit hole, are we? Don't worry, the internet may be a wonderland, but it's a much friendlier one (usually).  ",
"Breaking news! Local thumb gets epic workout thanks to user's insatiable scrolling curiosity. More at 11!  ",
"Is this where I confess I hid a secret message in Morse code using the loading dots? Maybe next time... keep scrolling, detective!  ️‍♀️",
"Okay, okay, you caught me! This page might be bottomless, but hey, at least you're learning valuable life skills like perseverance and, uh... finger dexterity?  ",
"Let's be honest, the internet is a vast and wonderful time-suck. But hey, at least you're getting sucked into something interesting (hopefully)!  ",
"Feeling existential about the meaning of this endless scroll? Don't worry, even the deepest philosophical questions can be answered with cat videos eventually.  ",
"You know what they say, a journey of a thousand clicks begins with a single scroll. Keep clicking, my friend, and see where the internet takes you! ",
"Hold on a sec, gotta check my watch... nope, still the same time. Time travel by scrolling seems like a myth, but hey, keep going, maybe you'll defy the laws of physics next!",

"Alright, champion scroller, are you ready for a boss battle? The final scroll might require all your finger strength... or maybe just a gentle tap to 'load more.'  ",
"Feeling like you've scrolled through every meme on the internet? Don't worry, new ones are born every minute. The internet: a never-ending buffet of procrastination! ",
"Wait a minute, are you secretly training for the thumb Olympics? Because this dedication to scrolling is truly impressive. Just sayin'.  ",
"Breaking news! Local user discovers a hidden portal to another dimension... buried deep within this very webpage (or maybe it's just an ad, keep scrolling to find out!).  ",
"Feeling a little lost in the endless scroll? Don't fret, even the most powerful wizards get lost in their digital libraries sometimes. Just keep your internet compass pointed towards fun! ",
"Hey, gotta respect the hustle! Maybe you're not just scrolling, you're mining this page for valuable internet nuggets. Keep digging, friend, there's gold in them thar pixels! ",
"Let's be honest, this scroll has become a beautiful metaphor for life's journey, right? Full of twists, turns, and unexpected cat videos. Buckle up and enjoy the ride! ",
"Feeling a little brain-fried from all this scrolling? Don't worry, a quick nap and a fresh scroll will have you back in peak internet-exploring form in no time! ",
"Just a friendly reminder, the real world still exists... somewhere out there. But hey, the internet is a pretty awesome place to hang out too. Maybe forever? Just kidding (or am I?).  ",
"you made it... well done... i think...."

];


function createParagraphs(encouragements) {
  const stagedStatements = encouragements.map((encouragement, index) => {
    const p = document.createElement('p');
    p.id = `encouragement-${index + 1}`;
    p.className = 'message';
    p.textContent = encouragement;
    const randomMarginPercent = Math.floor(Math.random() * 100); // 0 to 10
    const marginSide = Math.random() < 0.5 ? 'marginLeft' : 'marginLeft';
    p.style[marginSide] = `${randomMarginPercent}%`;
    return p;
  });

  return stagedStatements;
}

const stagedStatements = createParagraphs(encouragements);

let canTrigger = true;

function insertElement() {
  if (stagedStatements.length > 0 && canTrigger) {
    const element = stagedStatements.shift(); // Remove the first element from the array
    document.body.appendChild(element); // Insert it into the document
    canTrigger = false; // Prevent further triggers

    // Allow triggering again after 2 seconds
    setTimeout(() => {
      canTrigger = true;
    }, 2000);
  }
}

window.addEventListener('scroll', () => {
  // Check if the user has reached the end of the page
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    insertElement(); // Call the function to insert an element
  }
});