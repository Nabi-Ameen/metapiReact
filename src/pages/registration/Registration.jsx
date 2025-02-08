import React, { useState } from 'react'

const Registration = () => {

    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            gender: "",
            courses: "",
            address: "",
            proffision: "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData", formData);
        setFormData(
            {
                name: "",
                email: "",
                gender: "",
                courses: "",
                address: "",
                proffision: "",
            }
        )
    }

    return (
        <>
            <div className='px-20 py-5'>
                <div className='font-bold text-xl'>
                    Registration Form:
                </div>

                <div className='flex justify-center bg-gray-200 py-10 mt-10'>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-2 gap-5 w-8/12"
                    >
                        <div className='flex flex-col mt-4'>
                            <label htmlFor="" className='text-lg font-semibold pb-1'>User Name</label>
                            <input
                                type="text"
                                name='name'
                                id='name'
                                value={formData?.name}
                                onChange={handleChange}
                                className='outline-none border p-2'
                                required
                            />
                        </div>

                        <div className='flex flex-col mt-4'>
                            <label htmlFor="" className='text-lg font-semibold pb-1'>User Email</label>
                            <input
                                type="email"
                                name='email'
                                value={formData?.email}
                                onChange={handleChange}
                                className='outline-none border p-2'
                                required
                            />
                        </div>

                        <div className='flex gap-6 items-center mt-4 bg-white pl-6'>
                            <div className='text-lg font-bold'>Gender</div>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className=' font-semibold'>Male: </label>
                                <input
                                    type="radio"
                                    value="Male"
                                    name='gender'
                                    onChange={handleChange}
                                    className='outline-none border'
                                />
                            </div>
                            <div className='flex items-center gap-4'>
                                <label htmlFor="" className=' font-semibold'>Female: </label>
                                <input
                                    type="radio"
                                    value="Female"
                                    name='gender'
                                    onChange={handleChange}
                                    className='outline-none border'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col mt-4 bg-white pl-2'>
                            <label htmlFor="" className='text-lg font-semibold pb-1'>Courses</label>
                            <select
                                onChange={handleChange}
                                name='courses'
                                value={formData?.courses}
                                required
                                className='border m-2'>
                                <option value="" >Select Course</option>
                                <option value="Web development">Web development</option>
                                <option value="App development">App development</option>
                                <option value="Networking">Networking</option>
                            </select>
                        </div>

                        <div className='flex flex-col mt-4'>
                            <label htmlFor="" className='text-lg font-semibold pb-1'>User Address</label>
                            <input
                                type="text"
                                name='address'
                                value={formData?.address}
                                onChange={handleChange}
                                className='outline-none border p-2'
                                required
                            />
                        </div>

                        <div className='flex flex-col mt-4'>
                            <label htmlFor="" className='text-lg font-semibold pb-1'>Proffision</label>
                            <input
                                type="text"
                                name='proffision'
                                onChange={handleChange}
                                className='outline-none border p-2'
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className='bg-blue-600 px-6 py-2 rounded-md text-white w-fit'
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>

            <div className='px-20 pb-20'>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Gender</th>
                            <th className="px-4 py-2 border">Courses</th>
                            <th className="px-4 py-2 border">Address</th>
                            <th className="px-4 py-2 border">Profession</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-gray-800">
                            <td className="px-4 py-2 border">{formData?.name}</td>
                            <td className="px-4 py-2 border">{formData?.email}</td>
                            <td className="px-4 py-2 border">{formData?.gender}</td>
                            <td className="px-4 py-2 border">{formData?.courses}</td>
                            <td className="px-4 py-2 border">{formData?.address}</td>
                            <td className="px-4 py-2 border">{formData?.proffision}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Registration