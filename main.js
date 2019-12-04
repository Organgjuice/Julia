$(document).ready(function() {
  var root = $('#root')
  root.width(768)
root.append('<ul id="list"><ul>')
var list=$('#list')
root.append('<input id="list_input" type="text"/>')
var input= $('#list_input')

root.append('<button id="add_item" type="submit">Add Item</button>')
var addItemBtn =$('#add_item_btn')

addItemBtn.click(function(evt){
    evt.preventDefault()
    if (input.val() === ''|| input.val() === ''){
        return
    } else {
        list.append('<li>' + input.val() + '</li>')
    }
    input.val('')
})
});
