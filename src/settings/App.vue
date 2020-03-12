<template>
  <div class="app-containter">
    <div class="row">
      <button @click="resetMessages">Сбросить подсветку</button>
    </div>
    <div class="row">
      <button @click="resetMessagesEqual">Сбросить подсветку 2</button>
    </div>
    <div class="row">
      <button @click="resetLinks">Очистить ссылки</button>
    </div>
    <div class="row">
      <button @click="cianCommand('open-yandex-links')">Cian яндекс</button>
      <button @click="cianCommand('open-google-links')">Cian google</button>
    </div>
    <div class="row">
      <button @click="cianCommand('open-all-links')">Cian</button>
      <button @click="closeSearchTabs">Закрыть поисковики</button>
    </div>
    <div class="row">
      <button @click="resetAll">Очистить всё</button>
    </div>
    <div class="row">
      <label class="container">Подcвечивать словарь
        <input type="checkbox" v-model="words"/>
        <span class="checkmark"></span>
      </label>
    </div>
    <label style="text-align:center">
      Ссылки в игноре<br>
      (каждая ссылка с новой строки)
      <textarea-autosize class="hl-dict" v-model="linksList" :min-height="4"></textarea-autosize>
    </label>
    <label style="text-align:center">
      Словарь для подсветки<br>
      (каждое предложение с новой строки)
      <textarea-autosize class="hl-dict" v-model="dictionary" :min-height="4"></textarea-autosize>
    </label>
    <div class="row"><a href="#" @click.prev="configureCommands" target="_blank">Изменить горячие клавиши</a></div>
    <div class="row">
      Цвет основной подсветки
    </div>
    <div class="row">
      <chrome v-model="mainColor"/>
    </div>
    <div class="row">
      Цвет подсветки слов исключений
    </div>
    <div class="row">
      <chrome v-model="color"/>
    </div>
    <div class="row">
      Цвет просмотренных объявления
    </div>
    <div class="row">
      <chrome v-model="equalColor"/>
    </div>
  </div>
</template>
<script src="./app.ts"></script>
