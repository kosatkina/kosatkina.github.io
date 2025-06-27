import profileImg from '../media/avatar.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PROFILE_INFO = {
    first_name: 'Tatiana',
    last_name: 'Kosatkina',
    intro: 'Motivated and detail-oriented Software Engineering student at Conestoga College, passionate about applying my software development skills to create innovative solutions. I am actively seeking a co-op opportunity starting in Fall of 2025 and am eager to contribute to impactful projects and continue growing as a developer.',
};

// Custom header component
export default function Header() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-4 text-center'>
                    <img src={profileImg} alt="Incognito" className='profile-img'/>
                </div>
                <div className='col-md-8'>
                    <h1 className='display-4'>
                        {PROFILE_INFO.first_name} {PROFILE_INFO.last_name}
                    </h1>
                    <p className='lead'>
                        {PROFILE_INFO.intro}
                    </p>
                </div>
            </div>
            
        </div>
    );
}