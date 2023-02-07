import Sidebar from "./sidebar"

function Content() {
    return (
        <div className='flex flex-auto z-100 h-screen'>
            <Sidebar />
            <div className='w-screen h-auto mt-6 flex flex-row'>
                <div className='ml-6 mt-4 flex w-32 h-44 hover:w-36 hover:h-48 hover:cursor-pointer ease-in-out duration-200 grayscale'>
                    <img className='rounded-md' src='/Assets/Games/Colony Builder.png' alt='Colony Builder'></img>
                </div>
                <div className='ml-6 mt-4 flex w-32 h-44 hover:w-36 hover:h-48 hover:cursor-pointer ease-in-out duration-200 grayscale'>
                    <img className='rounded-md' src='/Assets/Games/Colony Builder2.png' alt='Colony Builder 2'></img>
                </div>
            </div>
        </div>
    )
}
export default Content