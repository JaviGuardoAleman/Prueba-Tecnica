import { useState, useEffect } from 'react'


function Admin() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState([''])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( json => {setUsers(json)
    })
  }, []);

  const changeSelect = (event) => {
    setFilter(event.target.value)
  }

  const usuariosFiltrados = users.filter(usuario => usuario.address.city === filter);
  

  return (
    <div className='w-full h-screen  flex justify-center items-center '>
      
      <div className='w-full h-full'>
        <div className=' w-full h-20 bg-red-500 text-white  shadow-lg  flex justify-between items-center p-5'>
          <p className='text-gray-100 text-4xl font-bold'>Smart <span className='text-4xl text-gray-400'>Info_</span> </p>
            <div className='space-x-3'>
                    <a className=' font-light hover:border-b hover:border-gray-400 transition duration-700 tracking-wider ' href='#'> Home</a>
                    <a className=' font-light hover:border-b hover:border-gray-400 transition duration-700 tracking-wider ' href='http://localhost:3000'> Login</a>
            </div>          
          <select className='text-black p-1 rounded-sm border-l-4 border-green-500  w-72 text-center'  value={filter} onChange={changeSelect} multiple={false}>
            {users.map (usuario =>
              <option value={usuario.address.city}>{usuario.address.city}</option>



            ) }     
          </select>
        </div>
        <div className='w-full h-16 bg-gray-200 flex justify-center items-center text-xl  '>
            <div className='w-1/2  text-end'>Departamento selecionado</div>

            <div className='w-1/2'>
                <p className='text-gray-500'>: {filter != '' ? filter : ' Selecciona un departamento'}</p>
            </div>
            
            
             </div>
         <div className='p-10 gap-10 lg:flex'>      
            <table className='w-[60%]  border-b shadow-sm bg-gray-50 rounded-lg    '>
                  <thead className=' p-20 overflow-scroll'>
                   
                    <tr>
                      <th className='text-center p-4'>Nombre</th>
                      <th className='text-center p-4'>Departamento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(usuario => (
                      <tr key={usuario.id}>
                        <td className='text-center pb-3 '>{usuario.name}</td>
                        <td className='text-center pb-3 '>{usuario.address.city}</td>
                      </tr>
                    ))}
                  </tbody>
            </table>

            <table className='w-[40%] h-full border-b shadow-sm bg-gray-50 rounded-lg    '>
              <thead className=' p-20'>
                <tr>
                  <th className='text-center p-4'>Nombre</th>
                  <th className='text-center p-4'>Departamento</th>
                </tr>
              </thead>
              <tbody>
                {usuariosFiltrados.map(usuario => (
                  <tr key={usuario.id}>
                    <td className='text-center pb-3 '>{usuario.name}</td>
                    <td className='text-center pb-3 '>{usuario.address.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div> 
      </div>
    </div>
  )
}

export default Admin