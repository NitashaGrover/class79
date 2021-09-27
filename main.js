var name_of_student_array=[];

function submit()
{
var first_name=document.getElementById("student1").value;
var second_name=document.getElementById("student2").value;
var third_name=document.getElementById("student3").value;
var fourth_name=document.getElementById("student4").value;

name_of_student_array.push(first_name);
name_of_student_array.push(second_name);
name_of_student_array.push(third_name);
name_of_student_array.push(fourth_name);

console.log(name_of_student_array);

document.getElementById("names_of_students").innerHTML=name_of_student_array;
document.getElementById("submitbtn").style.display="none";
document.getElementById("sort_btn").style.display="inline-block";

}
function sorting()
{
name_of_student_array.sort();
document.getElementById("names_of_students").innerHTML=name_of_student_array;
}