import fr from '../constants/fr.json';
import en from '../constants/en.json';

const getI18n = (action) => {
    switch(action.value) {
        case 'en':
            return en;
        case 'fr':
            return fr;
        default:
            return en;
    }
};

const getPdfLink = (action) => {
    switch(action.value) {
        case 'en':
            return './assets/documents/CV English 2 pages.pdf';
        case 'fr':
            return './assets/documents/CV Français 2 pages 2.pdf';
        default:
            return './assets/documents/CV English 2 pages.pdf';
    }
}

const getTooltipText = (action) => {
    switch(action.value) {
        case 'en':
            return 'Thank you very much !';
        case 'fr':
            return 'Merci beaucoup !';
        default:
            return 'Thank you very much !';
    }
}

const translateReducer = (state, action) => {
    switch(action.type) {
        case 'TRANSLATE':
            return {
                ...state,
                'language': action.value,
                'i18n': getI18n(action),
                'pdfLink': getPdfLink(action),
                'tooltipText': getTooltipText(action)
            };
        default:
            return {
                ...state
            };
    }
};

export default translateReducer;