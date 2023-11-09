"use client"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from './header.module'
import filter from './filter.module'
import destination from './destination.module'
import cars from './cars.module'
import services from './services.module'
import city from './city.module'
import slider from './slider.module'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ka',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...filter.en,
                    ...destination.en,
                    ...cars.en,
                    ...services.en,
                    ...city.en,
                    ...slider.en,
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...filter.ka,
                    ...destination.ka,
                    ...cars.ka,
                    ...services.ka,
                    ...city.ka,
                    ...slider.ka,
                }
            }
        }
    })

export default i18n