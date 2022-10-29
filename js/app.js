let header=document.getElementById('Intro')
header['innerHTML']='this has changed the title'

let end=document.getElementsByClassName('End')
end['innerHTML']='this is definitly not the first p tag'


let middle=document.querySelector('p')
middle['innerHTML']='this is the middle of the page'

let center=document.querySelectorAll('p')
center['innerHTML']='now the p tags are the same'