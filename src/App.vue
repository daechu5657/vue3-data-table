<template>
  <!-- <vue3DataTable
    :items="injectTest()"
    :row="5"
    :order="[
      { partner_Id: 'ID' },
      { partner_Name: 'Name' },
      { request_Idx: 'Idx' },
      { processing_Date: 'Date' },
      { request_Date: 'request_Date' },
    ]"
  /> -->

  <test
    :items="injectTest()"
    :row="5"
    :title="['Idx', 'request', 'processing', 'Name', 'ID']"
  />
</template>

<script setup lang="ts">
// import vue3DataTable from "../lib/vue3-data-table.vue";
import test from "../lib/test.vue";

let test1 = [
  {
    request_Idx: 13,
    request_Date: "2022-11-07 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 14,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 15,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 16,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 17,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 18,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 19,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 21,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 22,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 23,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 24,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 25,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 26,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 27,
    request_Date: "2022-11-08 09:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 28,
    request_Date: "2022-11-08 11:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 29,
    request_Date: "2022-11-06 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "asdasd@quagga.ai",
  },
  {
    request_Idx: 30,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 31,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 32,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 11,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
  {
    request_Idx: 12,
    request_Date: "2022-11-08 04:43:45",
    processing_Date: "2022-11-08 04:43:45",
    partner_Name: "Poker Games",
    partner_Id: "partner002@quagga.ai",
  },
];

const injectTest = () => {
  return test1;
};
</script>
