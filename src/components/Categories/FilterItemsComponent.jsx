import { react, useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import FilterListComponent from './FilterListComponent';
export default function FilterItemsComponent(props) {
    const [isActive, setIsActive] = useState(false)

    const showListHandler = () => {
        setIsActive(!isActive)
    }
    return (
        <div className='filter-items'>
            <ul>
                <li className='filter-item transition'
                >
                    <div className='filter-title' onClick={(e) => showListHandler(e)}>
                        <h3>{props.filterName}</h3>
                        <i>
                            <SlArrowDown />
                        </i>
                    </div>

                    <FilterListComponent isActive={isActive} filterName={props.filterName} height={props.height} data={props.data}/>


                </li>
            </ul>
        </div>
    )
}
