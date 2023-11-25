"use client"

import {Header as Slider} from "../../components/Destinations/Header/Header"
import {Lists} from "../../components/Destinations/List/Lists"
import { Header } from "@/components/Header/Header"
import Calendar from "@/components/Destinations/Calendar/Calendar"

const page = () => {

    return (
        <>
            <Header />
            <Slider />
            <div className="container">
                <div className="row">
                    <div style={{flex: 1}}>
                        <Calendar />
                        <Lists />
                    </div>
                    <div className="col-auto">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1518429.6019403352!2d41.89016955547433!3d41.98561933379559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x406786304ea2d221%3A0x7a3053a9e12ea967!2z4YOR4YOQ4YOX4YOj4YOb4YOY!3m2!1d41.6460978!2d41.6404899!4m5!1s0x404473277c2551ed%3A0xe3d885f5e882a21e!2sQQ2H%2BW8X%20KERiM%20Automotive%2C%20Grigol%20Robakidze%20Ave%2C%20Tbilisi!3m2!1d41.752371499999995!2d44.7783581!5e0!3m2!1sen!2sge!4v1700762577378!5m2!1sen!2sge" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page