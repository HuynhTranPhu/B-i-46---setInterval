/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
    var promise = new Promise(function(resolve,reject){
      var id= setInterval(function(){
        console.log(x);
        --x;
        if(x===-1){
          clearInterval(id);
          resolve();
        }
      },1000);
    });
    return promise;
  }
  
  function sayHappyNewYear() {
    console.log('Happy new year');
  }
  
  countDown(5).then(sayHappyNewYear);