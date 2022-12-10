const listSidebar = [
  'Inicio',
  'Explorar',
  'Descuentos',
  'Contacto'
]

const SidebarMenu = () => {
  return (
    <div className='w-screen h-screen bg-gray-800 absolute inset-0'>
      <div className='w-2/5 h-full py-10 pl-8 text-white'>
        <ol>
          {listSidebar.map((item) => (
            <li key={item} className="pb-4">
              {item}
            </li>
          ))}
        </ol>
      </div>
      <p></p>
    </div>
  )
}

export default SidebarMenu