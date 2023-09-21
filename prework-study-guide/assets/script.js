var topics = ["HTML", "CSS", "Git", "Javascript"];

function listTopics() {
    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

let randomTopic = topics[Math.floor(Math.random() * topics.length)];

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("let' s study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("let's study Git!");
    } else if (randomTopic === 'Javascript') {
        console.log("let's study Javascript!");
    } else {
        console.log("please try again!");
    }
}
console.log("Here are the topics we learned through prework:");
listTopics();
console.log("What topic should we study first?");
selectTopic();