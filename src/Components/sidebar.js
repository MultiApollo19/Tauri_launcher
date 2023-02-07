function Sidebar() {
    return (
        
            <div className='bg-[#0C0E18] w-60 flex mt-6 flex-col'>
                <div className='border-2 rounded-md w-56 h-20 mt-4 ml-2 align-middle justify-center flex p-6 hover:bg-[#2596FF] hover:cursor-pointer ease-in-out duration-200'>
                    <img src="/Assets/App/gamepad.svg" className='w-8 h-8 mr-8' alt='Games'></img>
                    <div className='text-white text-2xl'>Games</div>
                </div>
                <div className='border-2 rounded-md w-56 h-20 mt-4 ml-2 align-middle justify-center flex p-6 hover:bg-[#2596FF] hover:cursor-pointer ease-in-out duration-200'>
                    <img src="/Assets/App/arrowdown.svg" className='w-8 h-8 mr-6' alt='Download'></img>
                    <div className='text-white text-2xl'>Downloading</div>
                </div>
            </div>
        
    )
}
export default Sidebar