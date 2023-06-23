"use client";

import React from 'react'
import { useEffect, useState } from "react";
import { getCookie,hasCookie, setCookie } from 'cookies-next';

const Header = () => {

  const [selected, setSelected] = useState('')
  const [loading, setLoading] = useState(true)

  const languages = [
      {label: `Indonesia`, value:'/auto/id'},
      {label: 'English', value:'/auto/en'},
      {label: `China`, value:'/auto/zh-CN'},
  ];

  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({
        pageLanguage: 'auto',
        autoDisplay: false,
        includedLanguages: "ru,en,pl,zh-CN,id", // If you remove it, by default all google supported language will be included
    },'google_translate_element');

    if(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]) {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }
  }

  const langChange = (value)=> {
            
    if(hasCookie('googtrans')){
        setCookie('googtrans',decodeURI(value))
        setSelected(value)
    } else {
        setCookie('googtrans',value)
        setSelected(value)
    }

    window.location.reload()
  }

  useEffect(() => {
    setLoading(true)
    if(hasCookie('googtrans')){
        setSelected(getCookie('googtrans'))
    }
    else{
        setSelected('/auto/en')
    }

    var addScript = document.createElement('script');
    addScript.type = 'text/javascript';
    addScript.async = true;
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;  
  }, [])

  return (
    <>
        <h1>Header</h1>
        <ul>
            <li> <a href='/'>Homes</a> </li>
            <li> <a href='/blogs'>Blogs</a> </li>
        </ul>

        <select className='notranslate' onChange={e => langChange(e.target.value)} value={selected}>
            <option value="">--Choose and option--</option>
            {
                languages.map((language, index) => (
                    <option key={index} value={language.value}>{ language.label }</option>
                ))
            }
        </select>

        { loading ? <div className='wrapper-loading'></div> : '' }
        
    </>
  )
}

export default Header