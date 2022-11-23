import * as React from 'react'
import Link from 'next/link'
import { Form } from '../../types/interfaces'

import form_styles from '../../styles/components/Form.module.scss'

const Form: React.FC<Form> = ({ classes }) => {
  return(
    <div className={ `${ form_styles.form } ${ classes.form }` }>
      <div className={ `${ form_styles.form__group } ${ classes.group }` }>
        <input className={ `${ form_styles.form__input } ${ classes.input }` } type='text' placeholder='Ваше имя' />
      </div>
      <div className={ `${ form_styles.form__group } ${ classes.group }` }>
        <input className={ `${ form_styles.form__input } ${ classes.input }` } type='text' placeholder='Ваше имя' />
      </div>
      <div className={ `${ form_styles.form__group } ${ classes.group }` }>
        <textarea className={ `${ form_styles.form__textarea } ${ classes.textarea }` } placeholder='Ваше имя' />
      </div>
      <button className={ `${ form_styles.form__button } ${ classes.button }` }>отправить</button>
      <div className={ `${ form_styles.form__text } ${ classes.text }` }>Нажимая  на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с <Link href='/'><a>Политикой конфиденциальности</a></Link></div>
    </div>
  )
}

export default Form