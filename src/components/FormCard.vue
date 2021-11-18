<template>
  <div class="todos">
    <div class="title">
      <h3>Обратная связь</h3>
    </div>
    <form class="form">
      <input type="text" id="fio" placeholder="Ваше имя" required />
      <input type="email" id="email" placeholder="Ваш email" required />
      <textarea
        type="text"
        placeholder="Ваше сопроводительное письмо"
        required
      ></textarea>
      <button id="submitBtn" type="submit">Отправить</button>
    </form>
  </div>
</template>

<style scoped>
input,
textarea {
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

button {
  padding-left: 25px;
  padding-right: 25px;
  margin-left: 0.1em;
  text-align: center;
  margin-bottom: 15px;
}

textarea {
  height: 150px;
  vertical-align: top;
}

input:focus,
textarea:focus {
  background: #edf1f5;
  border: 3px solid #86a8e7;
  outline: none;
  color: #86a8e7;
}
</style>
