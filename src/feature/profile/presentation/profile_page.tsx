import './style/profile.css'
import Button from '@material-ui/core/Button';
import EducationWidget from './widgets/education-widget'
import SkillWidget from './widgets/skil-widget'
import { useHistory } from "react-router-dom";

const profilePage =() => {
	return (
		<div className ='profilePage'>
			<div className ='child' >
				<GoBack/>
				<ImgUser/>
				<br />
				<Buttons/>
				<Education/>
				<Skills/>
			</div>
		</div>
	)
}

const GoBack =() => {
	let history = useHistory();
	function goBack() {
		history.push("/app-resume/");
	}
	return <div style={{paddingTop:'70px', paddingBottom:'30px'}}>
		<Button variant="outlined" style={{color:'#ccc', borderColor:'#ccc', borderRadius:'0'}} onClick={goBack} > Volver </Button>
	</div>
}

const ImgUser = () => {
	return <div className = 'user'>
		<div className='photo'>
			<div className='img-circular'/>
		</div>
		<div className = 'info'>
			<h4 style={{color:'white'}} > country</h4>
			<h1 style={{color:'white'}} > Cristian Garcia</h1>
			<p  style={{color:'white'}} className = ''> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusamus neque saepe voluptatibus deserunt, nisi voluptates perspiciatis aut molestias quibusdam aliquam laudantium debitis aspernatur optio iusto fuga consectetur cum! Odio. </p>
		</div>
	</div>
}
const Buttons =() => {
	let history = useHistory();
	function goBack( name:String ) {
		console.log(name);
		history.push( `/app-resume${name}`);
	}
	return <div className='buttons'>
		<Button type="button" onClick={() => goBack('/profile/experience')} >EXPERIENCIA</Button>
		{/* <Button to ='/profile/certificates' type="button" className ="">CERTIFICADOS</Button> */}
		<Button type="button" onClick={() => goBack('/profile/certificates')} >CERTIFICADOS</Button>
		{/* <Button to ='/profile/briefcase' type="button" className ="">MI PORTOFOLIO</Button> */}
		<Button type="button" onClick={() => goBack('/profile/briefcase')}>MI PORTOFOLIO</Button>
	</div>
}

const Education =() => {
	return <div >

		<h3 style={{color:"White"}}>EDUCATION</h3>
		<EducationWidget
			fromTo="2015 - 2020"
			institute="Universidad nacional jose faustino sanchez carrion"
			career="Ingenieria informatica"
		/>
		<EducationWidget
			fromTo="2015 - 2020"
			institute="Universidad nacional jose faustino sanchez carrion"
			career="Ingenieria informatica"
		/>
	</div>
}

const Skills =() => {
	return <div>
		<div className='title-skill'>
			<h3>HABILIDADES</h3>
			<h3><span style={{background:'#DA7012'}}></span>Básico</h3>
			<h3><span style={{background:'#CEDB10'}}></span>Intermedio</h3>
			<h3><span style={{background:'#12DAA4'}}></span>Avanzado</h3>
		</div>
		<div className='skill-items'>
			<SkillWidget title="TypeScropt" color='#DA7012'/>
			<SkillWidget title="JavaScript" color='#CEDB10'/>
			<SkillWidget title="Flutter" color='#12DAA4'/>
			<SkillWidget title="Dart" color='#CEDB10'/>
			<SkillWidget title="dart" color='#DA7012'/>
			<SkillWidget title="dart" color='#CEDB10'/>
			<SkillWidget title="dart" color='#DA7012'/>
			<SkillWidget title="dart" color='#12DAA4'/>
			<SkillWidget title="dart" color='#12DAA4'/>
			<SkillWidget title="dart" color='#12DAA4'/>
			<SkillWidget title="dart" color='#DA7012'/>
			<SkillWidget title="dart" color='#CEDB10'/>
			<SkillWidget title="dart" color='#DA7012'/>
			<SkillWidget title="dart" color='#12DAA4'/>
		</div>
	</div>
}
export default profilePage