/*const students = [
    { name: "John Doe", grade: "A" },
    { name: "Jane Smith", grade: "B" },
    { name: "Emily Jones", grade: "A" },
    { name: "William Brown", grade: "C" },
    { name: "Grace Davis", grade: "B" }
]*/

const grade = {
    A: ["John Doe", "Emily Jones"],
    B: ["Jane Smith", "Grace Davis"],
    C: ["William Brown"]
}

let students = [];

for ( key in grade){
    for ( i in grade[key]){
        students.push({grade: key, name:grade[key][i], })
    }
}
console.log(students)