import { react } from 'react';
import { MenuBox, Option } from '../../styled/admin/menuStyled';

const Menu = function (props) {

    return (

        <MenuBox>
            <Option selected={true}>
                <i className="fal fa-box-open"></i> <span>All Orders</span>
            </Option>
            <Option>
                <i className="fal fa-times-circle"></i> <span>Failed Payments</span>
            </Option>

            <Option>
                <i className="fal fa-badge-percent"></i>
                <span>Discounts</span>
            </Option>

            <Option>
                <i className="fal fa-info-circle"></i> <span>Logs</span>
            </Option>


        </MenuBox>

    )

}


export default Menu;
