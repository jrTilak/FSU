import Contact from '@/components/Contact'
import ComponentSection from '@/components/HomePage/ComponentSection'
import React from 'react'

const contact = () => {
    return (
        <ComponentSection title="Contact Us">
            <div className="flex flex-wrap -m-4  justify-center">
                <Contact />
            </div>
        </ComponentSection>
    )
}

export default contact