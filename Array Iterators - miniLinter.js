// Boiler plate provided by Code Academy
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
const unnecessaryWords = ['extremely', 'literally', 'actually' ];
const overusedWords = ['really', 'very', 'basically'];

// Count how many words there are and display them to the user
const storyWords = story.split(' ');
console.log(`There are ${storyWords.length} words in this story.`);

// Count how many sentences there are and display them to the user
const storySentences = story.split(/[.!]/g);
console.log(`There are ${howManySentences.length} sentences in this story.`);

// Rule out from the story the unnecessary words
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

// Count how many times each overused word is used and display that to the user
const overusedWordsCounter = overusedWords.forEach(overusedWord => {
  const counter = storyWords.filter(storyWord => storyWord === overusedWord);
  console.log(`The word '${overusedWord}' is used ${counter.length} times.`)
})

// Display the final result of the mini linter to the user
console.log(`Once substracted the overused words and the unnecessary words, the story should be as follows:\n'${betterWords.join(' ')}'`);
