<template>
  <table border="1">
    <thead>
      <tr>
        <th
          class="vue3-data-table-thead"
          v-for="(content, index) in Object.keys(sortedItem[0][0])"
          :key="index"
        >
          {{ content }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(content, index) in Object.values(sortedItem[page])"
        :key="index"
      >
        <td
          class="vue3-data-table-tdata"
          v-for="(value, idx) in content"
          :key="idx"
        >
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>

  <button type="button" style="color: azure" @click="previousPage()">
    previous
  </button>
  <button type="button" style="color: azure" @click="nextPage()">Next</button>
  <button type="button" style="color: azure" @click="sortDesc()">Desc</button>
</template>

<script setup lang="ts">
import { defineProps, onBeforeMount, computed, ref } from "vue";

const props = defineProps({
  items: { type: Object, default: {} },
  row: { type: Number },
  order: { type: Array },
});
const propItems = computed(() => props.items);
const propRow = computed(() => props.row);
const propOrder = computed(() => props.order);
const sortedItem = ref([]);
const page = ref(0);

const divideArray = (parmArray: any, value: any): any => {
  const returnArray: any[] = [];
  console.log(parmArray.value);
  for (let i = 0; i < parmArray.value.length; i + value) {
    returnArray.push(parmArray.value.splice(i, i + value));
  }
  console.log(returnArray);
  return returnArray;
};
const changeOrder = (parmArray: any, order: any): any => {
  let returnArray: any[] = [];
  parmArray.value.filter((value: any, index: number) => {
    // let obj: any = {};
    let obj: any = {};
    for (let i = 0; i < order.value.length; i++) {
      // obj[`${Object.values(order.value[i])[0]}`] =
      //   value[Object.keys(order.value[i])[0]];
      obj[`${Object.values(order.value[i])[0]}`] =
        value[Object.keys(order.value[i])[0]];
      // console.log(order.value);
    }
    returnArray.push(obj);
    // returnArray.push(obj);
  });
  return returnArray;
};

const nextPage = () => {
  if (page.value + 1 < sortedItem.value.length) {
    page.value += 1;
  }
};
const previousPage = () => {
  if (0 < page.value) {
    page.value -= 1;
  }
};

const mergeArray = (parmArray: any) => {
  const returnArray: any = [...parmArray.value];
  const arr: any = [];
  for (let i = 0; i < returnArray.length; i++) {
    arr.push(...returnArray[i]);
  }
  return arr;
};

const sortDesc = () => {
  const arr = mergeArray(sortedItem);

  arr.sort(function (a: any, b: any) {
    return a.Idx - b.Idx;
  });
  console.log(arr);
  sortedItem.value = divideArray(arr, propRow.value);
};

const sortAsc = () => {};

onBeforeMount(() => {
  if (propOrder.value !== undefined) {
    sortedItem.value = changeOrder(propItems, propOrder);
    console.log(sortedItem);
    console.log(propItems.value);
    if (propRow.value !== undefined) {
      sortedItem.value = divideArray(sortedItem, propRow.value);
      console.log(sortedItem.value);
    }
  }
});
</script>

<style lang="scss">
.vue3-data-table-thead {
  // width: 100%;
  text-align: center;
  padding: 10px;
}
.vue3-data-table-tdata {
  // width: 100%;
  text-align: center;
  padding: 10px;
}
</style>
