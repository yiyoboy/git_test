//生成器函数和普通函数不同，返回迭代器

function *read(books){
    console.log('Start')
    for(let i=0; i<books.length; i++){
        
        //yield 产出、放弃、屈服
        yield books[i]
    }
    //console.log(books.length) 
    console.log('End')
}

let it= read(['js','node','java'])
let r1 = it.next();
console.log(r1)
let r2 = it.next();
console.log(r2)
let r3 = it.next();
console.log(r3)
let r4 = it.next();
console.log(r4)


