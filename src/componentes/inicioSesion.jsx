import React from 'react'
import '../estilos/inicio-sesion.css'

export default function InicioSesion () {
  return (
    
    <div className="login-container">
      <div className='form-container'>
        <h1 className='titulo-sesion'>INICIAR SESIÓN</h1>
        <form action="/login" method="post">
            <div className="form-group">
                <input type="text"  id="name" name="name" placeholder='Nombre' required />
            </div>
            <div className="form-group">
                <input type="email" id="email" name="email" placeholder='correo electronico' required />
            </div>
             <div className="form-group">
                <input type="password"  id="password" name="password" placeholder='contraseña' required />
            </div>
             <div className="form-group">
                <input type="password"  id="confirmar-password" name="password" placeholder='confirmar contraseña' required />
            </div>
            <div className="form-group">
                <input type="text" id="address" name="address" required placeholder='dirección' />
            </div>
            
            <button type="submit">Iniciar Sesión</button>
            <p class="signup-link">¿No tienes cuenta? <a href="/signup">Regístrate aquí</a></p>
        </form>
      </div>
      <h1 className='marca'>FOOD</h1>
  </div>
   
  )
}
