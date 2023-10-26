"use client"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from './header.module'
import filter from './filter.module'
import destination from './destination.module'
import cars from './cars.module'
import services from './services.module'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...filter.en,
                    ...destination.en,
                    ...cars.en,
                    ...services.en,
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...filter.ka,
                    ...destination.ka,
                    ...cars.ka,
                    ...services.ka,
                }
            }
        }
    })

export default i18n