import React, { useState } from 'react'
import { tabsElements } from '../../assets/data';

const Tabs = () => {
    const [tabs, setTabs] = useState("Tailwind CLI");

    return (
        <div>
            <div className='flex items-center gap-4 border-b border-gray-300 px-1'>
                {tabsElements.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => setTabs(item)}
                            className={`${item === tabs && "text-blue-600 font-semibold border-b border-blue-500"} py-3`}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>

            <div className='p-4'>

                {
                    tabs === "Tailwind CLI" && <div>
                        The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
                    </div>
                }

                {
                    tabs === "Using PostCSS" &&
                    <div>
                        Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with build tools like webpack, Rollup, Vite, and Parcel.
                    </div>
                }

                {
                    tabs === "Framework Giudes" &&
                    <div>
                        Framework-specific guides that cover our recommended approach to installing Tailwind CSS in a number of popular environments.
                    </div>
                }

                {
                    tabs === "Play CDN" &&
                    <div>
                        Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not the best choice for production.
                    </div>
                }
            </div>

        </div>
    )
}

export default Tabs