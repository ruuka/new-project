<template>
  <div class="w-full">
      <!-- START POPUP FORM -->


<h4 class="text-2xl mb-2">File a Request</h4>
<div class="w-full rounded-lg bg-gray-100 p-3 text-sm text-gray-600 py-3">
  Please fill the form below to request creating or updating an existing dashboard.
</div>
<div class="tabs w-full py-5">
<ul class="nav-tabs flex space-x-4 ">
  <li @click="updateInfo = 'request'" :class="updateInfo ==='request' ? 'border-red-500' : 'border-gray-200'" class="py-1 border-b   text-gray-500  leading-10 hover:border-b cursor-pointer">Request Access</li>
  <li @click="updateInfo = 'update'" :class="updateInfo ==='update' ? 'border-red-500' : 'border-gray-200'" class="py-1 border-b   text-gray-500  leading-10 hover:border-b cursor-pointer">Update dashboard</li>
  <li @click="updateInfo = 'new'"  :class="updateInfo ==='new' ? 'border-red-500' : 'border-gray-200'" class="py-1 border-b  text-gray-500  leading-10 hover:border-b hover:border-red-500 cursor-pointer">Create a new dashboard</li>
</ul>
</div>
<form class="body">
  <div class="grid grid-cols-2 grid-rows-3 gap-4"  v-if="updateInfo !== 'request'">

      <base-select-input
      :label="data[0].label"
      @set-selected-value = "setSelectedValue"
      :selectedValue="updateInfo ==='update' ? data[0].selectedValue : ''"
      :options="data[0].options" />

    <!-- START INPUT GROUP -->
    <div class="group">
      <label for="" class="text-gray-500 mb-1"> Phase </label>
      <div class=" relative flex items-center">

        <input type="text" name="" class="w-full appearance-none border h-12 bg-gray-100 border-gray-200 px-3 py-3 rounded-xl" id="" :value="updateInfo ==='update' ? '1' : ''">

      </div>
    </div>
<!-- END INPUT GROUP -->

 <base-select-input
  @set-selected-value = "setSelectedValue"
  :label="data[1].label" :selectedValue="updateInfo ==='update' ? data[1].selectedValue : ''" :options="data[1].options" />

 <base-select-input
  @set-selected-value = "setSelectedValue"
 :label="data[2].label" :selectedValue="updateInfo ==='update' ? data[2].selectedValue : ''" :options="data[2].options" />

 <base-select-input
  @set-selected-value = "setSelectedValue"
  v-if="updateInfo ==='new'" :label="data[3].label" :selectedValue="updateInfo ==='update' ? data[3].selectedValue : ''" :options="data[3].options" />


    <!-- START INPUT GROUP -->
    <div class="group" v-if="updateInfo ==='new'">
      <label for="" class="text-gray-500 mb-1">Other comments</label>
      <div class=" relative flex items-center">

        <input type="text" name="" class="w-full h-12 appearance-none border border-gray-200 px-3 py-3 rounded-xl" id=""
        value="">


      </div>
    </div>
<!-- END INPUT GROUP -->
  </div>
    <div v-else class=" p-4">
      Request Access
    </div>
  <div class="flex tab-footer justify-end text-gray-600 space-x-6 px-4 mt-6  items-center my-4">
    <button class="appearance-none font-bold" @click.prevent="$emit('close')">Cancel</button>

    <MjButton class="bg-primary" @click.prevent="sendEmail()" :loading="loading">
  Send Request
</MjButton>
  </div>
</form>


<!-- END POPUP FORM -->

  </div>
</template>

<script>
import BaseSelectInput from './BaseSelectInput.vue'

export default {
  components: { BaseSelectInput },
  data() {
      return {
           updateInfo:'update', //request | update | new
           loading:false,
          data:[
            {
              name:'study-number',
              label:'Study Number',
              selectedValue:'GS-US-123-4567',
              options:[
              'GS-US-123-4567',
              'GS-US-123-4566'
          ]
            },
            {
              name: 'point-of-contact',
              label:"Point of Contact",
              selectedValue: 'John.Smith@gilead.com',
              options:['yuan.tian1@gilead.com','biao.li@gilead.com','ruuka.huang4@gilead.com']
          },
          {
            name:'type-of-update',
            label:'Type of Update',
            selectedValue:'Feature/Layout',
            options:['Data', 'Feature/Layout', 'Both']
          },
          {
            name:'template',
            label:'Enter a template',
            selectedValue:'No template',
            options:['No template']
          }
          ]
      }
  },
  methods: {
    getSelectedEmail() {
      return this.data[1].selectedValue
    },
    formatMessage() {
      var message = ``;
       this.data.forEach((item)=> {
        message += `<p>${item.label} : <b>${item.selectedValue}</b></p>`
      })
      return message;
    },


    sendEmail() {
     this.loading = true
      const email = this.getSelectedEmail()
      const message = this.formatMessage()
      if(!this.getSelectedEmail()) {
        alert('Please select a point of contact')
        return;
      }

    if(this.data.some((item)=> item.selectedValue ==='')) {
        alert('Please fill all the fields')
        return;
    }


      this.$axios.post('/api/sendmail',{

        subject: 'Account Update Request',
        message: message,
        name:'Gilead Biodata',
        email:this.getSelectedEmail(), //to  email


      })
      .then((res)=> {
        alert('Email sent')
        this.$emit('close')
        this.loading = false;
      }).catch((err)=> {
        alert('Email failed')
        console.log(err)
        this.$emit('close')
        this.loading = false;
      })


    },

    setSelectedValue(option, label) {
      this.data.forEach(item => {
        if (item.label === label) {
          item.selectedValue = option
        }
      })


    }
  }

}
</script>

