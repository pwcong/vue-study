/**
 * Created by Pwcong on 2017/1/13.
 */

var array = [
    { name: 'pwcong', age: 18, gender: 'male'},
    { name: 'plping', age: 19, gender: 'female'},
    { name: 'pjajan', age: 38, gender: 'male'},
    { name: 'maxcon', age: 37, gender: 'female'},
]

console.log(array.filter(user => {
    return user.name === 'pjajan'
})[0])
