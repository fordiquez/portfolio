<template>
  <div class="technical-skills">
    <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">Technical skills</h5>
    <v-slide-group show-arrows center-active class="mt-3">
      <v-slide-group-item v-for="option in skills.options" :key="option.id" v-slot="{ isSelected, toggle }">
        <v-btn class="ma-2" rounded :color="option.id === activeOption ? 'primary' : undefined" @click="toggleOption(option)">
          {{ option.name }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
    <v-item-group selected-class="bg-primary" class="technical-skills__row">
      <v-row>
        <v-col v-for="skill in skillItems" :key="skill.id" :cols="display.xs ? '12' : display.sm ? '6' : display.md || display.lg ? '4' : display.xlAndUp ? '3' : undefined">
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <v-card :class="['technical-skills__item', selectedClass]" @click="toggle">
              <div class="text-h5 text-center">{{ isSelected ? skill.experience : skill.name }}</div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data: () => ({
    skills: {
      options: [
        {
          id: 1,
          name: 'Back-end'
        },
        {
          id: 2,
          name: 'Front-end'
        },
        {
          id: 3,
          name: 'UI'
        },
        {
          id: 4,
          name: 'DBMS'
        },
        {
          id: 5,
          name: 'Other'
        },
      ],
      items: [
        {
          id: 1,
          option: 1,
          name: 'Laravel',
          experience: '2 years',
        },
        {
          id: 2,
          option: 1,
          name: 'Express.js',
          experience: '1 year',
        },
        {
          id: 3,
          option: 1,
          name: 'Nest.js',
          experience: '6 months',
        },
        {
          id: 4,
          option: 1,
          name: 'Yii2',
          experience: '6 months',
        },
        {
          id: 5,
          option: 2,
          name: 'Vue.js',
          experience: '2 years',
        },
        {
          id: 6,
          option: 2,
          name: 'Nuxt.js',
          experience: '2 years',
        },
        {
          id: 7,
          option: 3,
          name: 'Vuetify',
          experience: '1 year',
        },
        {
          id: 8,
          option: 3,
          name: 'Bootstrap',
          experience: '3 years',
        },
        {
          id: 9,
          option: 3,
          name: 'Tailwind',
          experience: '1 year',
        },
        {
          id: 11,
          option: 4,
          name: 'MySQL',
          experience: '3 years',
        },
        {
          id: 12,
          option: 4,
          name: 'MongoDB',
          experience: '1 year',
        },
        {
          id: 13,
          option: 4,
          name: 'PostgreSQL',
          experience: '6 months',
        },
        {
          id: 14,
          option: 4,
          name: 'SQL Server',
          experience: '2 years',
        },
        {
          id: 15,
          option: 4,
          name: 'Firebase',
          experience: '2 years',
        },
        {
          id: 16,
          option: 5,
          name: 'Docker',
          experience: '6 months',
        },
        {
          id: 17,
          option: 5,
          name: 'Heroku',
          experience: '6 months',
        },
        {
          id: 18,
          option: 5,
          name: 'Figma',
          experience: '2 years',
        },
        {
          id: 19,
          option: 5,
          name: 'Vite',
          experience: '6 months',
        },
        {
          id: 20,
          option: 5,
          name: 'REST API',
          experience: '2 years',
        },
      ],
    },
    activeOption: null,
  }),
  computed: {
    skillItems() {
      return this.activeOption != null ? this.skills.items.filter(item => item.option === this.activeOption) : this.skills.items
    },
    display() {
      return this.$vuetify.display;
    }
  },
  methods: {
    toggleOption(option) {
      this.activeOption = this.activeOption === option.id ? null : option.id
    }
  }
}
</script>

<style scoped>
.technical-skills__row {
  display: flex;
  margin-top: 24px;
}

.technical-skills__item {
  display: flex;
  flex: 0 1 25%;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80px;
  user-select: none;
}
</style>