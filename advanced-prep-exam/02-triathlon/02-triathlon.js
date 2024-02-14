// Triathlon Class
// Implement a class Triathlon, which supports the functionality described below.
// Functionality
// Constructor
// The constructor has 3 properties:
// competitionName – a string
// participants – an empty object
// listOfFinalists – an empty array 
// At the initialization of the Triathlon class, the constructor accepts only one parameter competitionName which is a string! 
// The participants property is an object, representing a key-value pair of a participant name and gender.

// Methods 
// addParticipant (participantName, participantGender)
// This method adds a new participant to the participants object. The method accepts 2 arguments:
// participantName – a string
// participantGender – a string
// If the participant exists in the participants object, return the following message:
// `${participantName} has already been added to the list`
// Otherwise, add the new participant to the participants object in the following format {‘Peter’ : ‘male’} and return the following message:
// `A new participant has been added - ${participantName}`

// completeness (participantName, condition)
//  Accept 2 arguments: 
// participantName – a string
// condition – a number (0 – 100)
// If the participant doesn’t exist in the participants object, throw new Error:
// `${participantName} is not in the current participants list`
// There are three disciplines in the triathlon, and each requires the participant condition to be at least 30 for a discipline to be completed.
// If the participant exists in the participants object but his condition is lower than 30, throw a new Error: 
// `${participantName} is not well prepared and cannot finish any discipline`
// Afterwards, find how many disciplines is the participant able to complete depending on his condition (condition divided by 30). If they completed only one or two disciplines, return the following message:
// `${participantName} could only complete ${completedCount} of the disciplines`
// Otherwise extract the participant from the participants object and add him to the list of finalists in the following format: { participantName, participantGender }
// Return the following message:
// `Congratulations, ${participantName} finished the whole competition`
// rewarding (participantName)
// Accept 1 argument:
// participantName – a string
// If the participantName is not present in the list of finalists, return the following message:
// `${participantName} is not in the current finalists list`
// Otherwise, return the following message:
// `${participantName} was rewarded with a trophy for his performance`

// showRecord (criteria)
// Accept 1 argument:
// criteria – a string
// This method returns information based on the criteria. The three possible types of criteria are: "male", "female" or "all".

// If the list of finalists is empty, return the following message: 
// `There are no finalists in this competition`
// If there are no finalists with the given criteria, return: 
// `There are no ${participantGender}'s that finished the competition`
// If there are finalists with the given criteria, return a message with the firstly added participant in the following format:
// `${participantName} is the first ${criteria} that finished the ${competitionName} triathlon`;
// Otherwise if the criteria is all, return all finalists from the list of finalists array in following format:
// On first line show the following message:
// `List of all ${competitionName} finalists:`
// On the following lines, display the names of each finalist sorted  in ascending order:
// `${participantName}`

class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }


    addParticipant(participantName, participantGender) {

        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        } else {
            return `${participantName} has already been added to the list`;
        }
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const completedCount = Math.round(condition / 30);

        if (completedCount <= 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        this.listOfFinalists[participantName] = this.participants[participantName];
        delete this.participants[participantName];

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        if (!this.listOfFinalists.hasOwnProperty(participantName)) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {

        const result = Object.keys(this.listOfFinalists).sort((a, b) => a.localeCompare(b));
        if (!Object.keys(this.listOfFinalists).length) {
            return `There are no finalists in this competition`;
        }

        for (const prop in this.listOfFinalists) {
            if (criteria == 'all') {
                debugger
                return `List of all ${this.competitionName} finalists:\n${result.join('\n')}`;
            }
            if (this.listOfFinalists[prop] == criteria) {
                return `${prop} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
            return `There are no ${criteria}'s that finished the competition`;
        }
    }
}


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));