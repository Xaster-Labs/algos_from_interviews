function solution(picture) {
    
    let a = '*'.repeat(picture[0].length);
    picture.unshift(a);
    
    for (let j = 0; j < picture.length; j++){
        picture[j] = picture[j] + '*';
        picture[j] = '*' + picture[j];
    }
    
    let b = '*'.repeat(picture[1].length);
    picture.push(b);
    
    return picture;

}
