<template>
  <div class="container mx-auto">
    <div class="row mx-8 mb-3 cursor-pointer">
      <div class="flex justify-between">
        <div
          class="p-2 pl-4 pr-4 cursor-pointer bg-while rounded-[8px] text-black-100 font-[500]"
        >
          Loan/Debt
        </div>
        <div
          class="p-2 pl-4 pr-4 cursor-pointer bg-while rounded-[8px] text-black-100 text-primary font-[500]"
        >
          Revenue
        </div>
        <div
          class="p-2 pl-4 pr-4 cursor-pointer bg-while rounded-[8px] text-black-100 font-[500]"
        >
          Expenses
        </div>
      </div>
    </div>

    <div class="row mx-8 mb-3 cursor-pointer">
      <div class="bg-while p-2 rounded-[8px] flex">
        <div class="w-10 h-10 flex items-center justify-center">
          <span
            class="w-8 h-8 inline-block bg-blue-200 rounded-md overflow-hidden"
          ></span>
        </div>
        <div class="flex flex-1 items-center justify-start pl-2 font-bold">
          <h3 class="flex-none">Payment</h3>
        </div>
      </div>
    </div>
    <div class="row mx-8 mb-3 cursor-pointer">
      <div class="bg-while p-2 rounded-[8px] flex">
        <div class="w-10 h-10 flex items-center justify-center">
          <span
            class="w-8 h-8 inline-block bg-yellow-200 rounded-md overflow-hidden"
          ></span>
        </div>
        <div class="flex flex-1 items-center justify-start pl-2 font-bold">
          <h3 class="flex-none">Withdrawal</h3>
        </div>
      </div>
    </div>

    <div class="row mx-8 mb-3 cursor-pointer">
      <div class="bg-while p-2 rounded-[8px] flex">
        <div class="w-10 h-10 flex items-center justify-center">
          <span
            class="w-8 h-8 inline-block bg-green-200 rounded-md overflow-hidden"
          ></span>
        </div>
        <div class="flex flex-1 items-center justify-start pl-2 font-bold">
          <h3 class="flex-none">Education</h3>
        </div>
      </div>
    </div>

    <div class="row mx-8 mb-3 cursor-pointer">
      <div class="bg-while p-2 rounded-[8px] flex">
        <div class="w-10 h-10 flex items-center justify-center">
          <span
            class="w-7 h-7 flex items-center justify-center bg-primary rounded-md overflow-hidden"
          >
            <i class="fas fa-plus text-white"></i>
          </span>
        </div>
        <div class="flex flex-1 items-center justify-start pl-2 font-bold">
          <h3 class="flex-none text-primary">Add new Category</h3>
        </div>
      </div>
    </div>
  </div>
</template>
