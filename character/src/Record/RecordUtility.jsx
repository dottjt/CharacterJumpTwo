import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export let SlideTitle = ({title}) => (
  <h4 className="RS__slide__title">
    {title}
  </h4>
)

export let Symbol = ({symbol, clickFunction}) => (
    symbol && clickFunction
  ?
    <div className="RS__symbol" onClick={clickFunction}>
      {symbol}
    </div>
  :
    <div className="RS__symbol">
      {symbol}
    </div>
)

export let NextPage = ({text, collection, clickFunction, link}) => (
    collection.length > 0
  ?
    <PageLink text="next page" clickFunction={clickFunction} link={link}/>
  :
    <PageLink text="next page"/>
)

export let PageLink = ({text, clickFunction, link}) => (
    text && clickFunction && link
  ?
    <Link className="RS__bottom__link" to={link} onClick={clickFunction}>
      {text}
    </Link>
  :
    <span className="RS__bottom__link__blank">
      {text}
    </span>
)
