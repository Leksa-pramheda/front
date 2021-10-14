<template>

<div >   
  <h1>TODO</h1>         
            <div class="todos">
                <div class="first-info">
                    <h3>Болгарь Александра Андреевна</h3>
                </div>
                <div class="first-info">
                    <h4>БСБО-06-19</h4>
                </div>
                <div id="with_img"> <img src="../kittens.jpg" >
                    <!-- <span class="todo-text">Аватарка</span> -->
                <h4>Написала нейронную сеть на C# без использования библиотек, рекурсивный распаковщик архивов на java, реализовала stack и deck через литералы на C++, писала несколько простых нейронных сетей на python, писала программы с выводом музыки на Assembler. Учу JS.</h4>
                </div>
            </div>
            <div class="todos">
                <div class="title">
                    <h3>Обратная связь</h3>
                </div>
            <form class="form" >
                <input type="text" id="fio" placeholder="Ваше имя" required/>
                <input type="email" id="email" placeholder="Ваш email" required/> 
                <textarea type="text" placeholder="Ваше сопроводительное письмо" required></textarea>
                <button id="submitBtn" type="submit">Отправить</button>
            </form>
            </div>
            
</div>
<!-- //<h1>TODO</h1> -->
</template>

<script>
// import image from "./src/components/kittens.jpg"

export default {
  name: "HelloWorld", 
  props: {
    msg: String,
  },
  /*data: function () {
        return {
            image: image
        }
    }*/
 /* mounted(){
    const submitBtn = document.querySelector('#submitBtn');
    const card = document.querySelector('#base-card');
    const submitBtn = document.querySelector('#submitBtn');
    
    submitBtn.addEventListener('click', ($event)=>{
console.warn($event);
    })
  }*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
    text-transform: uppercase;
    color: white;
    margin: 0; 
    padding: 10px 28px;
    font-weight: normal;
}

input, textarea {
    background: white;
    width: 80%;
    box-sizing: border-box;
    height: 50px;
    font-size: 20px;
    font-weight: 0.5px;
    padding-left: 25px;
    border: 3px solid gray;
    margin-bottom: 10px;
    color: gray;
}

textarea {
    
  
  vertical-align: top;
}

input:focus, textarea:focus {
    background: #edf1f5;
    border: 3px solid #86a8e7;
    outline: none;
    color: #86a8e7;
}

img{
    max-height: 100px;
    margin-top: 15px;
    border-radius: 1em;
}

#with_img {
    height: auto;
}

.todos {
    background: linear-gradient(  #74b3e7, #6078ea, #60ceea);
    list-style-type: none;
    margin: 15px;
    padding: 0;
    display: inline-block;
    outline: 2px solid rgb(73, 240, 129);    
    box-shadow: 0 0 1em black;
    vertical-align: middle;
    border-radius: 1em;
    min-width: 300px;
    max-width: 500px;
    
  align-items: center;
}

.first-info {
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    font-size: 20px;
    margin:0;
    box-sizing: border-box;
    border-bottom: 2px solid rgb(73, 240, 129);
    
}

button {
  padding-left: 25px;
  padding-right: 25px;
  margin-left: .1em;
  text-align: center;
  margin-bottom: 15px;
}


.display {
    display: none;
    transition: 0.3s linear;
}


</style>
