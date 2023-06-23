"use client";

import React from 'react'
import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie,hasCookie, setCookie } from 'cookies-next';

const Page = () => {
    // const [selected, setSelected] = useState('')
    // const [loading, setLoading] = useState('loading...')

    // const languages = [
    //     {label: `Indonesia`, value:'/auto/id'},
    //     {label: 'English', value:'/auto/en'},
    //     {label: `China`, value:'/auto/zh-CN'},
    // ];

        

    //     const googleTranslateElementInit = () => {

    //         new window.google.translate.TranslateElement({
    //             pageLanguage: 'auto',
    //             autoDisplay: false,
    //             includedLanguages: "ru,en,pl,zh-CN,id", // If you remove it, by default all google supported language will be included
    //         },'google_translate_element');

    //         if(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]) {
    //             setTimeout(() => {
    //                 setLoading('loaded')
    //             }, 1500);
    //         }
    //     }

    //     const langChange = (value)=> {
            
    //         if(hasCookie('googtrans')){
    //             setCookie('googtrans',decodeURI(value))
    //             setSelected(value)
    //         } else {
    //             setCookie('googtrans',value)
    //             setSelected(value)
    //         }

    //         window.location.reload()
    //     }

    // useEffect(() => {

    //     setLoading('loading....')
    //     if(hasCookie('googtrans')){
    //         setSelected(getCookie('googtrans'))
    //     }
    //     else{
    //         setSelected('/auto/en')
    //     }

    //     var addScript = document.createElement('script');
    //     addScript.type = 'text/javascript';
    //     addScript.async = true;
    //     addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    //     document.body.appendChild(addScript);
    //     window.googleTranslateElementInit = googleTranslateElementInit;
        
        
    // }, [])
  
    return (
    
        <div>
            <h1>Hello World translate</h1>
            {/* <select className='notranslate' onChange={e => langChange(e.target.value)} value={selected}>
                <option value="">--Choose and option--</option>
                {
                    languages.map((language, index) => (
                        <option key={index} value={language.value}>{ language.label }</option>
                    ))
                }
            </select>

            <h1 className='notranslate'>{loading}</h1> */}

            {/* <div><div id="google_translate_element" style={{width:'0px',height:'0px',position:'absolute',left:'50%',zIndex:-99999}}></div>
        <SelectPicker 
         data={languages} 
         style={{ width: 100 }} 
         placement="bottomEnd"
         cleanable={false}
         value={selected}
         searchable={false}
         className={'notranslate'}
         menuClassName={'notranslate'}
         onSelect={(e,m,evt) => langChange(e,m,evt)}
         placeholder="Lang"/> </div> */}

        </div>
    )
}

export default Page