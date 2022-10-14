<template>
  <div class="wrap">
    <!-- <NuxtWelcome /> -->
    <h1>test</h1>
    <h1>{{ $t('hello_from_localazy') }}</h1>
    {{ t('description') }}

    <p @click="clicked">
      click
    </p>{{ a }}
    <div>
      <button @click="countStore.count--">
        -
      </button>
      {{ countStore.count }}
      <button @click="countStore.count++">
        +
      </button>
    </div>
    <div>
      <p>locales</p>
      <div>
        <button @click="changeLocale('ru')">
          ru
        </button>
        <button @click="changeLocale('en')">
          en
        </button>
      </div>
    </div>
    <div>
      <p>dark/light mode</p>
      <p>{{ isDark }}</p>
      <!--<button @click="toggleDark(e)">-->
      <button @click="() => toggleDark()">
        mode {{ isDark ? 'dark' : 'light' }}
      </button>
    </div>
    <div class="flex">
      <span>1</span><span>2</span><span>3</span>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'start',
});
import { useI18n } from 'vue-i18n';
import { useDark, useToggle } from '@vueuse/core';

const countStore = useCountStore();
const { t, locale, availableLocales } = useI18n();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const clicked=() => {
  alert('clicked!!! yo!!');
  console.log('test');
}
const a=0;
const changeLocale = (lang) => {
  // change to some real logic
  console.log(locale.value, lang, availableLocales);
  locale.value = lang;
  // locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
// const toggleDark = () => {
//   console.log(isDark);
//   useToggle(isDark);
// };
</script>
<style lang="scss">
.wrap {
  p {
    font-size: 20px;
  }
}
.flex {
  display: flex;
  justify-content: space-between;
  span {
    margin-right: 15px;
  }
}
</style>
