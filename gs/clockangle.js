

function findAngle(str){
    let hr = str.slice(0,2)
    let min = str.slice(3,5)
    hr = parseInt(hr)
    min = parseInt(min);
    if(hr == 12){
        hr = 0;
    }
    let minAngle = min*6
    let hrChange = minAngle/360
    let hrAngle = (hr*30)+(hrChange*30)

    let angle = Math.abs(minAngle-hrAngle)

    return [minAngle, hrChange, hrAngle, angle]
}

let string = "03:10"
console.log(findAngle(string))