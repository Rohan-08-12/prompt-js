const numOfCourses = prompt("How many courses did you finish?", 0);
let courseMarks=[];
let  average=0;
if (isNaN(numOfCourses)) {
    document.write("<h1 >Invalid Input</h1>");
    
} else {
    for (let i = 0; i < numOfCourses; i++) {
        const courseMarksInput = prompt(`Enter marks for course ${i + 1}`, 0);
        if (isNaN(courseMarksInput)) {
            document.write("<h1 >Invalid Input</h1>");
            break;
        } else {
            courseMarks.push(Number(courseMarksInput));
            console.log(courseMarks);
            document.write("<h1 >Marks for course " + (i + 1) + " : " + courseMarks[i] + "</h1>");


        }
    }
}

average=courseMarks.reduce((a, b) => a + b, 0) / courseMarks.length;
average = Math.round(average * 100) / 100;

if (average >= 90 && average <= 100) {
    document.write(`<h2>Yoy final average is ${average}. Your grade is A+</h2>`);
} else if (average >= 80 && average < 90) {
    document.write(`<h2>Yoy final average is ${average}. Your grade is B</h2>`);
} else if (average >= 70 && average < 80) {
    document.write(`<h2>Yoy final average is ${average}. Your grade is C</h2>`);
}else if (average >= 60 && average < 70) {
    document.write(`<h2>Yoy final average is ${average}. Your grade is D</h2>`);
}else if ( average < 60) {
    document.write(`<h2>Your final average is ${average}. Your grade is F</h2>`);
}else{
    document.write("<h2 >Sorry,all marks have to be from minimum 0 to maximum 100</h2>");
}

