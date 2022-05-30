const items = ['item1', 'item2', 'item3']
const copy = []

items.forEach(function (elem, index, array) {   
    copy.push(index + 'New' + elem)
})

console.log(copy);