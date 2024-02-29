let data = [
  [1, 0, "Beranda", 0],
  [2, 0, "Product", 2],
  [3, 2, "Product 1", 0],
  [4, 2, "Product 2", 1],
  [5, 2, "Product 3", 2],
  [6, 0, "About Us", 1],
  [7, 6, "Contact Us", 0],
  [8, 5, "Product 3.1", 0],
  [9, 2, "Product 4", 3]
]
let b = data.sort(function(a, b){return a[1] - b[1]})
let get_data = b.filter(val => {
    return val[1] <= 0
})


let test2 = b.filter(val =>{
  return val[1] > 0
})

function add_Sort(arr, indexSort){
let data = arr.sort((a,b)=>{return a[indexSort]-b[indexSort]});
return data
}


const menu = (val,val2) =>{
  let get_data = {
    parent:[],
    child:[],
    child2:[]
  }
  var map = {}
  get_data.parent = val
  get_data.child = val2
  get_data.child2 = get_data.child.filter(item => {
    return item[0] === 8
  })
  get_data.parent.forEach((num1, index) => {
  const num2 = get_data.child[index];
    console.log(num1[2] + " " + `(${num1[3]})` )
    for (var i = 0; i < get_data.child.length; i++) {
      if(get_data.child[i][1] === num1[0]){
        console.log("  --" + get_data.child[i][2] + " " + `(${get_data.child[i][3]})`)
        for (var j = 0; j < get_data.child2.length; j++) {
          if(get_data.child[i][0] === get_data.child2[j][1] && num1[0] !== 0)
          console.log("    --" + get_data.child2[j][2] + " " + `(${get_data.child2[j][3]})`)
        }
      }
    
    }
    
});
  
}


menu(add_Sort(get_data,3),add_Sort(test2,0))
