import React from 'react'
import style from './Galeria.module.scss'
import Tags from '../Tags'
import fotos from './fotos.json'
import Cards from './Cards'

export default function Galeria() {
  return (
    <section className={style.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards itens={fotos} style={style}/>
    </section>
  )
}
