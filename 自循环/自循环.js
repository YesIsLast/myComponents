let arr = [
    {
        name: '1'
    }, {
        name: '2',
        child: [{
            name: "21",

        }]
    }, {
        name: "3"
    }
]

let retVal = []

arr.forEach(item => {
    retVal.push(get(item))
})
console.log('自循环提取结果',retVal)

function get(obj) {

    if (obj.child) {
        obj.child.forEach(item => {
			obj.child.push(get(item))
        })
    }
    return obj

}