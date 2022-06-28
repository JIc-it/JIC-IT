import React from 'react'
import { useParams } from 'react-router-dom'
import SectionLayout1 from '../../Components/SectionsForService/SectionLayout1'
import SectionLayout2 from '../../Components/SectionsForService/SectionLayout2'
import SectionLayout3 from '../../Components/SectionsForService/SectionLayout3'
import SectionLayout4 from '../../Components/SectionsForService/SectionLayout4'

const ServiceDetails = () => {
    const { id } = useParams()

    console.log({ id })


    return (
        <div>
            {id == 1 ?
                <SectionLayout1 />
                :
                id == 2 ?
                    <SectionLayout2 />
                    : id == 3 ?
                        <SectionLayout3 />
                        :
                        <SectionLayout4 />
            }

        </div>
    )
}

export default ServiceDetails