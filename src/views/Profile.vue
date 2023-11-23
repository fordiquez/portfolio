<script setup>
import { defineComponent, reactive } from 'vue';
import { useDisplay } from 'vuetify';
import PersonalInfo from '../components/PersonalInfo.vue';
import ContactInfo from '../components/ContactInfo.vue';
import Skills from '../components/Skills.vue';
import Timelines from '../components/Timelines.vue';
import Languages from '../components/Languages.vue';

defineComponent({
    name: 'Profile',
});

const { xs, sm, smAndDown, md, mdAndDown } = useDisplay();

const profile = reactive({
    fullName: 'Ruslan Tsiapko',
    position: 'Full-stack Web Developer',
});
</script>
<template>
    <div class="container">
        <div class="profile">
            <div class="profile__image">
                <v-avatar :size="smAndDown ? 200 : 300">
                    <v-img src="avatar.jpg" lazy-src="avatar.jpg" alt="Profile avatar" title="Profile avatar"></v-img>
                </v-avatar>
            </div>
            <div class="profile__text">
                <h1
                    class="text-uppercase font-weight-regular text-deep-purple-accent-1"
                    :class="[xs ? 'text-h3' : 'text-h2', { 'mt-5': smAndDown }]"
                >
                    {{ profile.fullName }}
                </h1>
                <h2 class="text-h5 text-uppercase font-weight-light mt-5 text-deep-purple-lighten-1">
                    {{ profile.position }}
                </h2>
            </div>
        </div>
        <div class="block">
            <div class="block__row" :class="mdAndDown ? 'flex-column' : undefined">
                <div class="block__element block__element-1" :class="xs ? 'flex-column' : undefined">
                    <personal-info header="Personal Info" />
                    <contact-info header="Contact Info" :class="md || sm ? 'mt-0' : 'mt-5'" />
                    <languages header="Languages" :class="md ? 'mt-0' : smAndDown ? 'w-100 mt-5' : 'mt-5'" />
                </div>

                <div class="block__element block__element-2">
                    <skills :class="sm ? 'mt-5' : 'mt-0'" />
                    <timelines />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1440px;
    margin: 0 auto;
}

.profile {
    border-radius: 50%;
    display: flex;
}

.profile__image,
.profile__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.block {
    margin-top: 50px;
}

.block__row {
    display: flex;
}

@media (max-width: 767px) {
    .profile {
        flex-direction: column;
    }

    .profile__image,
    .profile__text {
        align-items: center;
    }

    h1,
    h2 {
        text-align: center;
    }
}

@media (min-width: 768px) {
    .profile__text {
        margin-left: 50px;
    }
}

@media (min-width: 992px) {
    .block__element-1 {
        flex: 0 0 300px;
        margin-right: 20px;
    }

    .block__element-2 {
        flex: 1 1 auto;
        margin-left: 20px;
    }
}
@media (max-width: 991px) {
    .block__element-1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>
