<template>
  <div class="lg:flex">
    <!-- Left Menu Start -->
    <div
      class="flex flex-col items-center h-full px-2 py-2 overflow-hidden text-gray-600 bg-white lg:w-72"
    >
      <div class="w-full px-2">
        <div class="flex flex-col items-center w-full mt-3">
          <NuxtLink
            to="/"
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-rose-50"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="ml-2 text-sm font-medium">Home</span>
          </NuxtLink>

          <NuxtLink
            to="/custom-plot"
            class="flex items-center w-full h-12 px-3 mt-2 rounded bg-rose-50 text-primary"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span class="ml-2 text-sm font-medium">Clinical Trial Data</span>
          </NuxtLink>
          <NuxtLink
            to="/public-data-sets"
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-rose-50"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="ml-2 text-sm font-medium">Public Datasets</span>
          </NuxtLink>
          <NuxtLink
            to="/clinical-bioinformatics"
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-rose-50"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span class="ml-2 text-sm font-medium"
              >Clinical Bioinformatics</span
            >
          </NuxtLink>
        </div>
        <div
          class="flex flex-col items-center w-full mt-2 border-t border-gray-300"
        >
          <NuxtLink
            to="/other-tools"
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-rose-50"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span class="ml-2 text-sm font-medium"
              >Other Tools
              <font-awesome-icon :icon="['far', 'angle-down']" />
            </span>
          </NuxtLink>
          <NuxtLink
            to=""
            class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-rose-50"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span class="ml-2 text-sm font-medium">News</span>
            <span
              class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-red-600 rounded-full"
            ></span>
          </NuxtLink>
        </div>
      </div>
<!--      <a-->
<!--        class="flex items-center justify-start w-full h-16 pl-6 mt-auto bg-gray-200 rounded hover:bg-rose-50"-->
<!--      >-->
<!--        <svg-->
<!--          class="w-6 h-6 stroke-current"-->
<!--          xmlns="http://www.w3.org/2000/svg"-->
<!--          fill="none"-->
<!--          viewBox="0 0 24 24"-->
<!--          stroke="currentColor"-->
<!--        >-->
<!--          <path-->
<!--            stroke-linecap="round"-->
<!--            stroke-linejoin="round"-->
<!--            stroke-width="2"-->
<!--            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"-->
<!--          />-->
<!--        </svg>-->
<!--        <span class="ml-2 text-sm font-medium">Support</span>-->
<!--      </a>-->
    </div>
    <!-- Left Menu End  -->
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  components: {},
  props: [],
}
</script>
