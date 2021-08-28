/**
   if and if-else statements Exercises.
*/

/**
 * Problem: WAP to cast vote to a candidate based on age eligibility criteria.
 */

 /* Algo:
    -----
    1. age
    2. if age >= 18, can give vote.
    3. otherwise, can't give vote.
 */

// In ES5
function casteVote(age) {
    if (age>=18) {
        console.log('you can give vote!! :)');
    } else {
        console.log('you can not give vote!! :)');
    }
}
casteVote(18);

// In ES6
const canVote = (age) => {
    if (age>=18) {
        console.log('you can give vote!! :)');
    } else {
        console.log('you can not give vote!! :)');
    }
}

//canVote(17);

/**
 * Problem: WAP to show which meeting schedule for the given day.
 */

 /*
  Algo:
  ----
  1. day
  2. check the day name
  3. Meeting name to be scheduled.
 */
 // In ES6
 const scheduleMeeting = (day) => {
      if (day === 'Monday') {
          console.log('Task assignment meeting.')
      }

      if (day === 'Wednesday') {
          console.log('Ticket clarification on the task assigned.')
      }

      if (day === 'Thrusday') {
          console.log('Demo Meeting.')
      }
 }

 scheduleMeeting('Monday');

/**
 * Your's Excercise
 * Problem: WAP to choose a field based on your's Percentage.
 */


/**
 * Your's Excercise
 * Problem: WAP to check the number is even or odd.
 */
