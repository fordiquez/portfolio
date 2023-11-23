// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
    display: {
        thresholds: {
            xs: 360,
            sm: 550,
            md: 768,
            lg: 992,
            xl: 1280,
            xxl: 1920,
        },
    },
    theme: {
        themes: {
            light: {
                colors: {
                    background: '#f8f3ff',
                },
            },
        },
    },
});
