import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import MyButton from '../UI/button/MyButton'

const RegisterForm = ({onSubmit}) => {


  const validationSchema = Yup.object().shape({
      password: Yup.string()
          .required('Введите пароль')
          .min(8, 'Пароль должен сожержать минимум 8 символов'),
      confirmPassword: Yup.string()
          .required('Подтвердите пароль')
          .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm(formOptions)

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.password && (
        <div class="alert">{errors.password?.message}</div>
      )}
      <input
        type="password"
        style={{marginBottom: '20px'}}
        className={errors.password?.message ? 'input input-error' : 'input'}
        placeholder="Укажите пароль"
        {...register('password')}
      />
      {errors.confirmPassword && (
        <div class="alert">{errors.confirmPassword?.message}</div>
      )}
      <input
        type="password"
        style={{marginBottom: '20px'}}
        className={errors.confirmPassword ? 'input input-error' : 'input'}
        placeholder="Подтвердите пароль"
        {...register('confirmPassword')}
      />
      <div className="d-flex mt20 jce">
        <MyButton type="submit">Регистрация</MyButton>
      </div>
    </form>
  )
}

export default RegisterForm
