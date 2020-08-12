//Rashmil Panchani 99 97 Parag Vaid 95 93 Siddharth Sanghavi 98 100 --sample input
var file =[{
    "name":process.argv[2],
    "surname":process.argv[3],
    "mathMarks":parseFloat(process.argv[4]),
    "englishMarks":parseFloat(process.argv[5])},


{
    "name":process.argv[6],
    "surname": process.argv[7],
    "mathMarks":parseFloat(process.argv[8]),
    "englishMarks":parseFloat(process.argv[9])
},
{
    "name":process.argv[10],
    "surname": process.argv[11],
    "mathMarks":parseFloat(process.argv[12]),
    "englishMarks":parseFloat(process.argv[13])
}]

function rank(file){
  file.sort((a, b) => parseFloat((b.mathMarks+b.englishMarks)/2) - parseFloat((a.mathMarks+a.englishMarks)/2));


    console.log(file)
}
rank(file);//converting to string
