import us from "../i18n/messages/us.json"
import ru from "../i18n/messages/ru.json"
import am from "../i18n/messages/am.json"

import { initReactI18next } from "react-i18next"
import i18n from "i18next"

const resources = {
    us: {
        translation: us,
    },
    ru: {
        translation: ru
    },
    am: {
        translation: am
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: JSON.parse(localStorage.getItem("language")),
        fallbacklng: "am"
    })

export default i18n