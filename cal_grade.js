

/*

90-100 = A
80-89.99 = B
70-79.99 = C
60-69.99 = D
0-59.99 = F
*/




let add = () => {
    let names = document.querySelector("#names").value
    let studentID = document.querySelector("#studentID").value
    let score = document.querySelector("#score").value


    if (score >= 90 && score <= 100) {
        document.querySelector(".you_name").innerHTML = `${names}`
        document.querySelector(".you_id").innerHTML = `${studentID}`
        document.querySelector(".you_score").innerHTML = `${score}`
        document.querySelector(".you_grade").innerHTML = "A"
    } else if (score >= 80 && score <= 89.99) {
        document.querySelector(".you_name").innerHTML = `${names}`
        document.querySelector(".you_id").innerHTML = `${studentID}`
        document.querySelector(".you_score").innerHTML = `${score}`
        document.querySelector(".you_grade").innerHTML = "B"
    } else if (score >= 70 && score <= 79.99) {
        document.querySelector(".you_name").innerHTML = `${names}`
        document.querySelector(".you_id").innerHTML = `${studentID}`
        document.querySelector(".you_score").innerHTML = `${score}`
        document.querySelector(".you_grade").innerHTML = "C"
    } else if (score >= 60 && score <= 69.99) {
        document.querySelector(".you_name").innerHTML = `${names}`
        document.querySelector(".you_id").innerHTML = `${studentID}`
        document.querySelector(".you_score").innerHTML = `${score}`
        document.querySelector(".you_grade").innerHTML = "D"
    } else if (score >= 0 && score <= 59.99) {
        document.querySelector(".you_name").innerHTML = `${names}`
        document.querySelector(".you_id").innerHTML = `${studentID}`
        document.querySelector(".you_score").innerHTML = `${score}`
        document.querySelector(".you_grade").innerHTML = "F"
    } else {
        alert("กรุณาตรวจสอบข้อมูล")
    }
}








