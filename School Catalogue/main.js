class School {
    constructor(name, numberOfStudents, level) {
        this._name  = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(studenNumber) {
        if (studenNumber.isInteger()) {
            this._numberOfStudents = studenNumber;
        }   else { console.log('Invalid input: numberOfStudents must be set to a Number.') }
    }

    static quickFacts(arg) {
        console.log(`${arg.name} educates ${arg.numberOfStudents} students at the ${arg.level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        console.log(substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length - 1))])
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy, level = 'primary') {
        super(name, numberOfStudents, level);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name, numberOfStudents, level = 'middle') {
        super(name, numberOfStudents, level);
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams, level = 'high') {
        super(name, numberOfStudents, level);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineHansbury  = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury);
Primary.quickFacts(lorraineHansbury);
Primary.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith  = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith);
Primary.quickFacts(alSmith);
Primary.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(alSmith.sportsTeams);
