import InstanceAxios from "../axios/axios"

export const ShoeList = () => async(dispatch) => {
    const response = await InstanceAxios.get();
    dispatch({
        type : 'SHOE_LIST',
        payload : response.data.products
    })
}