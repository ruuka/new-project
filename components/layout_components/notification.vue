<template>
  <div
    class="flex items-center w-full gap-2 px-4 py-2 text-white rounded shadow-md notification"
    :class="[bgColors[notification.type]]"
  >
    <div class="text-lg text-white notification-icon">
      <font-awesome-icon
        v-if="!notification.isLoading"
        :icon="icons[notification.type]"
      />
      <svg
        v-if="notification.isLoading"
        class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div class="notification-message">
      <p class="font-medium">{{ notification.title }}</p>
    </div>
    <button
      v-if="!notification.isLoading"
      class="ml-auto text-gray-300 cursor-pointer hover:text-gray-200"
      @click="removeNotification"
    >
      <font-awesome-icon :icon="['far', 'times']" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        info: ['far', 'info-circle'],
        warning: ['far', 'exclamation-circle'],
        error: ['far', 'times-circle'],
      },
      bgColors: {
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-600',
      },
      duration: 5000,
      intervalRef: null,
    }
  },
  mounted() {
    if (!this.notification?.isLoading) {
      this.intervalRef = setInterval(() => {
        this.removeNotification()
      }, this.duration)
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalRef)
  },
  methods: {
    removeNotification() {
      this.$eventBus.$emit('REMOVE_NOTIFICATION', this.notification)
    },
  },
}
</script>
