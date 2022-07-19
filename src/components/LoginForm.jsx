import { useForm } from 'react-hook-form'
import MyButton from '../UI/button/MyButton'

const LoginForm = ({onSubmit}) => {

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.email && (
        <span class="alert">{errors.email?.message}</span>
      )}
      <input
        placeholder="email"
        style={{marginBottom: 20}}
        className={errors.email?.message ? 'input input-error' : 'input'}
        {...register('email', {required: 'Укажите почту'})}
      />
      {errors.password && (
        <span class="alert">{errors.password?.message}</span>
      )}
      <input
        type="password"
        style={{marginBottom: '20px'}}
        className={errors.password?.message ? 'input input-error' : 'input'}
        placeholder="password"
        {...register('password', {required: 'Укажите пароль'})}
      />
      <div className="d-flex mt20 jce">
        <MyButton type="submit">Войти</MyButton>
      </div>
    </form>
  )
}

export default LoginForm
