//Rashmil Panchani 99 97 Parag Vaid 95 93 Siddharth Sanghavi 98 100 --sample input
var file =[{
    "name":process.argv[2],
    "surname":process.argv[3],
    "mathMarks":process.argv[4],
    "englishMarks":process.argv[5]},
{
    "name":process.argv[6],
    "surname": process.argv[7],
    "mathMarks":process.argv[8],
    "englishMarks":process.argv[9]
},
{
    "name":process.argv[10],
    "surname": process.argv[11],
    "mathMarks":process.argv[12],
    "englishMarks":process.argv[13]
}] 

function rank(file){
    file = JSON.parse(file)//converting back to object
    file.sort((a,b)=>{   //sorting it (returning -1 swaps the place)
        if((a.mathMarks+a.englishMarks)/2>(b.mathMarks+b.englishMarks)/2){
            return -1;
        }
        if((a.mathMarks+a.englishMarks)/2<(b.mathMarks+b.englishMarks)/2){
            return 1;
        }
        return 0;
    })
    console.log(file)
}
rank(JSON.stringify(file));//converting to string
