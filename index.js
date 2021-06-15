const haspalindrome = (str) => {
  let obj = {}
  const arr = str.split("")
  if (str === "" || arr.length === 1 ){
    return true
  }
  else {
    for (let i=0;i<arr.length;i++){
      if (!obj[arr[i]]){
        obj[arr[i]]=1
      }
      else {
        obj[arr[i]]++
      }
    }
    const ones = Object.keys(obj).filter(key => obj[key] === 1).length
    const twos = Object.keys(obj).filter(key => obj[key] === 2).length
    const others = Object.keys(obj).filter(key => obj[key] > 2).length
    if ((ones === 1 || ones === 0) && twos >= 0 && others === 0){
      return true
    }
    else {
      return false
    }
  }
}

console.log(haspalindrome("ivicc"))
console.log(haspalindrome("civil"))
console.log(haspalindrome("civic"))
console.log(haspalindrome("sees"))
console.log(haspalindrome("racecar"))
console.log(haspalindrome("a"))
console.log(haspalindrome(""))