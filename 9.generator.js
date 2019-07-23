//生成器+迭代器

//生成器

function read (books){
    let index= 0;
    return {
        next(){
            let  done = index==books.length-1;
            let value = books[index++]
            return {
                value,
                done
            }
        }
    }

}


let it = read(['js','node']);

let res;
do {
    res = it.next();
    console.log(res)
} while (!res.done);


