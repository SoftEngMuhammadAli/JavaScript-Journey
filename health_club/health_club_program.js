class Member {
  constructor(name, age, membershipType) {
    this.name = name;
    this.age = age;
    this.membershipType = membershipType;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Membership Type: ${this.membershipType}`;
  }
}

class HealthClub {
  constructor() {
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  removeMember(name) {
    this.members = this.members.filter((member) => member.name !== name);
  }

  listMembers() {
    return this.members.map((member) => member.getDetails()).join("\n");
  }
}

const club = new HealthClub();
const member1 = new Member("John Doe", 30, "Gold");
const member2 = new Member("Jane Smith", 25, "Silver");

club.addMember(member1);
club.addMember(member2);

console.log(club.listMembers());

club.removeMember("John Doe");

console.log(club.listMembers());
