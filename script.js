
function openFeatures(){
var allElems = document.querySelectorAll('.elem')
var fullElemPageBackBtn =document.querySelectorAll('.back')
 var fullElemPage = document.querySelectorAll('.fullElem')
allElems.forEach(function(elem,index){
    elem.addEventListener("click",function(){
    //    console.log(elem)
   fullElemPage[index].style.display = "block"
    })

 fullElemPageBackBtn.forEach(function(back,index){
        back.addEventListener("click",function(){
            fullElemPage[index].style.display = "none"
        })
    })

})
}
openFeatures()
