import './index.scss';
import docsIcon from '../../assets/docsicon.png'

type UserProps = {
    photo: string
}
const Topbar = ({photo}: UserProps) => {
  return (
    <div className='top-bar'>
        <div className='top-left'>
            <img className='top-icon' src={docsIcon} />
            <p className='top-title'>Docs</p>
        </div>
        <img className='top-image' src={photo}/>
    </div>
  )
}

export default Topbar;