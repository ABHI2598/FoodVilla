export function filteredData(searchText,restaurants)
{
    return restaurants.filter((res) => res?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
}


export const RES_MENU_URL = "https://www.swiggy.com/dapi/menu/v4/full?lat=19.2403305&lng=73.1305395&menuId=";


export const USER_INFO_URL = "https://api.github.com/users/ABHI2598";


export const appTheme = {
    light:
    {
    body: '#E2E2E2',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',

    },
    darkTheme :{
        body: '#363537',
        text: '#FAFAFA',
        toggleBorder: '#6B8096',
        gradient: 'linear-gradient(#091236, #1E215D)',
      }
  }
  