<template>
  <div class="container">
    <!-- <NuxtWelcome /> -->
    <h1>test</h1>
    <h1>{{ $t('hello_from_localazy') }}</h1>
    {{ $t('description') }}

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
    <div class="flex">
      <span>1</span><span>2</span><span>3</span>
    </div>
  </div>
</template>

<script setup>
const countStore = useCountStore();
const clicked=() => {
  alert('clicked!!! yo!!');
  console.log('test')
}
const a=0;
</script>
<style lang="scss">
.container {
  max-width: 1000px;
  margin: 0 auto;
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