import React, { createContext } from "react";

export const Datacontext = createContext()

export function DataProvider({children}){
    const yolodata = [
        {
            id: "i1",
            title : "Moniter",
            price : 7589,
            pic : "https://rukminim1.flixcart.com/image/230/230/ksc46fk0/monitor/l/d/x/m22f-2e2y3aa-acj-hp-original-imag5x3zp6m7jphd.jpeg?q=100"
        },
        {
            id: "i2",
            title : "Smart TV",
            price : 8459,
            pic : "https://rukminim1.flixcart.com/image/230/230/kae95e80/television/f/6/y/realme-tv-32-original-imafrz79pweqeafh.jpeg?q=100",
        },
        {
            id: "i3",
            title : "Camera",
            price : 4589,
            pic : "https://rukminim1.flixcart.com/image/230/230/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=100",
        },
        {
            id: "i4",
            title : "Smart Bamd",
            price : 1999,
            pic : "https://rukminim1.flixcart.com/image/230/230/ku1k4280/smart-band-tag/f/g/x/tft-lcd-no-free-size-yes-yes-rmw2010-android-ios-realme-yes-original-imag78whgn6rumu9.jpeg?q=100",
        },
        {
            id: "i5",
            title : "HeadPhone",
            price : 999,
            pic : "https://rukminim1.flixcart.com/image/230/230/k2f1n680/headphone/9/g/s/boat-rockerz-400-super-extra-bass-original-imafg95ztgz7z8yz.jpeg?q=100",
        },
        {
            id: "i6",
            title : "Bluetooth Speakers",
            price : 699,
            pic : "https://rukminim1.flixcart.com/image/230/230/k6fd47k0pkrrdj/speaker/mobile-tablet-speaker/m/h/z/jbl-jblgoplusblkeu-original-imafdzu6tsnfnstp.jpeg?q=100",
        },
        {
            id: "i7",
            title : "SoundBars",
            price : 3999,
            pic : "https://rukminim1.flixcart.com/image/230/230/k6fd47k0pkrrdj/speaker-refurbished/g/b/h/a-aavante-bar-1550-boat-original-imafk9gd9vmcgzxr.jpeg?q=100",
        },
        {
            id: "i8",
            title : "EarBuds",
            price : 999,
            pic : "https://rukminim1.flixcart.com/image/230/230/k4x2du80/headphone/s/w/t/boat-airdopes-381-original-imafnzqedwr6qutd.jpeg?q=100",
        },
        {
            id: "i9",
            title : "Shavers",
            price : 1649,
            pic : "https://rukminim1.flixcart.com/image/230/230/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=100",
        },
        {
            id: "i10",
            title : "Hair Dryers",
            price : 499,
            pic : "https://rukminim1.flixcart.com/image/230/230/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=100",
        },
    ]

    const values = {yolodata}
    return(
        <Datacontext.Provider value={{values:values}}>
            {children}
        </Datacontext.Provider>
    )
}
