import { Layout } from 'antd';
import MemberProfile from "../components/MemberProfile"
import Footer from "../components/BootomFooter"
import NavBar from "../components/NavBar";

function Profile() {
   return (
        <Layout className="container">
            <NavBar />
            <MemberProfile/>
            <Footer/>  
        </Layout>
   );
}

export default Profile;