import React from 'react'
import { useState } from "react";
import axios from "axios";
import { redirect } from 'react-router-dom';
import Img from './Img/logo.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {

  const MySwal = withReactContent(Swal)

  const [datos, setDatos] = useState({
    usuario: "",
    clave: ""
  });

  const InputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  }

  const Submit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      MySwal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Tienes que llenar todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      const response = await axios.post('http://localhost:3001/usuario/login', datos)
      if (response.data.error) {
        MySwal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Contraseña incorrecta',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        console.log ('/admin')
        window.location.href = 'http://localhost:3000/admin'
      }
    }
  };

  return (
    <div>
      <div className='bg-red w-full h-screen flex  justify-center items-center bg-red-500' if >
        <div className='bg-white rounded-md lg:flex '>
        <div className='w-96 h-96 flex justify-center items-center'>
          <img src={Img}></img>
        </div>
        <div className='w-96 h-96 flex flex-col justify-center  bg-white  p-5 rounded-r-md'>
          <form onSubmit={Submit} className="needs-validation" noValidate={true} autoComplete="off">
            <p className="text-6xl text-gray-700 font-semibold mb-10 text-center">Lo<span className="text-gray-400">gin_</span></p>
            <div className="mb-3">
              <label className="mb-2 block text-xs font-semibold">Usuario</label>
              <input id="email" type="text" onChange={InputChange} value={datos.usuario} name="usuario" required autoFocus placeholder="Ingresa tu usuario" className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
            </div>

            <div class="mb-3">
              <label className="mb-2 block text-xs font-semibold">Contraseña</label>
              <input id="password" type="password" onChange={InputChange} value={datos.clave} name="clave" required placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500" />
            </div>

            <div className="w-full mb-3 flex flex-col mt-1 justify-center text-center">
              <a href="#" className="text-xs font-semibold text-gray-600 ">¿Olvidaste tu contraseña?</a>
              <button className="hover:bg-red-700 hover:font-semibold transition duration-200 bg-red-500 w-full my-3 p-1 rounded-md text-white ">Ingresar</button>
            </div>


          </form>
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;