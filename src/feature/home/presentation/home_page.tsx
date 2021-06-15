import './style/style.css'
import topL  from '../../../assets/img/topL.png'
import topR from '../../../assets/img/topR.png'
import bottomL  from '../../../assets/img/bottonL.png'
import bottomR  from '../../../assets/img/bottonR.png'
import Profiles  from './components/profiles'

const homePage =() => {
	return (
		<div className = 'cont' >
			<img className ='bottomL' src= {bottomL} alt='' />
			<img className ='bottomR' src= {bottomR} alt='' />
			<img className ='topL' src= {topL} alt='' />
			<img className ='topR' src= {topR} alt='' />
			<div className ='n5'>
				<Profiles />
			</div>
		</div>
	)
}

export default homePage