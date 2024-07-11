export default class Team {
  constructor(members) {
    this.members = members;
  }

  [Symbol.iterator] = function () {
    let current = 0;
    let last = this.members.length;
    const team = this;
    return {
      next() {
        if (current < last) {
          return {
            value: team.members[current++],
            done: false
          }
        }
        return {
          done: true
        }
      }
    }
  }
}