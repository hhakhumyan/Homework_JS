/*
    For the given list of payments do the following exercises:
    Տրված վճարումնեի ցուցակի համար կատարել հետեւյալ վարժություննորը։

    For the given list of payments do the following exercises:
    Տրված վճարումնեի ցուցակի համար կատարել հետեւյալ վարժություննորը։
    1.  Find the max payment
    Գտնելմեծագույն կատարված վճարումը
    2.  Calculate the sum of all payments
    Հաշվել վճարումների ամբողջգումարը
    3.  Find the count of all payments that are more than 1500
    Գտնելբոլորայն վճարումներիքանակը, որոնք ավելինեն1500-ից
    4.  Calculate the average of all payments
    Հաշվելբոլորկատարված վճարուներիթվաբանական միջինը
*/

const payments = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
    }
    ]

    for(let obj of payments){
        for(let key in obj){
            
        if(key === payedAmount){}

        }
    }


 /*
    3. Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
    getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
    getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
    getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
    getFrequencies([]) ➞ {}
*/

function getFrequencies(arr) {
    let freq = {};
    arr.forEach(function(el) {
      if (el in freq) {
        freq[el] += 1;
      } else {
        freq[el] = 1;
      }
    });
    return freq;
  }

  let arr = ["A", "B", "A", "A", "A"];
let result = getFrequencies(arr);
console.log(result); // Output: { A: 4, B: 1 }