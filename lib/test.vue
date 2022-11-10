<template>
  <div class="container">
    <div class="content-wrap">
      <span class="content" v-for="(value, key) in sortedTitle"
        >{{ key }}
        <!-- <button @click="sortDesc(value)" type="button">Desc</button>
        <button @click="sortAsc(value)">Asc</button> -->
      </span>
    </div>
    <div
      class="content-wrap"
      v-for="(object, index) in sortedItem?.slice(sliceNum, sliceNum + propRow)"
    >
      <span class="content" v-for="(value, idx) in object">{{ value }}</span>
    </div>
  </div>

  <button @click="previous()">previous</button>
  <button @click="next()">next</button>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from "vue";

const props = defineProps({
  items: { type: Object, default: {}, required: true },
  row: { type: Number, required: true },
  title: { type: Array, required: true },
});
const propItems = computed(() => props.items);
const propRow = computed(() => props.row);
const propTitle = computed(() => props.title);
let sortedTitle: any = ref({});
let sortedItem: any = ref([]);
let sliceNum = ref(0);

const next = () => {
  if (sliceNum.value + propRow.value < propItems.value.length) {
    sliceNum.value += propRow.value;
  }
};
const previous = () => {
  if (sliceNum.value !== 0) {
    sliceNum.value -= propRow.value;
  }
};

const sortDesc = (key: any) => {
  const valueType = typeof sortedItem.value[0][`${key}`];

  if (valueType === "number") {
    sortedItem.value.sort(function (a: any, b: any) {
      return a[`${key}`] - b[`${key}`];
    });
  } else if (valueType === "string") {
    sortedItem.value.sort(function (a: any, b: any) {
      return a[`${key}`] > b[`${key}`] ? -1 : a[`${key}`] > b[`${key}`] ? 1 : 0;
    });
  }
};
const sortAsc = (key: any) => {
  const valueType = typeof sortedItem.value[0][`${key}`];

  if (valueType === "number") {
    sortedItem.value.sort(function (a: any, b: any) {
      return b[`${key}`] - a[`${key}`];
    });
  } else if (valueType === "string") {
    sortedItem.value.sort(function (a: any, b: any) {
      return a[`${key}`] < b[`${key}`] ? -1 : a[`${key}`] < b[`${key}`] ? 1 : 0;
    });
  }
};

const setTitle = () => {
  propTitle.value.forEach((element, index) => {
    sortedTitle.value[`${element}`] = Object.keys(sortedItem.value[0])[index];
  });
};

const drag = () => {
  console.log(1);
};

onBeforeMount(() => {
  if (propItems.value) {
    sortedItem.value = propItems.value;
    if (propTitle.value) {
      setTitle();
    }
  }
});
onMounted(() => {
  const container = document.querySelector(".container");
  container?.addEventListener("drag", drag);
});
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: none;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: grab;
  &::-webkit-scrollbar {
    display: none;
  }
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 100px;
  width: 100%;
  text-align: center;
  word-break: break-word;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  &:last-child {
    border-right: none;
  }
  &-wrap {
    display: flex;
    position: relative;
  }
}
</style>
