import { MagnifyingGlass } from  'react-loader-spinner'

export default function Loader () {
    return(
        <MagnifyingGlass
            visible={true}
            height="120"
            width="120"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
            color = '#0226ee'
        />
    )
}