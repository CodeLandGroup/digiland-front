import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';

export default function FilterItemComponent(props) {
  const [value, setValue] = useState([0, 1200000]);
  const [param, setParam] = useSearchParams(); // Get Prams

  function ChangeFilter(item) {
    item.isActive = !item.isActive;
    if (item.brand != null) {
      if (param.get('brand') == null || param.get('brand') == '')
        param.set('brand', item.brand)
      else
        param.set('brand', param.get('brand').includes(item.brand) ? param.get('brand').replace(item.brand, '-').replace(',-', '')
          : param.get('brand') + ',' + item.brand)

    } if (item.colorNameEn != null) {
      if (param.get('color') == null || param.get('color') == '')
        param.set('color', item.colorNameEn)
      else
        param.set('color', param.get('color').includes(item.colorNameEn) ? param.get('color').replace(item.colorNameEn, '-').replace(',-', '')
          : param.get('color') + ',' + item.colorNameEn)

    }
    setParam(param);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <div className='filter-list transition'
      style={{
        height: props.isActive ? props.height : '0',
        overflowY: props.isActive ? 'auto' : 'hidden',
      }}>
      {
        props.filterName === 'برند' ?

          (
            <ul>
              {

                props.data.map((item) => (
                  <li onClick={() => ChangeFilter(item)}>
                    <Checkbox
                      inputProps={{ 'aria-label': 'controlled' }}
                      checked={item.isActive}
                    />
                    <label htmlFor="">{item.brand}</label>
                  </li>
                )
                )
              }

            </ul>
          )

          : props.filterName === 'رنگ' ?

            (
              <ul>
                {

                  props.data.map((item) => (
                    <>
                      <div>
                        <li onClick={() => ChangeFilter(item)}>
                          <Checkbox
                            inputProps={{ 'aria-label': 'controlled' }}
                            checked={item.isActive}
                          />
                          <label htmlFor="">{item.colorName}</label>
                        </li>

                        <div className='color' style={{
                          backgroundColor: item.colorCode
                        }}>
                        </div>
                      </div>
                    </>

                  ))
                }


              </ul>
            )


            : props.filterName === 'قیمت' ?

              (
                <div className='price-filter'>
                  <Box sx={{ width: 200 }}>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                  <div className='price-range'>
                    <div className='start-price'>
                      <h3>از</h3>
                      <input type="number" name="" id="" />
                      <h3>تومان</h3>
                    </div>
                    <div className='end-price'>
                      <h3>تا</h3>
                      <input type="number" name="" id="" />
                      <h3>تومان</h3>
                    </div>
                  </div>
                </div>
              )

              : (null)


      }


    </div>


  )
}
