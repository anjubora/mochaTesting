const assert =require('chai').assert
const app=require('../app')
describe('App',function(){
    describe('sayHello',()=>{

        it('app should return hello',()=>{
            let result=app.sayHello();
            assert.equal(result,'hello')
        })
        it('say hello should return type string',()=>{
            let result=app.sayHello();
            assert.typeOf(result,'string')
        })
    })
     describe('addnumbers',()=>{
          
        it('add number should be above 5',()=>{
            let result=app.addNumbers(5,5);
            assert.isAbove(result,5)
 
         })
         it('addnumbers should be type number',()=>{
             let result=app.addNumbers(1,2);
             assert.isNumber(result)
         })
     })
       
        
})