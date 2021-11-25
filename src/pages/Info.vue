<template>
  <div>
      <div class="todos">
    <div class="first-info">
      <h3>Болгарь Александра Андреевна</h3>
    </div>
    <div class="first-info">
      <h4>БСБО-06-19</h4>
    </div>
    <div>
      <img class="my_img" src="../kittens.jpg" />
      <h4>
        Написала нейронную сеть на C# без использования библиотек, рекурсивный
        распаковщик архивов на java, реализовала stack и deck через литералы на
        C++, писала несколько простых нейронных сетей на python, писала
        программы с выводом музыки на Assembler. Учу JS.
      </h4>
    </div>
  </div>

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
  </div>
  <!-- //<h1>TODO</h1> -->
</template>

<script>

export default {
  components: {
  },
};
</script>

<style>

</style>
