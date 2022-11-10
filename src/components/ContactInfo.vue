<template>
  <div class="contact-info">
    <h5 class="text-h5 text-uppercase text-deep-purple-accent-1">{{ header }}</h5>
    <div class="contact-info__item mt-3" v-for="(item, i) in data" :key="i">
      <div class="contact-info__icon">
        <v-icon size="x-large">{{ item.icon }}</v-icon>
      </div>
      <div class="contact-info__content">
        <span class="text-uppercase text-button">{{ item.title }}</span>
        <a :href="item.href" :target="item.target">{{ item.value }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  props: {
    header: {
      type: String,
      required: true
    }
  },
  data: () => ({
    data: [
      {
        icon: 'mdi-cellphone-sound',
        title: 'Phone',
        value: '+ 380 (63) 872 09 90',
        href: 'tel:+380638720990',
        target: null,
      },
      {
        icon: 'mdi-message-text',
        title: 'Telegram',
        value: '@fordiquez',
        href: 'https://t.me/fordiquez',
        target: '_blank',
      },
      {
        icon: 'mdi-gmail',
        title: 'Gmail',
        value: 'ruslan.tsiapko@gmail.com',
        href: 'mailto:ruslan.tsiapko@gmail.com',
        target: null,
      },
      {
        icon: 'mdi-github',
        title: 'GitHub',
        value: 'fordiquez',
        href: 'https://github.com/fordiquez',
        target: '_blank',
      },
      {
        icon: 'mdi-linkedin',
        title: 'LinkedIn',
        value: 'ruslan.tsiapko',
        href: 'https://www.linkedin.com/in/ruslan-tsiapko-a41397241/',
        target: '_blank',
      },
    ]
  })
}
</script>

<style scoped>
.contact-info__item {
  display: flex;
  align-items: flex-end;
}

.contact-info__content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>