<template>
  <div>
    <div>info</div>
    <div class="m-3 w-25">
      <Multiselect
        class="custom-select"
        :options="options"
      />
    </div>
    <div class="m-3">
      <VueMultiselect

        :options="options"
      />
    </div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
    />
  </div>
</template>

<script setup>
 import Multiselect from '@vueform/multiselect';
 import VueMultiselect from 'vue-multiselect';

definePageMeta({
  layout: 'start',
});
const options= ['list', 'of', 'options'];
const columns = [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
           dateOutputFormat: 'MMMM dd yyyy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ];
     const rows = [
        { id:1, name:"John", age: 20, createdAt: undefined,score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2012-07-11', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2013-08-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2014-09-12', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2015-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2016-11-3', score: 0.03343 },
      ];
       // dateOutputFormat: 'MMM dd yy',
</script>
<style scoped lang="scss">
.custom-select {
  &.multiselect {
    display: flex;
  }
}
</style>
