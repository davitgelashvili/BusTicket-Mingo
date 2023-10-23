"use client"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from './header.module'
import filter from './filter.module'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ka',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...filter.en
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...filter.ka
                }
            }
        }
    })

export default i18n